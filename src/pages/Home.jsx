import { Link } from "react-router-dom";
import "./Home.css"
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Search } from "./Search";
export function Home() {
  return (
    <div className="home">
      <div className="home_header">
         <div className="home_headerLeft">
        <Link to="/about">About</Link>
        <Link to="/about">Store</Link>
         </div>
         <div className="home_headerRight">
         <Link to="/gmail">Gmail</Link>
         <Link to="/images">Images</Link>
          <AppsIcon/>
          <AccountCircleIcon size="large"/>
         </div>
      </div>
      <div className="home_body">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
        <div className="home_inputcontainer">
           <Search/> 
        </div>
      </div>
     
    </div>
  );
}

