import React, { Component } from 'react'
import Column from './component/Column'
//import ListTemplate from './component/List'
import RepoListForm from './component/RepoListForm';
import RepoInfoList from "./component/RepoInfoList";
import Tabs from "./component/tabs"

class App extends Component {
  constructor () {
    super()
    this.state = {
        information: [
            {
                name: 'Repo1',
                url: 'https://github.com/Repo1_user.git',
                latest_commit: '2019-11-12',
                latest_scan: '2019-11-14'
            },
            {
                name: 'Repo2',
                url: 'https://github.com/Repo2_user.git',
                latest_commit: '2019-11-13',
                latest_scan: '2019-11-15'
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
      const { information } =  this.state;
      return (
          <div className="app">
              <Tabs>
                  <div label="GitHub">
                      <RepoListForm>
                      onCreate={this.handleCreate}
                      </RepoListForm>
                      <RepoInfoList data={this.state.information}/>
                      <br/>
                      <br/>
                  </div>
                  <div label="GitLab">
                      <RepoListForm>
                      onCreate={this.handleCreate}
                      </RepoListForm>
                      <RepoInfoList data={this.state.information}/>
                      <br/>
                      <br/>
                  </div>
              </Tabs>
              <Column></Column>
          </div>
      )
  }
}

export default App