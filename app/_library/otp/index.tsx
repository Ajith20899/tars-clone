"use client";

import React, { useState, useRef, useEffect, KeyboardEvent, ChangeEvent } from 'react';

import { cn } from '@/lib/utils';

interface OtpInputProps {
  numberOfInputs: number;
  onComplete: (otp: string) => void;
  className?: string;
}

const OtpInput: React.FC<OtpInputProps> = ({ numberOfInputs, onComplete, className }) => {
  const [otpValues, setOtpValues] = useState<string[]>(Array(numberOfInputs).fill(''));
  const inputRefs = useRef<HTMLInputElement[]>([]);

const handleInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/\D/g, '');
    const updatedOtpValues = [...otpValues];
    updatedOtpValues[index] = value;
    
    if (value) {
        if (index < numberOfInputs - 1) {
            document.getElementById(`otp-${index + 1}`)?.focus();
        }
    } else if (index > 0) {
        document.getElementById(`otp-${index - 1}`)?.focus();
    }

    if(value.length > 1) return;

    setOtpValues(updatedOtpValues);

    onComplete(updatedOtpValues.join(''));
};

  return (
    <div className={cn("flex items-center justify-between gap-2", className)}>
      {Array.from({ length: numberOfInputs }, (_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el as HTMLInputElement)}
          type="text"
          id={`otp-${index}`}
          value={otpValues[index]}
          onChange={(e) => handleInput(e, index)}
        //   onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-10 h-10 text-sm text-center border rounded text-textPrimary border-borderColor focus:outline-none"
        />
      ))}
    </div>
  );
};

export default OtpInput;
