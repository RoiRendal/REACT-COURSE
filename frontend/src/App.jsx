import { useState } from "react";
import Header from "./components/Header";
import UserCards from "./components/UserCards";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = {name, email, password};

    setUsers([...users, user]);
    setName("");
    setEmail("");
    setPassword("");
    console.log(users);
  };

  return (
    <>
      < Header name1 = {"Raimund"} name2 = {"Julius"} />

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-2 items-start"
        >
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              className="border-2 "
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div>
            <label>Email: </label>
            <input
              type="text"
              name="email"
              className="border-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div>
            <label>Password: </label>
            <input
              type="text"
              name="password"
              className="border-2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="bg-amber-400">Save</button>
        </form>

      <h1></h1>

      <UserCards users={users}/>
    </>

    
  );  
};

export default App;
