import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShelfInputForm extends Component {
    constructor(props){
        super(props);
        this.state= {
            description: '',
            image_url: '',
        }
    }

    submit = (event) => {
        event.preventDefault();
        console.log('submit');
    }

    render() {
        return (
            <div>
                <p>[ShelfInputForm]</p>
                <form onSubmit={this.submit}>
                    <input type="text" name="description" placeholder="description" required />
                    <input type="text" name="image_url" placeholder="Image" required />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({ reduxStore });
export default connect(mapReduxStoreToProps)(ShelfInputForm);