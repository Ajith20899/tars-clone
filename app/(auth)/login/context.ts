import { createContext } from "react";

export interface IAuthLoginContext {
    activeStage: AuthLoginStages;
    loginDetails: {
        username: string;
        password: string;
        otp: string;
        authorizedUser: object | null;
    };
    setAuthLoginStage: Function;
    setLoginDetails: Function;
}

export enum AuthLoginStages {
    LOGIN_FORM = 'login',
    LOGIN_OTP = 'otp',
}

export const AuthLoginContext = createContext<IAuthLoginContext>({
    activeStage: AuthLoginStages.LOGIN_FORM,
    loginDetails: {
        username: '',
        password: '',
        otp: '',
        authorizedUser: null,
    },
    setAuthLoginStage: () => {},
    setLoginDetails: () => {},
});
