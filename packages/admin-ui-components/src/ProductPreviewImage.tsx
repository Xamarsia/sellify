type Props = {
  src: string;
};

export default function ProductPreviewImage({ src }: Props) {
  return (
    <div className="relative size-[76px] rounded-md">
      <img
        src={src}
        alt="Product preview image"
        className={`size-full object-cover rounded-md`}
      />
    </div>
  );
}
