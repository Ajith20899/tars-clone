// import { IUserDetails } from 'redux/profile/types';

export function personalValidation(userDetails: any) {
    const { username, preferredMarkets, fullname, userPrivacyType } =
        userDetails;

    if (username.length === 0) {
        return {
            msg: 'Please fill username',
            name: 'username',
        };
    }
    if (preferredMarkets.length === 0) {
        return {
            msg: 'Please fill preferred markets',
            name: 'preferredMarkets',
        };
    }
    if (fullname.length === 0) {
        return {
            msg: 'Please fill fullname',
            name: 'fullName',
        };
    }
    if (userPrivacyType.length === 0) {
        return {
            msg: 'Please fill privacy type',
            name: 'userPrivacyType',
        };
    }
    return {
        msg: '',
        name: '',
    };
}
