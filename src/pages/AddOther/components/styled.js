import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 500px;
  padding: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
`;

export const Label = styled.span`
  width: 150px;
`;

export const Input = styled.input`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex-grow: 1;
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Message = styled.span`
  font-size: 16px;
  color: green;
  padding: 5px 10px;
`;
