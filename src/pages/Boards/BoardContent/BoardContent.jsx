import {
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
  TouchSensor,
  MouseSensor,
  DragOverlay,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable"
import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import ItemColumn from "~/components/BoardContent/ListColumns/ItemColumn/ItemColumn"
import ItemCard from "~/components/BoardContent/ListColumns/ItemColumn/ListCards/ItemCard/ItemCard"
// import ListCards from "~/components/BoardContent/ListColumns/ItemColumn/ListCards/ListCards"
import ListColumn from "~/components/BoardContent/ListColumns/ListColumn"
import { mapOrder } from "~/utils/sort"

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
  CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
}
function BoardContent({ board }) {
  const [orderedColumns, setOrderedColumns] = useState([])
  // theo dõi giá trị kéo card hay column
  // const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)

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

  const handleDragStart = (event) => {
    // Kiểm tra và lấy dữ liệu từ sự kiện kéo
    const activeData = event?.active?.data?.current
    if (activeData) {
      setActiveDragItemType(
        activeData?.columnId
          ? ACTIVE_DRAG_ITEM_TYPE.CARD
          : ACTIVE_DRAG_ITEM_TYPE.COLUMN
      )
      setActiveDragItemData(activeData)
    }
  }

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
    setActiveDragItemData(null)
    setActiveDragItemType(null)
  }
  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: 0.5,
        },
      },
    }),
  }
  return (
    <DndContext
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      sensors={sensors}
    >
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
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragItemType && null}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
            <ItemColumn column={activeDragItemData} />
          )}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
            <ItemCard card={activeDragItemData} />
          )}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}

export default BoardContent
