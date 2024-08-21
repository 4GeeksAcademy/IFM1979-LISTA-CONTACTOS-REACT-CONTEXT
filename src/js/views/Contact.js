import React, { useContext } from "react";
import "../../styles/Contact.css";
import UserCard from "../component/ContactCard.js";
import { Context } from "../store/appContext";

export const Contactos = () => {
    const { store } = useContext(Context);

    return (
        <div className="text-center mt-5">
            {store.contacts.map((contact, index) => (
                <UserCard key={index} contact={contact} />
            ))}
        </div>
    );
};