// import hdd from "../assets/hdd.webp";
// import power from "../assets/power.webp";
import panel from "../assets/panel.webp";
// import jbl from "../assets/jbl.webp";
import "../App.css";

const Prizes = ({ users }) => {
  return (
    <div className="prizesBlock">
      <div className="prize">
        <p className="winner">
          {users.winner[0]
            ? `${users.winner[0].name} №${users.winner[0].id}`
            : ""}
        </p>
        <div
          className={`prizeInfo ${
            users.winner.length === 0 && "prizeInfoActive"
          }`}
        >
          <img src={panel} style={{ width: "200px", height: "200px" }} alt="" />
          <p className="prizeTitle">Longi solar 585 watt</p>
        </div>
      </div>
      {/* <div className="prize">
        <p className="winner">
          {users.winner[1]
            ? `${users.winner[1].name} №${users.winner[1].id}`
            : ""}
        </p>
        <div
          className={`prizeInfo ${
            users.winner.length === 1 && "prizeInfoActive"
          }`}
        >
          <img src={hdd} alt="" />
          <p className="prizeTitle">Зовнішній HDD 1тб</p>
        </div>
      </div>
      <div className="prize">
        <p className="winner">
          {users.winner[2]
            ? `${users.winner[2].name} №${users.winner[2].id}`
            : ""}
        </p>
        <div
          className={`prizeInfo ${
            users.winner.length === 2 && "prizeInfoActive"
          }`}
        >
          <img src={jbl} alt="" />
          <p className="prizeTitle">Колонка JBL GO3</p>
        </div>
      </div> */}
    </div>
  );
};

export default Prizes;
