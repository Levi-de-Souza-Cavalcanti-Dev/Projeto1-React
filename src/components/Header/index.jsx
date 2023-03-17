import styles from './header.module.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <>
            <div className={styles.ContainerNav}>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Contato">Contato</Link></li>
                        <li><Link to="/Projetos">Projetos</Link></li>
                    </ul>
                </nav>
            </div>    
        </>
    )
}

export default Header;