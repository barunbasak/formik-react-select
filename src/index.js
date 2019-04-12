import React from "react";
import ReactDOM from "react-dom";

import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import { Formik } from "formik";
import MySelect from "./mySelect";
//import "./styles.css";

let options = [
  { label: "Thing 1", value: 1 },
  { label: "Thing 2", value: 2 },
  { label: "Thing 3", value: 3 }
];

class App extends React.Component {
  addOption = () => {
    options = [...options, { label: "Four", value: 4 }];
  };
  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <td>
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
                <button type="button" onClick={this.addOption}>
                  Add
                </button>
              </td>

              <td>
                <Formik
                  initialValues={{ ids: [{ label: "Thing 3", value: 3 }] }}
                  onSubmit={values => {
                    console.log(values);
                  }}
                  render={formikProps => (
                    <React.Fragment>
                      <form onSubmit={formikProps.handleSubmit}>
                        <MySelect
                          options={options}
                          value={formikProps.values.ids}
                          onChange={formikProps.setFieldValue}
                          onBlur={formikProps.setFieldTouched}
                        />

                        <ReactMultiSelectCheckboxes
                          name="ids"
                          onChange={formikProps.handleChange}
                          onBlur={formikProps.handleBlur}
                          value={formikProps.values.ids}
                          options={options}
                        />
                        <button type="submit">Submit</button>
                      </form>
                    </React.Fragment>
                  )}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
