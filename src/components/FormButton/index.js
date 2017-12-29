import React from 'react';
import styled, { css } from 'styled-components';

const FormButton = styled.button`
    color: white;
    font-size: 1rem;
    padding: 0.5em 1rem;
    margin: 0;
    background: palevioletred;
    border: 2px solid palevioletred;
    border-radius: 3px;

    ${({ secondary }) => secondary && css`
        color: palevioletred;
        background: transparent;
    `}
`;

FormButton.displayName = "FormButton";

export default FormButton;