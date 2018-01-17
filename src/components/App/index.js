import React from 'react';
import FormButton from '../FormButton';
import Counter from '../Counter';
import Card from '../Card';
import { addCard, editCard, saveCard, removeCard } from '../../reducers';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { cards: [] };

        this.onDoneSubmit = this.onDoneSubmit.bind(this);
        this.onCardClick = this.onCardClick.bind(this);
        this.onRemoveClick = this.onRemoveClick.bind(this);
    }

    componentWillMount() {
        const { store } = this.props;

        this.props.store.subscribe(() => {
            const state = this.props.store.getState();
            this.setState({ cards: state.cards });
        });
    }

    onDoneSubmit(card) {
        if (card.id) {
            this.props.store.dispatch(saveCard({ ...card }));
        } else {
            const id = this.state.cards.length + 1;
            this.props.store.dispatch(addCard({ ...card, id }));
        }
    }

    onCardClick(id) {
        this.props.store.dispatch(editCard(id));
    }

    onRemoveClick(id){
        this.props.store.dispatch(removeCard(id));
    }

    render() {
        const { onDoneSubmit, onCardClick, onRemoveClick } = this;
        const { cards } = this.state;
        const { store } = this.props;

        return (
            <React.Fragment>
                <FormButton>Text</FormButton>

                <br /><br />

                <FormButton secondary>Text</FormButton>
                <br /><br />

                <Counter store={store} />

                <br /><br />

                <Card editing onDoneSubmit={onDoneSubmit} />

                <br /><br />

                {cards.map((card, index) => (
                    <Card key={index} 
                          {...card} 
                          onCardClick={onCardClick} 
                          onDoneSubmit={onDoneSubmit} 
                          onRemoveClick={onRemoveClick} />
                ))}
            </React.Fragment>
        );
    };
}