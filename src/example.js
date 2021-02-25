import React from "react";
import { Form, Input, Select, Radio, TextArea } from "semantic-ui-react";

const countryOptions = [
  { key: "as", value: "as", text: "American Samoa" },
  { key: "ad", value: "ad", text: "Andorra" },
  { key: "bj", value: "bj", text: "Benin" }
];
const FormExampleInlineField = () => (
  <Form>
    <Form.Field inline>
      <label>Campaign Name :</label>
      <Input />
    </Form.Field>
    <Form.Field inline>
      <label>Campaign Tags :</label>
      <Select
        placeholder="Select"
        options={countryOptions}
        style={{ minWidth: 300 }}
      />
      <p>
        This field is optional.Tags help you analyze Campaign results for a
        group of campaign that belongs to a tag.
      </p>
    </Form.Field>
    <Form.Field inline>
      <label>Campaign Type :</label>
    </Form.Field>
    <Form.Field>
      <Radio
        label="one time"
        name="radioGroup"
        value="this"
        // checked={this.state.value === 'this'}
        // onChange={this.handleChange}
      />
    </Form.Field>
    <Form.Field>
      <Radio
        label="triggered"
        name="radioGroup"
        value="that"
        // checked={this.state.value === 'that'}
        // onChange={this.handleChange}
      />
    </Form.Field>
    <Form.Field inline>
      <label>Description </label>
      <TextArea style={{ minHeight: 100 }} />
    </Form.Field>
    <Form.Field>
      <Radio
        label="one time"
        name="radioGroup"
        value="this"
        // checked={this.state.value === 'this'}
        // onChange={this.handleChange}
      />
    </Form.Field>
    <Form.Field>
      <Radio
        label="triggered"
        name="radioGroup"
        value="that"
        // checked={this.state.value === 'that'}
        // onChange={this.handleChange}
      />
    </Form.Field>
    <Form.Field inline>
      <label>Send To :</label>
      <Select
        placeholder="Select Segment"
        options={countryOptions}
        style={{ minWidth: 300 }}
      />
    </Form.Field>
    <br />
  </Form>
);

export default FormExampleInlineField;
