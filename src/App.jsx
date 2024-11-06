import Home from "./Components/home"
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
// import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "about",
    element: (
      <>
        <Link to="/">Home</Link>
        <div>About</div>
      </>
    )
  }
])


function App() {
  // return <Home />
  return <RouterProvider router={router} />
}

export default App
