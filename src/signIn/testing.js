/* testing stuff out */

x= clansList.includes(userClan.toLowerCase());    // check clan avialabilty
console.log("clan is available "+ x);

const clanIndex = clansList.indexOf(userClan.toLowerCase());  // find clan index
console.log("index of clan " + clanIndex);

const memberListLength = membersList[clanIndex].length;      //find total number of members of that clan   
console.log("Total members" + memberListLength);             // not needed yet

const y = membersList[clanIndex].includes(userName);     //  find if member exits
console.log("member is available " + y);

const memberIndex = membersList[clanIndex].indexOf(userName)     //  find index number of member
console.log("index of member " + memberIndex);

//  window.location.href='product';
/*
for (let i = 0; i < y; i++) {
console.log("This is member:  " + membersList[0][i]);
}*/

/*  try{

}
catch(err)
{

}*/

/*Aaron Barthel2:58 PM
<div class="inputGroup">
  <label ...></label>
  <input ... />
</div>
<div class="inputGroup">
  <label ...></label>
  <input ... />

  <p>My Error</p>
</div> */

/*

{
  TheAbsoluteZeros: {
    "clan": "TheAbsoluteZeros",
        "members": [
          "Danish",
          "Fahad",
          "Irwin",
          "Aaron"
        ]
  }
}  */

/*if(clans[USERINPUT] === undefined) {
  // NO USER
}
*/

/***const singleClan = clans["TheAbsoluteZeros"];
const membersList = singleClan.members; */
/*
{
  TheAbsoluteZeros: {
    "clan": "TheAbsoluteZeros",
        "members": [
          "Danish",
          "Fahad",
          "Irwin",
          "Aaron"
        ]
  },

  Clan2: {
    "clan": "Clan2",
      "members": [
        "Shawna",
      ]
  }
} 
*/

