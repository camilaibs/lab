import React from 'react';
import FormButton from '../FormButton';

const App = () => (
    <React.Fragment>
        <FormButton>Text</FormButton>
        <br /><br />
        <FormButton secondary>Text</FormButton>
    </React.Fragment>
);

App.displayName = "App";

export default App