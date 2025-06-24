import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  AppstoreOutlined,
  LogoutOutlined,
  BarChartOutlined,
  PieChartOutlined,
  FileTextOutlined,
  FundOutlined

} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Avatar } from "antd";
import { ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const Navbar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    {
      key: "1",
      icon: <FundOutlined />,
      label: "Station Overview",
      onClick: () => {
        navigate("/overview");
      },
    },
    {
      key: "2",
      icon: <PieChartOutlined />,
      label: "Operation Dashboard",
      onClick: () => {
        navigate("/operation");
      },
    },
    {
      key: "3",
      icon: <BarChartOutlined />,
      label: "Management Dashboard",
      onClick: () => {
        navigate("/management");
      },
    },
    {
      key: "4",
      icon: <FileTextOutlined />,
      label: "Billing Reports",
      onClick: () => {
        navigate("/billingReports");
      },
    },
    {
      key: "5",
      icon: <UserOutlined />,
      label: "Profile",
      style: { marginTop: "auto" },
      onClick: () => { },
    },
    {
      key: "6",
      icon: <LogoutOutlined />,
      label: "Log out",
      onClick: () => { },
    },
  ];

  const siderWidth = 250;
  const collapsedWidth = isMobile ? 0 : 80;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6490B8",
          colorBgContainer: "#ffffff",
        },
        components: {
          Menu: {
            itemSelectedColor: "#134B70",
            itemSelectedBg: "#CFE7F7",
          },
          Table: {
            borderColor: "#e0e0e0",
            colorText: "#333",
          },
          DatePicker: {
            colorPrimary: "#6490B8", // เปลี่ยนสีปุ่มเลือก (primary)
            colorBgContainer: "#ffffff",
            colorTextPlaceholder: "#134B70", // สี
          },
        },
      }}
    >
      <>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          collapsedWidth={collapsedWidth}
          width={siderWidth}
          breakpoint="sm"
          onBreakpoint={(broken) => setIsMobile(broken)}
          style={{
            background: colorBgContainer,
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 100,
            overflow: "auto",
          }}
        >
          <div className="flex flex-col h-full">
            <Menu
              mode="inline"
              selectable={false}
              items={[
                {
                  key: "static-menu",
                  icon: <AppstoreOutlined />,
                  label: "Menu",
                  onClick: () => { },
                  style: {
                    cursor: "default",
                    backgroundColor: "transparent",
                    fontSize: "18px",
                    color: "#000",
                  },
                },
              ]}
            />
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={menuItems}
              className="flex flex-col h-full"

            />
          </div>
        </Sider>

        <Layout
          style={{
            marginLeft: collapsed ? collapsedWidth : siderWidth,
            transition: "margin-left 0.2s",
          }}
        >
          <Header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 99,
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <div className="flex items-center justify-between shadow-lg">
              <div className="flex">
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                  }}
                />
                <p>EV Charger</p>
              </div>
              <div className="flex items-center gap-x-3 mr-5">
                {!collapsed || !isMobile ? (
                  <Avatar
                    style={{ backgroundColor: "#CFE7F7", color: "#134B70" }}
                    className="font-bold"
                  >
                    <UserOutlined />
                  </Avatar>
                ) : null}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p style={{ margin: 0, lineHeight: "20px" }}>
                    Username
                  </p>
                  <p
                    style={{ margin: 0, lineHeight: "12px" }}
                    className="text-[12px] text-[#134B70]"
                  >
                    Admin
                  </p>
                </div>
              </div>
            </div>
          </Header>

          <Content style={{ padding: 24, minHeight: "100vh" }}>
            {children}
          </Content>
        </Layout>
      </>
    </ConfigProvider>
  );
};

export default Navbar;
