import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShelfInputForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            description: '',
            image_url: '',
            person_id: this.props.user.id,
        };
        console.log(this.state);
    }

    changeInput = (event) => {
        const attributeName = event.target.name;
        const changeValue = event.target.value;
        this.setState({
            ...this.state,
            [attributeName]: changeValue, 
        });
    }

    submit = (event) => {
        event.preventDefault();
        const action = {
            type: 'ADD_TO_SHELF',
            payload: this.state,
        }
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <input onChange={this.changeInput} type="text" name="description" placeholder="Description" required />
                    <input onChange={this.changeInput} type="text" name="image_url" placeholder="Image URL" required />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

// const mapReduxStoreToProps = (reduxStore) => ({ reduxStore });

const mapReduxStoreToProps = reduxStore => ({
    ...reduxStore,
    user: reduxStore.user,
});

export default connect(mapReduxStoreToProps)(ShelfInputForm);