import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

const UserDebtList = ({
  debts,
  onDeleteDebt,
  onToggleModal,
  onGetDebt
}) => {
  
  const debtsTotalValue = debts.reduce((total, debt) => {
    return total + debt.valor
  }, 0)

  return (
    <>
      <div className="d-flex justify-content-around text-center mt-5">
        <h3>Dívidas</h3>
        <h3>Total: R$<span className="text-danger">{debtsTotalValue}</span></h3>
      </div>
      <table className="table table-bordered table-hover m-5 w-75 mx-auto text-center">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Motivo</th>
            <th scope="col">Valor</th>
            <th scope="col">Criado</th>
            <th scope="col">*</th>
          </tr>
        </thead>
        <tbody>
          {debts.map((debt) => (
            <tr style={{cursor: "pointer"}} key={debt._id}>
              <td>{debt.motivo}</td>
              <td>R${debt.valor}</td>
              <td><Moment format="DD/MM/YYYY">{debt.createdAt}</Moment></td>
              <td>
                <Icon icon="edit" className="mx-1" color="green"
                  onClick={async () => { await onGetDebt(debt._id); onToggleModal() }} />
                <Icon icon="trash" className="mx-1" color="red"
                  onClick={() => onDeleteDebt(debt._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

UserDebtList.propTypes = {
  debts: PropTypes.array.isRequired,
  onDeleteDebt: PropTypes.func.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  onGetDebt: PropTypes.func.isRequired,
}

export default UserDebtList