import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';


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

      data: []
    }
  }
  async componentDidMount(){
    try {
      const newsData = await fetch(API + API_KEY)
      const newsDataJson = await newsData.json();
      //const data = this.state.articles;
      await this.setState({
        data: newsDataJson
      })
      console.log(newsDataJson);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const {data} = this.state;
    console.log(this.state.data.articles)
    // for (var i = 0; i < 5; i++){
      return (
        
        <div className="App">
        {
          this.state.data.articles ? this.state.data.articles.map((article) => (
            <NewsCard description={article.description} title={article.title} image={article.urlToImage} link={article.url}/>
          ))
          :
          // <NewsCard title="Soiioriheoi"></NewsCard>
          <Loading></Loading>
        }
        </div>
      );
    // }
  }
}


class NewsCard extends Component{

  render(){
    return (
      <Card maxWidth="345">
        <CardActionArea>
          <CardMedia className="card"
            image={this.props.image}
            title="{this.props.title}"
            objectFit="cover"
          />
          <img src={this.props.image}></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.title}
            </Typography>
            <Typography component="p">
              {this.props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Like
          </Button>
          <Button size="small" color="primary">
            <a href={this.props.link}>Read More</a>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

class Loading extends Component {
  render() {
    return (
      <div>
      <CircularProgress/>
    </div>
    )
  }
}

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

export default App;
