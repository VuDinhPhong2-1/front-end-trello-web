import { Box, Button } from "@mui/material"
import ItemColumn from "./ItemColumn/ItemColumn"
import NoteAddIcon from "@mui/icons-material/NoteAdd"
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable"
function ListColumn({ columns }) {
  const columsIds = columns?.map((c) => c._id)
  return (
    <SortableContext items={columsIds} strategy={horizontalListSortingStrategy}>
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
        {columns?.map((column) => (
          <ItemColumn key={column._id} column={column} />
        ))}

        {/* Add new column */}
        <Box
          sx={{
            marginLeft: 1,
            maxWidth: "200px",
            minWidth: "200px",
            height: "fit-content",
            bgcolor: "#ffffff3d",
            borderRadius: "6px",
          }}
        >
          <Button
            startIcon={<NoteAddIcon />}
            sx={{
              color: "white",
              width: "100%",
              justifyContent: "flex-start",
              pl: 2.5,
              py: 1,
            }}
          >
            Add To Another List
          </Button>
        </Box>
      </Box>
    </SortableContext>
  )
}

export default ListColumn
