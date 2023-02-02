import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { FaTimes } from "react-icons/fa";

import { toggleSidebar } from "../features/user/userSlice";
import Wrapper from "../assets/wrappers/SmallSidebar";
import Logo from "./Logo";
import links from "../utils/links";
import NavLinks from "./NavLinks";

export const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>

          <header>
            <Logo />
          </header>

          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
