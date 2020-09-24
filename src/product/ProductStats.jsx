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

  const iconMap = {
    "HP": "heart.svg",
    "MP": "magic.svg",
    "ATK": "attack.svg",
    "DEF": "defense.svg",
    "MATK": "magic-attack.svg",
    "MDEF": "magic-defense.svg",
    "SPD": "speed.svg",
    "EVA": "evasion.svg",
    "ACC": "accuracy.svg",
    "CRT": "critical.svg",
  }

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

  return (
    <div className={`product-stats ${className}`}>
      <h3>Stats</h3>
      {stats.map(([statName, statValue], index) => {
        return (
          <div key={index} className={`${statClassMap[statName]} product-stat`}>
            <p className="product-stat__name">
              <img src={`/imgs/stat-icons/${iconMap[statName]}`} />
              { statMap[statName] }
            </p>

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
