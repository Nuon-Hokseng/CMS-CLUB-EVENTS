import Navigation from "@/components/navigation";
import TransparentHero from "@/components/transparent-hero";
import SectionOne from "@/components/section-one";
import SectionTwo from "@/components/section-two";
import SectionThree from "@/components/section-three";
import SectionFour from "@/components/section-four";
export default function Home() {
  const feature = [
  { name: "Pro Shop", image: "/shop.png", description: 'Find the latest golf gear and expert advice, all in one convenient stop.' },
  { name: "Clubhouse & Lounge", image: "/room.png", description: 'Unwind in style with fine dining, private lounges, and panoramic course views. ' },
  { name: "Driving Range & Practice Greens", image: "/car.png", description: 'Sharpen your skills with dedicated spaces for driving, chipping, and putting.'},
  { name: "Locker Rooms & Showers", image: "/lockerroom.png", description: 'Enjoy secure, comfortable facilities to refresh before or after your game.' },
];
  return (
    
    <div className="min-h-screen bg-background">
      <Navigation />
      <TransparentHero />
      <SectionOne features={feature} />
      <SectionTwo />
      <SectionThree />
      <SectionFour/>
    </div>
  );
}
