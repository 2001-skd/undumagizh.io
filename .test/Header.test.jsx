import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../src/component/Header";
import { Provider } from "react-redux";
import appStore from "../src/utils/store/appStore";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "../src/App";

it("Should Render Header Component", () => {
  render(
    <RouterProvider router={appRouter}>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </RouterProvider>
  );

  const logo = screen.getByRole("img");
  const navLinks = screen.getAllByRole("link");

  expect(logo).toBeInTheDocument();
  expect(navLinks).toHaveLength(4);
});
