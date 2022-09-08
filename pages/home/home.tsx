import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import { Data } from "../api/procedures.api";

// api/procedures?page=1

const Home: NextPage = () => {
  return (
    <>
      <Typography variant="h1">HOME</Typography>

      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Verfahren</TableCell>
              <TableCell align="right">Frist</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.attributes.title}
                </TableCell>
                <TableCell align="right">{row.attributes.createdAt}</TableCell>
                <TableCell align="right">{row.attributes.state}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </>
  );
};

export default Home;
