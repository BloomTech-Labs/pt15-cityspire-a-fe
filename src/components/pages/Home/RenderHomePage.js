import React from 'react';
import Navbar from '../../common/Navbar';
import { Link } from 'react-router-dom';
import { ButtonElement } from '../../common';
import { Layout } from 'antd';

const { Header, Content } = Layout;

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Header>
        <Navbar />
      </Header>
      <Content style={{ padding: '50px' }}>
        <h1
          style={{
            padding: '8rem 0 2rem',
            fontSize: '1.8rem',
            textAlign: 'center',
          }}
        >
          Hi {userInfo.name} what's your next location?
        </h1>
        {/* <p>
          This is an example of a common example of how we'd like for you to
          approach components.
        </p>
        <p>
          <Link to="/profile-list">Profiles Example</Link>
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
        <p>
          <Link to="/datavis">Data Visualizations Example</Link>
        </p>
        <p>
            <ButtonElement
            handleClick={() => authService.logout()}
            buttonText="Logout"
          />
        </p> */}
      </Content>
    </Layout>
  );
}
export default RenderHomePage;
