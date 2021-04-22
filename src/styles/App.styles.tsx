import styled from "styled-components";

export const ExampleText = styled.h1`
  color: ${({ theme: { color } }) => color.white};
`;
