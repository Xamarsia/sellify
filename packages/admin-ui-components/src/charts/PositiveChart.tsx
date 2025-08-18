type ChartProps = {
  style?: string;
};

export default function PositiveChart({ style }: ChartProps) {
  return (
    <svg
      width="77"
      height="31"
      viewBox="0 0 77 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${style}`}
    >
      <path
        d="M1 23.3152C3.01238 24.1501 8.3839 24.0894 13.7709 17.1671C20.5046 8.51427 26.774 10.7913 34.2043 20.5827C41.6347 30.3741 46.743 35.156 54.4056 21.7213C62.0681 8.2866 62.9969 3.73248 76 1"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="65" cy="6" r="4" fill="currentColor" />
    </svg>
  );
}
