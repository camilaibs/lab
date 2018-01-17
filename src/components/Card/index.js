import React from 'react';
import styled from 'styled-components';


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.onDoneSubmit = this.onDoneSubmit.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onRemoveClick = this.onRemoveClick.bind(this);
    }

    onDoneSubmit(e) {
        e.preventDefault();
        const card = {
            id: this.props.id,
            title: e.target.title.value,
            note: e.target.note.value
        };
        this.props.onDoneSubmit(card);
        e.target.reset();
    }

    onEditClick(e) {
        e.preventDefault();
        this.props.onCardClick(this.props.id);
    }

    onRemoveClick(e) {
        e.preventDefault();
        this.props.onRemoveClick(this.props.id);
    }

    render() {
        const { onDataChange, onDoneSubmit, onEditClick, onRemoveClick } = this;
        const { className, id, title, note, editing } = this.props;

        return editing ? (
            <form className={className} onSubmit={onDoneSubmit}>
                {id &&
                    <button className="card__remove" type="button" onClick={onRemoveClick}>
                        x
                    </button>
                }

                <input 
                    className="card__title card__title--editing"
                    placeholder="Título"
                    name="title"
                    defaultValue={title} />

                <textarea 
                    className="card__note card__note--editing"
                    rows={5}
                    placeholder="Nota..."
                    name="note"
                    defaultValue={note} />

                <button className="card__done">Concluído</button>
            </form>
        ) : (
            <form className={className} onClick={onEditClick}>
                <h2 className="card__title">{title}</h2>
                <p className="card__note">{note}</p>
            </form>
        );
    }
}

export default styled(Card) `
    font-family: Arial, sans-serif;
    display: inline-block;
    width: 180px;
    padding: 1rem;
    background: rgb(250, 250, 250);
    border-radius: 2px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    transition: all .218s ease-in;

    .card__remove {
        cursor: pointer;
        font-size: 1.125rem;
        font-weight: bold;
        display: block;
        padding: 0 0.5rem 0.5rem;
        margin: 0 0 0 auto;
        border: none;
        background: inherit;
    }

    .card__title {
        font-size: 17px;
        font-weight: bold;
        line-height: 23px;
        min-height: 38px;
        transition: background-color .218s ease-in;
    }

    .card__note {
        box-sizing: border-box;
        font-variant-ligatures: none;
        outline: none;
        white-space: pre-wrap;
        word-wrap: break-word;
    }

    .card__title--editing, .card__note--editing {
        display: block;
        width: 100%;
        padding: 0;
        margin: 0;
        border: none;
    }
`;