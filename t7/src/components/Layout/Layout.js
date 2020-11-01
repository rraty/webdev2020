import { Layout as AntLayout, Typography } from "antd";

import styles from "./Layout.module.scss";

const { Header, Content, Footer } = AntLayout;
const { Title } = Typography;

const Layout = ({ children, ...props }) => {
  return (
    <AntLayout className={styles.Layout}>
      <Header>
        <div className={styles.Logo}>
          <Title level={3}>Rasmus Räty ePortfolio</Title>
        </div>
      </Header>
      <Content style={{ padding: "50px 50px" }}>
        <div className={styles.Content}>{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Rasmus Räty ©2020</Footer>
    </AntLayout>
  );
};

export default Layout;
