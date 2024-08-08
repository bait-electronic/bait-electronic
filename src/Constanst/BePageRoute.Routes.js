import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../Pages/NotFound/NotFound";
import HomePage from "../Pages/HomePage/HomePage";
import IntroductionOfProductPage from "../Pages/IntroductionOfProductPage/IntroductionOfProductPage";
import AboutUsPage from "../Pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "../Pages/ContactUsPage/ContactUsPage";
import ArticlesPage from "../Pages/ArticlesPage/ArticlesPage";
import LastEventPage from "../Pages/HomePage/LastEventPage/LastEventPage";
import CityProjectPage from "../Pages/HomePage/CityProjectPage/CityProjectPage";

function BePageRoute() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/last-event-page" element={<LastEventPage />} />
        </Route>
        <Route path="/city-project-page">
          <Route index element={<HomePage />} />
          <Route
            path="/city-project-page/:city"
            element={<CityProjectPage />}
          />
        </Route>
        <Route path="/last-event-page">
          <Route index element={<HomePage />} />
          <Route path="/last-event-page/:eventId" element={<LastEventPage />} />
        </Route>
        <Route path="/about-us-page" element={<AboutUsPage />} />
        <Route path="/contact-us-page" element={<ContactUsPage />} />
        <Route path="/articles-page" element={<ArticlesPage />} />
        <Route
          path="/introduction-of-product-page"
          element={<IntroductionOfProductPage />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default BePageRoute;
