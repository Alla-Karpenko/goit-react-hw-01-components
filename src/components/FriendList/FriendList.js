import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  
    <ul className={styles.friendList}>
        {friends.map(({ avatar, name, isOnline }) => (
        <li className={styles.friendItem} key={name}>
           <span className={ isOnline ? styles.isOnline : styles.isOffline }></span>

           <img className={styles.avatar} src={avatar} alt="" width="60" />
           <p className={styles.name}>{name}</p>
         </li>
        ))}
    </ul>
  
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }),
      ),
    };

export default FriendList;