import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = { term: '' }

  onInputChange = e => {
    this.setState({ term: e.target.value.toLowerCase() });
  }

  onFormSubmit = e => {
    e.preventDefault();

    // TODO: make sure we call
    // callback from the parent component
    this.props.onTermSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui action input large fluid field">
            <label className="label" htmlFor="search">Video Search:</label>
            <input value={this.state.term} onChange={this.onInputChange} type="text" name="search" placeholder="Search" id="search" />
            <button className="ui icon large button">
              <i className="search icon"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;