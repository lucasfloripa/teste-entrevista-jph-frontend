import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Components
import CardUserDetails from './CardUserDetails'
import UserDebtList from './UserDebtList'

const UserDetails = ({
  user,
  debts,
  onDeleteDebt,
  onGetDebts,
  onToggleModal,
  onGetDebt
}) => {
  return (
    <section className="d-flex w-100">
      <div className="col-md-6 d-flex flex-column p-0">
        <CardUserDetails user={user} />
        <Link
          to="/userlist"
          className="btn btn-voltar btn-primary btn block mx-auto mt-5 w-50"
          onClick={() => onGetDebts()}
        >
          Voltar
        </Link>
      </div>
      <div className="col-md-6">
        <UserDebtList
          debts={debts}
          onDeleteDebt={onDeleteDebt}
          onToggleModal={onToggleModal}
          onGetDebt={onGetDebt}
        />
      </div>
    </section>
  );
};

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
  debts: PropTypes.array.isRequired,
  onGetDebts: PropTypes.func.isRequired,
  onGetDebt: PropTypes.func.isRequired,
  onDeleteDebt: PropTypes.func.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  onGetDebt: PropTypes.func.isRequired,
};

export default UserDetails;
