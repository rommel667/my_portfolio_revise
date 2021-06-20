import React, { useContext } from 'react'
import { ThemeContext } from './components/Theme';

const App = () => {

  const [ darkMode, toggleMode ] = useContext(ThemeContext)

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      Hello
    </div>
  );
}

export default App;
