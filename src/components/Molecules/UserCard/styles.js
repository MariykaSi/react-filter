import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries } from "../../../styles/variables";

export default StyleSheet.create({
  user: {
    width: "100%",
    textAlign: "center",
    marginBottom: 40,

    [mediaQueries.medium]: {
      width: "50%"
    },

    [mediaQueries.large]: {
      width: "33.3%"
    }
  }
});
