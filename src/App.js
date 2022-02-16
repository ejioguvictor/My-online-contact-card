import React from 'react';
import Info from './components/Info';
import Footer from './components/Footer';
import About from './components/About';
import Interests from './components/Interests';
import styles from './index.module.scss'


function App() {
  return (
    <div className={styles.container}>
      <Info />,
      <About />,
      <Interests />,
      <Footer />
    </div>
  );
}

export default App;
