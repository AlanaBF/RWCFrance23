import { createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, Route } from "react-router-dom";
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './pages/Home/Home.js';
import NotFound from './pages/NotFound/NotFound.js';
import Teams from "./pages/Teams/Teams.js";
import TeamInfo from './pages/TeamInfo/TeamInfo.js';


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" index element={<Home />} />
        <Route path="/teams" index element={<Teams />} />
        <Route path="/teams/:id" index element={<TeamInfo />} />

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
        <Footer />
      </div>
    </>
  )
}


export default App