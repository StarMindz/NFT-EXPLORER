/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import SearchBar from '../components/searchBar/SearchBar';
import SearchGrid from './SearchGrid';
import style from './styles.module.css';
import { fetchAsset } from '../redux/assets/assetSlice';

const SearchSection = () => {
  const dispatch = useDispatch();
  const defaultAddress = '0xF5FFF32CF83A1A614e15F25Ce55B0c0A6b5F8F2c';

  useEffect(() => {
    dispatch(fetchAsset(defaultAddress));
  }, [dispatch]);

  const submitForm = (searchTerm) => {
    dispatch(fetchAsset(searchTerm));
  };

  const html = (
    <div className={style.search_section} id="search">
      <h1 className={style.heading}>View Assets</h1>
      <SearchBar
        placeholder="Search By Address"
        submit={submitForm}
      />
      <SearchGrid />
    </div>
  );

  return html;
};

export default SearchSection;
