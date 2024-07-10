import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Prizes from "./components/Prizes";
import Modal from "./components/Modal";
import Loader from "./components/Loader";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState(null);
  const [toggledModal, setToggledModal] = useState(false);
  const [winnerInfo, setWinnerInfo] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const data = await axios.get(
          "https://d0q47hgp-5005.euw.devtunnels.ms/getUsers"
        );
        setUsers(data.data);
        console.log(data.data);
      } catch (e) {
        alert(e.response.data.message);
      }
    })();
  }, []);

  if (!users) {
    return <Loader />;
  }

  return (
    <div className="wrapper">
      <Sidebar users={users.users} />
      <Main
        setWinnerInfo={setWinnerInfo}
        toggleModal={setToggledModal}
        users={users}
      />
      <Prizes users={users} />
      <Modal
        winnerInfo={winnerInfo}
        isToggled={toggledModal}
        setIsToggled={setToggledModal}
        users={users}
        setUsers={setUsers}
      />
    </div>
  );
};

export default App;
