import React from "react";
import HomeContainer from "container/HomeContainer";
// import Index from "./inc/Index";
import Container from "pages/inc/Container";

const HomePage = (props) => (
  <>
    <Container
      wrap = 'index'
      header = {true}
      footer = {true}
      nav = {false}
      navOption = {{}}
    >
      <HomeContainer />
    </Container>
  </>
);

export default HomePage;

