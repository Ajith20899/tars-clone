// import { useState } from 'react';
// import { ContentWrapper } from 'components/auth/styles';
// import OTPInput from 'library/input/otp';
// import Button from 'library/button';
// import { ButtonTypes } from 'library/button/constants';
// import { Wrapper } from 'library/input/styles';
// import { Colors, Fonts } from 'utils/styles/themes';
// import Modal from 'library/modal';

// function PasswordOtp({
//     email,
//     closeHandler,
// }: {
//     email: string;
//     closeHandler: () => void;
// }) {
//     const [otp, setOtp] = useState('');

//     const onChangeOtp = (otp: string) => {
//         setOtp(otp);
//     };

//     const onVerifyOtp = async () => {
//         try {
//         } catch {}
//     };

//     return (
//         <Modal
//             show
//             closeModal={closeHandler}
//             heading={'Two-step verification'}
//             styles="padding: 14px 20px;"
//         >
//             <OTPWrapper>
//                 <ContentWrapper>
//                     <p>
//                         {`Thanks for keeping your account secure. check your Email `}
//                         <span>{email}</span>
//                     </p>
//                     <OTPInput
//                         width={'45px'}
//                         height={'40px'}
//                         otpLength={6}
//                         value={otp}
//                         onCompleteOtp={(value: string) => onChangeOtp(value)}
//                     />
//                     <Button
//                         disabled={otp.length < 6}
//                         variant={ButtonTypes.PRIMARY}
//                         onClick={onVerifyOtp}
//                         width={'100%'}
//                         height={'45px'}
//                         styles="margin-top: 30px;"
//                     >
//                         Next
//                     </Button>
//                 </ContentWrapper>
//             </OTPWrapper>
//         </Modal>
//     );
// }

// export default PasswordOtp;

// export const OTPWrapper = styled(Wrapper)`
//     padding-top: 12px;
//     /* transform: translateY(-30px); */

//     p {
//         color: ${Colors.grayShade2};
//         ${Fonts.m400};
//         margin-top: 0;
//         line-height: 20px;
//     }

//     span {
//         ${Fonts.m600};
//     }

//     @media (max-width: 768px) {
//         > div {
//             height: 100%;
//             padding-top: 55px;
//         }
//     }
// `;

import React from 'react'

export default function PasswordOtp() {
  return (
    <div>
      
    </div>
  )
}
