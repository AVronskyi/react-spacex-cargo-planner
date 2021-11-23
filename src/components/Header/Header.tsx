import React, { useContext } from 'react';
import { CargoContext } from '../../Context/CargoContext';
import './Header.scss'
import { getShipments } from '../../api/api'

export const Header: React.FC<{}> = () => {
  const { companies, setCompanies, setQuery, query } = useContext(CargoContext);
  
  const handleClickLoad = async () => {
    const companis = await getShipments();
    setCompanies(companis);
  };

  const handleClickSave = () => {
    localStorage.setItem('companies', JSON.stringify(companies));
  }
  
  return (
    <header className="header">
      <div className="header__brand">
        <h1>Cargo Planner</h1>
      </div>
      
      <form action="#" className="header__search">
        <input
          className="header__input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
        />
      </form>
      
      <div className="header__buttons">
        <button
          type="button"
          className="header__button-item"
          onClick={handleClickLoad}
        >
          Load
        </button>
        <button
          type="button"
          className="header__button-item"
          onClick={handleClickSave}
        >
          Save
        </button>
      </div>
    </header>
  )
}
