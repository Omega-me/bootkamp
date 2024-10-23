// import { useState } from 'react';
import { useNavigate } from 'react-router';
const user = { name: 'Sara', email: 'sm@test.com', number: '1235' };
const LoginPage = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleOnClick = () => {
    // setIsLsoggedIn(true);
    navigate('/store', { state: user });
  };

  const handleHomepage = () => {
    navigate('/');
  };

  return (
    <div>
      <button onClick={handleHomepage}>Homepage</button>
      <button onClick={handleOnClick}>Login</button>
    </div>
  );
};

export default LoginPage;
