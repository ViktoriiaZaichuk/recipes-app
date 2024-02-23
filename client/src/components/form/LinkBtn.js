import { NavLink } from 'react-router-dom';

const LinkBtn = ({ text, to, type }) => {
    return (
        <NavLink to={to}>
            <button 
                type={type}
                className="bg-light hover:bg-light text-dark font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            >
                {text}
            </button>
        </NavLink>
    );
};

export default LinkBtn;