import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

// Utils
import checkUser from '../../utils/checkUser'

// Componets
import Navbar from './Navbar'
import ModalUpdateDebt from './ModalUpdateDebt'
import ModalCheckDebt from './ModalCheckDebt'

// Pages
import UserList from '../UserList'
import UserDetails from '../UserDetails'

// Actions
import { getUser, getUsers } from '../../store/actions/userActions'
import { getDebt, getDebts, createDebt, updateDebt, deleteDebt } from '../../store/actions/debtActions'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      showModalCheckDebt: false,
      showCreateDebt: false,
      showDebtList: false
    }
  }

  componentDidMount() {
    this.props.getUsers()
    this.props.getDebts()
  }

  handleToggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  handleToggleModalCheckDebt = () => {
    this.setState({ showModalCheckDebt: !this.state.showModalCheckDebt })
  }

  handleShowCreateDebt = () => {
    this.setState({ showCreateDebt: !this.state.showCreateDebt, showDebtList: false })
  }

  handleShowDebtList = () => {
    this.setState({ showDebtList: !this.state.showDebtList, showCreateDebt: false })
  }

  handleGetDebts = async (userId) => {
    await this.props.getDebts(userId)
  }

  handleGetDebt = async (debtId) => {
    await this.props.getDebt(debtId)
  }

  handleCreateDebt = async (values) => {
    console.log(values)
    const { user, motivo, valor } = values
    const newDebt = { motivo, valor }
    await this.props.createDebt(user, newDebt)
  }

  handleDeleteDebt = async (debtId) => {
    if (window.confirm("Confirma exclusão de dívida?")) {
      await this.props.deleteDebt(debtId)
    }
  }

  handleUpdateDebt = async (debtId, updatedDebt) => {
    await this.props.updateDebt(debtId, updatedDebt)
  }

  handleShowUserDetails = async (userId, history) => {
    const { getUser, getDebts } = this.props;
    await getUser(userId);
    await getDebts(userId);
    history.push(`/userdetails/${userId}`);
  };

  render() {
    const { user, users, debts, debt } = this.props
    const { showModal, showCreateDebt, showDebtList, showModalCheckDebt } = this.state

    const userWithDebts = debts.map(debt => {
      return {
        userId: users.find(user => user.id == debt.userId)?.id,
        debtId: debt._id,
        name: users.find(user => user.id == debt.userId)?.name,
        motivo: debt.motivo,
        valor: debt.valor
      }
    })

    const checkDebt = userWithDebts.find(userDebt => userDebt.debtId === debt._id)

    return (
      <div className="container-fluid p-0">
        <Navbar />
        <main style={{ flexGrow: 1 }}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/userlist"
                component={(routeProps) =>
                  <UserList
                    users={users}
                    userWithDebts={userWithDebts}
                    boolShowCreateDebt={showCreateDebt}
                    boolShowDebtList={showDebtList}
                    onToggleModal={this.handleToggleModalCheckDebt}
                    onGetDebt={this.handleGetDebt}
                    onGetDebts={this.handleGetDebts}
                    onShowCreateDebt={this.handleShowCreateDebt}
                    onShowDebtList={this.handleShowDebtList}
                    onShowUserDetails={this.handleShowUserDetails}
                    onCreateDebt={this.handleCreateDebt}
                    {...routeProps} />}
              />
              <Route exact path="/userdetails/:userId"
                component={checkUser((routeProps) =>
                  <UserDetails
                    user={user}
                    debts={debts}
                    onGetDebt={this.handleGetDebt}
                    onGetDebts={this.handleGetDebts}
                    onDeleteDebt={this.handleDeleteDebt}
                    onToggleModal={this.handleToggleModal}
                    {...routeProps} />)}
              />
            </Switch>
          </BrowserRouter>
          <ModalUpdateDebt
            debt={debt}
            showModal={showModal}
            onToggleModal={this.handleToggleModal}
            onUpdateDebt={this.handleUpdateDebt}
            onShowUserDetails={this.handleShowUserDetails}
          />
          <ModalCheckDebt
            showModalCheckDebt={showModalCheckDebt}
            onToggleModal={this.handleToggleModalCheckDebt}
            checkDebt={checkDebt}
          />
        </main>
      </div>
    )
  }
}

Main.propTypes = {
  users: PropTypes.array,
  debts: PropTypes.array,
  user: PropTypes.object,
  debt: PropTypes.object,
  getUsers: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  getDebts: PropTypes.func.isRequired,
  getDebt: PropTypes.func.isRequired,
  createDebt: PropTypes.func.isRequired,
  updateDebt: PropTypes.func.isRequired,
  deleteDebt: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  users: state.userReducer.users,
  user: state.userReducer.user,
  debts: state.debtReducer.debts,
  debt: state.debtReducer.debt
})

export default connect(
  mapStateToProps,
  { getUsers, getUser, getDebts, createDebt, deleteDebt, updateDebt, getDebt }
)(Main)