import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone="123-456-7890"
      email="b@betonce.com"
    />
    <Card
      name="Kanye"
      img="https://i1.pngguru.com/preview/578/235/631/random-s-kanye-west-thumbnail.jpg"
      phone="501-228-1872"
      email="kanyeloveskanye@graduation.com"
    />
  </div>,
  document.getElementById("root")
);
