import { NavLink, Route } from "react-router-dom";
import summaryIcon from "../../../../assets/images/desktop/profile/summaryIcon.png";
import statisticsIcon from "../../../../assets/images/desktop/profile/statisticsIcon.png";
import postsIcon from "../../../../assets/images/desktop/profile/postsIcon.png";
import buddiesIcon from "../../../../assets/images/desktop/profile/buddiesIcon.png";
import modifyIcon from "../../../../assets/images/desktop/profile/modifyIcon.png";
import React from "react";
import "./profile-sidebar-submenu.sass";

const ProfileSidebarSubmenu = () => (
  <ul className="profile-sidebar-submenu">
    <li className="profile-sidebar-submenu__item">
      <NavLink
        to={`/profile/profile/summary`}
        className="profile-sidebar-submenu__link"
        activeClassName="profile-sidebar-submenu__link_active"
      >
        <img
          className="profile-sidebar-submenu__img"
          src={summaryIcon}
          alt=""
        />
        <span className="profile-sidebar-submenu__text">Summary</span>
      </NavLink>
    </li>
    <li className="profile-sidebar-submenu__item">
      <NavLink
        to={`/profile/profile/statistics`}
        className="profile-sidebar-submenu__link"
        activeClassName="profile-sidebar-submenu__link_active"
      >
        <img
          className="profile-sidebar-submenu__img"
          src={statisticsIcon}
          alt=""
        />
        <span className="profile-sidebar-submenu__text">My statistics</span>
      </NavLink>
    </li>
    <li className="profile-sidebar-submenu__item">
      <NavLink
        to={`/profile/profile/posts`}
        className="profile-sidebar-submenu__link"
        activeClassName="profile-sidebar-submenu__link_active"
      >
        <img className="profile-sidebar-submenu__img" src={postsIcon} alt="" />
        <span className="profile-sidebar-submenu__text">My posts</span>
      </NavLink>
    </li>
    <li className="profile-sidebar-submenu__item">
      <NavLink
        to={`/profile/profile/buddies`}
        className="profile-sidebar-submenu__link"
        activeClassName="profile-sidebar-submenu__link_active"
      >
        <img
          className="profile-sidebar-submenu__img"
          src={buddiesIcon}
          alt=""
        />
        <span className="profile-sidebar-submenu__text">Buddies list</span>
      </NavLink>
    </li>
    <li className="profile-sidebar-submenu__item profile-sidebar-submenu__item_modify">
      <NavLink
        to={`/profile/profile/modify/settings`}
        className="profile-sidebar-submenu__link"
        activeClassName="profile-sidebar-submenu__link_active"
        isActive={(match, location) => {
            return location.pathname.includes("/profile/modify");
        }}
      >
        <img className="profile-sidebar-submenu__img" src={modifyIcon} alt="" />
        <span className="profile-sidebar-submenu__text">Modify Profile</span>
      </NavLink>
    </li>

    <Route path={"/profile/profile/modify"}>
      <li className="profile-sidebar-submenu__item-2">
        <NavLink
          to={`/profile/profile/modify/settings`}
          className="profile-sidebar-submenu__link"
          activeClassName="profile-sidebar-submenu__link_active-2"
        >
          <span className="profile-sidebar-submenu__text">
            Account Related Settings
          </span>
        </NavLink>
      </li>
      <li className="profile-sidebar-submenu__item-2">
        <NavLink
          to={`/profile/profile/modify/info`}
          className="profile-sidebar-submenu__link"
          activeClassName="profile-sidebar-submenu__link_active-2"
        >
          <span className="profile-sidebar-submenu__text">
            Forum Profile Info
          </span>
        </NavLink>
      </li>
      <li className="profile-sidebar-submenu__item-2">
        <NavLink
          to={`/profile/profile/modify/preferences`}
          className="profile-sidebar-submenu__link"
          activeClassName="profile-sidebar-submenu__link_active-2"
        >
          <span className="profile-sidebar-submenu__text">
            Look and Layout Preferences
          </span>
        </NavLink>
      </li>
      <li className="profile-sidebar-submenu__item-2">
        <NavLink
          to={`/profile/profile/modify/notifications`}
          className="profile-sidebar-submenu__link"
          activeClassName="profile-sidebar-submenu__link_active-2"
        >
          <span className="profile-sidebar-submenu__text">
            Notifications and Email
          </span>
        </NavLink>
      </li>
      <li className="profile-sidebar-submenu__item-2">
        <NavLink
          to={`/profile/profile/modify/options`}
          className="profile-sidebar-submenu__link"
          activeClassName="profile-sidebar-submenu__link_active-2"
        >
          <span className="profile-sidebar-submenu__text">
            Personal Message Options
          </span>
        </NavLink>
      </li>
    </Route>
  </ul>
);

export default ProfileSidebarSubmenu;
