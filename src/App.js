import React, { useContext } from 'react'
import Hero from './components/Hero';
import Layout from './components/Layout';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import { ThemeContext } from './components/Theme';



const App = () => {

  const [darkMode, toggleMode] = useContext(ThemeContext)

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Layout>
        <Hero />
        <Projects/>
        <Technologies />
      </Layout>
    </div>
  );
}

export default App;
