import LoginPage from "./pages/login/login-page";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import TodoList from "./pages/todo-list/todo-list";
import Auth from "./utils/auth/Auth";
import ErrorPage from "./pages/error/error-page";
import TodoPage from "./pages/todo-page/todo-page";
import Register from "./pages/register/register";
import NotAuth from "./utils/not-auth/NotAuth";

const router = createBrowserRouter([
    {
        path: "/*",
        element: <ErrorPage />
    },
    {
        element: <NotAuth/>,
        children: [
            {
                path: "/",
                element: <LoginPage />
            },
            {
                path: "register",
                element: <Register/>
            },
        ]
    },
    {
        element: <Auth />,
        children: [
            {
                path: "todo",
                element: <TodoPage />,
                children: [
                    {
                        path: ":id",
                        element: <TodoList/>
                    }
                ]
            },
        ]
    },
]);

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
