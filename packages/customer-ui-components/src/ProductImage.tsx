type Props = {
    src: string;
};

export default function ProductImage({ src }: Props) {
    return (
        <div className="relative aspect-square rounded-md">
            <img
                src={src}
                alt="Product image"
                className={`size-full object-cover rounded-md`}
            />
        </div>
    );
}