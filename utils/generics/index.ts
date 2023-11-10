import cookies from 'js-cookie';
import { ChannelTypes } from 'redux/chat/constants';
import { Cookies } from 'utils/cookie/types';

export const isLoggedInUser = (userEkey: string) => {
    return userEkey === cookies.get(Cookies.USER_EKEY);
};

export const generateUUID = (length?: number) => {
    const chars =
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length || 12; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)];
    return result;
};

export const getChannelType = (channelId: string) => {
    try {
        if (channelId.length > 0) {
            if (channelId.includes('pc_')) {
                return ChannelTypes.PRIVATE;
            }
            if (channelId.includes('gc_')) {
                return ChannelTypes.GROUP;
            }
            return '';
        }
        return '';
    } catch {
        return '';
    }
};

export const sortArrayOfObject = (
    array: any[],
    key: string,
    sortType: 'ascending' | 'descending'
) => {
    try {
        const compare = (a: any, b: any) => {
            a = a[key];
            b = b[key];
            var type =
                typeof a === 'string' || typeof b === 'string'
                    ? 'string'
                    : 'number';
            var result;
            if (type === 'string') result = a.localeCompare(b);
            else result = sortType === 'ascending' ? a - b : b - a;
            return result;
        };
        return array.sort(compare);
    } catch {
        return array;
    }
};

export const sortArrayofArrayObject = (
    array: any[],
    key: string,
    nestedKey: string,
    sortType: 'ascending' | 'descending'
) => {
    try {
        const compare = (a: any, b: any) => {
            a = a[key].length > 0 ? a[key][0][nestedKey] : 0;
            b = b[key].length > 0 ? b[key][0][nestedKey] : 0;
            var type =
                typeof a === 'string' || typeof b === 'string'
                    ? 'string'
                    : 'number';
            var result;
            if (type === 'string') result = a.localeCompare(b);
            else result = sortType === 'ascending' ? a - b : b - a;
            return result;
        };
        return array.sort(compare);
    } catch {
        return array;
    }
};

export function bytesFormat(bytes: number, decimals = 2): string {
    if (bytes === 0) return '0 Bytes';

    try {
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return (
            parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
        );
    } catch {
        return '0 Bytes';
    }
}
export const removeArrayOfObjectDuplicates = (array: any[], key: string) => {
    try {
        return array.filter(
            (value, index, self) =>
                index === self.findIndex((t) => t[key] === value[key])
        );
    } catch {
        return array;
    }
};

export const sortAndRemoveDuplicates = (
    array: any[],
    duplicateKey: string,
    sortKey: string,
    sortType: 'ascending' | 'descending'
) => {
    try {
        const uniqueArray = removeArrayOfObjectDuplicates(array, duplicateKey);
        return sortArrayOfObject(uniqueArray, sortKey, sortType);
    } catch {
        return array;
    }
};

export const numberFormat = (num: number, digits: number) => {
    try {
        if (num < 0) {
            return num;
        }
        const lookup = [
            { value: 1, symbol: '' },
            { value: 1e3, symbol: 'k' },
            { value: 1e6, symbol: 'M' },
            { value: 1e9, symbol: 'G' },
            { value: 1e12, symbol: 'T' },
            { value: 1e15, symbol: 'P' },
            { value: 1e18, symbol: 'E' },
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup
            .slice()
            .reverse()
            .find(function (item) {
                return num >= item.value;
            });
        return item
            ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
            : '0';
    } catch {
        return num;
    }
};

export const getFileSizeInFormat = (fileSize: number) => {
    try {
        fileSize /= 1024;
        let fileSizeUnit = 'KB';
        if (fileSize > 1024) {
            fileSize = fileSize / 1024; // size in MB
            fileSizeUnit = 'MB';
        }
        return `${fileSize.toFixed(2)} ${fileSizeUnit}`;
    } catch {
        return '';
    }
};

export function isValidEmail(email: string): boolean {
    // Define the regex pattern for a valid email address
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    // Use the test() method to check if the email matches the pattern
    return emailRegex.test(email);
}

export function isValidUrl(url: string) {
    try {
        const urlStr = new URL(url).protocol;
        return urlStr === 'http:' || urlStr === 'https:';
    } catch {
        return false;
    }
}

export function validatePassword(password: string): string {
    if (password.length < 8) {
        return 'At least 8 characters long.';
    }
    if (!/[a-z]/.test(password)) {
        return 'At least one lowercase letter.';
    }
    if (!/[A-Z]/.test(password)) {
        return 'At least one uppercase letter.';
    }
    if (!/\d/.test(password)) {
        return 'At least one digit.';
    }
    if (!/[!@#$%^&*()?]/.test(password)) {
        return 'At least one special character (!@#$%^&*()?).';
    }
    return '';
}
