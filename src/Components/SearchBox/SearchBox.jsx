

const SearchBox = () => {
    return (
        <div className="flex justify-center bg-indigo-900 items-center my-8">
            <input 
                type="text" 
                placeholder="Search..." 
                className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
           
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md">
                Search
            </button>
            <p>Search your Donation Package </p>
        </div>

    );
};

export default SearchBox;
