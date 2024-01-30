const TextInput = ({label, id, name, type, value, placeholder, onChange}) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={id}
                name={name}
                type={type}
                value={value} 
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};

export default TextInput;