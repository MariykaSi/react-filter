import React, { PureComponent } from "react";
import { css } from "aphrodite/no-important";

import styles from "./styles";

class Header extends PureComponent {
  render() {
    return (
      <header className={css(styles.header)}>
        <div className={css(styles.logo)}>
          <a href="/">Users</a>
        </div>
      </header>
    );
  }
}

export default Header;
