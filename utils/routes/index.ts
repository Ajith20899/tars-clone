import { usePathname } from 'next/navigation';

export const isAuthorizedPage = () => {
    try {
        const path = usePathname();
        if (path.includes('login')) {
            return false;
        }
        if (path.includes('signup')) {
            return false;
        }
        if (path.includes('forgot')) {
            return false;
        }
        return true;
    } catch {
        return false;
    }
};
