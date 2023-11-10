export const getShortString = (str: string, length: number) => {
    try {
        if (str?.length === 0) {
            return '';
        }
        return str.substr(0, length || 20);
    } catch {
        return '';
    }
};

export const camelCase = (str: string): string => {
    try {
        return str
            .replace(/\s(.)/g, function (a) {
                return a.toUpperCase();
            })
            .replace(/\s/g, '')
            .replace(/^(.)/, function (b) {
                return b.toLowerCase();
            });
    } catch {
        return '';
    }
};

export const capitalizeFirstLetter = (str: string): string => {
    try {
        return str.charAt(0).toUpperCase() + str.slice(1);
    } catch {
        return str;
    }
};
