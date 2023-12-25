export const ExpandMoreArrow = ({ className }: { className: string }) => {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask
        id="mask0_453_103"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="16"
      >
        <rect x="0.5" y="0.5" width="15" height="15" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_453_103)">
        <path
          d="M8 10.2965L4.25 6.5465L5.0465 5.75L8 8.7035L10.9535 5.75L11.75 6.5465L8 10.2965Z"
          fill="#3B3B47"
        />
      </g>
    </svg>
  );
};
