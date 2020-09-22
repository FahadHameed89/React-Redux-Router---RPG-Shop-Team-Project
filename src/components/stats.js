// import React, {useState} from 'react';
// import StatInfo from './equipment.json';

// function Statistics() 
// {
//     return (
//         <>
//         <section className="statistics">
//             <div className="content-wrapper">
//                 <p>health points (hp): </p>
//                 <div className="full-bar">
//                     {StatInfo.map((statDetail, index) => {
//                         return (
//                             <p className="hp-amount" key={index} style={{width:`${statDetail.stats.HP}%`}}>
//                                 {statDetail.stats.HP} 
//                             </p>
//                         )
//                     })}
//                 </div> 
//             </div>
//         </section>

//         <section className="statistics">
//             <div className="content-wrapper">
//                 <p>magic points (mp): </p>
//                 <div className="full-bar">
//                     {StatInfo.map((statDetail, index) => {
//                         return (
//                             <p className="mp-amount" key={index} style={{width:`${statDetail.stats.MP}%`}}>
//                                 {statDetail.stats.MP} 
//                             </p>
//                         )
//                     })}
//                 </div> 
//             </div>
//         </section>

//         <section className="statistics">
//             <p>attack (atk): </p>
//             <div className="full-bar">
//                 {StatInfo.map((statDetail, index) => {
//                     return (
//                         <p className="attack-amount" key={index} style={{width:`${statDetail.stats.ATK}%`}}>
//                             {statDetail.stats.ATK} 
//                         </p>
//                     )
//                 })} 
//             </div>
//         </section>

//         <section className="statistics">
//             <p>defense (def): </p>
//             <div className="full-bar">
//                 {StatInfo.map((statDetail, index) => {
//                     return (
//                         <p className="defense-amount" key={index} style={{width:`${statDetail.stats.DEF}%`}}>
//                             {statDetail.stats.DEF} 
//                         </p>
//                     )
//                 })} 
//             </div>
//         </section>

//         <section className="statistics">
//             <p>magic attack (matk): </p>
//             <div className="full-bar">
//                 {StatInfo.map((statDetail, index) => {
//                     return (
//                         <p className="magic-attack-amount" key={index} style={{width:`${statDetail.stats.MATK}%`}}>
//                             {statDetail.stats.MATK} 
//                         </p>
//                     )
//                 })} 
//             </div>
//         </section>

//         <section className="statistics">
//             <p>magic defense (mdef): </p>
//             <div className="full-bar">
//                 {StatInfo.map((statDetail, index) => {
//                     return (
//                         <p className="attack-amount" key={index} style={{width:`${statDetail.stats.MDEF}%`}}>
//                             {statDetail.stats.MDEF} 
//                         </p>
//                     )
//                 })} 
//             </div>
//         </section>

//         <section className="statistics">
//             <p>speed: </p>
//             <div className="full-bar">
//                 {StatInfo.map((statDetail, index) => {
//                     return (
//                         <p className="speed-amount" key={index} style={{width:`${statDetail.stats.SPD}%`}}>
//                             {statDetail.stats.SPD} 
//                         </p>
//                     )
//                 })} 
//             </div>
//         </section>

//         <section className="statistics">
//             <p>evasion: </p>
//             <div className="full-bar">
//                 {StatInfo.map((statDetail, index) => {
//                     return (
//                         <p className="evasion-amount" key={index} style={{width:`${statDetail.stats.EVA}%`}}>
//                             {statDetail.stats.EVA} 
//                         </p>
//                     )
//                 })} 
//             </div>
//         </section>

//         <section className="statistics">
//             <p>accuracy: </p>
//             <div className="full-bar">
//                 {StatInfo.map((statDetail, index) => {
//                     return (
//                         <p className="accuracy-amount" key={index} style={{width:`${statDetail.stats.ACC}%`}}>
//                             {statDetail.stats.ACC} 
//                         </p>
//                     )
//                 })} 
//             </div>
//         </section>

//         <section className="statistics">
//             <p>critical: </p>
//             <div className="full-bar">
//                 {StatInfo.map((statDetail, index) => {
//                     return (
//                         <p className="critical-amount" key={index} style={{width:`${statDetail.stats.CRT}%`}}>
//                             {statDetail.stats.CRT} 
//                         </p>
//                     )
//                 })} 
//             </div>
//         </section>
//         </>
//     )
// }

// export default Statistics;