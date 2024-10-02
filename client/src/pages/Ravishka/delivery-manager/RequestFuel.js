import { useEffect, useMemo, useState } from "react";
import Layout from "../../../layout/Layout";
import {
  Input,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";
import jsPDF from "jspdf";
import axios from "axios";
import { FaRegEye } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import OrderDetailsModal from "./OrderDetailsModal";
import DeleteOrder from "./DeleteOrder";
import ApplyFuel from "./ApplyFuel";
import DeleteFuelModel from "./DeleteFuelReqModel";
import EditFuel from "./EditFuel";
import { CiEdit } from "react-icons/ci";

const RequestFuel = () => {
  const [fuelRqsts, setFuelRqsts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [refetch, setRefetch] = useState(false);
  const { isOpen, onOpenChange } = useDisclosure();
  const { isOpen: isOpenDelete, onOpenChange: onOpenChangeDelete } =
    useDisclosure();
  const { isOpen: isOpenEdit, onOpenChange: onOpenChangeEdit } =
    useDisclosure();
  const [clickItemId, setClickItemId] = useState("");
  const [clickItem, setClickItem] = useState({});
  const rowsPerPage = 3;
  const pages = Math.ceil(fuelRqsts.length / rowsPerPage);

  const filterRqst = useMemo(() => {
    //122 0
    return fuelRqsts?.filter((item) => {
      // item?.distance?.parseInt().includes(search);
      return item?.distance?.toString().includes(search);
      // console.log(item?.distance, search, item?.distance?.toString().includes(search));
    });
  }, [search, fuelRqsts]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filterRqst?.slice(start, end);
  }, [page, filterRqst]);

  console.log(items);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const res = await fetch(`http://localhost:5000/fuel-rqst`);
        const data = await res.json();
        console.log(data.fuel);
        setFuelRqsts(data.fuel);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSales();
  }, [refetch]);

  const handelChange = async (e, id) => {
    const res = await axios.put(`http://localhost:5000/orders/${id}`, {
      orderStatus: e.target.value,
    });

    if (res.status === 200) {
      setRefetch(!refetch);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-full ">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {" "}
      <div className="w-full items-center justify-center flex flex-col">
        <div className="flex justify-between p-2">
          <h1 className="text-center mt-2 font-semibold text-lg">
            Fuel Request
          </h1>
        </div>
        <div className="flex w-[1000px] justify-between">
          <div>
            <Input
              isClearable
              radius="full"
              placeholder="Search by distance"
              startContent={<IoSearch />}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button
            onClick={onOpenChange}
            className="bg-blue-500 text-white px-4 text-sm rounded-lg"
          >
            Apply Fuel
          </button>
        </div>
        <div className="min-w-[1000px] mt-2">
          <Table
            aria-label="Example table with pagination"
            bottomContent={
              <div className="flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="primary"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
          >
            <TableHeader>
              <TableColumn>Id</TableColumn>
              <TableColumn>cost</TableColumn>
              <TableColumn>distance</TableColumn>
              <TableColumn>date</TableColumn>
              <TableColumn>Action</TableColumn>
            </TableHeader>
            <TableBody>
              {items.map(
                (item, index) => (
                  //   item.orderStatus === "Success" && (
                  <TableRow key={item._id} className="border-b-1">
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      LKR{" "}
                      {item.cost.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </TableCell>
                    <TableCell>{item.distance} KM</TableCell>
                    <TableCell>
                      {new Date(item.date).toLocaleDateString()}
                    </TableCell>

                    <TableCell className="flex gap-6 justify-center items-center h-16">
                      <Tooltip color="danger" content="Delete ">
                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                          <MdDeleteSweep
                            onClick={() => {
                              setClickItemId(item._id);
                              onOpenChangeDelete();
                            }}
                          />
                        </span>
                      </Tooltip>{" "}
                      <Tooltip color="secondary" content="Edit">
                        <span className="text-lg text-blue-700 cursor-pointer active:opacity-50">
                          <CiEdit
                            onClick={() => {
                              setClickItem(item);
                              onOpenChangeEdit();
                            }}
                          />
                        </span>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                )
                //   )
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <ApplyFuel isOpen={isOpen} onOpenChange={onOpenChange} />
      <EditFuel
        isOpen={isOpenEdit}
        onOpenChange={onOpenChangeEdit}
        clickItem={clickItem}
        setRefetch={setRefetch}
      />
      <DeleteFuelModel
        isOpen={isOpenDelete}
        onOpenChange={onOpenChangeDelete}
        setRefetch={setRefetch}
        clickItemId={clickItemId}
      />
    </Layout>
  );
};
export default RequestFuel;
