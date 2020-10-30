import { Card, Layout, Menu, Breadcrumb, Typography, Divider } from "antd";
import styles from "./Home.module.scss";

import codeLogo from "./assets/Code.png";
const { Meta } = Card;
const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const items = [
  {
    title: "Tehtävä 1 / ",
    description: "Loremp aksdaskldjklasjdl",
    image: "TODOO",
    liveUrl: "???",
    repositoryUrl: "TODO GITHUb",
    technologiesUsed: ["REact", "JS", "TESTI", "TAKKA"],
  },
  {
    title: "Tehtävä 2",
    description: "Loremp aksdaskldjklasjdl",
    image: "TODOO",
    liveUrl: "???",
    repositoryUrl: "TODO GITHUb",
    technologiesUsed: ["REact", "JS", "TESTI", "TAKKA"],
  },
  {
    title: "Tehtävä 3",
    description: "Loremp aksdaskldjklasjdl",
    image: "TODOO",
    liveUrl: "???",
    repositoryUrl: "TODO GITHUb",
    technologiesUsed: ["REact", "JS", "TESTI", "TAKKA"],
  },
  {
    title: "Tehtävä 3",
    description: "Loremp aksdaskldjklasjdl",
    image: "TODOO",
    liveUrl: "???",
    repositoryUrl: "TODO GITHUb",
    technologiesUsed: ["REact", "JS", "TESTI", "TAKKA"],
  },
  {
    title: "Tehtävä 3",
    description: "Loremp aksdaskldjklasjdl",
    image: "TODOO",
    liveUrl: "???",
    repositoryUrl: "TODO GITHUb",
    technologiesUsed: ["React", "Javascript", "Bootstrap", "TAKKA"],
  },
];

const Home = () => {
  const t = "";

  return (
    <Layout className="layout">
      <Header>
        <div className={styles.Logo}>
          <Title level={2}>Rasmus Räty</Title>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.SiteContent}>
          <div className={styles.Header}>
            <Title level={3}>Kurssin X portfolio</Title>
            <Paragraph>lorem*5</Paragraph>
          </div>
          <Divider />
          <div>
            <Title level={3}>Harjoitustehtävät</Title>
            <div className={styles.Projects}>
              {items.map((item) => {
                const t = "";
                const { title, description, liveUrl, technologiesUsed } = item;

                return (
                  <Card
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt="example" src={/*i?.image ||*/ codeLogo} />}
                    actions={
                      technologiesUsed &&
                      technologiesUsed.map((t) => {
                        return (
                          <i class={`devicon-${t.toLowerCase()}-plain`}></i>
                        );
                      })
                    }
                  >
                    <Meta
                      title={title}
                      description={
                        <div>
                          <p>{description}</p>
                          <a href={liveUrl}>Demo</a>
                        </div>
                      }
                    />
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Home;
