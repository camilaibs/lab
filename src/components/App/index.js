import React from 'react';
import FormButton from '../FormButton';
import Counter from '../Counter';

const App = ({ store }) => (
    <React.Fragment>
        <FormButton>Text</FormButton>
        <br /><br />
        <FormButton secondary>Text</FormButton>
        <br /><br />
        <Counter store={store} />
    </React.Fragment>
);

App.displayName = "App";

export default App