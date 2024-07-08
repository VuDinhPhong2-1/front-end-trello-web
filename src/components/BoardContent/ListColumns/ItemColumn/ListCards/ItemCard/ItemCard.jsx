import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import GroupIcon from "@mui/icons-material/Group"
import CommentIcon from "@mui/icons-material/Comment"
import AttachmentIcon from "@mui/icons-material/Attachment"
function ItemCard() {
  return (
    <>
      <Card
        sx={{
          cursor: "pointer",
          boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
          overflow: "unset",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://tapchimoitruong.vn/uploads/042021/image001_f72b91f0.jpg"
        />
        <CardContent sx={{ p: 1.5, "&:last-child": { pb: 1.5 } }}>
          <Typography>Phong DZ</Typography>
        </CardContent>
        <CardActions sx={{ p: "0 4px 8px 4px" }}>
          <Button size="small" startIcon={<GroupIcon />}>
            10
          </Button>
          <Button size="small" startIcon={<CommentIcon />}>
            15
          </Button>
          <Button size="small" startIcon={<AttachmentIcon />}>
            20
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          cursor: "pointer",
          boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
          overflow: "unset",
        }}
      >
        {/* <CardContent sx={{ p: 1.5, "&:last-child": { pb: 1.5 } }}>
          <Typography>Card 01</Typography>
        </CardContent> */}
      </Card>
    </>
  )
}

export default ItemCard
