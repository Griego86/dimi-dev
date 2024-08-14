import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import Project1Page, { commentsLoader } from "./pages/Project1Page"
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

export function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/dimi-dev" element={<HomePage />} />
        <Route path="/dimi-dev/projects" element={< ProjectsPage />} />
        <Route path="/dimi-dev/project1" element={ <Project1Page />} loader={commentsLoader} />
        <Route path="/dimi-dev/about" element={<AboutPage />} />
        <Route path="/dimi-dev/contact" element={<ContactPage />} />
        <Route path="/dimi-dev/signup" element={<SignUpPage />} />
        <Route path="/dimi-dev/login" element={<LoginPage />} />
      </Route>
    )
  );
  return router
}
