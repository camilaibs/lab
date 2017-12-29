import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { linkTo } from '@storybook/addon-links';
import { decorateAction } from '@storybook/addon-actions';
import FormButton from './index';


const onFormButtonEmajiClick = decorateAction([
    () => [{foo: 'bar'}]
])

storiesOf('Form/Button', module)
    .addDecorator(withKnobs)
    .add('With text', () => (
        <FormButton secondary={boolean('Secondary', false)} onClick={linkTo('Button', 'Primary')}>
            Text
        </FormButton>
    ))
    .add('With some emoji', () => (
        <FormButton secondary={boolean('Secondary', false)} onClick={onFormButtonEmajiClick('form-button-emoji-click')}>
            😀 😎 👍 💯
        </FormButton>
    ));