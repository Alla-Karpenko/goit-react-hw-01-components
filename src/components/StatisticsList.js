import React from 'react';
import Statistics from './components/Statistics';

const StatisticsList = () => {
    <ul>
        {stats.map((stat) => (
            <li key={stat.id}>
                  <Statistics 
                  title= {stat.title}
                  stats={stat.statisticalData} 
                  />;
                 
            </li>
        ))}
    </ul>
}


export default StatisticsList;