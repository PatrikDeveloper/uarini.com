import React, { useState } from 'react';
import * as S from './styles';

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


export default function Forms() {
  
  const classes = useStyles();
  const [count, setCount] = useState(1);

  return (
    <S.Wrapper>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField 
          id="outlined-basic" 
          label="Nome Completo" 
          variant="outlined"
        />
        <TextField 
          id="outlined-basic" 
          label="Endereço" 
          variant="outlined" 
        />
        <TextField 
          id="outlined-basic" 
          label="Telefone" 
          placeholder="(11) 99999-9999" 
          variant="outlined" 
        />
      </form>

      <S.WrapperPrice>
        <S.Price>R$: 25,00</S.Price>
        <S.Amount onClick={() => setCount(count + 1)}>+</S.Amount>
        <S.Amount onClick={() => setCount(count - 1)}>-</S.Amount>
        <S.ShowQuantity>{count}</S.ShowQuantity>
      </S.WrapperPrice>

      <S.WrapperButton>
        <S.Solicitation>Solicitar</S.Solicitation>
      </S.WrapperButton>

    </S.Wrapper>
  )
}