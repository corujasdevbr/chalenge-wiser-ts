import styled from 'styled-components';

interface LabelProps {
  text : string
}

const Label = (props : LabelProps) => {
    return (
        <StyledLabel>{props.text}</StyledLabel>
    )
}

export default Label;

const StyledLabel = styled.label`
  color: #383E71;
`;