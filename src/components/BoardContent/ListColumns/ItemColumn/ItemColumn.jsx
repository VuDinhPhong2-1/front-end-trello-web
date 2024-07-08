import { Box, Button, Tooltip, Typography } from "@mui/material"
import AddCardIcon from "@mui/icons-material/AddCard"
import DragHandleIcon from "@mui/icons-material/DragHandle"
import MenuAction from "../Menus/ListActions"
import ListCards from "./ListCards/ListCards"
import { mapOrder } from "~/utils/sort"

function ItemColumn({ column }) {
  const orderedColumns = mapOrder(column?.cards, column?.cardOrderIds, "_id")

  return (
    <Box
      sx={{
        minWidth: "300px",
        maxWidth: "300px",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
        ml: 2,
        borderRadius: "6px",
        height: "fit-content",
        maxHeight: (theme) =>
          `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
      }}
    >
      {/* Box column header*/}
      <Box
        sx={{
          height: (theme) => theme.trello.columsHeaderHeight,
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", cursor: "pointer", fontSize: "1rem" }}
        >
          {column?.title}
        </Typography>
        <MenuAction />
      </Box>
      {/* Box list card*/}
      <ListCards cards={orderedColumns} />
      {/* Box column footer*/}
      <Box
        sx={{
          height: (theme) => theme.trello.columnFooterHeight,
          p: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button startIcon={<AddCardIcon />}>Add New Card</Button>
        <Tooltip title="Drag to move column">
          <DragHandleIcon />
        </Tooltip>
      </Box>
    </Box>
  )
}

export default ItemColumn
