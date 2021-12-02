const AddEntry = ({ entry }) => {
  //   console.log(entry);
  return (
    <div>
      <h3>Contact List</h3>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {entry.map((ent) => (
            <tr key={ent.contact}>
              <td>{ent.firstName}</td>
              <td>{ent.lastName}</td>
              <td>{ent.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddEntry;
