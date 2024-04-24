
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link to="/" class="navbar-brand">Utility Apps</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className={styles.navitem}>
                            <Link to="/todo" class="nav-link active" aria-current="page">To Do</Link>
                        </li>
                        <li className={styles.navitem}>
                            <Link to="/notes" class="nav-link active" aria-current="page">Note</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
