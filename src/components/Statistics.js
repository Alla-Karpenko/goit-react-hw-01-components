import React from 'react';
import PropTypes from 'prop-types';


const Statistics = ({title , stats}) => (
   
    <section className="statistics">
        <h2 className="title">{title}</h2>
      
        <ul className="stat-list">
          <li className="item">
            <span className="label">{stats.label}</span>
            <span className="percentage">{stats.percentage}</span>
          </li>
          <li className="item">
            <span className="label">{stats.label}</span>
            <span className="percentage">{stats.percentage}</span>
          </li>
          <li className="item">
            <span className="label">{stats.label}</span>
            <span className="percentage">{stats.percentage}</span>
          </li>
          <li className="item">
            <span className="label">{stats.label}</span>
            <span className="percentage">{stats.percentage}</span>
          </li>
        
        </ul>
    </section>

);

Statistics.defaultProps = {
    title: "Upload stats",
}

Statistics.prototype = {
   title: PropTypes.string,
  
}


export default Statistics;