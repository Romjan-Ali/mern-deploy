import React, {useEffect, useState} from 'react';

const App = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('http://localhost:4000')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div className='App'>
      <h1>{message}</h1>
    </div>
  );
};

export default App;