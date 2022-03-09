import React from "react";
const data = ["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"];
export default function AwsomeAnimals() {
  return (
    <div>
      {data.map((animal, index) => {
        return (
          <ul key={index}>
            <li>
              Awsomeness level {index}:{animal}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
