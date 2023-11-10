export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

export const commonPlaceholder = (theme?: string) => `
    background-image: ${
        theme === DARK_THEME
            ? 'linear-gradient(to right,rgb(255 255 255 / 8%) 0,rgb(255 255 255 / 15%) 15%,rgb(255 255 255 / 8%) 30%)'
            : 'linear-gradient(to right,rgba(0,0,0,.08) 0,rgba(0,0,0,.15) 15%,rgba(0,0,0,.08) 30%)'
    };
    bg-[length:1200px_100%] animate-placeholderShimmer
`;
