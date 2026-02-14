import { Banner } from "../types";

type BannerComponentProps = {
  banner: Banner;
};

export default function BannerComponent({ banner }: BannerComponentProps) {
  return (
    <div className="relative w-full h-[286px] object-cover overflow-hidden">
      <div className="absolute inset-0 flex h-full justify-center items-center">
        <div className="flex flex-col justify-center h-full p-8 w-full max-w-7xl gap-8">
          <h1 className="not-md:hidden">{banner.title}</h1>
          <h2 className="md:hidden title">{banner.title}</h2>
          <p className="body lg:max-w-1/2">{banner.description}</p>
        </div>
      </div>
      <img
        src={banner.image}
        alt="Collection Card"
        className={`size-full object-cover`}
      />
    </div>
  );
}
