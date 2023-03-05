import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import FrontPage from "./pages/FrontPage";
import NoPage from "./pages/NoPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogListPage from "./pages/BlogListPage";
import BlogPostPage from "./pages/BlogPostPage";
import LearningPlanPage from "./pages/LearningPlanPage";
import LearningGoalPage from "./pages/LearningGoalPage";
import LiteraturePage from "./pages/LiteraturePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FrontPage />} />
        </Route>
        <Route path="/blog" element={<Layout />}>
          <Route index element={<BlogListPage />} />
          <Route path=":slug" element={<BlogPostPage />} />
        </Route>
        <Route path="/læringsplaner" element={<Layout />}>
          <Route index element={<LearningPlanPage />} />
        </Route>
        <Route path="/læringsmål" element={<Layout />}>
          <Route index element={<LearningGoalPage />} />
        </Route>
        <Route path="/litteratur" element={<Layout />}>
          <Route index element={<LiteraturePage />} />
        </Route>
        <Route path="/projekter" element={<Layout />}>
          <Route index element={<ProjectsPage />} />
        </Route>
        <Route path="/om" element={<Layout />}>
          <Route index element={<AboutPage />} />
        </Route>
        <Route path="/kontakt" element={<Layout />}>
          <Route index element={<ContactPage />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
