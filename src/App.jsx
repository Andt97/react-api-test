import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "./components/Table";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api?results=25")
      .then(async (res) => await res.json())
      .then((res) => {
        setUsers(res.results);
        // originalUsers.current = res.results;
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <div className="card text-center text-white bg-secondary">
        <header className="card-header  ">
          <h1>Test User Api</h1>

          <div className="d-flex justify-content-center">
            <button className="btn btn-primary btn-sm mx-2">Colorear Files</button>
            <button className="btn btn-primary btn-sm mx-2">Ordenar</button>
            <button className="btn btn-primary btn-sm mx-2">Resetear</button>
            <div className="col-1">
              <input
                className="form-control form-control-sm"
                placeholder="Filtrar por país"
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
