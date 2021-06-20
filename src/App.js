import React, { useContext } from 'react'
import Hero from './components/Hero';
import Layout from './components/Layout';
import Projects from './components/Projects';
import { ThemeContext } from './components/Theme';


const App = () => {

  const [ darkMode, toggleMode ] = useContext(ThemeContext)

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Layout>
        <Hero />
        <Projects />
      </Layout>
    </div>
  );
}

export default App;
