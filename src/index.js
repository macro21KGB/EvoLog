const defaultOptions = {
  backgroundColor: '#2a2a2a',
  bandColor: '#002054',
  textColor: '#fff',
  duration: 1000,
}


/**
 * 
 * @param {String} message 
 * @param {{backgroundColor: String?, bandColor: String?, textColor: String?, duration: number}} options 
 */
const evoLog = (message, options) => {

  let updatedOptions = {};

  if (options !== undefined) {
    updatedOptions.backgroundColor = options.backgroundColor || defaultOptions.backgroundColor;
    updatedOptions.bandColor = options.bandColor || defaultOptions.bandColor;
    updatedOptions.textColor = options.textColor || defaultOptions.textColor;
    updatedOptions.duration = options.duration || defaultOptions.duration;
  }
  else {
    updatedOptions = defaultOptions;
  }

  //Default to console.log
  console.log(message);
  console.log(updatedOptions);
  //Print the console.log also to the browser window
  showConsoleLogPopoup(message, updatedOptions);
};



/**
 * 
 * @param {String} message 
 * @param {{backgroundColor: String, bandColor: String, textColor: String, duration: number}} options 
 */
const showConsoleLogPopoup = (message, options) => {


  const containerStyle = `background-color: ${options.backgroundColor};padding: 1rem; margin:0.3rem; border-radius: 6px; color: ${options.textColor}; font-family: sans; width: max-content; float: right; position: relative`;
  const bandStyle = `position:absolute; height: 100%; width:4px; background-color:${options.bandColor}; left:0; top:0; border-radius: 6px 0 0 6px`;

  //Create a new div
  let newDiv = document.createElement('div');
  let bandDiv = document.createElement('div');

  //Set the style
  newDiv.style = containerStyle;
  newDiv.innerHTML = message;

  //Add the band and stylize it
  bandDiv.style = bandStyle;
  newDiv.appendChild(bandDiv);

  //Append to the body
  document.body.appendChild(newDiv);

  //Remove after 1 second
  setTimeout(() => {
    newDiv.remove();
  }, options.duration);
};



export default evoLog;