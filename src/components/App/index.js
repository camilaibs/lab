import React from 'react';
import FormButton from '../FormButton';

const App = () => (
    <div>
        <FormButton>Form button</FormButton>
        <br />
        <FormButton secondary>Form button</FormButton>
    </div>
);

App.displayName = "App";

export default App