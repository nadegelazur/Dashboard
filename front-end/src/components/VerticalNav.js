import '../styles/VerticalNav.css'
import Meditation from '../assets/yoga.png';
import Natation from '../assets/water.png';
import Cyclisme from '../assets/velo.png';
import Musculation from '../assets/poids.png';

const VerticalNav = () => {

    return (
      <div className="vernav-container">
        <nav className="bloc-nav">
          <ul className="bloc-ul">
            <div className='block-list'>
              <img className='bloc-img' src={Meditation} />
            </div>
            <div className='block-list'>
              <img className='bloc-img' src={Natation} />
            </div>
            <div className='block-list'>
              <img className='bloc-img' src={Cyclisme} />
            </div>
            <div className='block-list'>
            <img className='bloc-img' src={Musculation} />
            </div>
          </ul>
        </nav>
        <div className="bloc-copyright">
          <p className="copyright">
            Copyright, SportSee 2020
          </p>
        </div>
      </div>
    );
  };
  
  export default VerticalNav;