import { createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, Route } from "react-router-dom";
// import Header from './components/Header/Header.js';
// import StickyFooter from './components/Footer/StickyFooter.js';
import { Header, StickyFooter } from './components/index';
// import Home from './pages/Home/Home.js';
// import NotFound from './pages/NotFound/NotFound.js';
// import Teams from "./pages/Teams/Teams.js";
// import TeamInfo from './pages/TeamInfo/TeamInfo.js';
// import Matches from './pages/Matches/Matches.js';
import { Home, NotFound, Teams, TeamInfo, Matches, LiveUpdates} from './pages/index';
import ExampleUpdate from "./pages/ExampleLiveData/Example";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" index element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id" element={<TeamInfo />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/liveupdates/:id" element={<LiveUpdates />} />
        <Route path="/exampleupdate" element={<ExampleUpdate />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

const Root = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <StickyFooter />
      </div>
    </>
  )
}


export default App