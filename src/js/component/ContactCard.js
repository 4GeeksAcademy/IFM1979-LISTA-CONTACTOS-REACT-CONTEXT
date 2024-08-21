import React, { useState, useContext } from "react";
import '../../styles/ContactCard.css';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import ConfirmDeleteModal from "./ConfirmDeleteModal"; // Importa el modal
import '../../styles/Modal.css';


const ContactCard = ({ contact }) => {
    const { actions } = useContext(Context);
    const [showModal, setShowModal] = useState(false); // Estado para controlar el modal

    const handleDeleteClick = () => {
        setShowModal(true); // Muestra el modal cuando se hace clic en eliminar
    };

    const handleConfirmDelete = () => {
        actions.eliminarContacto(contact.id); // Llama a la acción para eliminar el contacto
        setShowModal(false); // Cierra el modal después de confirmar
    };

    const handleCloseModal = () => {
        setShowModal(false); // Cierra el modal sin eliminar
    };

    return (
        <div className="contact-card">
            <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
                alt="Profile"
                className="contact-card-image"
            />

            <div className="contact-card-info">
                <h3>{contact.name}</h3>
                <p><i className="fas fa-map-marker-alt"></i> {contact.address}</p>
                <p><i className="fas fa-phone"></i> {contact.phone}</p>
                <p><i className="fas fa-envelope"></i> {contact.email}</p>
            </div>
            
            <div className="contact-card-actions">
                <Link to="/Formulario">
                    <i
                        id="pencil-action"
                        className="fas fa-pencil-alt"
                        onClick={() => actions.setContactToEdit(contact)}
                    ></i>
                </Link>
                <i
                    id="trash-action"
                    className="fas fa-trash"
                    onClick={handleDeleteClick} // Abre el modal en lugar de eliminar directamente
                ></i>
            </div>

            {/* Modal de confirmación */}
            <ConfirmDeleteModal
                show={showModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
            />
        </div>
    );
};

export default ContactCard;


