import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppProvider";
const ShortUrl = () => {
  const context = useContext(AppContext);
  return (
    <div>
      <p>ShortUrl: {context.shortUrl}</p>
      <NavLink to="/update-short-url">
        <button>Generate Again</button>
      </NavLink>
    </div>
  );
};
export default ShortUrl;
