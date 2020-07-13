import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as yup from "yup";

const ModalUpdateDebt = ({
  debt,
  showModal,
  onToggleModal,
  onUpdateDebt
}) => {
  return (
    <ReactModal
      isOpen={showModal}
      ariaHideApp={false}
      className="mx-auto mt-5"
      style={{
        overlay: {
          position: "fixed",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        },
        content: {
          width: "30%",
          border: "1px solid #ccc",
          background: "#eee",
          overflow: "auto",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
        },
      }}
    >
      <h3 className="text-center">Dívida</h3>
      <Formik
        initialValues={{
          motivo: debt.motivo, valor: debt.valor
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onUpdateDebt(debt._id, values)
          onToggleModal();
        }}
      >
        <FormikForm>
          <div className="form-group">
            <label htmlFor="motivo">Motivo</label>
            <Field name="motivo" className="form-control" />
            <ErrorMessage
              name="nome"
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
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-outline-success mr-3"
            >
              Editar
          </button>
            <button
              type="button"
              className="btn btn-outline-primary mr-3"
              onClick={() => {
                onToggleModal();
              }}
            >
              Voltar
          </button>
          </div>
        </FormikForm>
      </Formik>
    </ReactModal>
  );
}

const validationSchema = yup.object({
  motivo: yup.string().trim().required("Informe o motivo"),
  valor: yup.number().required("Informe o valor"),
});

ModalUpdateDebt.propTypes = {
  debt: PropTypes.object.isRequired,
  showModal: PropTypes.bool.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  onUpdateDebt: PropTypes.func.isRequired
}

export default ModalUpdateDebt