import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Routes from '../routes/Routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <b>Hello</b> <br /> Refer to{' '}
        <a href="https://reactrouter.com/en/main" target="_blank">
          React router docs
        </a>{' '}
        for documentations{' '}
        <Layout>
          <Routes />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
