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
  display: inline-block;
  vertical-align: top;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: .1em;
  font-size: 14px;
  margin-left: 5px;
  cursor: pointer;
  transition: .3s;

  &:hover{
    color: #fec63e;
  }
`;