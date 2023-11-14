import React from 'react';
import styles from './app.module.css';

function App() {
  return (
    <div>
    <h1 className={styles.heading}>Привет, мир! 👋</h1>
    <p className={styles.text}>Это мое первое приложение на React.</p>
  </div>
  );
}

export default App;
