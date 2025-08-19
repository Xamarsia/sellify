type Props = {
  label: string;
  value: string;
  children?: React.ReactNode;
};

export default function Card({ label, value, children }: Props) {
  return (
    <div className="bg-white w-[280px] h-[112px] border border-stroke rounded-lg">
      <div className="flex py-[24px] px-[28px] size-full ">
        <div className="flex flex-col basis-1/2 justify-between">
          <h4>{label}</h4>
          <h2>{value}</h2>
        </div>
        {children}
      </div>
    </div>
  );
}
