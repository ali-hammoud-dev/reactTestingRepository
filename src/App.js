import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="container">
      <h1>Bootstrap Example</h1>
      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <button className="btn btn-primary">Click me</button>
    </div>
  );
}

export default App;