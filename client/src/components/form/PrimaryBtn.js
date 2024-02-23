const PrimaryBtn = ({text, type}) => {
    return (
        <button 
            type={type}
            className="bg-coral hover:bg-coral text-light text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
        >
            {text}
        </button>
    );
};

export default PrimaryBtn;