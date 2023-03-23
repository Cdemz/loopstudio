import logo from './images/logo.svg';
import background from "./images/desktop/image-hero.jpg";
import varman from './images/desktop/image-interactive.jpg'
import deep from './images/desktop/image-deep-earth.jpg';
import night from './images/desktop/image-night-arcade.jpg';
import soccer from './images/desktop/image-soccer-team.jpg';
import car from './images/desktop/image-grid.jpg';
import road from './images/desktop/image-from-above.jpg';
import pocket from './images/desktop/image-pocket-borealis.jpg';
import space from './images/desktop/image-curiosity.jpg';
import eyes from './images/desktop/image-fisheye.jpg';
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

      <div className='mid-section'>
        <div className='mid-text'>
        <h1>OUR CREATIONS</h1>
        <button className='btn'>SEE ALL</button>   
        </div>
        
        <div className='mid-main'>
          <div className='ddeep'>
            <img src={deep} className="deep" alt="earth logo" />
          </div>

          <div className='dnight'>
            <img src={night} className="night" alt="night arcade" />
          </div>

          <div className='dsoccer'>
            <img src={soccer} className="soccer" alt="soccer team vr" />
          </div>

          <div className='dcar'>
            <img src={car} className="car" alt="fine ass car" />
          </div>

          <div className='droad'>
            <img src={road} className="road" alt="raod" />
          </div>

          <div className='dpocket'>
            <img src={pocket} className="pocket" alt="pocket boreals" />
          </div>

          <div className='dspace'>
            <img src={space} className="space" alt="curious" />
          </div>

          <div className='deyes'>
            <img src={eyes} className="eyes" alt="space eyes" />
          </div>
        
        </div>
        

      </div>

      <div className='footer'>
        <div className='loop-side'></div>
        <div className='logo-side'></div>
      </div>
    
    </div>
  );
}

export default App;
