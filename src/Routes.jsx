import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ProjectUniversePortfolio from './pages/project-universe-portfolio';
import DynamicHomepageDashboard from './pages/dynamic-homepage-dashboard';
import CodingAchievementsArena from './pages/coding-achievements-arena';
import ProfessionalJourneyTimeline from './pages/professional-journey-timeline';
import DarkModeDemo from './pages/DarkModeDemo';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<DynamicHomepageDashboard />} />
        <Route path="/project-universe-portfolio" element={<ProjectUniversePortfolio />} />
        <Route path="/dynamic-homepage-dashboard" element={<DynamicHomepageDashboard />} />
        <Route path="/coding-achievements-arena" element={<CodingAchievementsArena />} />
        <Route path="/professional-journey-timeline" element={<ProfessionalJourneyTimeline />} />
        <Route path="/dark-mode-demo" element={<DarkModeDemo />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
