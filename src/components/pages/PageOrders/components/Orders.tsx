import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useDeleteOrder, useInvalidateOrders, useOrders } from "~/queries/orders";

export default function Orders() {
  const { data } = useOrders();
  // @ts-ignore
  const orderArr = data?.order ?? [];
  const invalidateOrders = useInvalidateOrders();
  const { mutate: deleteOrder } = useDeleteOrder();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>From</TableCell>
            <TableCell align="center">Items count</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderArr?.map((order: any) => {
            return (
              <TableRow key={order.id}>
                <TableCell
                  component="th"
                  scope="row">
                  {order.delivery?.firstName} {order.delivery?.lastName}
                </TableCell>
                <TableCell align="center">{order.cart.items?.length}</TableCell>
                <TableCell align="center">
                  {order.delivery?.city}, {order.delivery?.address}
                </TableCell>
                <TableCell align="center">
                  {order.status}
                  {/*{order.statusHistory[order.statusHistory?.length - 1].status}*/}
                </TableCell>
                <TableCell align="center">
                  {/*<Button*/}
                  {/*  size="small"*/}
                  {/*  color="primary"*/}
                  {/*  component={Link}*/}
                  {/*  to={order.id}*/}
                  {/*>*/}
                  {/*  Manage*/}
                  {/*</Button>*/}
                  <Button
                    size="small"
                    color="secondary"
                    onClick={() => deleteOrder(order.id, { onSuccess: invalidateOrders })}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
