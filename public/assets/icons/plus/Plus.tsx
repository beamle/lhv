import s from "./Plus.module.scss";

export const Plus = () => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={s.plusIcon}
    >
      <path
        d="M20 10C20 15.2481 15.7465 19.5 10.5 19.5C5.25264 19.5 1 15.2482 1 10C1 4.75435 5.25272 0.5 10.5 0.5C15.7464 0.5 20 4.75437 20 10Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={s.plusOutline}
      />
      <path
        d="M10.5 5.28601V14.7141"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={s.plusLine}
      />
      <path d="M15.214 10.0001H5.78595" className={s.plusLine} />
    </svg>
  );
};
