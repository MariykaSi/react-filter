import React, { PureComponent } from "react";
import { css } from "aphrodite/no-important";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./styles.scss";

class DataPicker extends PureComponent {
  render() {
    const { name, onChange, date } = this.props;
    return (
      <label className="label">
        {name}:
        <DatePicker
          selected={date}
          onChange={onChange}
          maxDate={new Date()}
          dateFormat="yyyy"
        />
      </label>
    );
  }
}

DataPicker.defaultProps = {
  onChange: null,
  date: null
};

DataPicker.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.object,
  onChange: PropTypes.func
};

export default DataPicker;
