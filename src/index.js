const evoLog = (message) => {

  //Default to console.log
  console.log(message);

  //Print to the to the browser
  showConsoleLogPopoup(message);
};

const containerStyle = "background-color: grey;padding: 1rem; border-radius: 6px; color: white; font-family: sans; width: max-content; float: right; position: relative";

const bandStyle = "position:absolute; height: 100%; width:4px; background-color:red; left:0; top:0; border-radius: 6px 0 0 6px";


const showConsoleLogPopoup = (message) => {
  //Create a new div
  let newDiv = document.createElement('div');
  let bandDiv = document.createElement('div');

  //Set the style
  newDiv.style = containerStyle;
  newDiv.innerHTML = message;

  //Add the band
  bandDiv.style = bandStyle;
  newDiv.appendChild(bandDiv);

  //Append to the body
  document.body.appendChild(newDiv);

  //Fade out
  setTimeout(() => {
    newDiv.classList.add('fade-out');
  }, 1000);

  //Remove after 1 second
  setTimeout(() => {
    newDiv.remove();
  }, 1000);
};

/*
<div style="background-color: grey;padding: 1rem; border-radius: 6px; color: white; font-family: sans; width: max-content; float: right; position: relative">
  <div style="position:absolute; height: 100%; width:4px; background-color:red; left:0; top:0; border-radius: 6px 0 0 6px"></div>
  Prova
</div>
*/
