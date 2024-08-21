import React from 'react';

const Modal = ({ show, onClose, onConfirm }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Confirmar eliminación</h2>
                <p>¿Estás seguro de que quieres eliminar este contacto?</p>
                <div className="modal-actions">
                    <button onClick={onConfirm} className="btn-confirm">Sí</button>
                    <button onClick={onClose} className="btn-cancel">No</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
