import React from 'react';
import './App.css';
import Painting from './components/Painting/Painting'
import Header from './components/Header/Header'
function App() {
  return (
    <div>
      <Header/>
      <Painting size="30x20cm" name="Stina och Lisa" sold={true} price="1799kr/st" image="tavla.jpg"/>
      <Painting size="30x50cm" name="Berit och Hjärtrud" price="2399kr" image="tavla2.jpg" />
      <Painting size="25x25cm" name="De tre mittbenorna" price="1200kr/st" image="tavla3.jpg" />
      <Painting size="30x20cm" name="Elvira Blåtira" price="1999kr" image="tavla4.jpg" />
    </div>
    
  );
}

export default App;
