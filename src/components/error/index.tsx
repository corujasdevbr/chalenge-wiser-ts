import styled from 'styled-components';

interface LabelProps {
  text : string
}

const Error = (props : LabelProps) => {
    return (
        <StyledLabel>{props.text}</StyledLabel>
    )
}

export default Error;

const StyledLabel = styled.label`
  color: red;
`;