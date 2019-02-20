import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries, colors } from "../../../styles/variables";

export default StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    borderTop: `1px solid ${colors.grayEE}`,
    padding: "20px 0",

    [mediaQueries.small]: {
      flexDirection: "row"
    }
  }
});
