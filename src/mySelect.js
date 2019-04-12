import React from "react";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

class MySelect extends React.Component {
  // props... options

  handleChange = value => {
    // this is going to call setFieldValue and manually update values.topcis
    this.props.onChange("ids", value);
  };

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur("ids", true);
  };

  render() {
    return (
      <div style={{ margin: "1rem 0" }}>
        <label htmlFor="color">Topics (select at least 3) </label>
        <ReactMultiSelectCheckboxes
          id="color"
          options={this.props.options}
          multi={true}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
        />
        {!!this.props.error && this.props.touched && (
          <div style={{ color: "red", marginTop: ".5rem" }}>
            {this.props.error}
          </div>
        )}
      </div>
    );
  }
}

export default MySelect;
