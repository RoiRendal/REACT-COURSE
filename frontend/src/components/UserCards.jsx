const UserCards = ({users}) => {
    return (
        <>
        <section className="bg-emerald-600 w-1">
            {users.map((user, index) => (
                <div key={index} className="border-2 m-2 p-2 border-indigo-500 border-dashed">
                    <h2>{user.name}</h2>
                    <h2>{user.email}</h2>
                    <h2>{user.password}</h2>
                </div>
            ))}
        </section>
        </>
    );
};

export default UserCards;
