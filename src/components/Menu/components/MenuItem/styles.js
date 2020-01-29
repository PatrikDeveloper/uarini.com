import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  vertical-align: top;
  display: inline-block;
`;

export const Icon = styled.span`
  height: 30px;
  width: 30px;
  background: #ccc;
`;

export const Label = styled.span`
  line-height: 30px;
  font-size: 30px;
  margin-left: 20px;
  cursor: pointer;

  &:hover{
    color: #ccc;
  }
`;