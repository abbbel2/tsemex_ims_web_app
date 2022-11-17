import { Box, TableFooter, TablePagination } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PerfectScrollBar from "react-perfect-scrollbar";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F0F0F0",
    color: "#000000",
    fontWeight: 600,
    fontSize: 17,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#F0F0F0",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const createData = (
  no: string,
  part: string,
  name: string,
  category: string,
  sub_category: string,
  balance: string
) => {
  return { no, part, name, category, sub_category, balance };
};

const rows = [
  createData(
    "ID/0001",
    "eribieurbg",
    "DN-100mm(4)",
    "GS Pipe & Fittings",
    "GS Pipe B-class",
    "850 pcs"
  ),
  createData(
    "ID/0002",
    "weqfiouvwefiub",
    "DN-100mm(4)",
    "GS Pipe & Fittings",
    "GS Pipe B-class",
    "850 pcs"
  ),
  createData(
    "ID/0003",
    "qiwefvqiuwvefuiv",
    "DN-100mm(4)",
    "GS Pipe & Fittings",
    "GS Pipe B-class",
    "850 pcs"
  ),
  createData(
    "ID/0004",
    "qwiefbubwef",
    "DN-100mm(4)",
    "GS Pipe & Fittings",
    "GS Pipe B-class",
    "850 pcs"
  ),
  createData(
    "ID/0005",
    "ieubuibasduyv",
    "DN-100mm(4)",
    "GS Pipe & Fittings",
    "GS Pipe B-class",
    "850 pcs"
  ),
  createData(
    "ID/0006",
    "qweibfiqweofiniw",
    "DN-100mm(4)",
    "GS Pipe & Fittings",
    "GS Pipe B-class",
    "850 pcs"
  ),
  createData(
    "ID/0007",
    "sdvjhvzyuvuywef",
    "DN-100mm(4)",
    "GS Pipe & Fittings",
    "GS Pipe B-class",
    "850 pcs"
  ),
  createData(
    "ID/0008",
    "eoqvfuywveyuv",
    "DN-100mm(4)",
    "GS Pipe & Fittings",
    "GS Pipe B-class",
    "850 pcs"
  ),
  createData(
    "ID/0009",
    "isoduvsayvsudyfv",
    "DN-100mm(4)",
    "GS Pipe & Fittings",
    "GS Pipe B-class",
    "850 pcs"
  ),
  createData(
    "ID/00010",
    "qweofvyueyfvwyuevf",
    "DN-100mm(4)",
    "GS Pipe & Fittings",
    "GS Pipe B-class",
    "850 pcs"
  ),
  createData(
    "ID/00011",
    "ebwiobuibwfwebfiu",
    "DN-100mm(4)",
    "GS Pipe & Fittings",
    "GS Pipe B-class",
    "850 pcs"
  ),
  createData(
    "ID/00011",
    "ebwiobuibwfwebfiu",
    "DN-100mm(4)",
    "GS Pipe & Fittings",
    "GS Pipe B-class",
    "850 pcs"
  ),
  createData(
    "ID/00011",
    "ebwiobuibwfwebfiu",
    "DN-100mm(4)",
    "GS Pipe & Fittings",
    "GS Pipe B-class",
    "850 pcs"
  ),
  createData(
    "ID/00011",
    "ebwiobuibwfwebfiu",
    "DN-100mm(4)",
    "GS Pipe & Fittings",
    "GS Pipe B-class",
    "850 pcs"
  ),
];

const TableComponent = () => {
  return (
    <div className="mt-8">
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table
          sx={{ minWidth: 700 }}
          aria-label="customized table"
          size="medium"
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Item ID</StyledTableCell>
              <StyledTableCell>Part #</StyledTableCell>
              <StyledTableCell>Item name</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>Sub-Category</StyledTableCell>
              <StyledTableCell>Balance</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell>{row.no}</StyledTableCell>
                <StyledTableCell>{row.part}</StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.category}</StyledTableCell>
                <StyledTableCell>{row.sub_category}</StyledTableCell>
                <StyledTableCell>{row.balance}</StyledTableCell>
                <StyledTableCell>{row.balance}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={10}
            rowsPerPage={20}
            page={1}
            onPageChange={() => {}}
            onRowsPerPageChange={() => {}}
          />
        </TableRow>
      </TableFooter>
    </div>
  );
};

export default TableComponent;
