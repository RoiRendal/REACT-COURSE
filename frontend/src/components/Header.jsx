const Header = ({name1, name2}) => {
    return (
        <>
            <div className="container mx-auto p-5 bg-gray-800 text-white">
                <h1 className="text-2xl font-bold flex justify-end mr-10">{name1} & {name2}</h1>
            </div>
        </>
    );
};

export default Header;
