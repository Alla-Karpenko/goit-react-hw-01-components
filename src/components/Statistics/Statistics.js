import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';


const Statistics = ({ title, stats }) => (
  <section className={styles.Statistics}>
    {title && <h2 className={styles.Title}>{title}</h2>}
    <ul className={styles.statList}>
      {stats.map(stat => (
        <li className={styles.Item } 
          key={stat.id}
        >
          <span className='Label'>{stat.label}</span>
          <span className={styles.Percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ),
  };

export default Statistics;