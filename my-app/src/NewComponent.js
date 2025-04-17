import React, { useState } from 'react';
import { Layout, Button, Modal, Input } from 'antd'; // 模塊引入
import { MyMenu } from "./MyMenu"

import { MyTodoList } from "./MyTodoList"

//const { Header, Footer, Sider, Content } = Layout; // 對象解構

const Header = Layout.Header;
const Sider = Layout.Sider;
const Content = Layout.Content;

export const MyLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };


    return <Layout style={{ height: "100vh" }} >
        <Header >Header</Header>
        <Layout>
            <Sider width={255} >
                <MyMenu />
            </Sider>
            <Content>
                <Button onClick={showModal}>增加</Button>
                <MyTodoList />
                <Modal title="新建待辦事項" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Input placeholder="請輸入標題" />
                    <Input.TextArea rows={4} placeholder='請輸入描述'/>
                </Modal>
            </Content>
        </Layout>
    </Layout>
}
