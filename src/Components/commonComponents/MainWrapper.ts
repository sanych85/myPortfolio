import styled, { css } from 'styled-components';


interface Props {
    backgroundColor?: string
}
const base = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const HorizontalWrapper = styled.div`
  ${base}
  background-color: ${(props:Props) => props.backgroundColor || ''};
`;
export const VerticalWrapper = styled.div`
  ${base}
  flex-direction: column;
  background-color: ${(props:Props) => props.backgroundColor || ''};
`;

export const MainSectionWrapper = styled(HorizontalWrapper) `
  width: 70%;
  min-height: 100vh;
`
