import Section from "component/common/Section";
import React from "react";
import { Link } from "react-router-dom";
import Container from "./inc/Container";

const MyPage = (props) => (
  <Container
    wrap="index"
    header={true}
    footer={true}
    nav={false}
    navOption={{}}
  >
      <Section>
      <div>
          <ul>
              <li><Link to="/user/info">나의 정보</Link></li>
          </ul>
      </div>
      </Section>
  </Container>
);

export default MyPage;
