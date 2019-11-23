import React, { Component } from 'react'
import Column from './component/Column'
//import ListTemplate from './component/List'
import ListForm from './component/ListForm';

class App extends Component {
  constructor () {
    super()
    this.state = {
        information: [
            {
                id: 0,
                name: '김민준',
                phone: '010-0000-0000'
            },
            {
                id: 1,
                name: '홍길동',
                phone: '010-0000-0001'
            }
        ],
        selectedChart: 'column'
    }
    this.changeChart = this.changeChart.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
  }

  changeChart (e) {
    this.setState({selectedChart: e.target.value})
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

  render () {
    return (
      <div className="app">
          <ListForm>
              onCreate={this.handleCreate}
          </ListForm>
          <br/>
          <br/>
          <Column></Column>
      </div>
    )
  }
}

export default App