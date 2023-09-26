import React from "react";
import { TableRow } from "./TableRow";

export const Table = ({ user }) => {
  const TableRowUser = () => {
    return user.map((user) => (
      <TableRow user={user} key={user.email} />
      
      
    ));
  };

  return (
    <div>
      <table className="table table-striped table-dark ">
        <thead className="table-primary">
          <tr>
            <th>Photo</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Location</th>
            <th>Email</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody> {TableRowUser()}</tbody>
      </table>
    </div>
  );
};
