import React, { PureComponent } from "react";
import { css } from "aphrodite/no-important";
import PropTypes from "prop-types";

import styles from "./styles";

class UserName extends PureComponent {
  render() {
    const { name } = this.props;
    return <h2 className={css(styles.name)}>{name}</h2>;
  }
}

UserName.propTypes = {
  name: PropTypes.string.isRequired
};

export default UserName;
