import { FC } from "react";
import styles from "./Loading.module.css";
const Loading: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loading}>
        <div className={styles.showbox}>
          <div className={styles.loader}>
            <svg className={styles.circular} viewBox="25 25 50 50">
              <circle
                className={styles.path}
                cx="50"
                cy="50"
                r="20"
                fill="none"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loading;
