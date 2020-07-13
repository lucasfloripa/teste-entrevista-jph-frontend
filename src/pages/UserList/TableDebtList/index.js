import React from "react";
import PropTypes from "prop-types";

const TableDebtList = ({
  userWithDebts,
  onGetDebt,
  onToggleModal
}) => {
  return (
    <table className="table table-sm table-bordered table-hover mb-4 w-75 mx-auto text-center">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Usuário</th>
          <th scope="col">Motivo</th>
          <th scope="col">Valor</th>
        </tr>
      </thead>
      <tbody>
        {userWithDebts.map((user, index) => (
          <tr
            style={{cursor: "pointer"}}
            key={index}
            className="cursor-pointer"
            onClick={async () => {
              await onGetDebt(user.debtId)
              onToggleModal()
            }}
          >
            <td>{user.name}</td>
            <td>{user.motivo}</td>
            <td>R${user.valor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TableDebtList.propTypes = {
  userWithDebts: PropTypes.array.isRequired,
  onGetDebt: PropTypes.func.isRequired
};

export default TableDebtList;
