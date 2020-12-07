import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    app: {},
    appHeader: {
      backgroundColor: "#f4f5f8",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      fontSize: "calc(10px + 2vmin)",
      fontFamily: '"Montserrat", sans-serif',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.fontSize * 3,
    },
    container: {
      margin: theme.spacing(3),
    },
    estimatesCard: {
      minHeight: theme.spacing(40),
      margin: theme.spacing(2, 3),
      padding: theme.spacing(2),
      position: "relative",
    },
    estimateRow: {
      display: "flex",
      margin: theme.spacing(1, 0),
      fontSize: theme.typography.fontSize,
      fontWeight: theme.typography.fontWeightBold,
    },
    estimateCost: {
      marginLeft: "auto",
    },
    tabsContainer: {
      display: "flex",
      flexDirection: "column",
    },
    tabsHeader: {
      display: "flex",
      justifyContent: "space-between",
    },
    tabTitle: {
      fontSize: theme.typography.fontSize * 3 + 2,
    },
    tabs: {
      display: "flex",
      justifyContent: "space-around",
      margin: theme.spacing(2, 0),
    },
    tab: {
      boxShadow: theme.shadows[3],
      padding: theme.spacing() / 2,
      margin: theme.spacing(),
      height: theme.spacing(7) + theme.spacing() / 2,
      backgroundColor: "#fff",

      "&:hover": {
        backgroundColor: "#007EFF",
      },
      opacity: "1 !important",
      cursor: "not-allowed !important",
    },
    tabSelected: {
      backgroundColor: "#007EFF !important",
      cursor: "pointer !important",
    },
    tabLabel: {
      color: theme.palette.common.black,
      "&:hover": {
        color: theme.palette.common.white,
      },
      fontWeight: theme.typography.fontWeightBold,
    },
    tabLabelSelected: {
      color: theme.palette.common.white,
    },
    totalCount: {
      position: "absolute",
      bottom: 0,
      margin: theme.spacing(2, 0),
    },
  })
);
