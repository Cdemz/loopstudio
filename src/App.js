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
import facebook from './images/icon-facebook.svg';
import ig from './images/icon-instagram.svg';
import pinterest from './images/icon-pinterest.svg';
import twitter from './images/icon-twitter.svg';
import './App.css';
import { SplitText } from '@cyriacbr/react-split-text';


function App() {
  return (
    <div className='body'>
      <div className='top-half' style={{ backgroundImage: `url(${background})` }}  >
        <nav className='header'>
         <img src={logo} className="App-logo" alt="logo" />

          <ul className='nav-meun'>
            <li className='nav-item'>
              <a className='nav-link' href='/'>About</a>
            </li>
            
            <li className='nav-item'>
              <a className='nav-link' href='/'>Career</a>
            </li>
            
            <li className='nav-item'>
              <a className='nav-link' href='/'>Event</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>Product</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>Support</a>
            </li>
            
          </ul>

          <div className='hamburger'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
   
        </nav>  

        <div className='deliver'>
          
        <p>IMMERSIVE<SplitText>EXPERIENCES</SplitText> THAT DELIVER</p>
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
          <div className='ddeep' id='cont'>
            <img src={deep} className="deep" alt="earth logo" />
            <p id='1st'>DEEP EARTH</p>
          </div>

          <div className='dnight'id='cont'>
            <img src={night} className="night" alt="night arcade" />
            <p id='2nd'>NIGHT ARCADE</p>
          </div>

          <div className='dsoccer' id='cont'>
            <img src={soccer} className="soccer" alt="soccer team vr" />
            <p id='3rd'>SOCCER TEAM VR</p>
          </div>

          <div className='dcar' id='cont'>
            <img src={car} className="car" alt="fine ass car" />
            <p id='4th'>THE GRID</p>
          </div>

          <div className='droad' id='cont'>
            <img src={road} className="road" alt="raod" />
            <p id='a1st'>FROM UP ABOVE VR</p>
          </div>

          <div className='dpocket' id='cont'>
            <img src={pocket} className="pocket" alt="pocket boreals" />
            <p id='2nd'>POCKET BOREALIS</p>
          </div>

          <div className='dspace' id='cont'>
            <img src={space} className="space" alt="curious" />
            <p id='3rd'>THE CURIOSITY</p>
          </div>

          <div className='deyes' id='cont'>
            <img src={eyes} className="eyes" alt="space eyes" />
            <p id='4th'>MAKE IT FISHEYE</p>
          </div>
          <button className='b2tn'>SEE ALL</button>  
        </div>
        

      </div>

      <div className='footer'>
        <div className='loop-side'>
          <div className='ore'>
          <img src={logo} className="App-logo" alt="logo" />  
          </div>
        
          
          <div className='ul-a'>
            <ul><a href='/'>About</a></ul>
          <ul><a href='/'>Career</a></ul>
          <ul><a href='/'>Event</a></ul>
          <ul><a href='/'>Product</a></ul>
          <ul><a href='/'>Support</a></ul>
          </div>

        </div>

        <div className='logo-side'>
          <div className='logo-img'>
          <img src={facebook} className="facebook" alt="facebook-logo" />
          <img src={ig} className="ig" alt="instagram-logo" />
          <img src={pinterest} className="pinterest" alt="pinterest-logo" />
          <img src={twitter} className="twitter" alt="twitter-logo" />
          </div>
          <div className='logo-text'>
          <p>© 2021 Loopstudios. All rights reserved.</p>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;
