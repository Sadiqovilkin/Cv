import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home"



const Routs = [
  {
    path: "/",
    exact: "true",
    component: <Home />,
    fallback: <Home />,
  },{
    path: "*",
    exact: "true",
    component: <Error/>,
    fallback: <Error />,
  }
];
export default Routs;
