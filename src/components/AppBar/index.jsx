import {
  Badge,
  Box,
  Button,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material"
import ModeSelect from "../ModeSelect"
import AppsIcon from "@mui/icons-material/Apps"
import { ReactComponent as trelloLogo } from "~/assets/trello.svg"
import SvgIcon from "@mui/material/SvgIcon"
import WorkSpaces from "./Menus/Workspaces"
import Recent from "./Menus/Recent"
import Starred from "./Menus/Starred"
import Templates from "./Menus/Templates"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import Profiles from "./Menus/Profiles"
import LibraryAddIcon from "@mui/icons-material/LibraryAdd"
function AppBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: 2,
        gap: 2,
        overflowX: "auto",
        overflowY: "hidden",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "primary.main" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={trelloLogo}
            inheritViewBox
            fontSize="small"
            sx={{ color: "primary.main" }}
          />
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Trello
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <WorkSpaces />
            <Recent />
            <Starred />
            <Templates />
            <Button variant="outlined" startIcon={<LibraryAddIcon />}>
              Create
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          size="small"
          sx={{ minWidth: "120px" }}
        />
        <ModeSelect />
        <Tooltip title="Notification" sx={{ cursor: "pointer" }}>
          <Badge color="secondary" variant="dot">
            <NotificationsNoneIcon sx={{ color: "primary.main" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="help" sx={{ cursor: "pointer", color: "primary.main" }}>
          <Badge color="secondary" variant="dot">
            <HelpOutlineIcon />
          </Badge>
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
