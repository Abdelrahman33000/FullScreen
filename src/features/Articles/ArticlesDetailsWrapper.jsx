import { ArticleDetails, HeroSection } from "./components";

export const ArticlesDetailsWrapper = () => {
  return (
    <>
      <HeroSection withDetails={true} />
      <ArticleDetails />
    </>
  );
};
export default ArticlesDetailsWrapper;
