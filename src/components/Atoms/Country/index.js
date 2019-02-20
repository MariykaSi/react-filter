import React, { PureComponent } from "react";
import { css } from "aphrodite/no-important";
import PropTypes from "prop-types";

import styles from "./styles";

class Country extends PureComponent {
  render() {
    const { country } = this.props;
    return <p className={css(styles.country)}>Country: {country}</p>;
  }
}

Country.propTypes = {
  country: PropTypes.string.isRequired
};

export default Country;
