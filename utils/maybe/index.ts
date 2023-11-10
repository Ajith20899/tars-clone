export const maybeString = (str?: string | null) => {
    try {
        if (str) {
            return str;
        }
        return '';
    } catch {
        return '';
    }
};

export const maybeNumber = (number?: number) => {
    if (number) {
        return number;
    }
    return 0;
};

export const maybeObject = (object?: Object) => {
    if (object) {
        return object;
    }
    return {};
};
