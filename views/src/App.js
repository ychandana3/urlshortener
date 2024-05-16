
import { createBrowserRouter, NavLink } from "react-router-dom";
import ShortUrl from "./ShortUrl";
export function App() {
  return (
    <div>

      <div>
      <input></input>
      
     <button>Shorten url</button>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/generate-short-url',
    element:<ShortUrl/>
  },
  {
    path:'/update-short-url',
    element:<ShortUrl/>
  },

])
