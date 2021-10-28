import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("UppreCase was clicked: " + text); // +text will take input from the textfield.
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On clicked");
    setText(event.target.value); // This line make us able to take input in textField.
  };
  const [text, setText] = useState("Enter your text here");
  // text = "new text"; // Wrong way to change the state
  // setText("new twxt"); // Correct way to change the state
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}> Covert to Uppercase </button>
    </div>
  );
}
