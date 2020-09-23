import React, { useState } from "react";
import { useSelector ,connect} from "react-redux";
import userSignIn from './logInAction';
import dasherize from "../common/dasherize";
import "./SignIn.css"

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
//https://dmitripavlutin.com/access-object-keys-values-entries/

function LogIn(props) {
 
  let memberPresent = false;

  const [userName, getUserName] = useState("");
  const [userClan, getUserClan] = useState("");
  const [errorMessageUser, getErrorMessageUser] = useState("");
  const [errorMessageClan, getErrorMessageClan] = useState("");

  const clanData = useSelector((state) => state.clans); // grab clan and memebr data from the store

  const validateSignIn = (event) => {
    event.preventDefault();

    const clanList = Object.keys(clanData); // grab clan names that are in array foramt
    const clanIndex = confirmClan(); // call function to check name of the clan

    if (clanIndex > -1) {
      memberPresent = confirmMember(clanIndex); // if clan exists call this function to check if user name is correct
    }  
    if (memberPresent) // go to next page if member is in dataset
    {
      const a = {clan:userClan,member:userName}
      console.log(a);
      props.dispatch(userSignIn(a));
     // window.location.href="../product/ProductList.jsx"
    }

    /*error check the clan availability and empty field
     * return the clan index
     */
    function confirmClan() {
      let clanIndex;
      try {
        const clanFound = clanList.includes(userClan); // check clan avialabilty
        clanIndex = clanList.indexOf(userClan); // find clan index

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
      let memberValid = false;
      const [clansL, clanMembers] = Object.entries(clanData)[clanIndex];
      const memberList = clanMembers.members; //populate memberList with clan's members array

      try {
        const memberFound = memberList.includes(userName); //  find if member exits
 
        if (userName === "") {
          throw "Please enter your user name ";
        } else if (!memberFound) {
          throw "This username does not exist";
        }
        memberValid = true;
      }
      catch (error) {
        getErrorMessageUser(error);
      }
      return memberValid;
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
            autoComplete="off" // !!!probably better idea to remove it  before final submit
            placeholder="Your Name"
            autoFocus
            onChange={(e) => {
              getUserName(e.target.value);
              getErrorMessageUser(""); // clear error fields
              getErrorMessageClan(""); // clear error fields
            }}
          ></input>
             <p>{errorMessageUser}</p>
        </div>

        <div className="clanGroup">
          <label htmlFor="clan-name" />
          <input
            type="text"
            id="clan-name"
            autoComplete="off" // !!!probably better idea to remove it  at the end
            placeholder="Your Clan"
            onChange={(e) => {
              getUserClan(dasherize(e.target.value)); // grabbing user given clan field and dasherize it
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
}

//export default LogIn;
export default connect((state) => {return { someResult: state };})(LogIn);
