import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <div data-testid="layout-test-1">
      <MainNavigation />
      <main data-testid="layout-test-2" className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
