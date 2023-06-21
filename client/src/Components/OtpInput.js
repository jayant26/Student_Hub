import React, { useState, useRef, useEffect } from 'react';

const OtpInput = ({ length = 6, onSubmit, onChange }) => {
  const [otp, setOtp] = useState(Array(length).fill(null));
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);
    onChange(newOtp.join(''));

    if (value === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (index < length - 1 && value !== '') {
      inputRefs.current[index + 1].focus();
    }

    // if (newOtp.every((digit) => digit !== '')) {
    //   onSubmit(newOtp.join(''));
    // }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

 

  return (
    <div className="otp-input-container">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          className="otp-input-field"
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(ref) => (inputRefs.current[index] = ref)}
        />
      ))}
      
    </div>
  );
};

export default OtpInput;
