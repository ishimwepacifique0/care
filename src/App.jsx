import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import MainLayout from "./components/MainLayout";
import Login, { loader as loginLoaders } from "./pages/Login";
import Signup, { loader as signupLoader } from "./pages/Signup";
import MainProtectedLayout, {
  loader as protector,
} from "./components/MainProtectedLayout";
import Feeds from "./pages/Feeds";
import ViewPost from "./pages/ViewPost";
import Quiz, { loader as quizLoader } from "./pages/Quiz";
import Motivation from "./pages/Motivation";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} loader={loginLoaders} />
        <Route path="signup" element={<Signup />} loader={signupLoader} />
      </Route>
      <Route element={<MainProtectedLayout />} loader={protector}>
        <Route path="feeds" element={<Feeds />} />
        <Route path="feeds/:id" element={<ViewPost />} />
        <Route path="quiz" element={<Quiz />} loader={quizLoader} />
        <Route path="daily" element={<Motivation />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
export default function App() {
  return <RouterProvider router={router} />;
}
