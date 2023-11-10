import cookies from 'js-cookie';
import { getMaxExpireDate } from '../date';
// import { removeAllCookies } from '../cookie';
import { Cookies } from '@/utils/cookie/types';
import { Auth } from '@aws-amplify/auth';
import { isAuthorizedPage } from '@/utils/routes';
import { withSSRContext } from '@/utils/amplify/withSSR';
import { deleteIndexedDB } from '@/db/indexed';
import { IndexedDBKeys, IndexedDBStores } from '@/db/indexed/constants';

export const getAccessIdToken = async () => {
    try {
        const response = await Auth.currentSession();
        const idTokenExpire = response.getIdToken().getExpiration();
        const currentTimeSeconds = Math.round(+new Date() / 1000);
        if (idTokenExpire < currentTimeSeconds) {
            const { refreshSession } = await Auth.currentAuthenticatedUser();
            const res = await refreshSession();
            return {
                accessToken: res.getAccessToken().getJwtToken(),
                idToken: res.getIdToken().getJwtToken(),
            };
        }
        return {
            accessToken: response.getAccessToken().getJwtToken(),
            idToken: response.getIdToken().getJwtToken(),
        };
    } catch {
        return {
            accessToken: null,
            idToken: null,
        };
    }
};

export const refreshToken = async () => {
    try {
        if (window !== undefined) {
            if (isAuthorizedPage()) {
                const cognitoUser = await Auth.currentAuthenticatedUser();
                const currentSession: any = await Auth.currentSession();
                await new Promise(async (resolve, _) => {
                    cognitoUser.refreshSession(
                        currentSession.refreshToken,
                        (err: any, session: any) => {
                            if (err) {
                                console.log('token error ', err);
                                cookies.remove(Cookies.ACCESS_TOKEN);
                                cookies.remove(Cookies.USER_EKEY);
                                // router.push('/login');
                                return;
                            } else {
                                const { accessToken, idToken } = session;
                                cookies.set(
                                    Cookies.ACCESS_TOKEN,
                                    accessToken?.jwtToken,
                                    {
                                        path: '/',
                                        expires: getMaxExpireDate(),
                                    }
                                );
                                cookies.set(
                                    Cookies.ID_TOKEN,
                                    idToken?.jwtToken,
                                    {
                                        path: '/',
                                        expires: getMaxExpireDate(),
                                    }
                                );
                                resolve(true);
                            }
                        }
                    );
                });
            } else {
                // router.push('/login');
                return;
            }
        } else {
            // router.push('/login');
            return;
        }
    } catch {
        // router.push('/login');
    }
};

export const getServerAmplifyTokens = async (context: any) => {
    try {
        const { Auth } = withSSRContext(context);
        const user = await Auth.currentAuthenticatedUser();
        const { idToken, accessToken } = user.signInUserSession;
        const accessTokenJwt = accessToken.jwtToken;
        const idTokenJwt = idToken.jwtToken;
        return {
            accessToken: accessTokenJwt,
            idToken: idTokenJwt,
        };
    } catch {
        return {
            accessToken: '',
            idToken: '',
        };
    }
};

export const logout = async () => {
    try {
        await Auth.signOut();
    } finally {
        // removeAllCookies();
        // localStorage.clear();
        await deleteIndexedDB(
            IndexedDBStores.REDUX_STORE,
            IndexedDBKeys.UDC_REDUX
        );
        // router.push('/login');
    }
};
