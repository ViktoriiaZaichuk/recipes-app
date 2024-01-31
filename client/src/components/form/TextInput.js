const TextInput = ({label, id, name, type, value, placeholder, onChange, error}) => {
    const hasError = error && error.length > 0;

    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
            <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${hasError ? 'border-red-500' : ''}`}
                id={id}
                name={name}
                type={type}
                value={value} 
                placeholder={placeholder}
                onChange={onChange}
            />
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </div>
    );
};

export default TextInput;