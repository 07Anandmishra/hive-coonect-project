// import * as React from 'react';
// import TablePagination from '@mui/material/TablePagination';

// export default function TablePaginationDemo() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (
//     event: React.MouseEvent<HTMLButtonElement> | null,
//     newPage: number,
//   ) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <TablePagination
//       component="div"
//       count={100}
//       page={page}
//       onPageChange={handleChangePage}
//       rowsPerPage={rowsPerPage}
//       onRowsPerPageChange={handleChangeRowsPerPage}
//     />
//   );
// }




import React from 'react';
import TablePagination from '@mui/material/TablePagination';

interface PaginationProps {
  page: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  rowsPerPage: number;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  totalCount: number;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
  totalCount,
}) => {
  return (
    <TablePagination
      component="div"
      count={totalCount}
      page={page}
      onPageChange={onPageChange}
      rowsPerPageOptions={[5, 10, 20]}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={onRowsPerPageChange}
    />
  );
};

export default Pagination;
