import LandingPageLayout from "@/components/layouts/landing-page-layout";
import Hero from "@/components/modules/landing-page/hero";
import Philosopher from "@/components/modules/landing-page/who-is-philosopher";

const Home = () => {
  return (
    <LandingPageLayout>
      <Hero />
      <Philosopher />
    </LandingPageLayout>
  );
};

export default Home;
