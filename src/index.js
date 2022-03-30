



class EvoLog {

  message = "";
  options = {};
  parentDiv;

  constructor() {

    const defaultOptions = {
      backgroundColor: '#2a2a2a',
      bandColor: '#002064',
      textColor: '#fff',
      duration: 1000,
    }

    this.options = Object.assign({}, defaultOptions);

    this.parentDiv = document.createElement('div');

    const parentDivStyle = `
      display: flex;
      position: fixed;
      top: 0;
      right: 0;
      flex-direction: column;
      gap: 0.3rem;
    `;

    this.parentDiv.style = parentDivStyle;
    document.body.appendChild(this.parentDiv);

  }


  /**
   * 
   * @param {String} message 
   * @param {{backgroundColor: String, bandColor: String, textColor: String, duration: number}} options 
   */
  showConsoleLogPopoup = (message, options) => {
    const containerStyle = `background-color: ${options.backgroundColor};padding: 1rem; margin:0.3rem; border-radius: 6px; color: ${options.textColor}; font-family: sans; max-width:40vw; position: relative;`;
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
    this.parentDiv.appendChild(newDiv);

    //Remove after 1 second
    setTimeout(() => {
      newDiv.remove();
    }, options.duration);
  };


  log(message, _options) {
    this.message = message;
    let updatedOptions = {};
    updatedOptions = Object.assign(this.options, _options);

    console.log(this.message);
    this.showConsoleLogPopoup(this.message, updatedOptions);

    this.message = "";
  }
}




export default EvoLog;