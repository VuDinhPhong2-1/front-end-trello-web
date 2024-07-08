import { Box } from "@mui/material"
import ItemCard from "./ItemCard/ItemCard"

export default function ListCards({ cards }) {
  return (
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
  )
}
