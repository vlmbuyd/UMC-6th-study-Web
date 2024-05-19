import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import MainPage from "./pages/MainPage";
import PopularPage from "./pages/PopularPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import TopRatedPage from "./pages/TopRatedPage";
import UpComing from "./pages/UpComing";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import MovieDetail from "./components/MovieDetail";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />

          <Route path="popular">
            <Route index element={<PopularPage />} />
            <Route
              path="movie/:title"
              element={<MovieDetail index="popular" />}
            />
          </Route>

          <Route path="now-playing">
            <Route index element={<NowPlayingPage />} />
            <Route path="moive/:title" element={<NowPlayingPage />} />
          </Route>

          <Route path="top-rated">
            <Route index element={<TopRatedPage />} />
            <Route path="movie/:title" element={<TopRatedPage />} />
          </Route>

          <Route path="upcoming">
            <Route index element={<UpComing />} />
            <Route path="movie/:title" element={<UpComing />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
