import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import './searchForm.css';

const SearchForm = () => {
  const [form, setForm] = useState({ location: '' });

  return (
    <div className="searchFormWrapper">
      <Form name="search-form" className="searchForm" onFinish={setForm}>
        <Form.Item
          className="searchInput"
          name="location"
          rules={[
            {
              required: true,
              message: 'Please input location',
            },
          ]}
        >
          <Input placeholder="Please input location" />
        </Form.Item>
        <Form.Item>
          <Link to="/results">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SearchForm;
