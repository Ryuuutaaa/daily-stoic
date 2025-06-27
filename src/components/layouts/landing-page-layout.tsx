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
  className,
}: AppLayoutProps): JSX.Element => {
  return (
    <>
        
    </>
  );
};

export default LandingPageLayout;
