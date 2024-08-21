import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/AddContact.css";

export const Formulario = () => {
	const { store, actions } = useContext(Context);

	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	
	const navigate = useNavigate();

	
	useEffect(() => {
		if (store.contactToEdit) {
			setFullName(store.contactToEdit.name);
			setEmail(store.contactToEdit.email);
			setPhone(store.contactToEdit.phone);
			setAddress(store.contactToEdit.address);
		}
	}, [store.contactToEdit]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const contactoNuevo = {
			name: fullName,
			phone: phone,
			email: email,
			address: address,
		};

		if (store.contactToEdit) {
			
			actions.editarContacto(store.contactToEdit.id, contactoNuevo);
		} else {
			
			actions.crearContacto(contactoNuevo);
		}

		
		actions.clearContactToEdit();
		navigate("/");
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<label htmlFor="fullName">Nombre y Apellidos</label>
				<input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />

				<label htmlFor="email">Email</label>
				<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

				<label htmlFor="phone">Teléfono</label>
				<input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

				<label htmlFor="address">Dirección</label>
				<input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />

				<button id="guardar-btn" type="submit">Guardar</button>
			</form>
			<br />
			<Link to="/">
				<div className="d-flex justify-content-center">
				<button className="btn-lg w-50">Agenda de Contatos</button>
				</div>
			</Link>
		</div>
	);
};