/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import style from './SearchBar.module.css';

function SearchBar(props) {
  const { submit, placeholder } = props;
  const [searchTerm, setSearchTerm] = useState('');

  const submitForm = (element) => {
    element.preventDefault();
    submit(searchTerm);
  };

  const html = (
    <form className={style.search_bar} onSubmit={submitForm}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={style.input}
      />
      <BsSearch onClick={submitForm} className={style.button} />
    </form>
  );

  return html;
}

SearchBar.propTypes = {
  submit: PropTypes.func,
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  submit: '',
  placeholder: '',
};

export default SearchBar;
