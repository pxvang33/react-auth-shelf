import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfoPageRow from './InfoPageRow';

import ShelfInputForm from '../ShelfInputForm/ShelfInputForm';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_SHELF' });
  }

  render() {
    return (
      <div>
        <ShelfInputForm />
        <h2>Shelf Contents:</h2>
        
        <ul>
          {this.props.reduxStore.shelf.map(shelfItem => (
             <InfoPageRow key={shelfItem.id} shelfItem={shelfItem}/>
          ))}
        </ul>
      </div>
    );
  }
}

const mapReduxStoreToProps = (reduxStore) => ({ reduxStore });
export default connect(mapReduxStoreToProps)(InfoPage);
