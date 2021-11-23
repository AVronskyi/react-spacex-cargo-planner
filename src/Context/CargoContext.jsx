import React, { useMemo, useState } from 'react'

export const CargoContext = React.createContext({
  companies: [],
  setCompanies: (a) => {},
  query: '',
  setQuery: (a) => {},
});

export const CargoProvider = ({ children }) => {
  const [companies, setCompanies] = useState(
    JSON.parse(localStorage.getItem('companies')) || []
  );
  const [query, setQuery] = useState('');


  const value = useMemo (() => {
    return {
      companies,
      setCompanies,
      query,
      setQuery
    };
  }, [companies, query]);

  return (
    <CargoContext.Provider value={value}>
      {children}
    </CargoContext.Provider>

  )
};
