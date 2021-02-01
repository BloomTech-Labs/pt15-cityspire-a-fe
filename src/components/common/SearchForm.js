import React, { useState } from 'react';
import styled from 'styled-components';
import { FormButton } from './';

const SearchForm = () => {
  const [form, setForm] = useState({ location: '', state: 'select an option' });
  const [searchTerms, setSearchTerms] = useState(null);

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchTerms(form);
    setForm({ location: '', state: '' });
  };

  return (
    <div
      style={{
        margin: '1.8rem auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Select name="state" value={form.state} onChange={handleChange}>
          <option disabled> -- select an option -- </option>
          <option value="alabama">Alabama</option>
          <option value="alaska">Alaska</option>
          <option value="american samo">American Samoa</option>
          <option value="arizona">Arizona</option>
          <option value="arkansas">Arkansas</option>
          <option value="california">California</option>
          <option value="colorado">Colorado</option>
          <option value="connecticut">Connecticut</option>
          <option value="delaware">Delaware</option>
          <option value="district of columbia">District Of Columbia</option>
          <option value="federated states of micronesia<">
            Federated States Of Micronesia
          </option>
          <option value="florida">Florida</option>
          <option value="georgia">Georgia</option>
          <option value="guam">Guam</option>
          <option value="hawaii">Hawaii</option>
          <option value="hawaii">Idaho</option>
          <option value="illinois">Illinois</option>
          <option value="indiana">Indiana</option>
          <option value="iowa">Iowa</option>
          <option value="kansas">Kansas</option>
          <option value="kentucky">Kentucky</option>
          <option value="louisiana">Louisiana</option>
          <option value="maine">Maine</option>
          <option value="marshall islands">Marshall Islands</option>
          <option value="maryland">Maryland</option>
          <option value="massachusetts">Massachusetts</option>
          <option value="michigan">Michigan</option>
          <option value="minnesota">Minnesota</option>
          <option value="mississippi">Mississippi</option>
          <option value="missouri">Missouri</option>
          <option value="montana">Montana</option>
          <option value="nebraska">Nebraska</option>
          <option value="nevada">Nevada</option>
          <option value="new hampshire">New Hampshire</option>
          <option value="new jersey">New Jersey</option>
          <option value="new mexico">New Mexico</option>
          <option value="new york">New York</option>
          <option value="north carolina">North Carolina</option>
          <option value="north dakota">North Dakota</option>
          <option value="northern mariana islands">
            Northern Mariana Islands
          </option>
          <option value="ohio">Ohio</option>
          <option value="oklahoma">Oklahoma</option>
          <option value="oregon">Oregon</option>
          <option value="palau">Palau</option>
          <option value="pennsylvania">Pennsylvania</option>
          <option value="puerto rico">Puerto Rico</option>
          <option value="rhode island">Rhode Island</option>
          <option value="south carolina">South Carolina</option>
          <option value="south dakota">South Dakota</option>
          <option value="tennessee">Tennessee</option>
          <option value="texas">Texas</option>
          <option value="utah">Utah</option>
          <option value="vermont">Vermont</option>
          <option value="virgin islands">Virgin Islands</option>
          <option value="virginia">Virginia</option>
          <option value="washington">Washington</option>
          <option value="west virginia">West Virginia</option>
          <option value="wisconsin">Wisconsin</option>
          <option value="wyoming">Wyoming</option>
        </Select>
        <Input
          placeholder="Enter location"
          name="location"
          value={form.location}
          onChange={handleChange}
        />
        <FormButton buttonText="Search" type="submit" htmlType="submit" />
      </Form>
    </div>
  );
};

export default SearchForm;

const Form = styled.form`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 85%;
    flex-direction: row;
  }
`;

const Select = styled.select`
    width: 100%;
    border-radius: 5px 0 0 5px;
    border: none;
    margin-bottom: 5px;
    cursor: pointer;
    line-height: 1.3;
    padding: 10px;
    @media (min-width: 768px) {
        width: 20%;
        margin-bottom: 0px;
    }
    &:focus {
        outline: none;
        border-bottom: 2px solid RGB(252, 69, 67);
`;

const Input = styled.input`
  width: 100%;
  border: none;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 0 5px 5px 0;
  @media (min-width: 768px) {
    width: 60%;
    margin-bottom: 0px;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid RGB(252, 69, 67);
  }
`;
