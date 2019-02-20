import React, { PureComponent } from "react";
import { css } from "aphrodite/no-important";
import PropTypes from "prop-types";

import styles from "./styles";

class YearOfBirth extends PureComponent {
  render() {
    const { yearOfBirth } = this.props;
    return (
      <p className={css(styles.yearOfBirth)}>Year of birth: {yearOfBirth}</p>
    );
  }
}

YearOfBirth.propTypes = {
  yearOfBirth: PropTypes.number.isRequired
};

export default YearOfBirth;
