import "./Card.css";
import {  useState } from "react";

function Images({ images }) {
  const imgs = images.map((image) => {
    return (
      <img
        src={image + "?q=" + new Date()}
        alt=""
        key={image.id}
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.open(image.replace("-175", ""), "_blank");
        }}
      />
    );
  });
  return imgs;
}

function Card({ title, status, smokey, images }) {
  const [value,setValue] = useState();

  const refresh = ()=>{
      setValue(Math.random());
  }

  setInterval(refresh, 30000); // Reload every minute (60,000 milliseconds)
  return (
    <div className="card">
      <div
        className="card-header"
        style={{
          alignContent: "center",
          display: "flex",
        }}
      >
        <div className="live-indicator flash-button"></div>
        <h3 style={{ width: "50%" }}>{title}</h3>
        <div
          className="status"
          style={{
            backgroundColor: smokey ? "#ff9797" : "#b4f3b4",
            borderRadius: "5px",
            width: "50%",
            padding: "1px 10px",
            height: "fit-content",
          }}
        >
          <p>{status}</p>
        </div>
      </div>
      <div className="images">
        <Images images={images} key={value} />
      </div>
    </div>
  );
}

export default Card;
