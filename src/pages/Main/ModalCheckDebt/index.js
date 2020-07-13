import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";

const ModalUpdateDebt = ({
  checkDebt,
  showModalCheckDebt,
  onToggleModal
}) => {

  if (checkDebt) {
    return (
      <ReactModal
        isOpen={showModalCheckDebt}
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
        <p><strong>Nome: </strong>{checkDebt.name}</p>
        <p><strong>Motivo: </strong>{checkDebt.motivo}</p>
        <p><strong>Valor: </strong>{checkDebt.valor}</p>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-outline-success mr-3"
            onClick={() => onToggleModal()}
          >
            Voltar
            </button>
        </div>
      </ReactModal>
    );
  } else {
    return null
  }
}

ModalUpdateDebt.propTypes = {
  checkDebt: PropTypes.object,
  showModalCheckDebt: PropTypes.bool.isRequired,
  onToggleModal: PropTypes.func.isRequired,

}

export default ModalUpdateDebt