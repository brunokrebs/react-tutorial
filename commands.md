scaffold app:

```bash
npx create-react-app react-tutorial
```

remove useless files:

- `logo.svg`
- `App.test.js`

replace `App.js` contents with:

```jsx
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Starting Up with React</p>
      </div>
    );
  }
}

export default App;
```

start the application:

```bash
npm start
```

go to [`http://localhost:3000`](http://localhost:3000)

## Developing the Backend

```bash
mkdir backend
cd backend
npm init -y
npm i express body-parser cors morgan helmet

mkdir src
touch src/index.js
```

## Routing and basic stuff

```bash
npm i react-router react-router-dom axios
```
