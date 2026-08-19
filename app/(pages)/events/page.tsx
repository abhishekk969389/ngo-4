import Banner from "@/app/components/ui/banner";
import EventSection from "@/app/components/layout/events/eventsec";
import UpcomingEvent from "@/app/components/layout/events/upcomingevent";
import HomeCta from "@/app/components/ui/homecta";

export default function EventPage() {
  return (
    <>
      <Banner pageKey="events" />
      <EventSection />
      <UpcomingEvent />
      <HomeCta />
    </>
  );
}
