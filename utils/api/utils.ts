export const getServerHeaders = (accessToken: string, idToken: string) => {
    return {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'access-token': accessToken || '',
        Authorization: idToken || '',
    };
};
