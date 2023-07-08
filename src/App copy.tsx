import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './app.css';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';

const { Header, Sider, Content } = Layout;

import Welcome from './pages/Welcome';
import List from './pages/List';
import Demo from './pages/Demo';


export default () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate()

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '/',
                            icon: <UserOutlined />,
                            label: '欢迎',
                            onClick: (e) => navigate(e.key, { replace: true })
                        },
                        {
                            key: '/list',
                            icon: <VideoCameraOutlined />,
                            label: '列表',
                            onClick: (e) => navigate(e.key, { replace: true })
                        },
                        {
                            key: '/demo',
                            icon: <UploadOutlined />,
                            label: 'Demo',
                            onClick: (e) => navigate(e.key, { replace: true })
                        },
                    ]}
                />
            </Sider>

            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: '83vh',
                        background: colorBgContainer,
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path="/list" element={<List />} />
                        <Route path="/demo" element={<Demo />} />
                    </Routes>
                </Content>
            </Layout>

        </Layout>
    );
};
