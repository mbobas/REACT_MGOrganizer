import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const theme = { 
  primary: 'black',
}
const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
      <h1>Hello</h1>
      <Button width="220px">Close / Save</Button>
      <Button secondary>Remove</Button>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
