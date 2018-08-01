import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {quotes} from './quotes.json';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    }
    this.newQuote = this.newQuote.bind(this);
    this.tweetQuote = this.tweetQuote.bind(this);
  }


  newQuote(){
    let num = (Math.floor(Math.random() * quotes.length));
    this.setState({
      quote: quotes[num].text,
      author: quotes[num].source
    });
  }

  tweetQuote() {
  }

  componentDidMount() {
    this.newQuote();
  }

  render() {
    return (
      <div id="quote-container" className="center-div">
        <p id="title">RANDOM QUOTE MACHINE</p>
        <Text quote={this.state.quote} author={this.state.author}/>
        <Buttons handleNewQuote={this.newQuote} handleTweet={this.tweetQuote}/>
        <p id="disclaimer"><em>All quotes from <a href="https://github.com/jordwest/news-feed-eradicator/">news-feed-eradicator</a> on GitHub</em></p>
      </div>
    );
  }
}

class Text extends React.Component {
  render() {
    return (
      <div id="quote-box">
        <h2 id="text">{this.props.quote}</h2>
        <h3 id="author">{this.props.author}</h3>
      </div>
    );
  }
}

class Buttons extends React.Component {
  render() {
    return (
      <div id="button-box">
        <a id="tweet-quote" href="http://www.twitter.com/intent/tweet" >&nbsp;<i id="twitter-icon" className="fa fa-twitter"></i> Tweet this!&nbsp;&nbsp;</a>
        <br/>
        <button id="new-quote" className="quoteButton" onClick={this.props.handleNewQuote}>New Quote</button>
      </div>
    );
  }
}

ReactDOM.render(
  <QuoteMachine />,
  document.getElementById('root')
);
