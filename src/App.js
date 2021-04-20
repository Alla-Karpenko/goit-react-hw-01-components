import React from 'react';
import user from './user.json';
import Profile from './components/Profile';
import statisticalData from './statistical-data.json';
import Statistics from './components/Statistics';
//import StatisticsList from './components/StatisticsList';


const App = () => {
    return (
        <div>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
           
            <Statistics stats={statisticalData} />
          
        </div>
    );
  
};



export default App;