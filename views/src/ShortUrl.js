import { NavLink } from "react-router-dom";

const ShortUrl = () => {
    return(
        <div>
            <p>ShortUrl: </p>
            <NavLink to = '/update-short-url'>
                <button>Generate Again</button>
            </NavLink>
        </div>
    )
}
export default ShortUrl;