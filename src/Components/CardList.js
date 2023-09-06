import React from "react";
import Card from "./Card";

function CardList({ users }) {
  return (
    <div className="body">
      {users.map((robot, index) => {
        if (index < 9) {
          return <Card id={robot.id} name={robot.name} email={robot.email} />;
        } else return null;
      })}
    </div>
  );
}

export default CardList;
