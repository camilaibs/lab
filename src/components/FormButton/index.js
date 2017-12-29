import React from 'react';
import styled, { css } from 'styled-components';

const FormButton = styled.button`
    color: ${({ theme }) => theme.secondary};
    font-size: 1rem;
    padding: 0.5em 1rem;
    margin: 0;
    background: ${({ theme }) => theme.primary};
    border: 2px solid ${({ theme }) => theme.primary};
    border-radius: 3px;

    ${({ secondary }) => secondary && css`
        color: ${({ theme }) => theme.primary};
        background: ${({ theme }) => theme.secondary};
    `}
`;

FormButton.displayName = "FormButton";

export default FormButton;