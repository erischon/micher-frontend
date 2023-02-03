import styled from "styled-components";
import { Link } from "react-router-dom";

import main from "../assets/images/main.svg";

import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eos
            tempora sit fugit fuga blanditiis. Eveniet, praesentium mollitia?
            Cum provident eos voluptatem vel quasi, exercitationem dicta
            obcaecati alias corrupti. Qui?
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
