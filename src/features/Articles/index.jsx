import { HeroSection, LatestArticles } from "./components";

export const ArticlesWrapper = () => {
  return (
    <>
      <HeroSection withBrief={true} />
      <LatestArticles />
    </>
  );
};
export default ArticlesWrapper;
