export const emailValidation = (email: string) =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );

export const passwordValidation = (password: string) =>
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/.test(
        password
    );

export const inputRegexValidation = (input: string) => {
    try {
        if (!(input?.length > 0)) {
            return false;
        }
        const regx = new RegExp('<|>|//|<iframe|http:|https:', 'g');
        if (regx.test(input) || /\$/.test(input)) {
            return false;
        }
        return true;
    } catch (e) {
        console.error('invalid input regex validation: ', e);
        return false;
    }
};
