import React from 'react';
import FormButton from '../FormButton';
import { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';
import utils from '../../utils';

theme('mode', utils.theme);

const App = () => (
    <ThemeProvider theme={utils.theme}>
        <React.Fragment>
            <FormButton>Form button</FormButton>
            <br />
            <FormButton secondary>Form button</FormButton>
        </React.Fragment>
    </ThemeProvider>
);

App.displayName = "App";

export default App