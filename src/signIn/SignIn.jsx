import React, { useState } from "react";

export default (props) => {
  let x, y; /// dummy variables for testing for now

  const [userName, getUserName] = useState("");
  const [userClan, getUserClan] = useState("");
  const [errorMessageUser, getErrorMessageUser] = useState("");
  const [errorMessageClan, getErrorMessageClan] = useState("");

  const validateSignIn = (event) => {
    event.preventDefault();

    console.log(userName);
    console.log(userClan);

    const clanIndex = confirmClan();    // call function to check name of the clan

    if (clanIndex > -1) {
      confirmMember(clanIndex);        // if clan exists call this function to check if user name is correct
    }

    /*error check the clan availability and empty field 
    * return the clan index
    */
    function confirmClan() {       
      let clanIndex;
      try {
        const clanFound = clansList.includes(userClan.toLowerCase()); // check clan avialabilty
        console.log("clan is available " + clanFound);
        clanIndex = clansList.indexOf(userClan.toLowerCase()); // find clan index
        console.log("index of clan " + clanIndex);

        if (userClan === "") {
          throw "Please enter The name Of your Clan"; 
        } else if (!clanFound) {
          throw "This Clan does not exist";
        }
      } catch (error) {
        getErrorMessageClan(error);
      }
      return clanIndex;
    } /// end confirmClan fn

    /*error check the member availability and empty field */
    function confirmMember(clanIndex) {
      try {
        const memberFound = membersList[clanIndex].includes(userName); //  find if member exits
        console.log("member is available " + memberFound);

        if (userName === "") {
           throw "Please enter your user name ";
        } else if (!memberFound) {
          throw "This username does not exist";
        }
      } catch (error) {
        getErrorMessageUser(error);
      }
    } /// end confirmMember fn
  }; // end validateSignIn fn

  return (
    <>
      <form onSubmit={validateSignIn}>
        <div className="userGroup">
          <label htmlFor="user-name" />
          <input
            type="text"
            id="user-name"
            autoComplete="off"
            placeholder="Your Name"
            onChange={(e) => {
              getUserName(e.target.value);
              getErrorMessageUser(""); // clear error fields
              getErrorMessageClan(""); // clear error fields
            }}
          ></input>
          <p>{errorMessageUser}</p>
        </div>

        <div className="userGroup">
          <input
            type="text"
            id="clan-name"
            autoComplete="off"
            placeholder="Your Clan"
            onChange={(e) => {
              getUserClan(e.target.value);
              getErrorMessageUser(""); // clear error fields
              getErrorMessageClan(""); // clear error fields
            }}
          ></input>
          <p>{errorMessageClan}</p>
        </div>

        <input type="submit" value="Login" />
      </form>
    </>
  );
};

const clansList = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "neptune",
];

/* Array membersList structure is
 *   membersList[clanIndex][memberIndex]
 */

const membersList = [
  ["Bagel34", "Martin", "red"], // clan [0]
  ["Alger", "Mary", "Mary2", "yellow"],
  ["Pixy", "Foxy56", "blue"],
  ["dandy1", "voila", "purple", "green"],

  /* Reaver:[ "Bagel34", "Martin","red" ],
  Concordia: ["Alger", "Mary", "Mary2","yellow"],    
  Mercury: ["Pixy", "Foxy56","blue"]*/
];
