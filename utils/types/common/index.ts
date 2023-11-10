import { MediaTypes } from 'utils/constants/media';

export type MaybeString<T> = String | T;

export type MaybeObject<T> = Object | T;

export type Maybe<T> = T | null;

export interface IMediaFile {
    id: string;
    name: string;
    url: string;
    type: MediaTypes;
    thumbnail?: string;
    size?: string;
    isVertical?: boolean;
}
