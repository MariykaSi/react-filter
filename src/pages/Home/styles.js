import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries } from "../../styles/variables";

export default StyleSheet.create({
  page: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
  },

  loading: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    zIndex: "999",
    width: "100%",
    backgroundColor: "rgba(0,0,0, 0.6)"
  },

  main: {
    flex: "1 1"
  },

  content: {
    margin: "0 20px",
    display: "flex",
    flexWrap: "wrap"
  },

  error: {
    fontSize: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100
  },

  usersContainer: {
    height: 200,
    width: 200
  },

  noResult: {
    textAlign: "center",
    fontSize: 45,
    paddingTop: 40
  }
});
