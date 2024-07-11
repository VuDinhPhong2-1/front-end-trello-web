import { Box } from "@mui/material"
import ItemCard from "./ItemCard/ItemCard"
import {
  verticalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable"
// import { useEffect, useState } from "react"
// import { mapOrder } from "~/utils/sort"

export default function ListCards({ cards }) {
  // lọc ra chỉ lấy mảng có id thứ tự của card
  const cardsIds = cards?.map((c) => c._id)
  // const [orderedCards, setOrderedCards] = useState([])

  // useEffect(() => {
  //   setOrderedCards(mapOrder(cards, cardsIds, "_id"))
  // }, [cards])

  return (
    <SortableContext items={cardsIds} strategy={verticalListSortingStrategy}>
      <Box
        sx={{
          p: "0 5px",
          m: "0 5px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          overflowX: "hine",
          overflowY: "auto",
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} -
        ${theme.spacing(5)} -
        ${theme.trello.columsHeaderHeight} -
        ${theme.trello.columsHeaderHeight}
        )`,
          "&::-webkit-scrollbar-thumb": {
            background: "#ced0da",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb:hover": { background: "#bfc2cf" },
        }}
      >
        {cards?.map((card) => (
          <ItemCard key={card._id} card={card} />
        ))}
      </Box>
    </SortableContext>
  )
}
