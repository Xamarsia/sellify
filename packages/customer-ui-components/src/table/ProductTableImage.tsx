type Props = {
  src: string;
};

export default function ProductPreviewTableImage({ src }: Props) {
  return (
    <div className="relative size-[76px] rounded-md shrink-0">
      <img
        src={src}
        alt="Product preview image"
        className={`size-full object-cover rounded-md`}
      />
    </div>
  );
}
