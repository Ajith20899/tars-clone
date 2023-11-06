// import React, { useState } from 'react';
// import PasswordInput from 'library/passwordInput';
// import Button from 'library/button';
// import { ButtonTypes } from 'library/button/constants';
// import PasswordOtp from './otp';
// import { Paragraph, Tiny } from 'library/Text';
// import { Fonts, Colors } from 'utils/styles/themes';
// import { passwordInputDetails } from '../constants';
// import * as S from './styles';
// import { validatePassword } from 'utils/generics';

// function Password() {
//     const [passwordDetails, setPasswordDetails] = useState({
//         password: '',
//         newPassword: '',
//         confirmPassword: '',
//     });
//     const [errorMsg, setErrorMsg] = useState({
//         password: '',
//         newPassword: '',
//         confirmPassword: '',
//     });
//     const [isShowOtp, setIsShowOtp] = useState(false);

//     const { confirmPassword, newPassword, password } = passwordDetails;

//     const onChangeEvent = (value: string, name: string) => {
//         console.log('name ', name);

//         if (name === 'newPassword') {
//             let result = validatePassword(value);
//             if (result.length) {
//                 setErrorMsg((p) => ({
//                     ...p,
//                     newPassword: result,
//                 }));
//                 return;
//             }
//         }

//         setPasswordDetails((p) => ({
//             ...p,
//             [name]: value,
//         }));

//         setErrorMsg((p) => ({
//             ...p,
//             [name]: '',
//         }));
//     };

//     const saveHandler = () => {
//         if (newPassword === password) {
//             setErrorMsg((p) => ({
//                 ...p,
//                 password: 'Current password must differ from New password.',
//             }));
//         }
//         if (confirmPassword !== newPassword) {
//             setErrorMsg((p) => ({
//                 ...p,
//                 confirmPassword:
//                     'New password and Confirm password cannot differ.',
//             }));
//         }

//         // setIsShowOtp(true);
//     };

//     console.log('errr ', errorMsg);

//     return (
//         <S.PasswordWrap>
//             {isShowOtp && (
//                 <PasswordOtp
//                     email={'ajithlinust@gmail.com'}
//                     closeHandler={() => setIsShowOtp(false)}
//                 />
//             )}
//             <Paragraph margin="0 0 8px 0" font={Fonts.m600}>
//                 Password
//             </Paragraph>
//             <Tiny color={Colors.grayShade2}>
//                 Please enter your current password to change your password
//             </Tiny>
//             <S.FormWrapper>
//                 {passwordInputDetails.map((data) => (
//                     <PasswordInput
//                         key={data.name}
//                         label={data.title}
//                         placeholder={data.placeholder}
//                         onChangeHandler={(e) =>
//                             onChangeEvent(e.target.value, data.name)
//                         }
//                         errorLabel={(errorMsg as any)[data.name]}
//                     />
//                 ))}
//             </S.FormWrapper>
//             <Button
//                 disabled={
//                     !!(
//                         errorMsg.password ||
//                         errorMsg.confirmPassword ||
//                         errorMsg.newPassword
//                     ) ||
//                     !(
//                         password.length &&
//                         confirmPassword.length &&
//                         newPassword.length
//                     )
//                 }
//                 variant={ButtonTypes.PRIMARY}
//                 onClick={saveHandler}
//                 width={'300px'}
//                 height={'39px'}
//                 mMargin="auto 0 0 0"
//                 mWidth="100%"
//                 styles="margin-top: 50px;"
//             >
//                 Continue
//             </Button>
//         </S.PasswordWrap>
//     );
// }

// export default Password;

import React from 'react'

export default function Password() {
  return (
    <div>
      
    </div>
  )
}
