import React, {useState} from "react";
import styled from 'styled-components';



const DateStyledWrapper = (props) => {

  const [focused, toggleFocus] = useState(false);

  return (
    <DateWrapper
      onFocus={ () => toggleFocus(!focused) }
      onBlur={ () => toggleFocus(!focused) }
      focus={focused}
    >
      {props.children}
    </DateWrapper>
  );
};

export default DateStyledWrapper;



const DateWrapper = styled.div`
  background-color: #fff;
  border: ${props => props.focus ? '1px solid #35D0DE' : '1px solid #fff' };
  border-radius: 24px;
  margin-left: 56px;
  display: flex;
  position: relative;
  width: 100%;
  height: 49px;
  box-shadow: 0 9px 23px 0 rgba(0,0,0,0.15);
  
  @media (max-width: 1190px) {
    margin-left: 30px;
  }
  
  @media (max-width: 991px) {
    margin-top: 24px;
    margin-left: 0;
  }
`;
