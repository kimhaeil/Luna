import logo from './logo.svg';
import './App.css';

import ItemList from './components/ItemList';
import Categories from './components/Categories';
import { useCallback, useState } from 'react';

const App = () => {
  const [category, setCategory] = useState(null);
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <ItemList category={category} />;
    </>
  );
};

export default App;
