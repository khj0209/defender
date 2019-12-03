import React, { Component } from 'react'
import RepoListForm from './component/List/RepoListForm';
import RepoInfoList from "./component/List/RepoInfoList";
import Tabs from "./component/Tab/tabs"

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
        information2: [
            {
                name: 'GitLab Repo1',
                url: 'https://gitlab.com/GitLabRepo1_user.git',
                latest_commit: '2017-04-12',
                latest_scan: '2019-11-14'
            }
        ],information3: [
            {
                name: 'BitBucketRepo1',
                url: 'https://bitbucket.com/BitRepo1_user.git',
                latest_commit: '2019-11-12',
                latest_scan: '2019-11-14'
            },
            {
                name: 'BitBucketRepo2',
                url: 'https://bitbucket.com/BitRepo2_user.git',
                latest_commit: '2019-11-13',
                latest_scan: '2019-11-15'
            },
            {
                name: 'BitBucketRepo3',
                url: 'https://bitbucket.com/BitRepo1_user.git',
                latest_commit: '2019-11-12',
                latest_scan: '2019-11-14'
            },
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
              <div className="navigation">
                    <a href="#">GitDefender</a>
              </div>
              <Tabs>
                  <div label="GitHub">
                      <RepoListForm>
                      onCreate={this.handleCreate}
                      </RepoListForm>
                      <RepoInfoList data={this.state.information}/>
                  </div>
                  <div label="GitLab">
                      <RepoListForm>
                      onCreate={this.handleCreate}
                      </RepoListForm>
                      <RepoInfoList data={this.state.information2}/>
                  </div>
                  <div label="BitBucket">
                      <RepoListForm>
                      onCreate={this.handleCreate}
                      </RepoListForm>
                      <RepoInfoList data={this.state.information3}/>
                  </div>
              </Tabs>
              <br/><br/><br/>
          </div>
      )
  }
}

export default App