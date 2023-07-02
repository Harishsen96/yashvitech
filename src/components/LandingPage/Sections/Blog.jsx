import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">About Our Technologies</h1>
            <p className="font13">
            Creating Engaging and User-Friendly Websites and Web application security is paramount to protect user data and prevent unauthorized access
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Responsive Design:"
                text="In today's mobile-driven world, responsive design is essential. It involves designing websites that adapt to different screen sizes and devices, providing an optimal user experience across desktops, laptops, tablets, and smartphones. "
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Color Typography:"
                text="Color and typography significantly impact the visual appeal and readability of a website. Selecting an appropriate color palette that aligns with your brand and target audience is essential. Colors can evoke emotions, create contrast ."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="User Experience Design"
                text="UX design focuses on creating meaningful and enjoyable experiences for users. It involves understanding your target audience, their goals, and their pain points.Conducting user research, usability testing, and iterative design processes."
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Frontend Development!"
                text="Frontend development focuses on the client-side of the web application, encompassing the user interface and interactions. Use HTML, CSS, and JavaScript frameworks like React, Angular, or Vue.js to create responsive and interactive interfaces."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Backend Development!"
                text="Backend development involves implementing the server-side logic and database management of a web application. Choose a suitable programming language, such as Python, Ruby, Java, or Node.js, depending on your requirements and team's expertise."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Data Management!"
                text="Efficiently managing data is crucial for web applications. Choose an appropriate database system, such as relational databases (MySQL, PostgreSQL) or NoSQL databases (MongoDB, Firebase), based on your data structure and scalability needs."
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;