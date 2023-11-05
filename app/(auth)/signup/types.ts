
export interface ISignupDetails {
    username: string;
    emailId: string;
    password: string;
    phone: string;
    country: string;
    otp: string;
}

export enum SignupStages {
    SIGNUP_FORM = 'signupForm',
    SIGNUP_OTP = 'signupOtp',
    AUTO_LOGIN = 'autoLogin',
}
