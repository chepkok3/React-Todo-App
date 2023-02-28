/* eslint-disable no-alert, no-console */
import { useState } from 'react';
import styles from '@/styles/Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    console.log(username);
  };

  return (
    <main>
      <div className="container padding">
        <h1 style={{ margin: '2rem 0' }}>Login.</h1>
        <div className={styles.formWrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button type="button">Login</button>
          </form>
        </div>
      </div>
    </main>
  );
};
export default Login;
