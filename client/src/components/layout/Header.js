import { Link, NavLink } from "react-router-dom";
import LinkBtn from "../form/LinkBtn";

const Header = () => {
    return (
        <header className="">
            <nav className="flex-col">
                <div className="p-3 flex justify-between bg-coral">
                    <NavLink to="/" className="p-1 font-display text-4xl">Recipes</NavLink>
                    <div className="p-1">
                        <LinkBtn to="/login" text="Log in" />
                    </div>
                </div>
                
                <div className=" p-2 flex items-center justify-center bg-white">
                    <ul className="flex">
                        <li className="py-1 px-2 uppercase font-bold"><Link to="/">Dinners</Link></li>
                        <li className="py-1 px-2 uppercase font-bold"><Link to="/">Meals</Link></li>
                        <li className="py-1 px-2 uppercase font-bold"><Link to="/">Desserts</Link></li>
                        <li className="py-1 px-2 uppercase font-bold"><Link to="/">Drinks</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
