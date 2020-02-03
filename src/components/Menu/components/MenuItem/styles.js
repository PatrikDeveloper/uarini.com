import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 20px;
  float: left;
`;

export const Icon = styled.span`
  vertical-align: top;
  display: inline-block;
  height: 24px;
  width: 24px;
  background: #ccc;
`;

export const Label = styled.span`
  vertical-align: top;
  display: inline-block;
  line-height: 24px;
  font-size: 24px;
  margin-left: 5px;
  cursor: pointer;

  &:hover{
    color: #ccc;
  }
`;