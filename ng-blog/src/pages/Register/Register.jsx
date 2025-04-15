import { useStage, useEffect } from "react";

// CSS
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.register}>
      <h1>Cadastre-se</h1>
      <p>Crie seu usuário para compartilhar suas historias ng!</p>
      <form>
        <label>
          <span>Nome: </span>
          <input type="text" name="displayName" required />
        </label>
        <label>
          <span>E-mail: </span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Senha: </span>
          <input type="password" name="password" required />
        </label>
        <label>
          <span>Confirmação de senha: </span>
          <input type="password" name="confirmPassword" required />
        </label>
        <button className="btn">Cadastrar-se</button>
      </form>
    </div>
  );
};

export default Register;
