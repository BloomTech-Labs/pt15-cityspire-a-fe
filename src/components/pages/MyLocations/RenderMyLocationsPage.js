import React, { useState } from 'react';
import HeaderElement from '../../common/Header/HeaderElement';
import { Typography, Layout, List, Card, Space, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './myLocations.css';

const locations = [
  { key: 1, name: 'Paris', population: 2187526, density: 20755 },
  {
    key: 2,
    name: 'Seul',
    population: 9962393,
    density: 15763,
  },
  {
    key: 3,
    name: 'West New York',
    population: 49708,
    density: 19060,
  },
  {
    key: 4,
    name: 'Seul',
    population: 9962393,
    density: 15763,
  },
  {
    key: 5,
    name: 'West New York',
    population: 49708,
    density: 19060,
  },
];

const { Title } = Typography;
const { Content, Footer } = Layout;

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const RenderMyLocationsPage = () => {
  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <HeaderElement />
      <Content className="contentWrapper" style={{ padding: '100px 20px' }}>
        <div className="location-container">
          <Title
            className="locationsListTitle"
            style={{ fontWeight: 300, textAlign: 'center' }}
          >
            My Locations
          </Title>
          <div className="site-card-wrapper">
            <List
              style={{ padding: '10px' }}
              grid={{
                gutter: 24,
                sm: 1,
                md: 2,
                lg: 2,
                xl: 2,
                xxl: 4,
              }}
              dataSource={locations}
              renderItem={item => (
                <List.Item key={item.key} actions={[]}>
                  <Card
                    title={item.name}
                    actions={[
                      <EditOutlined
                        key="edit"
                        onClick={() => console.log('works')}
                      />,
                      <DeleteOutlined key="delete" />,
                    ]}
                  >
                    <p>
                      <span>Population: {item.population}</span>
                    </p>
                    <p>
                      <span>Density: {item.density}</span>
                    </p>
                    <Title level={4}>Comments</Title>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam vel nisl at arcu tristique ultrices. Suspendisse
                      hendrerit ligula id dolor bibendum tempor.
                    </p>
                  </Card>
                </List.Item>
              )}
            />
          </div>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          zIndex: 100,
          position: 'sticky',
          bottom: '0',
        }}
      >
        CitySpire ©2021
      </Footer>
    </Layout>
  );
};

export default RenderMyLocationsPage;
