import { JSX } from "react";
import Header from "../common/landing-page/Header";

interface AppLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  isUsingBanner?: boolean;
  isHasBackground?: boolean;
  contents?: {
    heading?: string;
    subHeading?: string;
    description?: string;
    ctaText?: string;
  };
}

const LandingPageLayout = ({
  children,
  isHasBackground = false,
  isUsingBanner = false,
  contents,
}: AppLayoutProps): JSX.Element => {
  return (
    <>
      <Header isHasBackground={isHasBackground} />

      <main>
        {isUsingBanner ? (
          <>
            <section
              className="relative w-full rounded-none bg-fixed bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_a_data_science_project.jpg",
              }}
            >
              <div className="flex flex-col items-center justify-center h-full min-h-[50vh] mdmin-h-[60vh] text-white select-none py-12 px-4 text-center">
                <h6 className="text-base md:text-xl font-medium md:font-bold pb-3 leading-7">
                  {contents?.heading || "Welcome to the Data Science Hub"}
                </h6>
                <h1 className="text-[2.87rem] md:text-[3.75rem] font-black leading-[1.2] pb-4 tracking-[0.02em] md:tracking-[0.03em]">
                  {contents?.heading || "Welcome to the Data Science Hub"}
                </h1>
                <p className="text-lg max-w-2xl mb-6">
                  {contents?.description || "Welcome to the Data Science Hub"}
                </p>

                {contents?.ctaText && (
                  <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                    {contents?.ctaText}
                  </button>
                )}
              </div>
            </section>
          </>
        ) : (
          <>{children}</>
        )}
      </main>
    </>
  );
};

export default LandingPageLayout;
