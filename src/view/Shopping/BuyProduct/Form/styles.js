import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 10px;
`;

export const WrapperPrice = styled.div`
  padding: 20px 0;
`;

export const Price = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 38px;
  color: #ff8c00;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  padding: 0 20px 0 10px ;
`;

export const Amount = styled.button`
  display: inline-block;
  vertical-align: middle;
  padding: 5px 25px;
  margin-left: 2px; 
  font-size: 22px;
  font-weight: bold;
  color: #24292e;
  border: 2px solid #ccc;
  background: #Fafafa;
  border-radius: 5px;
  cursor: pointer;
  outline: none;

  &:hover {
    background: #dcdcdc;
  }
`;

export const ShowQuantity = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 22px;
  font-weight: bold;
  border: 2px solid #ccc;
  border-radius: 15px;
  margin-left: 10px;
  padding: 5px 20px;
  color: #ccc;
`;

export const WrapperButton = styled.div`
  padding: 20px 0;
`;

export const Solicitation = styled.button`
  border: 1px solid #ff8c00;
  border-radius: 15px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  background: #ff8c00;
  padding: 20px 20px;
  width: 100%;
  cursor: pointer;
  outline: none;
`;