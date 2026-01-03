type Props = {
  label: string;
  value: string;
  children?: React.ReactNode;
};

export default function Card({ label, value, children }: Props) {
  return (
    <div className="bg-white w-full h-40 md:h-28 lg:h-30 border border-stroke rounded-lg">
      <div className="flex py-6 px-4 sm:px-3 sm:py-4 lg:px-6 lg:py-5 size-full">
        <div className="flex flex-col basis-1/2 justify-between">
          <h4>{label}</h4>
          <h2>{value}</h2>
        </div>
        {children}
      </div>
    </div>
  );
}
