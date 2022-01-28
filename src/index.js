
/**
 * 
 * @param {String} message 
 * @param {{backgroundColor: String, bandColor: String, textColor: String, duration: number}} options 
 */
const evoLog = (message, options) => {

  options = options || { backgroundColor: '#000', bandColor: '#ff0000', textColor: '#fff', duration: 5000 };

  //Default to console.log
  console.log(message);

  //Print the console.log also to the browser
  showConsoleLogPopoup(message, options);
};


/**
 * 
 * @param {String} message 
 * @param {{backgroundColor: String, bandColor: String, textColor: String, duration: number}} options 
 */
const showConsoleLogPopoup = (message, options) => {

  const containerStyle = `background-color: ${options.backgroundColor};padding: 1rem; border-radius: 6px; color: ${options.textColor}; font-family: sans; width: max-content; float: right; position: relative`;
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