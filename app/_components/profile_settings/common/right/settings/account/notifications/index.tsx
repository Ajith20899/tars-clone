// import { useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Toggle from 'library/toggle';
// import { Colors, Fonts } from 'utils/styles/themes';
// import { Paragraph, Tiny } from 'library/Text';
// import { putRequest } from 'utils/api/httpClient';
// import { profileUrls } from 'utils/api/urls';
// import { IRootState } from 'store/types';
// import * as S from './styles';

// function Notifications() {
//     const notificationStatus = useSelector(
//         (state: IRootState) => state.profile.userDetails.data.notificationStatus
//     );

//     const dispatch = useDispatch();

//     const timerRef = useRef<NodeJS.Timeout>();

//     const toggleHandler = async (status: string) => {
//         import('redux/profile/actions').then((req) => {
//             dispatch(
//                 req.updateNotificationDetails({
//                     notificationStatus: status,
//                 })
//             );
//         });
//         clearTimeout(timerRef.current);
//         timerRef.current = setTimeout(async () => {
//             try {
//                 let { errorMessage } = await putRequest(
//                     profileUrls.updateNotifications,
//                     {
//                         notificationStatus: status,
//                     }
//                 );
//                 if (errorMessage) throw errorMessage;
//             } catch {}
//         }, 700);
//     };

//     return (
//         <S.NotificationsWrap>
//             <Paragraph margin="0 0 8px 0" font={Fonts.m600}>
//                 Notications
//             </Paragraph>
//             <Tiny color={Colors.grayShade2}>
//                 Set your notification preferences
//             </Tiny>
//             <S.NotificationBlock>
//                 <Toggle
//                     width={40}
//                     height={22}
//                     uncheckedColor={Colors.border}
//                     checkedColor={Colors.primary}
//                     label={'Show notifications'}
//                     defaultChecked={notificationStatus === 'allow'}
//                     onChangeHandler={() =>
//                         toggleHandler(
//                             notificationStatus === 'allow' ? 'mute' : 'allow'
//                         )
//                     }
//                 />
//             </S.NotificationBlock>
//         </S.NotificationsWrap>
//     );
// }

// export default Notifications;

import React from 'react'

export default function Notifications() {
  return (
    <div>
      
    </div>
  )
}
