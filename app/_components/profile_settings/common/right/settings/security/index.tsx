// import { useState } from 'react';
// import Toggle from 'library/toggle';
// import ImageWithFallback from 'library/image';
// import { Colors, Fonts } from 'utils/styles/themes';
// import { Paragraph, Tiny } from 'library/Text';
// import * as S from './styles';

// function Security() {
//     const [isSelected, setIsSelected] = useState(false);
//     const [isQrSelected, setIsQrSelected] = useState(false);

//     return (
//         <S.SecurityWrap>
//             <Paragraph margin="0 0 8px 0" font={Fonts.m600}>
//                 Security
//             </Paragraph>
//             <Tiny color={Colors.grayShade2}>Set your security preferences</Tiny>
//             <S.SecurityBlock>
//                 <div>
//                     <Toggle
//                         width={40}
//                         height={22}
//                         uncheckedColor={Colors.border}
//                         checkedColor={Colors.primary}
//                         label={'Two-Factor Authentication'}
//                         defaultChecked={isSelected}
//                         onChangeHandler={() => setIsSelected((p) => !p)}
//                     />
//                     {isSelected && (
//                         <S.NoteWrap>
//                             <li>Install authenticator app</li>
//                             <li>Scan the QR code</li>
//                             <li>Enter the OTP</li>
//                             <li>Verify</li>
//                         </S.NoteWrap>
//                     )}
//                 </div>
//                 {isSelected && (
//                     <S.QrWrap>
//                         {isQrSelected ? (
//                             <>QRcode</>
//                         ) : (
//                             <S.QrcodeWrap onClick={() => setIsQrSelected(true)}>
//                                 <ImageWithFallback
//                                     width={56}
//                                     height={56}
//                                     src={'/icons/qrCode.svg'}
//                                     alt=""
//                                 />
//                                 <p>Click here to generate QR code</p>
//                             </S.QrcodeWrap>
//                         )}
//                     </S.QrWrap>
//                 )}
//             </S.SecurityBlock>
//         </S.SecurityWrap>
//     );
// }

// export default Security;

import React from 'react'

export default function Security() {
  return (
    <div>
      
    </div>
  )
}
