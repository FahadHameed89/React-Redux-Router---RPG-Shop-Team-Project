import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import comparableString from '../common/comparableString.js'

import { signIn } from "./accountReducer";

import "./SignIn.css";

/**
 * SPECIAL NOTICE:
 *
 * There is no actual security here and there are numerous ways to bypass
 * this 'login' page. It's purely included in the project to simulate a type of
 * restriction page while grabbing data from redux. In a real project an authorization
 * token would be obtained from the remote backend where it would be used to authorize
 * each and every server query then after.
 */

export default (props) => {
  const dispatch = useDispatch();
  const [inputMemberName, setInputMemberName] = useState("");
  const [inputClanName, setInputClanName] = useState("");
  const [errorMessageUser, setMemberNameError] = useState("");
  const [errorMessageClan, setClanNameError] = useState("");
  
  const bouncerPhrase = ["Clan members only...", "You on the list?", "No mask, no flask", "You got the coin?", "Beat it Tombdweller", "Get lost Sapblood", "Keep on walking halfling", "Take a hike Ankle-biter"]
  const randomBouncerPhrase = bouncerPhrase[Math.floor(Math.random() * bouncerPhrase.length)];

  const clanList = useSelector((state) => state.clans);


  /**
   * Finds a clan in our preloaded clan list.
   *
   * @param {string} clanName - The clan name to search for
   * @returns {(null|object)} returns null or the clan object
   */
  function findClan(clanName) {
    clanName = comparableString(clanName) || ''
    return clanList.find(x => comparableString(x.clan) === clanName);
  }

  /**
   * Finds a member profile in the given clan.
   *
   * @param {object} clan - clan object from our preloaded clan list.
   * @param {string} memberName - A member name from that clan.
   * @returns {(null|object)} returns null or the profile object
   */
  const findMember = (clan, memberName) => {
    memberName = comparableString(memberName) || ''

    return clan.members.find(
      x => comparableString(x.member) === memberName
    )
  }

  /**
   * Clears all errors on the form.
   */
  const clearErrors = () => {
    setMemberNameError("");
    setClanNameError("");
  }

  /**
   * Validates that the user gave us some kind of input
   *
   * @returns {bool} True when input is valid otherwise false.
   */
  const validateUserInput = () => {
    let result = true;
    if(inputClanName.trim() === "") {
      result = false;
      setClanNameError("What clan are you from?");
    }

    if(inputMemberName.trim() === "") {
      result = false;
      setMemberNameError("What's your name?");
    }

    return result;
  }

  /**
   * Determines if the user entered credentials are valid
   *
   * @returns {bool} True if credentials are valid otherwise false
   *                 with error messages added to the appropriate message
   *                 state.
   */
  const validateCredentials = () => {
    const clan = findClan(inputClanName);

    let result = true;
    if(clan) {
      const memberProfile = findMember(clan, inputMemberName);
      if(memberProfile && memberProfile.member !== null) {
        result = true;
      } else {
        result = false;
        setMemberNameError("You're name is not in the list. Scram!");
      }

    } else {
      result = false;
      setClanNameError("Never heard of that clan before...");
    }

    return result;
  }

  /**
   * Creates the account details needed to "sign-in" a user
   * to the store.
   *
   * This function expects the credentials to have already been validated before
   * being called.
   *
   * @param {string} clanName - The clan name.
   * @param {string} memberName - Clan member name.
   */
  const createAccountSignin = (clanName, memberName) => {
    // Note: This should probably be pulled out into some other file
    //       closer to redux. However since we know the scope of this app
    //       and this is the only place that will be setting logged in profiles
    //       it's probably safe to leave this here.

    const clan = findClan(clanName);
    const memberProfile = findMember(clan, memberName);

    return { clanId: clan.clanId, clan: clan.clan, ...memberProfile }
  }
  
  /**
   * Validates the inputed user credentials and
   * if the user can "sign-in", create the account object
   * then redirect to the sites main page.
   *
   * @param {Event} event Data from the onSumbitEvent
   */
  const onSumbit = (event) => {
    event.preventDefault();

    clearErrors();

    const isUserInputValid = validateUserInput();
    const isCredentialsValid = validateCredentials();
    const canSignIn = isUserInputValid && isCredentialsValid;

    if(canSignIn) {
      const account = createAccountSignin(inputClanName, inputMemberName);

      // Sign in and transfer us to products
      dispatch(signIn(account));
      props.history.push("/products");
    }

  }

  return (
    <>
    <header className="container signin__header">
      <img src="/imgs/shop-logo.png" alt=""/>
    </header>

    <main className="container signin__main">
      <form className="signin__form" onSubmit={onSumbit}>
        <div className="input-group">
          <label htmlFor="clan-name" />
          <input
            type="text"
            id="clan-name"
            autoComplete="off"
            placeholder="Clan Name"
            onChange={(e) => {
              setInputClanName(e.target.value);
            }} />
          <p className="show-error-message">{errorMessageClan}</p>
        </div>

        <div className="input-group">
          <label htmlFor="user-name" />
          <input
            type="text"
            id="user-name"
            autoComplete="off"
            placeholder="Your Name"
            autoFocus
            onChange={(e) => {
              setInputMemberName(e.target.value);
            }} />
          <p className="show-error-message">{errorMessageUser}</p>
        </div>

        <input type="submit" value="Enter Shop" />
      </form>

      <div className="signin__guard">
        <div className="signin__guard-container">
          <img src="/imgs/signin-boss.png" alt="A large orc figure guards the shop entrance."/>
        </div>
        <p className="bubble bubble-bottom-left">{randomBouncerPhrase}</p>
      </div>
    </main>
    </>
  );
}
