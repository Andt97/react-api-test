export const TableRow = ({ user }) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
       <img src= {user.picture.thumbnail}   alt="" />
      </td>
      <td>{user.name.first}</td>
      <td>{user.name.last}</td>
      <td>{user.location.country}</td>
      <td>{user.email}</td>
      <td><button type="submit" className="btn btn-danger btn-sm">Eliminar</button></td>

    </tr>
  );
};
