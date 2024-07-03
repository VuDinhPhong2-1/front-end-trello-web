import FilterListIcon from "@mui/icons-material/FilterList"
import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from "@mui/material"
import DashboardIcon from "@mui/icons-material/Dashboard"
import VpnLockIcon from "@mui/icons-material/VpnLock"
import AddToDriveIcon from "@mui/icons-material/AddToDrive"
import BoltIcon from "@mui/icons-material/Bolt"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
const MENU_STYLE = {
  color: "primary.main",
  bgcolor: "white",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
}
function BoardBar() {
  return (
    <Box
      sx={{
        // backgroundColor: "primary.dark",
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: 2,
        gap: 2,
        overflowX: "auto",
        overflowY: "hidden",
        borderTop: "1px solid #00bfa5",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          label="Phong Trello"
          icon={<DashboardIcon />}
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          label="Public/Private WorkSpace"
          icon={<VpnLockIcon />}
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          label="Add To Google Drive"
          icon={<AddToDriveIcon />}
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          label="Automation"
          icon={<BoltIcon />}
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          label="Filter"
          icon={<FilterListIcon />}
          clickable
          sx={MENU_STYLE}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />}>
          Invite
        </Button>
        <AvatarGroup
          sx={{
            "& .MuiAvatar-root": {
              height: 34,
              width: 34,
              fontSize: 16,
            },
          }}
          max={4}
        >
          <Tooltip title="Dinh Phong">
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-1/426406032_2145788695760014_5051979108206305392_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHmkbQa12z2VCPsjneYsAGDvZPaIOVraLq9k9og5Wtous8QQYQroyzfUQVdyANc0YyptWU-GXAfmEjI8Fp1B9T_&_nc_ohc=_Ys7YxZ6SNsQ7kNvgEr5tDy&_nc_ht=scontent.fhan4-1.fna&oh=00_AYDM2NC2pdXNUotz6f-1P4TrKarbCqhK6-VD3xmLSRBBcw&oe=668975A2"
            />
          </Tooltip>
          <Tooltip title="Dinh Phong">
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-1/426406032_2145788695760014_5051979108206305392_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHmkbQa12z2VCPsjneYsAGDvZPaIOVraLq9k9og5Wtous8QQYQroyzfUQVdyANc0YyptWU-GXAfmEjI8Fp1B9T_&_nc_ohc=_Ys7YxZ6SNsQ7kNvgEr5tDy&_nc_ht=scontent.fhan4-1.fna&oh=00_AYDM2NC2pdXNUotz6f-1P4TrKarbCqhK6-VD3xmLSRBBcw&oe=668975A2"
            />
          </Tooltip>
          <Tooltip title="Dinh Phong">
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-1/426406032_2145788695760014_5051979108206305392_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHmkbQa12z2VCPsjneYsAGDvZPaIOVraLq9k9og5Wtous8QQYQroyzfUQVdyANc0YyptWU-GXAfmEjI8Fp1B9T_&_nc_ohc=_Ys7YxZ6SNsQ7kNvgEr5tDy&_nc_ht=scontent.fhan4-1.fna&oh=00_AYDM2NC2pdXNUotz6f-1P4TrKarbCqhK6-VD3xmLSRBBcw&oe=668975A2"
            />
          </Tooltip>
          <Tooltip title="Dinh Phong">
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-1/426406032_2145788695760014_5051979108206305392_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHmkbQa12z2VCPsjneYsAGDvZPaIOVraLq9k9og5Wtous8QQYQroyzfUQVdyANc0YyptWU-GXAfmEjI8Fp1B9T_&_nc_ohc=_Ys7YxZ6SNsQ7kNvgEr5tDy&_nc_ht=scontent.fhan4-1.fna&oh=00_AYDM2NC2pdXNUotz6f-1P4TrKarbCqhK6-VD3xmLSRBBcw&oe=668975A2"
            />
          </Tooltip>
          <Tooltip title="Dinh Phong">
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-1/426406032_2145788695760014_5051979108206305392_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHmkbQa12z2VCPsjneYsAGDvZPaIOVraLq9k9og5Wtous8QQYQroyzfUQVdyANc0YyptWU-GXAfmEjI8Fp1B9T_&_nc_ohc=_Ys7YxZ6SNsQ7kNvgEr5tDy&_nc_ht=scontent.fhan4-1.fna&oh=00_AYDM2NC2pdXNUotz6f-1P4TrKarbCqhK6-VD3xmLSRBBcw&oe=668975A2"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
