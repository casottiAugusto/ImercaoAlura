import React from 'react';
import Logo from "../../assets/img/sanuflix.png";
import './menu.css';
import { Link} from 'react-router-dom';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu () {
    return (
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="SanuFlix Logo" />
        </Link>

        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo Video
        </Button>
      </nav>
    );
}
export default Menu;