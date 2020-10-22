import React from 'react';
import Layout from './layouts/Layout';
import "./styles/app.scss";
import Home from './views/Home';

function App() {


  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>

    </div>
  );
}

export default App;
