import React, { useState } from "react";
import {useSelector} from "react-redux";
import dasherize from "../common/dasherize"

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

export default (props) => {
  let x, y; /// dummy variables for testing for now
  let memberPresent = false;

  const [userName, getUserName] = useState("");
  const [userClan, getUserClan] = useState("");
  const [errorMessageUser, getErrorMessageUser] = useState("");
  const [errorMessageClan, getErrorMessageClan] = useState("");

  const clanData = useSelector(state=>state.clans);   // grab clan and memebr data from the store

  const clanList = Object.keys(clanData);    // grab clan names
 // const dashClan = dasherize(individual clan name);


  const validateSignIn = (event) => {
    event.preventDefault();
 


    const membersList = Object.entries(clanData)[0];   //clanData.clan not working
 
    const  [clan1 , mem1 ]= Object.entries(clanData)[0];

    console.log("clan 1 is " + clanList[0] +  "  ---- clan 2 is :" + clanList[1]);

     
   console.log(mem1.members ); //  found individual members array 

   const membersArray =  mem1.members;
   console.log(membersArray[1] );

 
   const dash = dasherize("The yello Baloon is goof");
   console.log("The yello Baloon is goof  // becomes ;;" + dash);




   
   
  

    /*console.log(Object.keys(clanData)[1]);
    console.log(Object.keys(clanData)[0]);
    console.log(Object.keys(clanData));*/
    console.log(userName);
    console.log(userClan);


    /*run user clanname through dasherize
    
    -- value get back ,,, check against clan data
    
    --validate*/

    const clanIndex = confirmClan();    // call function to check name of the clan

    if (clanIndex > -1) {
      memberPresent = confirmMember(clanIndex);        // if clan exists call this function to check if user name is correct
    }

    if (memberPresent) // go to next page if member is in dataset
    {
      window.location.href="../product/ProductList.jsx"

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
      let memberValid=false; 
      try {
        const memberFound = membersList[clanIndex].includes(userName); //  find if member exits
        console.log("member is available " + memberFound);

        if (userName === "") {
           throw "Please enter your user name ";
        } else if (!memberFound) {
          throw "This username does not exist";
        }

        memberValid=true;
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
            autoComplete="off"          // !!!probably better idea to remove it  before final submit
            placeholder="Your Name"
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
            autoComplete="off"            // !!!probably better idea to remove it  at the end
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
