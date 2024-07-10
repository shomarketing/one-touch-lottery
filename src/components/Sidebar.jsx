import "../App.css";

const Sidebar = ({ users }) => {
  return (
    <div className="sidebar">
      <div className="userTitle">
        <span>Ім'я</span>
        <span className="number">№</span>
      </div>
      {users.map((user) => (
        <div className="user" key={user.id}>
          <span>{user.name}</span>
          <span className="number">№{user.id}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
