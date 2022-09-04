import React from "react";

function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello Likelion!!</h1>
      <Food fav="Kimchi" />
      <Food fav="ramen" />
      <Food fav="chukumi" />
      <Food fav="samgiopsal" />
    </div>
  );
}

export default App;
