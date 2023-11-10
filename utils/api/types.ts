export enum StatusCodes {
    _200 = 200,
    _400 = 400,
    _401 = 401,
    _403 = 403,
    _404 = 404,
    _500 = 500,
    _511 = 511,
}

export enum ErrorMessages {
    _401 = 'unauthorized',
    _500 = 'Oops. something went wrong.',
}

export enum _400ApiErrorMessageKeys {
    INSUFFICIENT_WALLET_AMOUNT = 'insufficient_wallet_amount',
}

export interface IHttpRequestResponse<T> {
    statusCode: StatusCodes;
    data?: T;
    errorMessage?: string;
}
