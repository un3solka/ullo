import styled from 'styled-components';

export const TabButtonWrapper = styled.button`
  border: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  :focus {
    outline: none;
  }
`;

export const TabButtonLabel = styled.span`
  font-size: 11px;
  line-height: 13px;
  font-weight: bold;
  color: #949494;
`;
