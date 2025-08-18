type ChartProps = {
  style?: string;
};

export default function NegativeChart({ style }: ChartProps) {
  return (
    <svg
      width="90"
      height="39"
      viewBox="0 0 90 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${style}`}
    >
      <g filter="url(#filter0_d_27_324)">
        <path
          d="M5 30C8.30887 29.2996 15.7585 25.5427 21.4705 16.0631C22.8372 13.7948 24.1231 11.4473 25.9131 9.49563C35.8031 -1.28757 49.1672 -3.6372 62.1069 13.3392C73.3774 28.1257 82.065 27.8306 85 25.8348"
          stroke="currentColor"
          strokeWidth="2"
        />
      </g>
      <path
        d="M72.6191 20C74.1254 20 75.4287 21.2966 75.4287 23C75.4287 24.7034 74.1254 26 72.6191 26C71.1129 26 69.8096 24.7034 69.8096 23C69.8096 21.2966 71.1129 20 72.6191 20Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
