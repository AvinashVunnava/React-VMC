import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    cardContainer: {
      margin: theme.spacing(2),
      minHeight: theme.spacing(13),
      padding: theme.spacing(2),
    },
    card: {
      display: "flex",
    },
    cardImage: {
      width: 100,
      height: 102,
      backgroundColor: "#C4C4C4",
    },
    cardText: {
      marginLeft: theme.spacing(2),
    },
    cardImageTitle: {
      fontSize: theme.spacing(4),
    },
    cardImageText: {
      fontSize: theme.spacing(2),
    },
    cardRightContainer: {
      textAlign: "center",
      margin: theme.spacing(0, 1),
    },
    cardBtn: {
      color: "#FFF !important",
      backgroundColor: "#007EFF !important",
      "&:hover": {
        backgroundColor: "#007EFF !important",
      },
    },
    backBtn: {
      marginRight: theme.spacing(2),
      backgroundColor: "#000 !important",
      "&:hover": {
        backgroundColor: "#000 !important",
      },
    },
    radioRoot: {
      color: "#007EFF !important",
    },
    modalContent: {
      position: "absolute",
      top: "25%",
      left: "25%",
      transform: "translate(0%, 50%)",
      minWidth: "400px",
      padding: theme.spacing(2),
    },
    modalHeader: {
      fontSize: theme.typography.h4.fontSize,
      color: "#F1A513",
    },
    modalBtn: {
      display: "flex",
      justifyContent: "flex-end",
    },
    instanceCardsContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: theme.spacing(3),
    },
    instanceCard: {
      cursor: "pointer",
      padding: theme.spacing(2, 1),
    },
    selectedInstanceCard: {
      color: "#007EFF",
      border: "2px solid #007EFF",
    },
    instanceSelect: {
      margin: theme.spacing(7),
    },
    instanceNav: {
      display: "flex",
      justifyContent: "flex-end",
      margin: theme.spacing(0, 7),
    },
  })
);
