import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import NumberFormat from 'react-number-format'
import * as yup from "yup";

const FormCreateDebt = ({
  users,
  onCreateDebt,
  onShowCreateDebt
}) => {
  return (
    <Formik
      initialValues={{
        user: null, motivo: "", valor: 0
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onCreateDebt(values)
      }}
    >
      <FormikForm className="w-50 mx-auto">
        <div className="form-group">
          <label htmlFor="user">Usuários</label>
          <Field as="select" name="user" className="form-control" value={undefined}>
            <option value="default"></option>
            {users.map(user =>
              <option key={user.id} value={user.id}>{user.name}</option>
            )}
          </Field>
          <ErrorMessage
            name="user"
            render={(message) => (
              <small className="text-danger font-weight-bold mt-5">
                {message}
              </small>
            )}
          />
        </div>
        <div className="form-group">
          <label htmlFor="motivo">Motivo</label>
          <Field name="motivo" className="form-control" />
          <ErrorMessage
            name="motivo"
            render={(message) => (
              <small className="text-danger font-weight-bold mt-5">
                {message}
              </small>
            )}
          />
        </div>
        <div className="form-group">
          <label htmlFor="valor">Valor</label>
          <Field name="valor" className="form-control" />
          <ErrorMessage
            name="valor"
            render={(message) => (
              <small className="text-danger font-weight-bold mt-5">
                {message}
              </small>
            )}
          />
        </div>
        <div className="d-flex justify-content-around">
          <button
            type="submit"
            className="btn btn-outline-success mr-3"
          >
            Criar
          </button>
          <button
            type="button"
            className="btn btn-outline-danger mr-3"
            onClick={() => onShowCreateDebt()}
          >
            Cancelar
          </button>
        </div>
      </FormikForm>
    </Formik>
  )
}

const validationSchema = yup.object({
  motivo: yup.string().trim().required("Informe o motivo"),
  valor: yup.number().truncate().required("Informe o valor"),
  user: yup.string().trim().required("Informe o usuário").nullable()
});

FormCreateDebt.propTypes = {
  users: PropTypes.array.isRequired,
  onCreateDebt: PropTypes.func.isRequired,
}

export default FormCreateDebt