const PrimaryBtn = ({text, type}) => {
    return (
        <button 
            type={type}
            className="bg-light-500 hover:bg-light-700 text-dark font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
        >
            {text}
        </button>
    );
};

export default PrimaryBtn;