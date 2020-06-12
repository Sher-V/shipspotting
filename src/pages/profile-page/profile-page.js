import React from "react";
import HeaderTop from "../../components/common/header-top/header-top";
import Footer from "../../components/common/footer/footer";
import scrollToTop from "../../hooks/scroll-to-top";
import { Route, Switch } from "react-router-dom";
import Summary from "./components/summary/summary";
import "./profile-page.sass";
import ProfileSidemenu from "../../components/common/profile-sidemenu/profile-sidebar";
import ProfileSideinfo from "../../components/common/profile-sideinfo/profile-sideinfo";
import Statistics from "./components/statistics/statistics";
import Posts from "./components/posts/posts";
import BuddiesList from "./components/buddies-list/buddies-list";

const ProfilePage = () => {
  scrollToTop();

  return (
    <div>
      <div className="profile__header">
        <div className="container">
          <HeaderTop />
        </div>
      </div>
      <div className="container profile__container">
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <ProfileSidemenu className="profile__left-sidebar" />
          <div className="profile__center-block">
            <Switch>
              <Route
                path="/profile/profile/summary"
                exact
                render={() => <Summary />}
              />
              <Route
                path="/profile/profile/statistics"
                exact
                render={() => <Statistics />}
              />
              <Route
                path="/profile/profile/posts"
                exact
                render={() => <Posts />}
              />
              <Route
                path="/profile/profile/buddies"
                exact
                render={() => <BuddiesList />}
              />
            </Switch>
          </div>
          <ProfileSideinfo />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
