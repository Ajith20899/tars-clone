export const parseHeaderCookie = (cookies: any) => {
    try {
        const parsedCookies: any = {};
        if (!(cookies?.length > 0)) {
            return {};
        }
        cookies.split(';')?.forEach((cookie: any) => {
            const parts = cookie.match(/(.*?)=(.*)$/);
            if (parts.length > 0) {
                parsedCookies[parts[1]?.trim()] = (parts[2] || '').trim();
            }
        });
        return parsedCookies;
    } catch {
        return {};
    }
};

export const removeAllCookies = () => {
    if(!document) return; 

    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf('=');
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
};
