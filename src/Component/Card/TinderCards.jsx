import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Jason Brando",
      url:
        "https://avatars1.githubusercontent.com/u/18607295?s=400&u=215f1f42a713c90ea4ba6ec27477091dcd50249b&v=4",
    },
    {
      name: "Key Must",
      url: "https://ychef.files.bbci.co.uk/1600x640/p02xl42q.jpg",
    },
    {
      name: "Jundi Hidayat",
      url:
        "https://peloporkrimsus.com/wp-content/uploads/2018/01/IMG-20180123-WA0024.jpg",
    },
    {
      name: "Tahta Mahligay",
      url:
        "https://img.okezone.com/content/2020/02/23/320/2172856/menjanjikannya-usaha-ternak-ikan-lele-keuntungannya-menggiurkan-ytRicWH3tv.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log(`Removing : ${nameToDelete}`);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen !`);
  };
  return (
    <div className="tinderCards">
      <div className="tinderCard-container">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "Down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;
