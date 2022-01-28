# EvoLog

This module works like a normal console.log, but it also puts on the screen the console.log in a notification style popup

### Customization
the popup can be customized with an option object like this one
```js
import evoLog from 'evolog';

// this are the default value
evoLog("Hello, World", {
  backgroundColor: '#2a2a2a',
  bandColor: 'red', // modified from '#002054'
  textColor: '#fff',
  duration: 1000,
});

```

### Result
![alt text](./images/img.png)
