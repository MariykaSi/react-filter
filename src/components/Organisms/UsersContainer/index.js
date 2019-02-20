import React, { PureComponent, Fragment } from "react";
import { css } from "aphrodite/no-important";
import PropTypes from "prop-types";

import styles from "./styles";
import UserCard from "../../Molecules/UserCard";
import { dateFormat } from "../../../utils/dateFormat";

class UsersContainer extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <Fragment>
        <div className={css(styles.userCard)}>
          {list.map(item => (
            <UserCard
              key={item.id}
              name={item.name}
              country={item.country}
              yearOfBirth={dateFormat(item.yearOfBirth)}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

UsersContainer.propTypes = {
  list: PropTypes.array.isRequired
};

export default UsersContainer;
