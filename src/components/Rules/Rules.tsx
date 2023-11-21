import { FC, useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./Rules.module.scss";
import { RulesSvg } from "./RulesSvg";

export const Rules: FC = () => {
  const [show, setShow] = useState(false);
  const escapeListener = useCallback(
    (e: KeyboardEvent) => e.key === "Escape" && setShow(false),
    [setShow]
  );

  useEffect(() => {
    document.addEventListener("keydown", escapeListener);
    return () => document.removeEventListener("keydown", escapeListener);
  }, [escapeListener]);

  return (
    <>
      <button className={styles.button} onClick={() => setShow(true)}>
        Rules
      </button>
      <div
        className={classNames(styles.backdrop, show && styles.show)}
        onClick={() => setShow(false)}
      >
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            <h2 className={styles.label}>Rules</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className={styles.closeIcon}
              onClick={() => setShow(false)}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.0919 2.12132L16.9706 0L9.54594 7.42462L2.12132 0L0 2.12132L7.42462 9.54594L0 16.9706L2.12132 19.0919L9.54594 11.6673L16.9706 19.0919L19.0919 16.9706L11.6673 9.54594L19.0919 2.12132Z"
                fill="#3B4262"
              />
            </svg>
          </div>
          <RulesSvg className={styles.rules} />
        </div>
      </div>
    </>
  );
};
