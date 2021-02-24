import styled from 'styled-components'

interface TitleProps {
  text : string
}

function Title(props: TitleProps) {
  return (
    <StyledTitle>{props.text}</StyledTitle>
  );
}

export default Title;

const StyledTitle = styled.h2`
  color: #383E71;
  margin-top : 20px;
  margin-bottom : 20px;
  text-align : center;
`;