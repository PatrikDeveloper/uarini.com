import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  float: left;
`;

export const Icon = styled.span`
  vertical-align: top;
  display: inline-block;
  height: 30px;
  width: 30px;
  background: #ccc;
`;

export const Label = styled.span`
  vertical-align: top;
  display: inline-block;
  line-height: 30px;
  font-size: 30px;
  margin-left: 20px;
  cursor: pointer;

  &:hover{
    color: #ccc;
  }
`;