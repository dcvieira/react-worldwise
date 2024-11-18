import Logo from "./Logo";
import styles from "./SideBar.module.css";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; 2021 <strong>WorldWise</strong>
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
