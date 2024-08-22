import { Layout, Row, Col } from "antd";
import NavBar from "../components/app/header/NavBar";
import TabBar from "../components/app/header/TabBar";
import { useSelector } from "react-redux";
import LandingPage from "../components/app/pages/home/LandingPage";
import AviatorPage from "../components/app/pages/home/AviatorPage";
import GamesPage from "../components/app/pages/home/GamesPage";
import CasinoPage from "../components/app/pages/home/CasinoPage";
const { Header, Content, Footer, Sider } = Layout;
const AppLayout = () => {
  const { currentTab } = useSelector((state) => {
    return { currentTab: state.appLayout.currentTab };
  });
  return (
    <Layout className="text-white font-bold bg-body">
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
        className="bg-background text-white flex flex-col h-auto p-0"
      >
        <div className="w-full bg-background px-5 drop-shadow-lg">
          <NavBar />
        </div>
        <div className="w-full bg-background px-5">
          <TabBar />
        </div>
      </Header>
      <Layout className="text-white font-bold text-2xl">
        <Content className="bg-body">
          <Row className="min-h-screen  m-2  text-white ">
            <Col flex="auto" className="rounded-md border m-2 bg-background">
              main content
            </Col>
            <Col span={15} className="rounded-md border m-2 bg-background">
              {currentTab === "home" && <LandingPage />}
              {currentTab === "aviator" && <AviatorPage />}
              {currentTab === "games" && <GamesPage />}
              {currentTab === "casino" && <CasinoPage />}
            </Col>
            <Col flex="auto" className="rounded-md border m-2 bg-background">
              main content
            </Col>
          </Row>
        </Content>
      </Layout>
      <Footer className="bg-background">
        <div className="text-3xl font-bold underline bg-background">footer</div>
      </Footer>
    </Layout>
  );
};
export default AppLayout;
