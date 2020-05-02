import React from 'react';
import './App.css';
import Painting from './components/Painting/Painting'
import Header from './components/Header/Header'
function App() {
  return (
    <div>
      <Header/>
      <Painting name="women" price="2000kr" image="tavla.jpg"/>
      <Painting name="women" price="2000kr" image="tavla2.jpg" />
      <Painting name="women" price="2000kr" image="tavla3.jpg" />
      <Painting name="women" price="2000kr" image="tavla4.jpg" />
    </div>
    
  );
}

export default App;
