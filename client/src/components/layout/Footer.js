import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="p-2 flex flex-col border-t-2 divide-dark">
            <div className="flex justify-between">
                <NavLink to="/" className="p-1 font-display text-4xl">Recipes</NavLink>
            </div>
            <div className="px-1">
                <p>© 2024 Recipes</p>
            </div>
        </footer>
    );
};

export default Footer;
