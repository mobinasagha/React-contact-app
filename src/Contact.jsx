import { useState } from "react";
import ContactList from "./ContactList";
import Form from "./Form";
const initialValue = {
  id: 0,
  fistName: "",
  phoneNumber: "",
  email: "",
  address: "",
};
export default function Contact() {
  const [formData, setFormData] = useState(initialValue);
  const [contact, setContact] = useState([]);

  return (
    <>
      <div>
        <Form
          formData={formData}
          setFormData={setFormData}
          setContact={setContact}
        />
        <ContactList contact={contact} setContact={setContact} />;
      </div>
    </>
  );
}
