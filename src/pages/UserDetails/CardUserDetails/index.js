import React from 'react'
import PropTypes from 'prop-types'

const CardUserDetails = ({ user }) => {
  return (
    <div className="card p-5 m-5">
      <div className="card-body">
        <h3 className="card-title">{user.name}</h3>
        <div className="card-text">
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Endereço:</strong> {user.address.street}, {user.address.suite}. {user.address.city}. ZIP: {user.address.zipcode}</p>
          <p><strong>Telefone:</strong> {user.phone}</p>
          <p><strong>WebSite:</strong> {user.website}</p>
          <p><strong>Compania:</strong> {user.company.name}</p>
        </div>
      </div>
    </div>
  )
}

CardUserDetails.propTypes = {
  user: PropTypes.object.isRequired
}

export default CardUserDetails