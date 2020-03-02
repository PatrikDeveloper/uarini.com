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


export default function Forms() {
  const classes = useStyles();

  return (
    <Wrapper>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Nome Completo" variant="outlined" />
        <TextField id="outlined-basic" label="Endereço" variant="outlined" />
    </form>
    </Wrapper>
  )
}