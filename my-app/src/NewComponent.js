import { Layout } from 'antd'; // 模塊引入
import {MyMenu} from "./MyMenu"

//const { Header, Footer, Sider, Content } = Layout; // 對象解構

const Header = Layout.Header;
const Sider = Layout.Sider;
const Content = Layout.Content;

export const MyLayout = () => {
    return <Layout style={{ height: "100vh" }} >
        <Header >Header</Header>
        <Layout>
            <Sider >
                <MyMenu/>
            </Sider>
            <Content>Content</Content>
        </Layout>
    </Layout>
}
