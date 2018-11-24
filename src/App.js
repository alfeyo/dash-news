import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=";
const API_KEY = "da7b64a5971c488aa9804f6aa67164e4";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headlines : {
        author: "",
        content: "",
        description: "",
        title: "",
        imageUrl: "",
      },

      articles: []
    }
  }
  async componentDidMount(){
    try {
      const newsData = await fetch(API + API_KEY)
      const newsDataJson = await newsData.json();
      //const data = this.state.articles;
      await this.setState({
        articles: newsDataJson
      })
      //console.log(da);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    console.log(this.state.articles.articles);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
