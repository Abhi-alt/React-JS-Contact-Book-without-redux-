import { useState } from "react";
import AddEntry from "./AddEntry";

const ContactForm = () => {
  const [entry, setEntry] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");

  const addEntry = (ent) => {
    setEntry([...entry, ent]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry({ firstName, lastName, contact });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          type="text"
          placeholder="First Name"
        />
        <input
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          type="text"
          placeholder="Last Name"
        />
        <input
          onChange={(e) => setContact(e.target.value)}
          value={contact}
          type="text"
          placeholder="Contact Number"
        />
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
      <div>
        <AddEntry entry={entry} />
      </div>
    </div>
  );
};

export default ContactForm;
