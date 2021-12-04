import React from 'react'
import './CustomTable.css'

export default function CustomTable() {
  return (
    <div className="customTable">
      <h3>Validation Stats</h3>
      <table class="table__fill">
        <thead>
          <tr>
            <th class="text__left"></th>
            <th class="text__left">Accuracy</th>
            <th class="text__left">TP</th>
            <th class="text__left">TN</th>
            <th class="text__left">FP</th>
            <th class="text__left">FN</th>
            <th class="text__left">Sensitivity</th>
            <th class="text__left">Specificity</th>
            <th class="text__left">Precision</th>
            <th class="text__left">FPR</th>
          </tr>
        </thead>
        <tbody class="table__hover">
          <tr>
            <th class="text__left" style={{
              color: 'white'
            }}>Normal</th>
            <td class="text__left">79.47%</td>
            <td class="text__left">1194</td>
            <td class="text__left">1235</td>
            <td class="text__left">179</td>
            <td class="text__left">310</td>
            <td class="text__left">0.86</td>
            <td class="text__left">0.87</td>
            <td class="text__left">0.87</td>
            <td class="text__left">0.12</td>
          </tr>
          <tr>
            <th class="text__left" style={{
              color: "white"
            }}>Pneumonia</th>
            <td class="text__left">84.11%</td>
            <td class="text__left">1235</td>
            <td class="text__left">1194</td>
            <td class="text__left">310</td>
            <td class="text__left">179</td>
            <td class="text__left">0.87</td>
            <td class="text__left">0.79</td>
            <td class="text__left">0.79</td>
            <td class="text__left">0.20</td>
          </tr>
        </tbody>
    </table>
    </div> 
  );
}