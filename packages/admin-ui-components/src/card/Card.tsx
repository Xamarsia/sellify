type Props = {
  label: string;
  value: string;
  children?: React.ReactNode;
};

export default function Card({ label, value, children }: Props) {
  return (
    <div className="bg-white w-full h-48 md:w-[280px] md:h-28 border border-stroke rounded-lg">
      <div className="flex py-8 px-9 md:py-6 md:px-7 size-full">
        <div className="flex flex-col basis-1/2 justify-between">
          <h4>{label}</h4>
          <h2>{value}</h2>
        </div>
        {children}
      </div>
    </div>
  );
}
