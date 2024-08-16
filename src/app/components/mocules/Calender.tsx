'use client';

import React, { useState } from "react";
import styled from "styled-components";

const CalenderContainer = styled.div`
  width: 100%;
  height: 5rem;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface CalenderProps {
  reservedDates: string[];
  onDateSelect: (date: string) => void;
}

const Calender: React.FC< CalenderProps > = ({ reservedDates, onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;
    setSelectedDate(date);
    onDateSelect(date);
  };

  const isReserved = (date: string) => {
    return reservedDates.includes(date);
  };

  return(
    <CalenderContainer>
      <input 
        type="date" 
        value={selectedDate || ''} 
        onChange={handleDateChange} 
        disabled={isReserved(selectedDate || '')}
      />
    </CalenderContainer>
  );
};

export default Calender;