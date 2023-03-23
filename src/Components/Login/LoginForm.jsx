import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../Hooks/useForm';
import { Button } from '../Form/Button/Button';
import { Input } from '../Form/Input/Input';
import { UserContext } from '../../UserContext';
import { Error } from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../../Components/Form/Button/Button.module.css';
import { Head } from '../Helper/Head';

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section className="animeLeft">
      <Head title="Login" />

      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          id="usuario"
          type="text"
          name="username"
          {...username}
        />
        <Input
          label="Senha"
          id="senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados Incorretos.'} />
      </form>
      <Link to="/login/perdeu" className={styles.perdeu}>
        Perdeu a Senha ?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};
