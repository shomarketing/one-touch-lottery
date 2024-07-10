import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import img from "../assets/logo.webp";
import "../App.css";

const Main = ({ users, toggleModal, setWinnerInfo }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const data = [];
  users.users.forEach((user) => {
    data.push({ option: user.name });
  });

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      const winner = users.users[newPrizeNumber];
      setWinnerInfo({ id: winner.id, name: winner.name });
      setMustSpin(true);
    }
  };

  return (
    <div className="main">
      <img src={img} alt="" />
      <Wheel
        data={data}
        mustStartSpinning={mustSpin}
        backgroundColors={["#062760", "#d9d9d9"]}
        textColors={["#ffffff", "#000000"]}
        prizeNumber={prizeNumber}
        onStopSpinning={() => {
          setMustSpin(false);
          toggleModal(true);
        }}
        outerBorderWidth={2}
        outerBorderColor="#4b4b4b"
        radiusLineWidth={2}
      />
      <button disabled={mustSpin} className="button" onClick={handleSpinClick}>
        Старт
      </button>
    </div>
  );
};

export default Main;
