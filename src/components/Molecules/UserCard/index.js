import React, { PureComponent } from "react";
import { css } from "aphrodite/no-important";
import PropTypes from "prop-types";
import Image from "../../Atoms/Image";
import UserName from "../../Atoms/UserName";
import YearOfBirth from "../../Atoms/YearOfBirth";
import Country from "../../Atoms/Country";

import styles from "./styles";

class UserCard extends PureComponent {
  render() {
    const { name, yearOfBirth, country } = this.props;
    return (
      <div className={css(styles.user)}>
        <Image />
        <UserName name={name} />
        <YearOfBirth yearOfBirth={yearOfBirth} />
        <Country country={country} />
      </div>
    );
  }
}

UserCard.defaultProps = {
  yearOfBirth: null,
  country: null
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  yearOfBirth: PropTypes.number,
  country: PropTypes.string
};

export default UserCard;
