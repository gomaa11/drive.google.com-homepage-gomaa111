import { Dispatch, FC, MouseEventHandler, SetStateAction } from "react";
import Link from "next/link";
interface EndProps {
  email: string;
  setWhichForm: Dispatch<SetStateAction<string>>;
}
const End: FC<EndProps> = ({ email, setWhichForm }) => {
  const handlerClick: MouseEventHandler<HTMLButtonElement> = () => {
    setWhichForm("email");
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
          <form></form>
          <h4>An error occurred, please try again</h4>

          <button onClick={handlerClick} className="tray" name="sign-in">
            Try again
          </button>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};
export default End;
