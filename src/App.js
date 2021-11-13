import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="headline">
          <div className="brand" />
          <div className="subtitle">
            Choose Your View,<br />Choose Your Restaurant
          </div>
        </div>
        {['https://emily-winfield-eats.vercel.app',
        'https://chandler-winfield-eats-chandlercoleman.vercel.app',
        'https://winfield-eatss-jcrabs001.vercel.app',
        'https://aaroneats.vercel.app',
        'https://cobeig-winfield-eats-cobeig.vercel.app',
        'https://katie-winfieldeats-kklimkowski.vercel.app',
        'https://samuel-winfieldeats.vercel.app',
        'https://ashley-winfieldeats.vercel.app',
        'https://kaleb-winfield-eats.vercel.app',
        'https://dae-winfield-eats.vercel.app',
        'https://winfield-eats-ten.vercel.app'].map((link, index) => {
          return (
            <a href={link} style={{backgroundImage: `url("images/${index}.png")`}} />
          ); 
        })}
        <div className="credit">
          Sites and reviews by students of Basic Information and Website Design at SCKANS
        </div>
    </div>
  );
}

export default App;
