import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import {theme} from 'theme/mainTheme';
import Input from 'components/atoms/Input/Input'
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulb from 'assets/icons/bulb.svg';
import Card from 'components/molecules/Card/Card';

const YellowBackgroud = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.note};
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px; 
`;

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
      <h1>Hello</h1>
      <Button width="220px">Close / Save</Button>
      <Button secondary>Remove</Button>
      <Input />
      <Input search />
      <YellowBackgroud>
      <ButtonIcon icon={bulb} />
      </YellowBackgroud>
      <Card cardType="twitter" />
      </>
    </ThemeProvider>
  </div>
);

export default Root;
