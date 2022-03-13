import { makeStyles } from "@material-ui/core/styles";
import { withThemeCreator } from "@material-ui/styles";

const styles = makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: "0",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "45 vh",
    padding: "10",
    borderRadius: 10,
    color: "white",
  },
  infoCard: {
    display: "flex",
    flexDirection: "center",
    textAlign: "center",
  },
});

export default styles;
