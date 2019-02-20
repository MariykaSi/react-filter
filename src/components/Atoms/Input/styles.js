import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries, colors } from "../../../styles/variables";

export default StyleSheet.create({
  label: {
    fontWeight: 500,
    textTransform: "uppercase"
  },

  input: {
    fontWeight: 500,
    fontSize: 13,
    margin: "15px 0px 15px 5px",
    padding: 10,
    border: `1px solid ${colors.gray}`,
    borderRadius: "4px",
    minWidth: 200,

    [mediaQueries.small]: {
      margin: "15px 19px"
    }
  }
});
