import React from "react";
import PropTypes from "prop-types";

const TableUserList = ({
  users,
  onShowUserDetails,
  history
}) => {
  return (
    <table className="table table-bordered table-hover mb-4 w-75 mx-auto text-center">
      <thead className="thead-dark">
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr
            style={{ cursor: "pointer" }}
            key={user.id}
            className="cursor-pointer"
            onClick={() => {
              onShowUserDetails(user.id, history);
            }}
          >
            <td>{user.id}</td>
            <td>{user.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TableUserList.propTypes = {
  users: PropTypes.array.isRequired,
  onShowUserDetails: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default TableUserList;
