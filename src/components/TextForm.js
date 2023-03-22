import React, {useState} from 'react'//useState is a hooks  bina class bnaye class ko use karna


export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppeercase was clicked"+ text);//+text krne se jobi textarea me likhengey vo console me aajayega not necessary just for learning
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{
      //console.log("Uppeercase was clicked"+ text);//+text krne se jobi textarea me likhengey vo console me aajayega not necessary just for learning
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase!", "success");
  }

    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);//iissi ki wajah se text area me kuch likha jayega varna nahi (eventhandler hai)
    }

    const handleClear = ()=>{
      let newText = "";
      setText(newText);
      props.showAlert("All texts is cleared!", "success");
  }

    const handleCopy = ()=> {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied successfully", "success");
  }
    const handleExtraSpaces = ()=> {
      let newText = text.split(/[  ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed", "success");
  }

    // State
    //const [text, setText] = useState('Enter text here');//jaaha bi text likhengey vaha eth aajayega or updTE K lie settext function bnana hoga[ setText("jdksbhj") aise ]
    const [text, setText] = useState('Enter text here');
    //text = "new text state";//but wrong way
    //setText("Enter text here2");//right way
  return (
    <>
    <div className='container' style = {{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
        <div className="mb-3">
        {<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', 
          color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea> /* //onchange ki waja se he textarea me likh pare hai ek culy brasis se js or 2 se object*/}
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to upper case</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to lower case</button>
        <button className='btn btn-primary mx-1' onClick={handleClear}>Clear</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove extra spaces</button>

    </div>
    <div className="container my-3" style = {{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter something in the tezt box above to preview it"}</p>
    </div>
    </>
  )
}
