import React from "react";
import { SiEthereum } from "react-icons/si";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={CgWebsite}
            title={"Web Development"}
            disc={`I specialize in MERN (MongoDB, Express, React, Node.js) stack web development, creating modern, scalable web applications that deliver exceptional user experiences. From designing the user interface to building the server-side logic, I have the skills and expertise to bring your web project to life. Whether you need a simple website or a complex web application, I can help you achieve your goals with MERN stack development.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={SiEthereum}
            title={"Blockchain Development"}
            disc={`I develop decentralized applications (dApps) using Ethereum blockchain technology and Solidity programming language. With my expertise in smart contract development, I build solutions for supply chain management, finance, healthcare, and more. Whether you need a proof-of-concept prototype or a full-scale blockchain solution, I have the skills and experience to bring your vision to life using Solidity and Ethereum.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FiCodesandbox}
            title={"3D Modelling & UI/UX Designer"}
            disc={`I create stunning 3D models and design intuitive interfaces that deliver exceptional user experiences. With expertise in 3D modelling software, user research, wireframing, prototyping, and user testing, I bring a user-centered design approach to all my projects. Whether you need a single model or a complete web or mobile application, I can create aesthetically pleasing and functional designs that meet your needs.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
