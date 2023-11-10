import axios from 'axios';

export const uploadPresignedUrlFile = async (
    url: string,
    file: File,
    uploadPercentageCb?: any
) => {
    try {
        const controller = new AbortController();

        const { status } = await axios({
            method: 'PUT',
            url,
            data: file,
            signal: controller.signal,
            onUploadProgress: function (progressEvent) {
                const percentage = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                );
                uploadPercentageCb?.(percentage, controller);
            },
        });
        if (status === 200) {
            return {
                status: true,
            };
        }
        return {
            status: false,
        };
    } catch {
        return {
            status: false,
        };
    }
};
