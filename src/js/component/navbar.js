import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3 mt-4" style={{ padding: "0 200px" }}>
			<Link to="/" className="mr-3">
				<span className="navbar-brand mb-0 h1">Volver a la Agenda de Contactos</span>
			</Link>
			<div className="ml-auto">
				<Link to="/Formulario">
					<button className="btn btn-primary">Crear Nuevo Contacto</button>
				</Link>
			</div>
		</nav>
	);
};



