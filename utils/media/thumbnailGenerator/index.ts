export const thumbnailGenerator = async (videoFile: File) => {
    try {
        let isVertical = false;
        const videoUrl = URL.createObjectURL(videoFile);
        const video = document.createElement('video');
        const canvas = document.createElement('canvas');
        video.style.display = 'none';
        canvas.style.display = 'none';

        // Trigger video load
        await new Promise((resolve) => {
            video.addEventListener('loadedmetadata', () => {
                video.width = video.videoWidth;
                video.height = video.videoHeight;
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;

                if(video.videoWidth < video.videoHeight) {
                    isVertical = true;
                }

                // Seek the video to 25%
                video.currentTime = video.duration * 0.25;
            });
            video.addEventListener('seeked', () => resolve(false));
            video.src = videoUrl;
        });

        // Draw the thumbnailz
        canvas
            ?.getContext('2d')
            ?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        const imageUrl = canvas.toDataURL('image/png');
        return {
            thumbnailUrl: imageUrl,
            isVertical: isVertical
        };
    } catch {
        return {
            thumbnailUrl: "",
            isVertical: false
        }; // default video thumb
    }
};
