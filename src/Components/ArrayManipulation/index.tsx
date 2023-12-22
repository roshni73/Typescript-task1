import React, { useState, useMemo } from 'react';
import './index.css';

interface Tea {
  id: number;
  title: string;
  price: number;
  description: string;
}

const teaList: Tea[] = [
    { id: 1, title: 'Green Tea', price: 5, description: 'green tea' },
    { id: 2, title: 'Black Tea', price: 7, description: 'black tea' },
    { id: 3, title: 'Milk Tea', price: 6, description: 'milk tea' },
    { id: 4, title: 'Fruit Tea', price: 8, description: 'fruit tea' },
    { id: 5, title: 'Herbal Tea', price: 10, description: 'herbal tea' },
];

const ArrayManipulation: React.FC = () => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(10);
  const [sortedTea, setSortedTea] = useState<Tea[]>(teaList);

  const filteredTea = useMemo(() => {
    return teaList.filter(tea => tea.price >= minPrice && tea.price <= maxPrice);
  }, [minPrice, maxPrice]);

  const sortedAndFilteredTea = useMemo(() => {
    return [...filteredTea].sort((a, b) => a.price - b.price);
  }, [filteredTea]);

  const MaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
  };

  const MinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };

  const filterTea = () => {
    setSortedTea(sortedAndFilteredTea);
  };

  const resetFilters = () => {
    setMinPrice(0);
    setMaxPrice(10);
    setSortedTea(teaList);
  };

  return (
    <>
    <div className="array-manipulation">
      <h1>Array-Manipulation</h1>
      <div className="filter-section">
        <label>
          Min Price:
          <input type="number" value={minPrice} onChange={MaxPriceChange} />
        </label>
        <label>
          Max Price:
          <input type="number" value={maxPrice} onChange={MinPriceChange} />
        </label>
        <div className='button'>
            <button onClick={filterTea}><img width="20" height="20" src="https://img.icons8.com/material-outlined/24/filtered-file.png" alt="filtered-file"/></button>
            <button onClick={resetFilters}><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/recurring-appointment.png" alt="recurring-appointment"/></button>
        </div>
      </div>
      <table className="tea-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {sortedTea.map(tea => (
            <tr key={tea.id}>
              <td>{tea.title}</td>
              <td>${tea.price}</td>
              <td>{tea.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
    
  );
};

export default ArrayManipulation;
