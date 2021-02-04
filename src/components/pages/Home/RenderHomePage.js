import React from 'react';
import Navbar from '../../common/Navbar';
import SearchForm from '../../common/SearchForm';
import { Layout, Typography } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;
const { Title } = Typography;

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Header style={{ height: '10%', padding: '0' }}>
        <Navbar />
      </Header>
      <Content style={{ padding: '50px' }}>
        <Title
          style={{
            padding: '8rem 0 2rem',
            fontSize: '1.5rem',
            textAlign: 'center',
          }}
        >
          Hi {userInfo.name} what's your next location?
        </Title>
        <SearchForm />
      </Content>
    </Layout>
  );
}
export default RenderHomePage;
