import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import styles from "./FormEmail.module.css";
import Link from "next/link";

interface FormEmailProps {
  setEmail: Dispatch<SetStateAction<string>>;
  setWhichForm: Dispatch<SetStateAction<string>>;
}

const FormEmail: FC<FormEmailProps> = ({ setEmail, setWhichForm }) => {
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDate = new FormData(event.currentTarget);
    setEmail((e) => (e = formDate.get("email") as string));
    setWhichForm("password");
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
          <h2>Sign In</h2>
          <p>Use your Google Account</p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="inputBox">
            <input
              type="text"
              name="email"
              pattern="^([0-9]{9,11})|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,3})$"
              required
            />
            <label>Email or phone</label>
          </div>
          <div className="link5">
            <p>
              Don't you have this coomputer? Use guest mode to log in privately
              <br></br>
              <a href="">"Learn more about using guest mode"</a>
            </p>
          </div>
          <span className="for">
            {" "}
            <Link href="/forgot">Forgot password?</Link>
          </span>
          <input type="submit" name="sign-in" value="Next" />
        </form>
      </div>
      <div className="footer"></div>
    </div>
  );
};
export default FormEmail;
