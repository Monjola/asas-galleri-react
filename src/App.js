import React from 'react';
import './App.css';
import Painting from './components/Painting/Painting'
import Header from './components/Header/Header'
function App() {
  return (
    <div>
      <Header/>
      <Painting size="38x45cm" name="Knölis och Bölis" price="1800kr/st" image="tavla.jpg"/>
      <Painting size="70x50cm" name="L & L Näslund" price="2100kr" image="tavla2.jpg" />
      <Painting size="54x44cm" name="Grynet Fjäderbrynet" price="2000kr" image="tavla-sophie.jpg" />
      <Painting size="44x44cm" name="Orangetant" sold={true} price="1500kr" image="tavla-orange.jpg" />
      <Painting size="54x44cm" name="Mira Mittbena" sold={true} price="1800kr" image="tavla-mittbenan.jpg" />
      <Painting size="54x44cm" name="Hilton Tilton" sold={true} price="1600kr" image="tavla-sne.jpg" />
      <Painting size="38x45cm" name="Elvira Blåtira" sold={true} price="1500kr" image="tavla4.jpg" />
    </div>
    
  );
}

export default App;
