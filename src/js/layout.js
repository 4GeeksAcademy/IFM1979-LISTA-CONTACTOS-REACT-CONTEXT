import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contactos } from "./views/Contact.js";
import { Formulario } from "./views/AddContact.js";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar.js";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Routes>
						<Route path="/" element={<Contactos />} />
						<Route path="/Formulario" element={<Formulario />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);