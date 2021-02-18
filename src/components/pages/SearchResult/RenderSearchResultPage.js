import React, { useContext, useEffect } from 'react';
import HeaderElement from '../../common/Header/HeaderElement';
import { Typography, Card, Button, Layout, Input } from 'antd';
import { LocationContext } from '../../../state/contexts/LocationContext';
import Map from '../Map/Map';
import 'antd/dist/antd.css';
import './searchResult.css';
import axiosWithAuth from '../../../utils/axiosWithAuth';

const { Title } = Typography;
const { Content, Footer } = Layout;
const { TextArea } = Input;

const ResultSearchPage = () => {
  const { location } = useContext(LocationContext);
  let dataForApi = location
    .split(',')
    .slice(0, -1)
    .join(',');

  const apiURL = `/data/predict/${dataForApi}`;

  const getCitydata = () => {
    axiosWithAuth()
      .get(apiURL)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getCitydata();
  }, []);

  return (
    <Layout className="layout" style={{ height: '100vh' }}>
      <HeaderElement />
      <Content style={{ padding: '0 50px' }}>
        <div className="container-fluid">
          <div className="resultWrapper">
            <div className="site-card-border-less-wrapper">
              <Card
                title={location}
                bordered={false}
                style={{ width: '100% ' }}
              >
                <p>
                  <span>Population</span>
                </p>
                <p>
                  <span>Density</span>
                </p>
                <p>
                  <span>Safety</span>
                </p>
                <Title level={4}>Comments</Title>
                <TextArea rows={4} />
                <div className="buttonWrapper">
                  <Button type="primary" shape="round" className="addButton">
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
          <div className="mapWrapper">
            <Map />
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>CitySpire ©2021</Footer>
    </Layout>
  );
};

export default ResultSearchPage;
