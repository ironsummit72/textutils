import "../textutils.css";
import "../App.css";
import React, { useState } from "react";

export default function Capatalize(props) {
  let numberOfWords = 0;
  let numberOfCharacters = 0;

  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    document.getElementById('textar').style.backgroundColor='#07224e'
    document.getElementById('textar').style.color='#ffff'
    setText(event.target.value);
  };
  const handleUpperCase = () => {
    let newval = text.toUpperCase();

    setText(newval);
  };
  const handleLowerCase = () => {
    let newval = text.toLowerCase();
    setText(newval);
  };
  const handleClearAll = () => {
   
    setText("");
    
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const firstCapital=()=>{
    let everyWord=text.split(" ");
    for(let i=0;i<everyWord.length;i++)
    {
        everyWord[i]=everyWord[i][0].toUpperCase()+everyWord[i].substring(1);
        


    }
    setText(everyWord.join(" "))
  

  }

  numberOfCharacters = text.length;
  if (text.length === 0) {
    numberOfWords = 0;
  } else {
    numberOfWords = text.split(" ").length;
  }
  return (
    <>
      <div className="container">
        <textarea
          className="form-control"
          id="textar"
          placeholder="Enter text to convert to capital letter "
          onChange={handleOnChange}
          value={text}
        ></textarea>
        <button onClick={handleUpperCase} className="btn btn-primary">
          Convert to UpperCase
        </button>
        <button onClick={handleLowerCase} className="btn btn-primary">
          Convert to LowerCase
        </button>
        <button onClick={handleClearAll} className="btn btn-danger">
          Clear All
        </button>
        <button onClick={handleCopy} className="btn btn-success">
          Copy All
        </button>
        <button onClick={firstCapital} className="btn btn-success">
          Make First Letter Capital of Every Word
        </button>

      </div>
      <div className="container my-3">
        <h1>Your text summaryy</h1>
        <p>
          {numberOfWords} words and {numberOfCharacters} characters
        </p>
        <p>this will take {numberOfWords * 0.008} minuites to read aprox</p>
      </div>
      <div className="container my-3">
        <h1>Preview</h1>
        <p>{text.length===0?"Enter something in the textarea above to preview":text}</p>
      </div>
    </>
  );
}
