import { experimental_extendTheme as extendTheme } from "@mui/material/styles"
// import { cyan, deepOrange, orange, teal } from "@mui/material/colors"

const APP_BAR_HEIGHT = "48px"
const BOARD_BAR_HEIGHT = "58px"
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const theme = extendTheme({
  trello:{
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT
  },
  // colorSchemes: {
  //   light: {
  //     palette: {
  //       primary: teal,
  //       secondary: deepOrange
  //     }
  //   },
  //   dark: {
  //     palette: {
  //       primary: cyan,
  //       secondary: orange
  //     },
  //     spacing: (factor) => `${0.25 * factor}rem`
  //   }
  // },
  components:{
    MuiCssBaseline:{
      styleOverrides:{
        body:{
          "*::-webkit-scrollbar":{
            widht: "8px",
            height: "8px"
          },
          "*::-webkit-scrollbar-thumb":{
            background:"#dcdde1",
            borderRadius: "8px"
          },
          "*::-webkit-scrollbar-thumb:hover":{
            background:"white"
          }
        }
      }
    },
    MuiButton: {
      styleOverrides:{
        root:{
          textTransform:"none",
          borderWidth: "0.5px",
          "&:hover":{
            borderWidth: "0.5px",
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          "& fieldset": { borderWidth: "0.5px !important" },
          "&:hover fieldset": { borderWidth: "2px !important" },
          "&.Mui-focused fieldset": { borderWidth: "2px !important" },
        }
      }
    },
    MuiInputLabel: {
      styleOverrides:{
        root: { fontSize: "0.87rem" }
      }
    },
    MuiTypography: {
      styleOverrides:{
        root: {
          "&.MuiTypography-body1":{
            fontSize: "0.87rem"
          }
        }
      }
    },
  }
})

export default theme