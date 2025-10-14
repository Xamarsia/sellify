type Props = {
  src: string;
};

export default function ProductImagePreview({ src }: Props) {
  return (
    <div className="relative size-24 aspect-square rounded-md shrink-0">
      <img
        src={src}
        alt="Product preview image"
        className={`size-full object-cover rounded-md`}
      />
    </div>
  );
}
