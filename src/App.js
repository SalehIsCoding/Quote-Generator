import { useEffect, useState } from 'react';
import './App.css';
import quotes from './quotes.json';
let array = quotes.quotes;

function App() {

  let Colors = ["#9B59B6","#3498DB","#2ECC71","#1ABC9C","#F1C40F","#F1C40F","#95A5A6","#C0392B","#BDC3C7","#F39C12","#303F9F","#E91E63","#76FF03"]

  let randomProperty = (obj) => {
    let keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
  };
  
  const [quote,setQuote] = useState({});
  const [color,setColor] = useState("");
  useEffect(() => {
     setQuote(randomProperty(array));
     setColor(randomProperty(Colors));
  },[]);
  
  const newQuote = () => {
    setQuote(randomProperty(array));
    setColor(randomProperty(Colors));
  }
  return (
    <div id='main-wrapper' style={{'backgroundColor':color}}>
      <div id='quote-box'>
        <div id="text" style={{'color':color}}>"{quote.quote}"</div>
        <div id="author" style={{'color':color}}>{quote.author}</div>
        <input type={'button'} id="new-quote" onClick={newQuote} value={'New Quote'} style={{'backgroundColor':color}}/>
        <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`} id="tweet-quote" target={'_blank'}>Tweet</a>
      </div>
    </div>
  );
}

export default App;
