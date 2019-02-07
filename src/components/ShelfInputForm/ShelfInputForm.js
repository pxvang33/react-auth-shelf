import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShelfInputForm extends Component {

    render() {
        return (
            <div>
                <p>[ShelfInputForm]</p>
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({ reduxStore });
export default connect(mapReduxStoreToProps)(ShelfInputForm);