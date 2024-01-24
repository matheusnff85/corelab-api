import React, { useState } from 'react';
import Header from '../components/Header';

function Home() {
  const [searchTask, setSearchTask] = useState('');

  const userData = JSON.parse(localStorage.getItem('userInfos'));
  return (
    <main>
      <Header
        name={userData.name}
        searchTask={searchTask}
        setSearchTask={setSearchTask}
      />
      <div className="task-creator">
        <input type="text" />
        <hr />
        <textarea name="text" id="" cols="30" rows="15" />
      </div>
    </main>
  );
}

export default Home;
