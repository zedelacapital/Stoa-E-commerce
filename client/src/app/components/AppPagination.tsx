import { Box, Pagination, Typography } from "@mui/material";
import { MetaData } from "../models/Pagination";

interface Props {
        metaData: MetaData;
        onPageChange: (page: number) => void;
}

export default function AppPagination({metaData, onPageChange}: Props) {
   const {currentPage, totalCount, totalPages, pageSize} = metaData;
return (
    <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
  >
    <Typography>
        Displaying {(currentPage -1)*pageSize} - {currentPage*pageSize > totalCount 
        ? totalCount 
        : currentPage*pageSize} of {totalCount} Items
        </Typography>
    <Pagination
      color='primary'
      size='large'
      count={totalPages}
      page={currentPage}
      onChange={(_, page) => onPageChange(page)}
    />
  </Box>
)
}