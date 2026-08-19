import Banner from "@/app/components/ui/banner";
import MediaSection from "@/app/components/layout/media/mediasection";
import HomeCta from "@/app/components/ui/homecta";

export default function MediaPage() {
  return (
    <>
      <Banner pageKey="media" />
      <MediaSection />
      <HomeCta />
    </>
  );
}
