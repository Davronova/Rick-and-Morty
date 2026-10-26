import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import {useTheme} from "../contexts/ThemeContext.jsx";

function Layout() {
    const {theme} = useTheme();

        return (
            <div className={theme}>
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
        );

}



export default Layout;