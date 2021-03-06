import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import FilterTab from './components/FilterTab';
import InfoCard from './components/InfoCard';
import CardContainer from './components/CardContainer';
import Stats from './components/subcomponents/Stats';
import StatsPredict from './components/StatsPredict';
import Chart from './components/Chart';
import ChartOne from './components/ChartOne';
import React, {useEffect, useState} from 'react';
import axios from './axios';
function App() {


  return (
    <div className="app">
      <NavBar />
      <FilterTab />
      <InfoCard />
      <CardContainer />
      <StatsPredict />
      <ChartOne />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Chart />
      </div>
      
    </div>
  );
}

export default App;
