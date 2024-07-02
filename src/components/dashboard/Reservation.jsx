import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Popover,
  PopoverHandler,
  PopoverContent
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

const TABLE_HEAD = [
  "Guest",
  "Status",
  "Check-In",
  "Check-Out",
];


export function ReservationTable() {
  const [tableRows, setTableRows] = useState([]);
  useEffect(()=>{
    fetchReservations();
  },[])

  const handleCancel = (nic_number) => {
    setTableRows((prevRows) =>
      prevRows.map((row) =>
        row.guest_id?.nic_number === nic_number ? { ...row, status: false } : row
      )
    );
  };
  const fetchReservations =async()=>{
    try {
      const response = await fetch("/api/reservations", {
        method: "GET",
      });

      const data = await response.json();
      setTableRows(data);
    } catch (error) {
      console.error("Error fetching reservations:", error);
    }
  }

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Room Reservations
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all room reservations
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row"></div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
            </TabsHeader>
          </Tabs>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows?.map(
              (
                reservation,
                index
              ) => {
                const isLast = index === tableRows.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {reservation.guest_id?.first_name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {reservation.guest_id?.nic_number}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    {/* <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {type_name}
                        </Typography>
                      </div>
                    </td> */}
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={reservation.status ? "confirmed" : "canceled"}
                          color={reservation.status ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    {/* <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {typename}
                      </Typography>
                    </td> */}
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {reservation.check_in}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {reservation.check_out}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Popover placement="left">
                        <PopoverHandler>
                          <Button disabled={!reservation.status} >Cancel</Button>
                        </PopoverHandler>
                        <PopoverContent className="w-96">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                            />
                          </svg>
                          <Typography variant="h6" color="blue-gray" className="mb-6">
                            Reservation Cancellation
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-1 font-bold"
                          >
                            Are you sure to cancel this reservation?
                          </Typography>
                          <div className="flex gap-2">
                            <Button onClick={() => handleCancel(reservation.guest_id?.nic_number)} variant="gradient" className="flex-shrink-0">
                              Yes
                            </Button>
                            <Button variant="gradient" className="flex-shrink-0">
                              No
                            </Button>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
        </Typography>
      </CardFooter>
    </Card>
  );
}
