import React, { PureComponent } from "react";
import { css } from "aphrodite/no-important";
import user from "../../../assets/image/user.png";

import styles from "./styles";

class Image extends PureComponent {
  render() {
    return <img src={user} alt="user" className={css(styles.image)} />;
  }
}

export default Image;
