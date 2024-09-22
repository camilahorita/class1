import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?q=60&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className={styles.profile}>
          <Avatar src="https://github.com/camilahorita.png"/>
         <strong>Camila Horita</strong>
         <span>Web developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine />
          Editar perfil 
        </a>
      </footer>
    </aside>
  );
}