import logo from './images/logo.svg';
import background from "./images/desktop/image-hero.jpg";
import varman from './images/desktop/image-interactive.jpg'
import './App.css';
import { SplitText } from '@cyriacbr/react-split-text';



function App() {
  return (
    <div className='body'>
      <div className='top-half' style={{ backgroundImage: `url(${background})` }}  >
        <div className='header'>
         <img src={logo} className="App-logo" alt="logo" />
          <ul><a href='/'>About</a></ul>
          <ul><a href='/'>Career</a></ul>
          <ul><a href='/'>Event</a></ul>
          <ul><a href='/'>Product</a></ul>
          <ul><a href='/'>Support</a></ul>
        </div>  

        <div className='deliver'>
          
        <p>IMMERSIVE<SplitText> EXPERIENCES</SplitText> THAT DELIVER</p>
        </div>
      </div>
      <div className='rest'>
       <img src={varman} className="varman" alt="logo" />
       <div className='t3xt'>
         <h1>THE LEADER IN INTERRACTIVE VR</h1>
         <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>
      </div>
    
    </div>
  );
}

export default App;
