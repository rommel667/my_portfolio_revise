import React, { useContext } from 'react'
import Hero from './components/Hero';
import Layout from './components/Layout';
import { ThemeContext } from './components/Theme';


const App = () => {

  const [ darkMode, toggleMode ] = useContext(ThemeContext)

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Layout>
        <Hero />
      </Layout>
    </div>
  );
}

export default App;
