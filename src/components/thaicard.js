import React from 'react';
import { Input } from 'antd';

const ThaiIDCardInput = () => {
  const idCardRegex = /^[0-9]{1,13}$/; // รูปแบบ regex สำหรับหมายเลขบัตรประชาชน (ตัวเลข 13 หลัก)

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (idCardRegex.test(inputValue) || inputValue === '') {
      // ถ้า input ตรงตาม regex หรือเป็นค่าว่าง
      // ทำตามการจัดการข้อมูลเพื่อนำไปใช้งานต่อ
      console.log('Valid Thai ID Card Number:', inputValue);
    } else {
      console.log('Invalid Thai ID Card Number');
    }
  };

  return (
    <Input
      placeholder="Enter Thai ID Card Number"
      onChange={handleInputChange}
    />
  );
};

export default ThaiIDCardInput;
