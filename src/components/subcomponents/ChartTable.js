import React from 'react'
import './ChartTable.css'

export default function ChartTable() {
  return (
    <div className="chartTable">
      <table class="chart__fill">
        <thead>
          <tr>
            <th class="chart__left">
                <h4>Training Set</h4>
                <h3>hospital_12</h3>
            </th>
            <th class="chart__left">
            
                <h3>Population Composition</h3>
            </th>
            <th class="chart__left">
                <h4>Validation Set</h4>
                <h3>db-img-mnist</h3>
            </th>
          </tr>
        </thead>
        <tbody class="chart__hover">
          <tr>
            <td class="chartText__left">60%</td>
            <td class="chartText__left">Non-Hispanic White</td>
            <td class="chartText__left">42%</td>
          </tr>
          <tr>
            <td class="chartText__left">18%</td>
            <td class="chartText__left">Hispanic and Latino</td>
            <td class="chartText__left">36%</td>
          </tr>
          <tr>
            <td class="chartText__left">12%</td>
            <td class="chartText__left">Black or African American</td>
            <td class="chartText__left">11%</td>
          </tr>
          <tr>
            <td class="chartText__left">8%</td>
            <td class="chartText__left">Asian</td>
            <td class="chartText__left">5%</td>
          </tr>
          <tr>
            <td class="chartText__left">2%</td>
            <td class="chartText__left">Other</td>
            <td class="chartText__left">6%</td>
          </tr>
        </tbody>
    </table>
    </div> 
  );
}