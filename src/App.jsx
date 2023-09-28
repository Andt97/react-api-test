import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "./components/Table";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const originalUsers = useRef([]);

  useEffect(() => {
    fetch("https://randomuser.me/api?results=25")
      .then(async (res) => await res.json())
      .then((res) => {
        setUsers(res.results);
        originalUsers.current = res.results;
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    console.log(newSearchTerm);
    setSearchTerm(newSearchTerm);
    if (newSearchTerm === "") {

      //setUsers(users);
    } else {
      filterUsers();
    }
  };


  const filterUsers = () => {
    const filtered = originalUsers.current.filter((user) => {
      return user.location.country.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setUsers(filtered);
  };

  return (
    <div>
      <div className="card text-center text-white bg-secondary">
        <header className="card-header  ">
          <h1>Test User Api</h1>

          <div className="d-flex justify-content-center">
            <button className="btn btn-primary btn-sm mx-2">
              Colorear Files
            </button>
            <button className="btn btn-primary btn-sm mx-2">Ordenar</button>
            <button className="btn btn-primary btn-sm mx-2">Resetear</button>
            <div className="col-1">
              <input
                className="form-control form-control-sm"
                placeholder="Filtrar por país"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </header>
      </div>

      <main className="bg-dark vh-1000 text-white">
        <div className="container p-4">
          <Table user={users} />
        </div>
      </main>
    </div>
  );
}

export default App;
