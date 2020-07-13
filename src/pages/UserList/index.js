import React from 'react'
import PropTypes from 'prop-types'

// Components
import TableUserList from './TableUserList'
import FormCreateDebt from './FormCreateDebt'
import TableDebtList from './TableDebtList'

export const UserList = ({
  users,
  userWithDebts,
  boolShowCreateDebt,
  boolShowDebtList,
  onShowUserDetails,
  onToggleModal,
  onGetDebt,
  onCreateDebt,
  onGetDebts,
  onShowDebtList,                                                                                                           
  onShowCreateDebt,
  history
}) => {
  return (
    <section className="d-flex w-100">
      <div className="col-md-6">
        <h3 className="text-center my-5">Users List</h3>
        <TableUserList
          users={users}
          onShowUserDetails={onShowUserDetails}
          history={history}
        />
      </div>
      <div className="col-md-6">
        <div className="d-flex justify-content-around">
          <button className="btn btn-outline-primary my-5" onClick={async () => { await onGetDebts(); onShowDebtList() }}>Listar Dívidas</button>
          <button className="btn btn-outline-success my-5" onClick={() => onShowCreateDebt()}>Nova Dívida</button>
        </div>
        {boolShowCreateDebt &&
          <FormCreateDebt
            users={users}
            onCreateDebt={onCreateDebt}
            onShowCreateDebt={onShowCreateDebt}
          />
        }
        {boolShowDebtList &&
          <TableDebtList
            userWithDebts={userWithDebts}
            onGetDebt={onGetDebt}
            onToggleModal={onToggleModal}
          />}
      </div>
    </section>
  )
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  userWithDebts: PropTypes.array.isRequired,
  boolShowCreateDebt: PropTypes.bool.isRequired,
  boolShowDebtList: PropTypes.bool.isRequired,
  onShowUserDetails: PropTypes.func.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  onGetDebt: PropTypes.func.isRequired,
  onGetDebts: PropTypes.func.isRequired,
  onCreateDebt: PropTypes.func.isRequired,
  onShowCreateDebt: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default UserList
