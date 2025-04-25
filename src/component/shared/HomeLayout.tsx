import {
  CloseOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Layout, Drawer, Button, Input, Spin } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

type Props = {
  children?: React.ReactNode;
  loading?: boolean;
};

function HomeLayout({ children, loading }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  // Media query for responsive layout: max-width 768px (mobile)
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <Layout className="!h-[100vh]">
      {isMobile ? (
        <>
          <Drawer
            placement="left"
            onClose={() => setDrawerVisible(false)}
            closeIcon={<CloseOutlined style={{ color: "black" }} />}
            visible={drawerVisible}
            bodyStyle={{ padding: 0 }}
            // style={{ height: '100vh'}}
            className="!bg-[#fff] text-white flex flex-col"
          >
            {<Sidebar />}
          </Drawer>
        </>
      ) : (
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          trigger={null}
          width={235}
          className="!bg-[#fff] text-white flex flex-col !h-[100vh] overflow-auto hide-scrollbar border-r border-[#E8E8E8]"
        >
          {<Sidebar />}
        </Sider>
      )}
      <Layout>
        <Header
          style={{ padding: 0 }}
          className="flex items-center justify-between !px-6 bg-[#fff] h-[95px] gap-4 "
        >
          {isMobile && (
            <>
              <Button
                type="text"
                icon={
                  collapsed ? (
                    <MenuUnfoldOutlined style={{ color: "black" }} />
                  ) : (
                    <MenuFoldOutlined style={{ color: "black" }} />
                  )
                }
                onClick={
                  isMobile
                    ? () => setDrawerVisible(!drawerVisible)
                    : () => setCollapsed(!collapsed)
                }
                style={{
                  fontSize: "16px",
                  // width: 60,
                  height: 64,
                }}
              />
            </>
          )}
          <Input
            placeholder="Search"
            className={`search-input h-[45px] xl:w-[500px] lg:w-[350px] w-[250px]`}
            style={{
              borderRadius: 50,
              backgroundColor: "#F5F6FA",
              // border: "none",
            }}
            prefix={<img className="w-[20px]" src="/icons/search.png" />}
          />
          <ProfileDropdown />
        </Header>
        <Content
          style={{
            minHeight: 280,
            backgroundColor: "#F5F6FA",
          }}
          className={`p-6 h-[calc(100vh-64px)] overflow-auto hide-scrollbar`}
        >
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <Spin size="large" />
            </div>
          ) : (
            children
          )}
        </Content>
      </Layout>
    </Layout>
  );
}

export default HomeLayout;
