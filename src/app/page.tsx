import LandingPageLayout from "@/components/layouts/landing-page-layout";
import Hero from "@/components/modules/landing-page/hero";
import Psychology from "@/components/modules/landing-page/psychology";
import Philosopher from "@/components/modules/landing-page/who-is-philosopher";

const Home = () => {
  return (
    <LandingPageLayout>
      <Hero />
      <Philosopher />
      <Psychology />
    </LandingPageLayout>
  );
};

export default Home;
