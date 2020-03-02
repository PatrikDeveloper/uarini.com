import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';  

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const Wrapper = styled.div`
  padding: 20px 10px;
`;

const WrapperPrice = styled.div`
  padding: 20px 0;
`;

const Price = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 38px;
  color: #ff8c00;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  padding: 0 20px 0 10px ;
`;

const Amount = styled.button`
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

const ShowQuantity = styled.div`
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

const WrapperButton = styled.div`
  padding: 20px 0;
`;

const Solicitation = styled.button`
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

export default function Forms() {
  const classes = useStyles();

  return (
    <Wrapper>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Nome Completo" variant="outlined" />
        <TextField id="outlined-basic" label="Endereço" variant="outlined" />
        <TextField id="outlined-basic" label="Telefone" placeholder="(11) 99999-9999" variant="outlined" />
      </form>

      <WrapperPrice>
        <Price>R$: 25,00</Price>
        <Amount>+</Amount>
        <Amount>-</Amount>
        <ShowQuantity>1</ShowQuantity>
      </WrapperPrice>

      <WrapperButton>
        <Solicitation>Solicitar</Solicitation>
      </WrapperButton>

    </Wrapper>
  )
}