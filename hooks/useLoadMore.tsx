import { useEffect } from 'react';

export function useLoadMore(
    ref: any,
    callback: Function,
    trigger: boolean,
    deps?: any
) {
    useEffect(() => {
        const scrollHandler = () => {
            if (!ref?.current) return;

            const bottom =
                ref.current.scrollHeight - ref.current.scrollTop ===
                ref.current.clientHeight;

            if (bottom) {
                callback();
            }
        };

        if (trigger) {
            scrollHandler();
        }

        ref?.current?.addEventListener('scroll', scrollHandler);
        return () => ref?.current?.removeEventListener('scroll', scrollHandler);
    }, [ref, trigger, ...deps]);
}
