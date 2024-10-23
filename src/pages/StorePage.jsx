import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import Product from '../components/product/Product';

const products = [
  {
    id: 1,
    name: 'product1',
    description: 'product description',
    price: '20',
  },
  {
    id: 2,
    name: 'product2',
    description: 'productdescrioption',
    price: '20',
  },
  {
    id: 3,
    name: 'product3',
    description: 'productdescrioption',
    price: '20',
  },
];

const StorePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    // we navigate from route
    // if (!location.state) navigate('/login');
    setUser(location.state);
  }, [location, user]);
  // console.log('user', user);

  return (
    <div>
      <button onClick={() => navigate('/')}>Logout</button>

      {products.map(product => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default StorePage;
