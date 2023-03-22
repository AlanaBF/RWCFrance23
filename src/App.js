import { createHashRouter, createRoutesFromElements, RouterProvider, Outlet, Route } from "react-router-dom";
import { Header, StickyFooter } from './components/index';
import { Home, NotFound, Teams, Matches, LiveUpdates } from './pages/index';
import ExampleUpdate from "./pages/ExampleLiveData/Example";

const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" index element={<Home />} />
        <Route path="/teams" element={<Teams />} />
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