import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../Hooks/useForm';
import { Button } from '../Form/Button/Button';
import { Input } from '../Form/Input/Input';
import { UserContext } from '../../UserContext';

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
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

        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};
