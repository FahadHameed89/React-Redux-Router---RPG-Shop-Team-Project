import React from 'react';
import './product.css';


export default (props) => {
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
    "CRT": "Critical Hit Chance (CRT)",
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

  return (
    <div class="product-stats">
      {stats.map(([statName, statValue], index) => {
        return (
          <div key={index} className={`${statClassMap[statName]} product-stat`}>
            <p>{ statMap[statName] }</p>
            <div className="full-bar">
              <p className="stat-bar-filled" style={{width:`${statValue}%`}}>
                  {statValue}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
