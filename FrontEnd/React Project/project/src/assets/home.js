import React from 'react'
import Carosel from './components/Home/carosel'
import Card1 from './components/Home/card1';
import About from './components/Home/about'
import Card2  from './components/Home/card2';
import Card3 from './components/Home/card3';
import Card4 from './components/Home/card4';
import Card5 from './components/Home/card5';
export default function home() {
  return (
    <div>
      <Carosel />
      <Card1 />
      <Card2/>
      <Card3/>
      <Card4/>
      <Card5/>
      <About />
    </div>
  )
}