import styled, { createGlobalStyle } from 'styled-components';
import { Colors } from './themes';

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #0585FD;
        --color-white: #FFFFFF;
        --color-black: #26282C;

        --color-primary-shade-1: #026CCF;
        --color-primary-shade-2: #309AFD;
        --color-primary-shade-3: #58AEFE;
        --color-primary-shade-4: #80C2FE;
        --color-primary-shade-5: #A9D5FE;
        --color-primary-shade-6: #EBF5FF;

        --color-alert-orange: #FF614B;

        --color-accent-orange: #FF8A4B;
        --color-accent-purple: #854BFF;
        --color-accent-green: #06DAA7;
        --color-accent-yellow: #FFB74B;
        --color-accent-red: #FF4B4B;
        --color-accent-blue: #4BA9FF;
        --color-accent-blue-2: #2A74CA;

        --color-green-online: #15B24A;
        --color-green-reaction: #2ACAC1;

        --color-username-blue: #2ACAC1;
        --color-username-green: #23A9A1;

        --color-scroll-bar-stick: #A1A3B2;

        --color-premium: #FFD246;

        --color-background-shade: rgba(106, 108, 119, 0.06);

        --color-dark-background-shade: rgba(106, 108, 119, 0.06);
        --color-dark-background-shade-2: rgba(47, 50, 55, 1);

        --color-buy-signal: rgba(42, 202, 193, 1);
        --color-sell-signal: rgba(255, 97, 75, 1);

        --color-border-2: #ebebeb;

        --fs-tiny: 11px;
        --fs-small: 12px;
        --fs-regular: 13px;
        --fs-medium: 14px;
        --fs-large: 16px;
        --fs-xl: 18px;
        --fs-xxl: 20px;
        --fs-h1: 24px;

        @media screen and (width <= 769px) {
            --fs-tiny: 13px;
            --fs-small: 14px;
            --fs-regular: 15px;
            --fs-medium: 16px;
            --fs-large: 18px;
            --fs-xl: 20px;
            --fs-xxl: 22px;
            --fs-h1: 26px;
        }
    }
    
    [data-theme="dark"] {
        --color-background: #171717;
        --color-base: #0D0D0D;
        --color-card: #171717;
        /* --color-text: #D3D5D9; */
        --color-text: #fff;
        --color-popup: #1F1F1F;
        --color-primary-shade-6: rgba(235, 245, 255, 0.1);
        --color-primary-shade-7: rgba(161,163,178,0.16);
        --color-border: rgba(161,163,178,0.16);
        --color-gray-shade-1: #A1A3B2;
        --color-gray-shade-2: #6A6C77;
        --color-hr: rgba(161,163,178,0.16);
        --color-background-shade-2: rgba(106, 108, 119, 0.06);
        --color-hover: rgba(106, 108, 119, 0.06);
    }
    
    [data-theme="light"] {
        --color-base: #F4F4F6;
        --color-card: #fbfbfb;
        --color-background: #FFFFFF;
        --color-background-shade: #F8F8F8;
        --color-background-shade-2: #FDFDFD;
        --color-primary-shade-7: #dbe7f0;
        --color-text: #26282C;
        --color-border: #E3E3E3;
        --color-gray-shade-1: #6A6C77;
        --color-gray-shade-2: #A1A3B2;
        --color-hr: #f7f6f6;
        --color-hover: rgba(200, 208, 119, 0.06);
    }

    @media screen and (width <= 769px) {
        [data-theme="dark"] {
            --color-background: #0D0D0D;
            --color-base: #171717;
            --color-card: #0D0D0D;
        }
    }

    &::-webkit-scrollbar {
        display: block;
        width: 6px;
        height: 6px;
    }

    &::-webkit-scrollbar:horizontal {
        display: block;
        height: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${Colors.scrollbarStick};
        border-right: none;
        border-left: none;
        border-radius: 6px;
        height: 10px;
    }

    ::-webkit-scrollbar-thumb:horizontal{
        background-color: ${Colors.scrollbarStick};
        border-right: none;
        border-left: none;
        border-radius: 6px;
    }

    &::-webkit-scrollbar-track-piece:end {
        background: transparent;
        margin-bottom: 2px;
    }

    &::-webkit-scrollbar-track-piece:start {
        background: transparent;
        margin-top: 2;
    }
`;

export const HR = styled.hr`
    width: 100%;
    height: 1px;
    border: 1px solid ${Colors.hr};
`;

export const Flex = styled.div`
    display: flex;
`;

export const Grid = styled.div`
    display: grid;
`;
