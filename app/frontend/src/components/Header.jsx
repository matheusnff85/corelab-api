import {
  faMagnifyingGlass,
  faNoteSticky,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import '../styles/components/header.sass';

function Header({ name, searchTask, setSearchTask }) {
  return (
    <header className="header">
      <div className="left-itens">
        <FontAwesomeIcon icon={faNoteSticky} className="header-icon" />
        <p className="header-title">CoreNotes</p>
        <div className="search">
          <input
            type="text"
            value={searchTask}
            placeholder="Pesquise aqui..."
            onChange={({ target: { value } }) => setSearchTask(value)}
          />
          <button className="search-btn" type="button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
      <div className="right-itens">
        <h3 className="user-name">{name}</h3>
        <button className="logout-btn">X</button>
      </div>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  searchTask: PropTypes.string.isRequired,
  setSearchTask: PropTypes.func.isRequired,
};

export default Header;
