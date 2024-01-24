import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Header from '../components/Header';
import '../styles/pages/home.sass';

function Home() {
  const [searchTask, setSearchTask] = useState('');

  const isFavorite = true;

  const userData = JSON.parse(localStorage.getItem('userInfos'));
  return (
    <main>
      <Header
        name={userData.name}
        searchTask={searchTask}
        setSearchTask={setSearchTask}
      />
      <div className="task-creator">
        <div className="task-title-div">
          <input type="text" className="task-title" />
          {isFavorite ? (
            <FontAwesomeIcon icon={filledStar} className="fav-icon" />
          ) : (
            <FontAwesomeIcon icon={faStar} className="fav-icon" />
          )}
        </div>
        <hr />
        <textarea
          name="text"
          id=""
          cols="30"
          rows="15"
          className="task-description"
        />
      </div>
    </main>
  );
}

export default Home;
