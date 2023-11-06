export enum SettingsENUM {
    PASSWORD = 'password',
    ACCOUNT = 'account',
    SECURITY = 'security',
}

export const passwordInputDetails = [
    {
        title: 'Current Password',
        name: 'password',
        placeholder: 'Enter password',
    },
    {
        title: 'New Password',
        name: 'newPassword',
        placeholder: 'Enter new password',
    },
    {
        title: 'Re-enter New Password',
        name: 'confirmPassword',
        placeholder: 'Re-enter new password',
    },
];
