import React from 'react';
import styled from 'styled-components';

interface CallTextProps {
  text : string
}

const CallText : React.FC<CallTextProps> = (props: CallTextProps) => {
  return (
    <StyledCallText>{props.text}</StyledCallText>
  );
}

export default CallText;

const StyledCallText = styled.h4`
  color: #989FDB;
  text-align : center;
  margin-top : 20px;
  margin-bottom : 20px;
`;