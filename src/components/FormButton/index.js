import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import utils from '../../utils';


const theme = utils.themes.main;

const FormButton = styled((props) => (
    <ThemeProvider theme={theme}>
        <button {...props} />
    </ThemeProvider>
))`
    color: ${({ theme }) => theme.secondary};
    font-size: 1rem;
    padding: 0.5em 1rem;
    margin: 0;
    background: ${({ theme }) => theme.primary};
    border: 2px solid ${({ theme }) => theme.primary};
    border-radius: 3px;

    ${({ theme, secondary }) => secondary && css`
        color: ${theme.primary};
        background: ${theme.secondary};
    `}
`;

FormButton.displayName = "FormButton";
FormButton.defaultProps = { theme };

export default FormButton;