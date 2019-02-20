import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { css } from "aphrodite/no-important";

import styles from "./styles";
import { getUsersStart } from "../../actions/users";
import { dateFormat } from "../../utils/dateFormat";
import Loading from "../../components/Atoms/Loading";
import Header from "../../components/Organisms/Header";
import Footer from "../../components/Organisms/Footer";
import InputGroup from "../../components/Molecules/InputGroup";
import UsersContainer from "../../components/Organisms/UsersContainer";
import Pagination from "../../components/Molecules/Pagination";

const userPerPage = 5;

class Home extends Component {
  state = {
    filteredUsers: [],
    name: "",
    country: "",
    date: null,
    pageCount: this.props.users.list.length / userPerPage,
    activePage: 0
  };

  componentDidMount() {
    this.props.getUsersStart();
  }

  setUsers() {
    this.setState({
      filteredUsers: this.props.users.list,
      pageCount: this.props.users.list.length / userPerPage
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.users.list !== this.props.users.list) {
      this.setUsers();
    }
  }

  onChange = (nameVal, countryVal, dateVal) => {
    const data = this.props.users.list;
    const { activePage } = this.state;
    const res = this.filter(data, nameVal, countryVal, dateVal);
    const listSize = res.length;
    const pages = this.getPagesNumber(listSize);
    this.setState({
      filteredUsers: res,
      name: nameVal,
      date: dateVal,
      country: countryVal,
      pageCount: pages,
      activePage: activePage > pages ? 0 : activePage
    });
  };

  getPagesNumber(size) {
    return size / userPerPage;
  }

  padinationClick = page => {
    this.setState({
      activePage: page.selected
    });
  };

  filter = (data, name, country, date) => {
    const filteredUsers = data.filter(
      user =>
        user.name.toLowerCase().includes(name.toLowerCase()) &&
        user.country.toLowerCase().includes(country.toLowerCase()) &&
        (dateFormat(user.yearOfBirth) === dateFormat(date) || date === null)
    );
    return filteredUsers;
  };

  render() {
    const {
      global: { loading },
      users
    } = this.props;

    const {
      filteredUsers,
      name,
      country,
      date,
      pageCount,
      activePage
    } = this.state;

    const errorExist = users.error;

    const currentUsersList = filteredUsers.slice(
      activePage * userPerPage,
      activePage * userPerPage + userPerPage
    );

    return (
      <div className={css(styles.page)}>
        {loading && (
          <section className={css(styles.loading)}>
            <Loading />
          </section>
        )}
        <Fragment>
          <Header />
          <div className={css(styles.main)}>
            <InputGroup
              date={date}
              onChangeName={val => {
                this.onChange(val, country, date);
              }}
              onChangeCountry={val => {
                this.onChange(name, val, date);
              }}
              onChangeYearOfBirth={val => {
                this.onChange(name, country, val);
              }}
            />
            {!errorExist && (
              <Fragment>
                <UsersContainer list={currentUsersList} />

                {currentUsersList[0] && (
                  <Pagination
                    pageCount={pageCount}
                    onPageChange={this.padinationClick}
                  />
                )}
              </Fragment>
            )}
            {errorExist && (
              <div className={css(styles.error)}>{`Sorry, ${users.error}`}</div>
            )}
          </div>
          <Footer />
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = {
  getUsersStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
