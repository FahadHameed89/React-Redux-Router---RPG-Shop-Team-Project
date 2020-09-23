import React from 'react';
import './css/product-stats.css';


export default (props) => {
  if(!props.stats || props.stats.length === 0) {
    // Don't display an empty stat block.
    return (null);
  }

  const className = props.className || '';

  //
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
  //
  // Using Object.entries we can get a list of all the properties and their values
  // in array form eg [ ["HP", 21], ["MP", 4] ]
  // then using Array.filter and a bit of array destructuring magic
  // we can filter out all values that are 0.
  const stats = Object
                  .entries(props.stats)
                  .filter(([_, value]) => value !== 0);

  const statMap = {
    "HP": "Health Points (HP)",
    "MP": "Magic Points (MP)",
    "ATK": "Attack (ATK)",
    "DEF": "Defense (DEF)",
    "MATK": "Magic Attack (MATK)",
    "MDEF": "Magic Defense (MDEF)",
    "SPD": "Speed (SPD)",
    "EVA": "Evasion (EVA)",
    "ACC": "Accuracy (ACC)",
    "CRT": "Critical (CRT)",
  }

  const statClassMap = {
    "HP":   "stat-hp",
    "MP":   "stat-mp",
    "ATK":  "stat-atk",
    "DEF":  "stat-def",
    "MATK": "stat-matk",
    "MDEF": "stat-mdef",
    "SPD":  "stat-spd",
    "EVA":  "stat-eva",
    "ACC":  "stat-acc",
    "CRT":  "stat-crt",
  }

  // We need to rework this again, it needs to handle when it gets small
  // and when it grows while keeping good spacing. I took about a 1hr crack
  // at it and couldn't get anything I liked so I'm moving on for now.
  // I think css grid is actually going to be the winner here.
  // break each of stat pieces into a grid then change the based on
  // screen size. I try again after.
  // - Aaron

  return (
    <div className={`product-stats ${className}`}>
      <h3>Stats</h3>
      {stats.map(([statName, statValue], index) => {
        return (
          <div key={index} className={`${statClassMap[statName]} product-stat`}>
            <p className="product-stat__name">{ statMap[statName] }</p>

            <div className="full-bar">
              <span className="stat-bar-filled" style={{width:`${statValue}%`}}>
                  {statValue}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
