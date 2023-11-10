export const stringifyMap = (map: Map<string, any>): string => {
    try {
        return JSON.stringify(Array.from(map.entries()));
    } catch {
        return JSON.stringify(Array.from(new Map().entries()));
    }
};

export const parseMap = (map: string | Map<string, any>): Map<string, any> => {
    try {
        if (typeof map === 'object') {
            return new Map(map);
        }
        return new Map(JSON.parse(map));
    } catch {
        return new Map();
    }
};

export const convertObjectToMap = (object: Object) => {
    try {
        return new Map(Object.entries(object));
    } catch {
        return new Map();
    }
};
