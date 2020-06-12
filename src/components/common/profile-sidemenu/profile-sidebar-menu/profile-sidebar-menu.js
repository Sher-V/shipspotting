import React from "react";
import profileIcon from "../../../../assets/images/desktop/profile/profileIcon.png";
import messagesIcon from "../../../../assets/images/desktop/profile/messagesIcon.png";
import photoIcon from "../../../../assets/images/desktop/profile/photoIcon.png";
import videoIcon from "../../../../assets/images/desktop/profile/videoIcon.png";
import { NavLink } from "react-router-dom";
import "./profile-sidebar-menu.sass";

const ProfileSidebarMenu = () => (
  <ul className="profile-sidebar-menu">
    <li className="profile-sidebar-menu__item">
      <NavLink
        to="/profile/profile/summary"
        className="profile-sidebar-menu__link"
        activeClassName="profile-sidebar-menu__link_active"
        isActive={(match, location) => {
          return location.pathname.includes("/profile/profile");
        }}
        href="#"
      >
        <img
          className="profile-sidebar-menu__img"
          src={profileIcon}
          alt="profile"
        />
        <span className="profile-sidebar-menu__text">Profile</span>
      </NavLink>
    </li>
    <li className="profile-sidebar-menu__item">
      <NavLink
        to="/profile/messages"
        className="profile-sidebar-menu__link"
        activeClassName="profile-sidebar-menu__link_active"
        href="#"
      >
        <img
          className="profile-sidebar-menu__img"
          src={messagesIcon}
          alt="messages"
        />
        <span className="profile-sidebar-menu__text">Messages</span>
      </NavLink>
    </li>
    <li className="profile-sidebar-menu__item">
      <NavLink
        to="/profile/photo"
        className="profile-sidebar-menu__link"
        activeClassName="profile-sidebar-menu__link_active"
        href="#"
      >
        <img
          className="profile-sidebar-menu__img"
          src={photoIcon}
          alt="photo"
        />
        <span className="profile-sidebar-menu__text">Photo</span>
      </NavLink>
    </li>
    <li className="profile-sidebar-menu__item">
      <NavLink
        to="/profile/video"
        className="profile-sidebar-menu__link"
        activeClassName="profile-sidebar-menu__link_active"
        href="#"
      >
        <img
          className="profile-sidebar-menu__img"
          src={videoIcon}
          alt="video"
        />
        <span className="profile-sidebar-menu__text">Video</span>
      </NavLink>
    </li>
  </ul>
);

export default ProfileSidebarMenu;
