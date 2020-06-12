import LoginPage from "../pages/login/login";
import RegisterPage from "../pages/register/register";
import HomePage from "../pages/home/home";
import ForgotPasswordPage from "../pages/forgot-password/forgot-password";
import ProfilePage from "../pages/profile-page/profile-page";

const routes = {
  public: [
    {
      path: "/",
      exact: true,
      key: "HomePage",
      component: HomePage,
    },
    {
      path: "/login",
      exact: true,
      key: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/register",
      exact: true,
      key: "RegisterPage",
      component: RegisterPage,
    },
    {
      path: "/login/identify",
      exact: true,
      key: "ForgotPasswordPage",
      component: ForgotPasswordPage,
    },
    {
      path: "/profile",
      exact: false,
      key: "ProfilePage",
      component: ProfilePage,
    },

    /*
        {
            path: "/",
            exact: true,
            component: Home
        }*/
  ],
  /*    private: [
        {
            path: "/posts",
            exact: true,
            component: Posts,
        },
        {
            path: "/posts/:id",
            exact: false,
            component: Post,
        },
    ],*/
};

export default routes;
