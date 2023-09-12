import React, {useState} from 'react'

export default function TextForm() {
  const handleUpClick=(event) => {
    event.preventDefault(); 
    console.log("UpperCase Clicked " + text );
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLowClick=(event) => {
    event.preventDefault(); 
    console.log("LowerCase Clicked " + text );
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick=(event) => {
    event.preventDefault(); 
    console.log("LowerCase Clicked " + text );
    let newText = "";
    setText(newText)
  }
  const handleOnChange =(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }
  const [text,setText]= useState("Enter the Text");

  return (
    <div className='form'>
      <div className='max-w-7xl mx-auto box-border px-4'>
        <div>
          <p className="text-2xl text-left font-semibold mb-4">Contact Us</p>
          <form>
            <div className="mb-4">
              <textarea id="message" value={text} onChange={handleOnChange} name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" ></textarea>
            </div>
            <div className="text-left">
              <button className="bg-gray-600 text-white px-7 py-2 rounded hover:bg-cyan-600 focus:outline-none focus:bg-cyan-600 " onClick={handleUpClick}>
                Change to Uppercase
              </button>
              <button className="bg-gray-600 text-white px-7 py-2 rounded hover:bg-cyan-600 focus:outline-none focus:bg-cyan-600 ml-3" onClick={handleLowClick}>
                Change to Lowercase
              </button>
              <button className="bg-gray-600 text-white px-7 py-2 rounded hover:bg-cyan-600 focus:outline-none focus:bg-cyan-600 ml-3" onClick={handleClearClick}>
                Clear
              </button>
            </div>
          </form>
        </div>
        <div className='my-7 text-left'>
          <p className='text-2xl font-semibold mb-4'>
            Your Text Summary
          </p>
          <p className='text-l mb-3'>{text.split(" ").length} Words, {text.length} Characters</p>
          <p className='text-l mb-3'>{0.008 * text.split(" ").length} Minutes taken to Read</p>
          <p className='text-xl font-semibold mb-3'>Preview</p>
          <p className='text-m'>{text}</p>
        </div>
          
        </div>
      </div>
  
  )
}
