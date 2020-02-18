import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
`;

export const WrapImage = styled.div`
  vertical-align: top;
  display: inline-block;
  padding: 25px;
  width: 89px;
  height: 89px;
  background-color: rgba(59, 61, 63, 0.1);
  margin-right: 15px;
`;

export const Icon = styled.img`
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export const WrapLabel = styled.div`
  display: inline-block;
  vertical-align: top;
  line-height: 89px;
`;

export const Label = styled.span`
  font-size: 20px;
  line-height: 39px;
  font-weight: 500;
  color: #FAFAFA;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;


  &:hover {
    color: #ccc;
  }
`;