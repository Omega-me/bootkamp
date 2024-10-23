/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router';

const Product = ({ id, name, description, price }) => {
  const nav = useNavigate();

  return (
    <>
      <div>
        <p> Id : {id} </p>
        <p> Name : {name}</p>
        <p> Desc : {description}</p>
        <p> price: {price}</p>
      </div>
      <button
        onClick={() =>
          nav(`/store/${name}`, {
            state: { id, description, price, path: `/store/${name}` },
          })
        }>
        Show more
      </button>
    </>
  );
};

export default Product;
