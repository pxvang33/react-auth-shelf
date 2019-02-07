import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShelfInputForm from '../ShelfInputForm/ShelfInputForm';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {

    deleteItem = () => {
        const action = { type: 'DELETE_FROM_SHELF', payload: this.props.shelfItem.id  }
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                <li>{this.props.shelfItem.description}
                    <button onClick={this.deleteItem}>Delete </button></li>

            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({ reduxStore });
export default connect(mapReduxStoreToProps)(InfoPage);