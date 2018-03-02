import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewsList from './components/news';

//COMPONENTS
import Header from './components/header'
import JSON from './db.json'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      news:JSON
    }
  }

  filterNews(keywords) {
       
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Header newsSearch={keywords=>this.filterNews(keywords)}/>
        <NewsList news={this.state.news}/>
      </div>
    );
  }
}

export default App;
