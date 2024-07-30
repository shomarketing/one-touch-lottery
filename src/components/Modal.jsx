import axios from "axios";
import { useState } from "react";
import Loader from "./Loader";
import dog from "../assets/dog.gif";
import cat from "../assets/cat.gif";
import babka from "../assets/babka.gif";
import "../App.css";

const Modal = ({ isToggled, setIsToggled, winnerInfo, users, setUsers }) => {
  const [loading, setLoading] = useState(false);

  const handleAccept = async () => {
    setLoading(true);
    try {
      let winnerPlace = 0;
      if (users.winner.length === 0) {
        winnerPlace = 3;
      } else if (users.winner.length === 1) {
        winnerPlace = 2;
      } else if (users.winner.length === 2) {
        winnerPlace = 1;
      }
      const data = await axios.post(
        "https://api.fair.onetouch.com.ua/addWinner",
        { id: winnerInfo.id, place: winnerPlace }
      );
      setUsers(data.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
    setIsToggled(false);
  };
  const handleDecline = async () => {
    try {
      const res = await axios.get(
        `https://api.fair.onetouch.com.ua/hideUser/${winnerInfo.id}`
      );
      setUsers(res.data);
    } catch (e) {
      console.log(e);
    }
    setIsToggled(false);
  };

  return (
    <div className={`modalWrapper ${isToggled && "visibleModal"}`}>
      <div className="modalContent">
        <div className="modalInfo">
          <img
            className="gif"
            src={
              users.winner.length === 0
                ? dog
                : users.winner.length === 1
                ? cat
                : babka
            }
            alt=""
          />
          {loading ? (
            <Loader />
          ) : (
            <>
              <p className="modalTitle">Вітаємо!</p>
              <p className="modalName">
                {winnerInfo ? winnerInfo.name : ""} №
                {winnerInfo ? winnerInfo.id : ""}
              </p>
              <div className="buttonsWrapper">
                <button
                  disabled={loading}
                  onClick={handleDecline}
                  className="modalButton"
                >
                  <DeclineIcon /> Відхилити
                </button>
                <button
                  disabled={loading}
                  onClick={handleAccept}
                  className="modalButton"
                >
                  <AcceptIcon /> Підтвердити
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const AcceptIcon = () => {
  return (
    <svg
      width="23"
      height="31"
      viewBox="0 0 23 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 15.7143L10.4444 29L21 2"
        stroke="#05FF00"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const DeclineIcon = () => {
  return (
    <svg
      width="27"
      height="26"
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 1.5L25 24.5M2 24.5L25 1.5" stroke="#FF0000" strokeWidth="4" />
    </svg>
  );
};

export default Modal;
