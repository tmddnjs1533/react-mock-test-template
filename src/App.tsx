import { useMemo } from "react";
import { BrowserRouter, RouteObject, useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalThemeProvider from "./utils/GlobalThemeProvider";
import Layout from "./components/common/Layout";
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import AuthLayout from "./components/common/AuthLayout";
import Main from "./pages/main";
import loadable from "@loadable/component";
import CustomDialog from "components/common/CustomDialog";
import CustomToast from "components/common/CustomToast";
const SignUp = loadable(() => import("./pages/signUp"));
const Projects = loadable(() => import("./pages/projects"));
const ProjectDetail = loadable(() => import("./pages/projects/detail"));
const ProjectList = loadable(() => import("./pages/projects/list"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalThemeProvider>
        <BrowserRouter>
          <CustomRoutes />
        </BrowserRouter>
        <CustomToast />
        <CustomDialog />
      </GlobalThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

const CustomRoutes = () => {
  const routes: RouteObject[] = useMemo(
    () => [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Main />,
          },
          {
            path: "/auth",
            element: <AuthLayout />,
            children: [
              {
                path: "login",
                element: <Login />,
              },
              {
                path: "sign-up",
                element: <SignUp />,
              },
            ],
          },
          {
            path: "projects",
            element: <Projects />,
            children: [
              {
                index: true,
                element: <ProjectList />,
              },
              {
                path: ":id",
                element: <ProjectDetail />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
    []
  );
  let element = useRoutes(routes);
  return element;
};
