import React from "react";
import { Layout, Menu, Icon, Row, Col, Carousel } from "antd";
import "antd/dist/antd.css";
import profile from "./Data/profile";
import { Card } from "antd";
import "./styles/Home.css";
import education from "./Data/education";
import { WaveLoading } from "react-loadingg";
import Background from "./assets/backgrounds.jpg";
import portfolio from "./Data/portfolio";
const { Header, Sider, Content } = Layout;

export default class Home extends React.Component {
  state = {
    collapsed: false,
    profileData: profile,
    isLoading: true,
    education,
    portfolio
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    const { isLoading, profileData, portfolio } = this.state;
    console.log(portfolio);

    if (isLoading) {
      return (
        <div>
          <WaveLoading size="large" />
        </div>
      );
    }
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>About Me</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <p style={{ fontSize: 28, textAlign: "center" }}>My Profile</p>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: "100vh"
            }}
          >
            <Row>
              <Col span={8}></Col>
              <Col span={8}></Col>
              <Col span={8}></Col>
            </Row>
            <div
              style={{ backgroundImage: `url(${Background})`, width: "100%" }}
            >
              {profileData.map((data, index) => {
                return (
                  <div key={index}>
                    <Row>
                      <Col span={4}></Col>
                      <Col span={12}>
                        {" "}
                        <p
                          style={{
                            marginTop: 40,
                            fontSize: 23,
                            color: "white",
                            fontWeight: "bold"
                          }}
                        >
                          {data.profession}
                        </p>
                        <p
                          style={{
                            marginTop: 20,
                            fontSize: 18,
                            color: "white"
                          }}
                        >
                          {data.name}
                        </p>
                        <p
                          style={{
                            marginTop: 20,
                            fontSize: 16,
                            color: "white"
                          }}
                        >
                          {data.about}
                        </p>
                      </Col>
                      <Col span={8}>
                        <Card
                          hoverable
                          style={{
                            width: 200,
                            height: 260,
                            marginTop: 30,
                            borderRadius: 10,
                            marginLeft:30,
                          }}
                          cover={
                            <img
                              alt="example"
                              src={data.photo}
                              style={{
                              
                                width: 200,
                                height: 260,
                                borderRadius: 10
                              }}
                            />
                          }
                        ></Card>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </div>
            <Row>
              <Col span={12}>
                {" "}
                <p style={{ fontSize: 18, fontWeight: "bold", marginTop: 25 }}>
                  {" "}
                  Portfolio{" "}
                </p>
                <Carousel
                  autoplay
                  style={{ height: 300, width: 400, background: "#364d79" }}
                >
                  {portfolio.map((dataPortf, index) => (
                    <div key={index}>
                      <img
                        alt="example"
                        src={dataPortf.image_url}
                        style={{ width: 400, height: 300 }}
                      />
                      <p style={{ fontSize: 15, fontWeight: "bold" }}>
                        {dataPortf.title}
                      </p>
                    </div>
                  ))}
                </Carousel>
              </Col>
              <Col span={12}>
                <div style={{ marginTop: 65 }}>
                  {education.map((dataEdu, index) => (
                    <Row key={index}>
                      <div style={{ marginTop: 15 }}>
                        <Col span={12}>
                          <img
                            alt="example"
                            src={dataEdu.image_url}
                            style={{
                              width: 180,
                              height: 180,
                              borderRadius: 10
                            }}
                          />
                        </Col>
                        <Col span={12}>
                          <p style={{ marginTop: 20 }}>{dataEdu.location}</p>
                          <p style={{ marginTop: 20 }}>{dataEdu.major}</p>
                          <p style={{ marginTop: 20 }}>{dataEdu.years}</p>
                        </Col>
                      </div>
                    </Row>
                  ))}
                </div>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
