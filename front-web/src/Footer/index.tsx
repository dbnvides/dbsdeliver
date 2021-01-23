import './styles.css';
import { ReactComponent as InstagramIco } from './instagram.svg';
import { ReactComponent as YoutubeIco } from './youtube.svg';
import { ReactComponent as LinkedinIco } from './linkedin.svg';

function Footer(){
    return(
        <footer className="main-footer">
          App desenvolvido no evento da 2ª <strong>Semana DevSuperior</strong>
            <div className="footer-icons">
                <a href="https://www.youtube.com.br/c/DevSuperior" target="_new">
                <YoutubeIco />
                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                <LinkedinIco />
                </a>
                <a href="https://www.instagram.com/devsuperior.ig/">
                <InstagramIco />
                </a>
            </div>
        </footer>
    )
}

export default Footer;