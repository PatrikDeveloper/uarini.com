import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BoxProduct = styled.div`
  margin: 10px;
  float: left;
  width: 250px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  cursor: pointer;
  transition: .3s;

  &:hover{
    box-shadow: 5px 10px 18px #888888;

  }
`;