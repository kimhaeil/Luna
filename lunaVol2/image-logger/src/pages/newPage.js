import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import ItemList from '../components/ItemList';

const NewPage = () => {
  const params = useParams();
  const category = params.category || 'all';

  return (
    <>
      <Categories />
      <ItemList category={category} />
    </>
  );
};

export default NewPage;
