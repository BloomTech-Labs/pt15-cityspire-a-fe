import React, { useState, useContext } from 'react';
import HeaderElement from '../../common/Header/HeaderElement';
import { Typography, Layout, List, Card, Input, Space, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './myLocations.css';
import { LocationContext } from '../../../state/contexts';

const data = [
  {
    key: 1,
    name: 'Paris',
    population: 2187526,
    density: 20755,
    comments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam vel nisl at arcu tristique ultrice.',
    editing: false,
  },
  {
    key: 2,
    name: 'Seul',
    population: 9962393,
    density: 15763,
    comments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam vel nisl at arcu tristique ultrice.',
    editing: false,
  },
  {
    key: 3,
    name: 'West New York',
    population: 49708,
    density: 19060,
    comments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam vel nisl at arcu tristique ultrice.',
    editing: false,
  },
  {
    key: 4,
    name: 'Seul',
    population: 9962393,
    density: 15763,
    comments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam vel nisl at arcu tristique ultrice.',
    editing: false,
  },
  {
    key: 5,
    name: 'West New York',
    population: 49708,
    density: 19060,
    comments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam vel nisl at arcu tristique ultrice.',
    editing: false,
  },
];

const { Title } = Typography;
const { Content, Footer } = Layout;

const RenderMyLocationsPage = () => {
  const [locations, setLocation] = useState(data);
  const [comment, setComment] = useState('');
  const { TextArea } = Input;

  const removeLocation = key => {
    const removedArr = [...locations].filter(location => location.key !== key);
    setLocation(removedArr);
  };

  const editLocation = key => {
    const index = locations.findIndex(item => item.key === key);
    const editArray = [...locations];
    editArray[index] = {
      ...editArray[index],
      editing: !editArray[index].editing,
      comments: comment,
    };
    setLocation(editArray);
    setComment('');
  };

  const handleChange = (input, val) => {
    setComment(val);
    setComment(input);
  };

  const value = useContext(LocationContext);

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
                <List.Item key={item.key}>
                  <Card
                    title={item.name}
                    actions={[
                      <EditOutlined
                        key="edit"
                        onClick={() => editLocation(item.key)}
                      />,
                      <DeleteOutlined
                        key="delete"
                        onClick={() => removeLocation(item.key)}
                      />,
                    ]}
                  >
                    <p>
                      <span>Population: {item.population}</span>
                    </p>
                    <p>
                      <span>Density: {item.density}</span>
                    </p>
                    <Title level={4}>Comments</Title>
                    {item.editing ? (
                      <TextArea
                        rows={4}
                        value={comment}
                        name="comment"
                        onChange={e =>
                          handleChange(e.target.value, item.comments)
                        }
                      />
                    ) : (
                      <p>{item.comments}</p>
                    )}
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
