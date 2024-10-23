import Layout from '../components/layout/Layout';
import './App.css';

function App() {
  return (
    <div>
      <b>Hello</b> <br /> Refer to{' '}
      <a href="https://reactrouter.com/en/main" target="_blank">
        React router docs
      </a>{' '}
      for documentations <Layout>Hello from layout</Layout>
    </div>
  );
}

export default App;
