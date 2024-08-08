import React, { useEffect } from "react";
import "./ArticlesPage.scss";
import Footer from "../../Components/Global/Footer/Footer";
import MobMenu from "../../Components/Global/Menu/MobMenu/MobMenu";
import BEArticlesList from "../../Components/BEArticlesList/BEArticlesList";
import BEHeader from "../../Components/Global/BEHeader/BEHeader";

function ArticlesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="articles-page">
      <MobMenu />
      <BEHeader />
      <h3 className="articles-page__title">مقالات:</h3>
      <BEArticlesList />
      <Footer />
    </div>
  );
}

export default ArticlesPage;
