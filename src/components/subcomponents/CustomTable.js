import React from 'react'
import './CustomTable.css'

export default function CustomTable() {
  return (
    <div className="customTable">
      <h3>Validation Stats</h3>
      <table class="table__fill" >
        <thead >
          <tr>
            <td class="text__topFirst" style={{ borderRadius: "6px 0px 0px 0px" }}></td>
            <td class="text__top">Accuracy</td>
            <td class="text__top">TP</td>
            <td class="text__top">TN</td>
            <td class="text__top">FP</td>
            <td class="text__top">FN</td>
            <td class="text__top">Sensitivity</td>
            <td class="text__top">Specificity</td>
            <td class="text__top">Precision</td>
            <td class="text__top" style={{
              borderRadius: "0px 6px 0px 0px",
              color: "white"
            }}>FPR</td>
          </tr>
        </thead>
        <tbody class="table__hover">
          <tr style={{ borderBottom: "1px solid #424C5D", borderTop:"1px solid #424C5D" }}>
            <td class="text__topFirst" style={{
              color: 'white',
            }}>Normal</td>
            <td class="text__bottom">79.47%</td>
            <td class="text__bottom">1194</td>
            <td class="text__bottom">1235</td>
            <td class="text__bottom">179</td>
            <td class="text__bottom">310</td>
            <td class="text__bottom">0.86</td>
            <td class="text__bottom">0.87</td>
            <td class="text__bottom">0.87</td>
            <td class="text__bottom">0.12</td>
          </tr>
          <tr>
            <td class="text__topFirst" style={{
              borderRadius: "0px 0px 0px 6px",
              color: "white"
            }}>Pneumonia</td>
            <td class="text__bottom">84.11%</td>
            <td class="text__bottom">1235</td>
            <td class="text__bottom">1194</td>
            <td class="text__bottom">310</td>
            <td class="text__bottom">179</td>
            <td class="text__bottom">0.87</td>
            <td class="text__bottom">0.79</td>
            <td class="text__bottom">0.79</td>
            <td class="text__bottom" style={{
              borderRadius: "0px 0px 6px 0px",
             
            }}>0.20</td>
          </tr>
        </tbody>
    </table>
    </div> 
  );
}