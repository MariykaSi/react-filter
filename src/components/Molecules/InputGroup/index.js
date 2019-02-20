import React, { PureComponent } from "react";
import { css } from "aphrodite/no-important";
import PropTypes from "prop-types";

import styles from "./styles";
import Input from "../../Atoms/Input";
import DataPicker from "../../Atoms/DataPicker";
import { filters } from "../../../constants/filters";

class InputGroup extends PureComponent {
  render() {
    const {
      onChangeName,
      onChangeCountry,
      onChangeYearOfBirth,
      date
    } = this.props;
    return (
      <div className={css(styles.container)}>
        <Input name={filters[0].name} onChange={onChangeName} />
        <Input name={filters[1].name} onChange={onChangeCountry} />
        <DataPicker
          name={filters[2].name}
          date={date}
          onChange={onChangeYearOfBirth}
        />
      </div>
    );
  }
}

InputGroup.defaultProps = {
  onChangeName: null,
  onChangeCountry: null,
  onChangeYearOfBirth: null
};

InputGroup.propTypes = {
  date: PropTypes.object,
  onChangeName: PropTypes.func,
  onChangeCountry: PropTypes.func,
  onChangeYearOfBirth: PropTypes.func
};

export default InputGroup;
