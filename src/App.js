import React from 'react'
import Navbar from './common/Navbar'
import Whoweare from './components/Whoweare';
import Map from './components/Map';
import Whatishemophelia from './components/Whatishemophelia';
import Howtojoin from './components/Howtojoin';
import Footer from './common/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Whoweare />
      <Map />
      <Whatishemophelia />
      <Howtojoin />
      <Footer />
    </>
  );
}

export default App;
