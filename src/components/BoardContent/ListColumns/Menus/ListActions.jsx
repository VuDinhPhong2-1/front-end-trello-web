import * as React from "react"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import { Divider, ListItemIcon, Tooltip } from "@mui/material"
import { Logout } from "@mui/icons-material"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import ContentCutIcon from "@mui/icons-material/ContentCut"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import ContentPasteIcon from "@mui/icons-material/ContentPaste"
import AddCardIcon from "@mui/icons-material/AddCard"

const ITEM_HEIGHT = 48

export default function MenuAction() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Tooltip title="More Options">
        <IconButton
          aria-label="more"
          id="basic-column-dropdown"
          aria-controls={open ? "basic-menu-column-dropdown" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-column-dropdown"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "230px",
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AddCardIcon fontSize="small" />
          </ListItemIcon>
          Add New Card
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ContentCutIcon fontSize="small" />
          </ListItemIcon>
          Cut
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ContentCopyIcon fontSize="small" />
          </ListItemIcon>
          Copy
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ContentPasteIcon fontSize="small" />
          </ListItemIcon>
          Past
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DeleteForeverIcon fontSize="small" />
          </ListItemIcon>
          Remove This Column
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Archive This Column
        </MenuItem>
      </Menu>
    </div>
  )
}
