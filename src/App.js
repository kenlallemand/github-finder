import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';

import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  
  // async componentDidMount(){
  //   this.setState({loading: true});
  //   // eslint-disable-next-line
  //   const res = await axios.get('https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}');

  //   this.setState({users: res.data, loading: false});
  // }


  //search github users through the api
  searchUsers = async text => {
    this.setState({loading: true});
    // eslint-disable-next-line
    const res = await axios.get('https://api.github.com/search/users?q='+text+'&client_id='+process.env.REACT_APP_GITHUB_CLIENT_ID+'&client_secret='+process.env.REACT_APP_GITHUB_CLIENT_SECRET);

    await this.setState({users: res.data.items, loading: false});
    console.log(res.data.items.length);
    
  };

  //clear user from state
  clearUsers = () => this.setState({users: [], loading: false});

  render(){
    
    return (
      <div className='App'>
        <Navbar/>
        <div className="container">
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false} />
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
        
        
      </div>
    );
  }
}

export default App;