type ProductImagePreviewProps = {
  src: string;
  size?: "default" | "large";
};

export default function ProductImageTableItem({
  src,
  size = "default",
}: ProductImagePreviewProps) {
  const sizeStyle = {
    default: "size-20",
    large: "size-24",
  }[size];

  return (
    <div className={`relative aspect-square rounded-md shrink-0 ${sizeStyle}`}>
      <img
        src={src}
        alt="Product preview image"
        className={`size-full object-cover rounded-md`}
      />
    </div>
  );
}
