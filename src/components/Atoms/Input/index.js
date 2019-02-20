import React, { PureComponent } from "react";
import { css } from "aphrodite/no-important";
import PropTypes from "prop-types";

import styles from "./styles";

class Input extends PureComponent {
  render() {
    const { name, onChange } = this.props;
    return (
      <label className={css(styles.label)}>
        {name}:
        <input
          type="text"
          name={name}
          className={css(styles.input)}
          onChange={e => onChange(e.target.value)}
        />
      </label>
    );
  }
}

Input.defaultProps = {
  onChange: null
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default Input;
