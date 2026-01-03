type ChartProps = {
  style?: string;
};

export default function DefaultChart({ style }: ChartProps) {
  return (
    <svg
      width="74"
      height="30"
      viewBox="0 -4 74 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${style}`}
    >
      <path
        d="M1 16.7637C3.01238 17.5986 8.3839 17.5379 13.7709 10.6156C20.5046 1.96277 28.0697 4.65712 35.5 14.4485C42.9303 24.2399 50.5 20.4485 54.4056 15.1698C63.6045 2.73659 65 1.5 77 2.4485"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M68 4C68 6.20914 66.2091 8 64 8C61.7909 8 60 6.20914 60 4C60 1.79086 61.7909 0 64 0C66.2091 0 68 1.79086 68 4Z"
        fill="currentColor"
      />
    </svg>
  );
}
