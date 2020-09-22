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


/*if(clans[USERINPUT] === undefined) {
  // NO USER
}
*/

/***const singleClan = clans["TheAbsoluteZeros"];
const membersList = singleClan.members; */



//console.log(clanData["the absolute zero"].clan); // access clan2

//console.log(clanData["clan1"].clan);

/*

const clanData = useSelector(state=>state.clans);   // grab clan and memebr data from the store

  const clanList = Object.keys(clanData);    // grab clan names

   const membersList = Object.entries(clanData)[0];   //clanData.clan not working
 
    const  [clan1 , mem1 ]= Object.entries(clanData)[0];

    console.log("clan 1 is " + clanList[0] +  "  ---- clan 2 is :" + clanList[1]);

     
   console.log(mem1.members ); //  found individual members array 

   const membersArray =  mem1.members;
   console.log(membersArray[1] );

 
   const dash = dasherize("The yello Baloon is goof");
   console.log("The yello Baloon is goof  // becomes ;;" + dash);

  */


    
   
  

    /*console.log(Object.keys(clanData)[1]);
    console.log(Object.keys(clanData)[0]);
    console.log(Object.keys(clanData));*/




    /*const clansList = [
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
/*
const membersList = [
  ["Bagel34", "Martin", "red"], // clan [0]
  ["Alger", "Mary", "Mary2", "yellow"],
  ["Pixy", "Foxy56", "blue"],
  ["dandy1", "voila", "purple", "green"],

];
*/

  /* Reaver:[ "Bagel34", "Martin","red" ],
  Concordia: ["Alger", "Mary", "Mary2","yellow"],    
  Mercury: ["Pixy", "Foxy56","blue"]*/