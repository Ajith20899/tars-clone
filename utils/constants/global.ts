export enum Themes {
    DARK = 'dark',
    LIGHT = 'light',
    SYSTEM = 'system',
}

export enum MarketCategory {
    STOCKS = 'stocks',
    CRYPTO = 'crypto',
    FOREX = 'forex',
    NFT = 'nft',
    EMPTY = '',
}

export enum ChannelStatus {
    CONNECTED = 'connected',
    BLOCKED = 'blocked',
}

export enum DraftEditorOptions {
    MENTIONS = 'mentions',
    SIGNAL = 'signal',
    POLL = 'poll',
    MEDIA = 'media',
}

export const ThemesList = [Themes.DARK, Themes.LIGHT];

export const MarketCategories = [MarketCategory.STOCKS, MarketCategory.CRYPTO];

export const MarketCategoriesIcons: {
    [key: string]: string;
} = {
    stocks: '/icons/markets/stocks.svg',
    crypto: '/icons/crypto.svg',
    forex: '/icons/forex.svg',
    nft: '/icons/nft.svg',
};
