import React from 'react';
import Navbar from '../../common/Navbar';
import { Layout, Row, Col } from 'antd';
import SearchForm from '../../common/SearchForm';
import Map from '../Map/Map';

const { Header, Content } = Layout;

const ResultSearchPage = props => {
  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Header>
        <Navbar />
      </Header>
      <Content>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>
            <div>
              <SearchForm />
              <Map style={{ border: '1px solid red' }} />
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ResultSearchPage;
