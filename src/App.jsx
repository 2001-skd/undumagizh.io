import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import RecipeDetail from "./component/RecipeDetail";
import useOnlineStatus from "./utils/useOnlineStatus";
import OnlineStatus from "./component/OnlineStatus";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import BookMark from "./pages/BookMark";

const App = () => {
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === true) {
    return (
      <>
        <Provider store={appStore}>
          <Header />
          <Outlet />
        </Provider>
      </>
    );
  } else {
    return <OnlineStatus />;
  }
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/bookmark",
        element: <BookMark />,
      },
      {
        path: "/recipe/:id",
        element: <RecipeDetail />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
