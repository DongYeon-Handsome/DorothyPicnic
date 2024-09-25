'use client';

import React, { useState } from "react";
import styled from "styled-components";

const ReserveInfoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InfoName = styled.p`
  font-size: 10px;
  color: #ffffff;
  text-align: center;
`;

const InputField = styled.input`
  margin: 10px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`

interface ReserveInfoProps {
  onReserve: (name: string, phone: string, date: string) => void;
}

const ReserveInfo: React.FC< ReserveInfoProps > = ({ onReserve }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    if(name && phone && date) {
      console.log('Submitting reservation: ', { name, phone, date });
      onReserve(name, phone, date);
    } else{
      alert('Please fill out all fields.');
    }
  };

  return(
    <ReserveInfoContainer>
      <InputField 
        id="name"
        name="name"
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField 
        id="phone"
        name="phone"
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <InputField 
        id="date"
        name="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleSubmit}>Reserve</button>
    </ReserveInfoContainer>
  );
};

export default ReserveInfo;