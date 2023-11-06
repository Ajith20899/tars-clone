// import React, { useRef } from 'react';
// import { useDispatch } from 'react-redux';
// import { Label, Paragraph, Tiny } from 'library/Text';
// import RadioButton from 'library/radioButton';
// import { Colors, Fonts } from 'utils/styles/themes';
// import Notifications from './notifications';
// import { profileUrls } from 'utils/api/urls';
// import { putRequest } from 'utils/api/httpClient';
// import { useSelector } from 'react-redux';
// import { IRootState } from 'store/types';
// import * as S from './styles';

// const modes = [
//     {
//         name: 'Light',
//         key: 'light',
//     },
//     {
//         name: 'Dark',
//         key: 'dark',
//     },
//     {
//         name: 'System',
//         key: 'auto',
//     },
// ];

// export default function Account() {
//     const theme = useSelector(
//         (state: IRootState) => state.profile.userDetails.data.theme
//     );

//     const dispatch = useDispatch();

//     let timerRef = useRef<NodeJS.Timeout>();

//     const modeHandler = (key: string) => {
//         import('redux/profile/actions').then((req) => {
//             dispatch(
//                 req.updateThemeDetails({
//                     theme: key,
//                 })
//             );
//         });
//         clearTimeout(timerRef.current);

//         timerRef.current = setTimeout(async () => {
//             try {
//                 let { errorMessage } = await putRequest(
//                     profileUrls.updateTheme,
//                     {
//                         theme: key,
//                     }
//                 );
//                 if (errorMessage) throw errorMessage;
//             } catch {}
//         }, 700);
//     };

//     return (
//         <S.AccountWrapper>
//             <S.ThemeWrap>
//                 <Paragraph margin="0 0 8px 0" font={Fonts.m600}>
//                     Theme
//                 </Paragraph>
//                 <Tiny color={Colors.grayShade2}>
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry.
//                 </Tiny>
//                 <S.ModeWrap>
//                     {modes.map((d) => (
//                         <Label
//                             styles={styles}
//                             key={d.key}
//                             onClick={() => modeHandler(d.key)}
//                         >
//                             <RadioButton
//                                 isSelected={theme === d.key}
//                                 width={14}
//                                 height={14}
//                                 outer
//                             />
//                             <Tiny color={Colors.grayShade1}>{d.name}</Tiny>
//                         </Label>
//                     ))}
//                 </S.ModeWrap>
//             </S.ThemeWrap>
//             <Notifications />
//         </S.AccountWrapper>
//     );
// }

// const styles = `
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 8px;
//     cursor: pointer;
// `;

import React from 'react'

export default function Account() {
  return (
    <div>
      
    </div>
  )
}
