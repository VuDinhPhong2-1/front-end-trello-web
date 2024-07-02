import { experimental_extendTheme as extendTheme } from "@mui/material/styles"
import { cyan, deepOrange, orange, teal } from "@mui/material/colors"

const theme = extendTheme({
  trello:{
    appBarHeight: "48px",
    boardBarHeight: "58px"
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      },
      spacing: (factor) => `${0.25 * factor}rem`
    }
  },
  components:{
    MuiButton: {
      styleOverrides:{
        root:{
          textTransform:"none"
        }
      }
    },
    MuiOutlinedInput:{
      styleOverrides:{
        root:({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: "0.875rem",
          ".MuiOutlinedInput-notchedOutline": { borderColor: theme.palette.primary.light },
          "&:hover":{
            ".MuiOutlinedInput-notchedOutline": { borderColor: theme.palette.primary.main },
          },
          "& fieldset":{
            borderWidth: "1px !important"
          }
        })
      }
    },
    MuiInputLabel: {
      styleOverrides:{
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: "0.87rem"
        })
      }
    },
  }
})

export default theme