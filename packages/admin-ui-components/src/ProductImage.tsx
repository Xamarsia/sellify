import XMark from "@sellify/common-icons/x-mark";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";

type Props = {
  src: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function ProductImage({ src, onClick }: Props) {
  return (
    <div className="relative size-56 rounded-md">
      <div className="absolute hover:bg-black/20 hover:backdrop-blur-[2px] size-56 rounded-md ">
        <div className="absolute top-0 right-0 m-1">
          <TransparentIconButton onClick={onClick} variant="white">
            <XMark style="size-6" />
          </TransparentIconButton>
        </div>
      </div>
      <img
        className={`size-full object-cover rounded-md`}
        src={src}
        alt="Product image"
      />
    </div>
  );
}
