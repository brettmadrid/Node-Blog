import React from "react";
import SingleCard from "./SingleCard";

function Cards(props) {
  return (
      props.users.map(user => (
        <SingleCard key={user.id} user={user} />
      ))
  );
}

export default Cards;
