import s from "./Bin.module.scss";

export const Bin = () => {
  return (
    <svg
      className={s.bin}
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className={s.circleOutline} cx="10.5" cy="10" r="9" />
      <path
        className={s.innerIcon}
        d="M13.7407 15.4167H7.25925L6.33333 6.25H14.6667L13.7407 15.4167Z"
        stroke="#3B3B47"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={s.innerIcon}
        d="M12.1667 6.24998H8.83333V4.58331H12.1667V6.24998Z"
        stroke="#3B3B47"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={s.innerIcon}
        d="M5.08333 6.24998H15.9167"
        stroke="#3B3B47"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={s.innerIcon}
        d="M8.83333 8.75V12.0833"
        stroke="#3B3B47"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={s.innerIcon}
        d="M10.5 8.75V12.0833"
        stroke="#3B3B47"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={s.innerIcon}
        d="M12.1667 8.75V12.0833"
        stroke="#3B3B47"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={s.innerIcon}
        d="M20 10C20 15.2481 15.7465 19.5 10.5 19.5C5.25263 19.5 0.999992 15.2482 0.999992 10C0.999992 4.75435 5.25271 0.5 10.5 0.5C15.7464 0.5 20 4.75437 20 10Z"
        stroke="#3B3B47"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
