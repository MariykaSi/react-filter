import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries } from "../../../styles/variables";

export default StyleSheet.create({
  header: {
    margin: "0 20px"
  },

  logo: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold",
    letterSpacing: 1.8,
    lineHeight: 1.7,
    textTransform: "uppercase",

    [mediaQueries.medium]: {
      padding: "20px 0"
    }
  }
});
