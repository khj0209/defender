import React, { Component } from 'react';

class ListForm extends Component {
  state = {
    name: '',
    date: '',
    commit: ''
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Repo name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <div>{this.state.name}</div>
      </form>
    );
  }
}

export default ListForm;