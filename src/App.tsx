import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Button } from 'antd-mobile';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="test"></div>
      <Button color={'primary'}>button</Button>
    </div>
  );
}

export default App;
