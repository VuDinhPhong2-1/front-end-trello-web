import { Box, Button, Tooltip, Typography } from "@mui/material"
import LongMenu from "~/components/BoardContent/Menus/ListActions"
import AddCardIcon from "@mui/icons-material/AddCard"
import DragHandleIcon from "@mui/icons-material/DragHandle"
import ItemCard from "~/components/BoardContent/Card/Card"

const COLUMN_HEADER_HEIGHT = "50px"
const COLUMN_FOOTER_HEIGHT = "56px"

function BoardContent() {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        width: "100%",
        height: (theme) => theme.trello.boardContentHeight,
        p: "10px 0",
      }}
    >
      <Box // List column
        sx={{
          bgcolor: "inherit",
          height: "100%",
          width: "100%",
          display: "flex",
          overflowX: "auto",
          overflowY: "hiden",
          "&::-webkit-scrollbar-track": { m: 2 },
        }}
      >
        {/* Box column */}
        <Box
          sx={{
            minWidth: "300px",
            maxWidth: "300px",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
            ml: 2,
            borderRadius: "6px",
            height: "fit-cotent",
            maxHeight: (theme) =>
              `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
          }}
        >
          {/* Box column header*/}
          <Box
            sx={{
              height: COLUMN_HEADER_HEIGHT,
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
              Column Tilte
            </Typography>
            <LongMenu />
          </Box>
          {/* Box list card*/}
          <Box
            sx={{
              p: "0 5px",
              m: "0 5px",
              display: "flex",
              flexDirection: "column",
              // p: 2,
              gap: 2,
              overflowX: "hine",
              overflowY: "auto",
              maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} -
            ${theme.spacing(5)} -
            ${COLUMN_HEADER_HEIGHT} -
            ${COLUMN_FOOTER_HEIGHT}
            )`,
              "&::-webkit-scrollbar-thumb": {
                background: "#ced0da",
                borderRadius: "8px",
              },
              "&::-webkit-scrollbar-thumb:hover": { background: "#bfc2cf" },
            }}
          >
            <ItemCard />
          </Box>
          {/* Box column footer*/}
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
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
        {/* Box column */}
        <Box
          sx={{
            minWidth: "300px",
            maxWidth: "300px",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
            ml: 2,
            borderRadius: "6px",
            height: "fit-cotent",
            maxHeight: (theme) =>
              `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
          }}
        >
          {/* Box column header*/}
          <Box
            sx={{
              height: COLUMN_HEADER_HEIGHT,
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
              Column Tilte
            </Typography>
            <LongMenu />
          </Box>
          {/* Box list card*/}
          <Box
            sx={{
              p: "0 5px",
              m: "0 5px",
              display: "flex",
              flexDirection: "column",
              // p: 2,
              gap: 2,
              overflowX: "hine",
              overflowY: "auto",
              maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} -
            ${theme.spacing(5)} -
            ${COLUMN_HEADER_HEIGHT} -
            ${COLUMN_FOOTER_HEIGHT}
            )`,
              "&::-webkit-scrollbar-thumb": {
                background: "#ced0da",
                borderRadius: "8px",
              },
              "&::-webkit-scrollbar-thumb:hover": { background: "#bfc2cf" },
            }}
          >
            <ItemCard />
          </Box>
          {/* Box column footer*/}
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
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
      </Box>
    </Box>
  )
}

export default BoardContent
