import { ChangeEvent, useState } from "react";
import styles from "./Login.module.css";
import { Input } from "../../common";
import Button from "../../common/buttons/Button/Button";

const Login = () => {
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  return (
    <div className={styles.container}>
      <div className={styles.login__container}>
        <h2>My awesome app</h2>
        <div className={styles.login__form}>
          <div className={styles.login__input_container}>
            <Input
              helperText="Username doesn't exist"
              placeholder="username"
              value={formValues.username}
              type="text"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFormValues({ ...formValues, username: e.target.value })
              }
            />
          </div>
          <div className={styles.login__input_container}>
            <Input
              helperText="Invalid password"
              placeholder="password"
              value={formValues.password}
              type="password"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFormValues({ ...formValues, password: e.target.value })
              }
            />
          </div>
          <Button>Sign in</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
