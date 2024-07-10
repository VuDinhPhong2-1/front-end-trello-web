import {
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
  TouchSensor,
  MouseSensor,
} from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable"
import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import ListColumn from "~/components/BoardContent/ListColumns/ListColumn"
import { mapOrder } from "~/utils/sort"

function BoardContent({ board }) {
  const [orderedColumns, setOrderedColumns] = useState([])
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 500,
      },
    })
  )
  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"))
  }, [board])

  const handleDragEnd = (event) => {
    const { active, over } = event
    // nếu kéo ra phạm vi ngoài thì ko trả về gì
    if (!over) return
    if (over && active.id !== over.id) {
      // lấy vị trí cũ từ active
      const oldIndex = orderedColumns?.findIndex((c) => c._id === active.id)
      // lấy vị trí mới từ over
      const newIndex = orderedColumns?.findIndex((c) => c._id === over.id)
      if (oldIndex !== -1 && newIndex !== -1) {
        const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
        setOrderedColumns(dndOrderedColumns)
      }
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
          width: "100%",
          height: (theme) => theme.trello.boardContentHeight,
          p: "10px 0",
        }}
      >
        <ListColumn columns={orderedColumns} />
      </Box>
    </DndContext>
  )
}

export default BoardContent
