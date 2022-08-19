import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  padding-bottom: 1.5rem;
  align-items: center;
  > strong {
    min-width: 6rem;
  }
`;

const DocsLayout = ({ title, children }) => (
  <Layout>
    <strong>{title}</strong> {children}
  </Layout>
);

export default DocsLayout;
