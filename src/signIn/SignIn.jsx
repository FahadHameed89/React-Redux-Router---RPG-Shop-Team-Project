import React, { useState } from "react";
import { useSelector, connect } from "react-redux";
import userSignIn from "./logInAction";
import dasherize from "../common/dasherize";
import "./SignIn.css";

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
//https://dmitripavlutin.com/access-object-keys-values-entries/

function LogIn(props) {
  let memberPresent = false;

  const [userName, getUserName] = useState("");
  const [userClan, getUserClan] = useState("");
  const [errorMessageUser, getErrorMessageUser] = useState("");
  const [errorMessageClan, getErrorMessageClan] = useState("");

  const clanData = useSelector((state) => state.clans); // grab clan and memebr data from the store

  const bouncerPhrase = ["Clan members only...", "You on the list?", "No mask, no flask", "You got the coin?", "Beat it Tombdweller", "Get lost Sapblood", "Keep on walking halfling", "Take a hike Ankle-biter"]
  const randomBouncerPhrase = bouncerPhrase[Math.floor(Math.random() * bouncerPhrase.length)];

  const validateSignIn = (event) => {
    event.preventDefault();

    const clanList = Object.keys(clanData); // grab clan names that are in array foramt
    const clanIndex = confirmClan(); // call function to check name of the clan

    if (clanIndex > -1) {
      memberPresent = confirmMember(clanIndex); // if clan exists call this function to check if user name is correct
    }
    if (memberPresent) {
      // go to next page if member is in dataset
      const a = { clan: userClan, member: userName };

      props.dispatch(userSignIn(a));
      props.history.push("/products");
    }

    /*----------------------------------error check the clan availability and empty field
     * return the clan index--------------------------------------------------------------
     */
    function confirmClan() {
      let clanIndex;
      try {
        const clanFound = clanList.includes(userClan); // check clan avialabilty
        clanIndex = clanList.indexOf(userClan); // find clan index

        if (userClan === "") {
          throw new Error("Please enter The name Of your Clan");
        } else if (!clanFound) {
          throw new Error("This Clan does not exist");
        }
      } catch (error) {
        getErrorMessageClan(error);
      }
      return clanIndex;
    } /// end confirmClan fn

    /*-----------------------error check the member availability and empty field--------------------------- */
    function confirmMember(clanIndex) {
      let memberValid = false;
      const [_, clanMembers] = Object.entries(clanData)[clanIndex];
      const memberList = clanMembers.members; //populate memberList with clan's members array

      try {
        const memberFound = memberList.includes(userName); //  find if member exits

        if (userName === "") {
          throw new Error("Please enter your user name ");
        } else if (!memberFound) {
          throw new Error("This username does not exist");
        }
        memberValid = true;
      } catch (error) {
        getErrorMessageUser(error);
      }
      return memberValid;
    } /// end confirmMember fn
  }; // end validateSignIn fn

  return (
    <>
    <header class="container signin__header">
      <img src="/imgs/shop-logo.png" alt=""/>
    </header>

    <main className="container signin__main">
      <form className="signin__form" onSubmit={validateSignIn}>
        <div className="input-group">
          <label htmlFor="user-name" />
          <input
            type="text"
            id="user-name"
            autoComplete="off"
            placeholder="Your Name"
            autoFocus
            onChange={(e) => {
              getUserName(e.target.value);
              getErrorMessageUser(""); // clear error fields
              getErrorMessageClan(""); // clear error fields
            }}
          ></input>
          <p className="show-error-message">{errorMessageUser}</p>
        </div>

        <div className="input-group">
          <label htmlFor="clan-name" />
          <input
            type="text"
            id="clan-name"
            autoComplete="off"
            placeholder="Clan Name"
            onChange={(e) => {
              getUserClan(dasherize(e.target.value)); // grabbing user given clan field and dasherize it
              getErrorMessageUser(""); // clear error fields
              getErrorMessageClan(""); // clear error fields
            }}
          ></input>
          <p className="show-error-message">{errorMessageClan}</p>
        </div>

        <input type="submit" value="Enter Shop" />
      </form>

      <div className="signin__guard">
        <div class="signin__guard-container">
          <img src="/imgs/signin-boss.png" alt="A large orc figure guards the shop entrance."/>
        </div>
          <p>{randomBouncerPhrase}</p>
      </div>
    </main>
    </>
  );
}

//export default LogIn;
export default connect((state) => {
  return { someResult: state };
})(LogIn);
