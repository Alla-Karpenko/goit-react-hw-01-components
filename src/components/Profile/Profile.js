import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({name, tag, location, avatar, stats: {followers, views, likes}}) => {
    return (
     <div className={styles.profile}>
     <div className={styles.description}>
      <img 
        src={avatar}
        alt="Аватар пользователя" width='100'
        className={styles.avatar}
      />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
     </div>
  
     <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className="quantity">{likes}</span>
      </li>
       </ul>
     </div>
    );
};


Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired), 
};


export default Profile;

