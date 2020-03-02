import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 15px 0;
`;

export  const WrapperTitle = styled.div`
  padding: 10px 0; 
  width: 100%;
  background: #ccc;
`;

export const Title = styled.h1`
  font-size: 28px;
  line-height: normal;
  font-weight: 400px;
  color: #ff8c00;
  text-align: center;
`;

export const WrapperMedia = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 58%;
`;

export const WrapperDescription = styled.div`
  width: 42%;
  display: inline-block;
  vertical-align: top;
`;

export const ShowCase = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 25%;
`;

export const Small = styled.div`
  margin: 10px 0;
  width: 100px;
  height: 100px;
  border-radius: 3px;
  border: 2px solid #ccc;
  cursor: pointer;

  &:hover {
    border: 2px solid #ff8c00;
  }
`;

export const BigImage = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 74%;
`;