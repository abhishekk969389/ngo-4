import Banner from "@/app/components/ui/banner";
import ImagesGallery from "@/app/components/layout/gallery/imagesgallery";
import VideosGallery from "@/app/components/layout/gallery/videosgallery";
import HomeCta from "@/app/components/ui/homecta";

export default function GalleryPage() {
  return (
    <>
      <Banner pageKey="gallery" />
      <ImagesGallery />
      <VideosGallery />
      <HomeCta />
    </>
  );
}
