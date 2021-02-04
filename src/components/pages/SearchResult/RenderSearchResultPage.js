import React from 'react';
import Navbar from '../../common/Navbar';
import { Typography, Card, Button } from 'antd';
import Map from '../Map/Map';
import 'antd/dist/antd.css';
import './searchResult.css';

const { Title } = Typography;

const ResultSearchPage = props => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="resultWrapper">
          <div className="site-card-border-less-wrapper">
            <Card
              title="Location name"
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
              <Title level={4}>Description</Title>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vel nisl at arcu tristique ultrices. Suspendisse hendrerit
                ligula id dolor bibendum tempor. Aliquam ac risus ac augue
                mollis ornare nec non lorem. Nullam vitae erat sed leo viverra
                venenatis. Cras pretium mi lorem, a dictum odio aliquam ut.
              </p>
            </Card>
            <div className="buttonWrapper">
              <Button type="primary" shape="round" className="addButton">
                Add
              </Button>
            </div>
          </div>
        </div>
        <div className="mapWrapper">
          <Map />
        </div>
      </div>
    </>
  );
};

export default ResultSearchPage;
