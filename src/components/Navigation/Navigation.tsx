import React, { useContext, useState } from 'react';
import {
  Routes,
  NavLink,
  Route,
} from "react-router-dom";

import { CargoContext } from '../../Context/CargoContext';
import { ShipmentInfo } from '../Main/ShipmentInfo';
import './Navigation.scss';

interface Company {
  id: string,
  name: string,
  email: string,
  boxes: string,
}

export const Navigation: React.FC<{}> = () => {
  const { companies, query } = useContext(CargoContext);
  const [ company, setCompany] = useState<Company>();

  const sortedCompanis = companies.filter((company: Company) =>
    company.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="main">
      <nav className="companies__container">
        <ul className="companies__List">
          {!sortedCompanis.length && <h3>Please load the company</h3>}
          {sortedCompanis.map((company: Company) => (
            <li
              className="companies__item"
              key={company.id}
              onClick={() => {
                setCompany(company)
              }}
            >
              <NavLink
                to={`/${company.id}`}
              >
              {company.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Routes>
          {sortedCompanis.map((company: Company) => (
            <Route
              key={company.id}
              path={`/${company.id}`}
            />
          ))}
        </Routes>
      </nav>
      {company && (
        <ShipmentInfo company={company}
        />
      )}
    </div>
  )
}
