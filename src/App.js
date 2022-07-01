import React from 'react';
import Triple from './Components/2ndLast';
import First from "./Components/First";
import Fourth from './Components/Fourth';
import Second from './Components/Second';
import Third from './Components/Third';
import Youtube from './Components/Yt';
import Footer from './Components/Footer';
import Zero from './Components/Zeroth';


function App() {
  return <div>
        <First />
        <p className='Graymargin'></p>
        <Zero /> 
        <p className='/Graymargin'></p>
        <Second /> 
        <p className='Graymargin'></p>
        <Third /> 
        <p className='Graymargin'></p>
        <Fourth />
        <p className='Graymargin'></p>
        <Youtube /> 
        <p className='Graymargin'></p>
        <Triple /> 
        <p className='Graymargin'></p>
        <Footer /> 
    </div>
}

export default App;
