import React, { Component } from 'react';
import Tabs from "../Tab/tabs";

class RepoListForm extends Component {
  state = {
    name: '',
    url: '',
    latest_commit: '',
    latest_scan: ''
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      url: '',
      latest_commit: '',
      latest_scan: ''
    })
  }

  handleClick = (data) =>{

  }

  render() {
    return (
      <form>
        <button onClick={this.handleClick}>등록</button>
        <div>{this.state.name}</div>
      </form>
    );
  }
}

export default RepoListForm;