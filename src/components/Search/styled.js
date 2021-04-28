import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 12px;
`;

export const SearchInput = styled.input`
  border: none;
  font-size: 14px;
  background-color: transparent;
  color: #474747;
  line-height: 17px;
  outline: none;
  flex: 1;
  margin-left: 12px;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #b8b8b8;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #b8b8b8;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #b8b8b8;
  }
`;

export const CancelButton = styled.button`
  color: #fa3e05;
  border: 0;
  background-color: transparent;
  padding: 0;
  margin-left: 12px;
`;
