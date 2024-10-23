import { useLocation, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const ProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const location = useLocation();
  const { productSlug } = useParams();
  console.log(productSlug);

  //Query string format
  // http://localhost:5173/store/product1?sort=desc

  const [product, setProduct] = useState(null);
  useEffect(() => {
    console.log(location.state);
    if (location.state !== null) {
      setProduct(location.state);
    }
  }, [location]);
  return (
    <div>
      <p> Id : {product?.id} </p>
      <p> Name : {productSlug}</p>
      <p> Desc : {product?.description}</p>
      <p> price: {product?.price}</p>
      <p> Path: {product?.path}</p>
    </div>
  );
};

export default ProductPage;
