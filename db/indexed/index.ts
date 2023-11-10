import { openDB } from 'idb';
import { IndexedDBKeys, IndexedDBStores } from './constants';

export const openIndexedDB = async () => {
    const dbName = 'udc';
    const storeName = IndexedDBStores.REDUX_STORE;
    const version = 1;
    const db = await openDB(dbName, version, {
        upgrade(db) {
            db.createObjectStore(storeName);
        },
    });
    return db;
};

export const setIndexedDB = async (
    store: IndexedDBStores,
    value: any,
    key: IndexedDBKeys
) => {
    try {
        const db = await openIndexedDB();
        await db.add(store, value, key);
    } catch {
        return null;
    }
};

export const updateIndexedDB = async (
    store: IndexedDBStores,
    value: any,
    key: IndexedDBKeys
) => {
    try {
        const db = await openIndexedDB();
        await db.put(store, value, key);
    } catch {
        return null;
    }
};

export const getIndexedDB = async (
    store: IndexedDBStores,
    key: IndexedDBKeys
) => {
    try {
        const db = await openIndexedDB();
        return await db.get(store, key);
    } catch {
        return null;
    }
};

export const deleteIndexedDB = async (
    store: IndexedDBStores,
    key: IndexedDBKeys
) => {
    try {
        const db = await openIndexedDB();
        await db.delete(store, key);
    } catch (e) {
        console.error('delete indexed db ', e);
    }
};
