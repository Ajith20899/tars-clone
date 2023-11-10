import { getAccessIdToken } from 'utils/amplify';
import { WebsocketChatActionTypes } from './types';

export const updateChatRequestMessageLastSeenTime = async (
    ws: WebSocket | null,
    channelId: string,
    createdAt: number,
    userEkey: string
) => {
    try {
        if (!ws) return;
        if (!channelId) return;
        if (!(ws?.readyState === ws?.OPEN)) {
            return;
        }
        const { accessToken } = await getAccessIdToken();
        const payload = {
            action: WebsocketChatActionTypes.UPDATE_PRIVATE_CHAT_REQUEST_LAST_SEEN_TIME,
            channelId,
            createdAt,
            userEkey,
            accessToken,
        };
        ws?.send(JSON.stringify(payload));
    } catch {}
};
