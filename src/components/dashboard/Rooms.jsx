import React, { useEffect, useState } from 'react';
import {
    MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Select,
    Option
} from "@material-tailwind/react";

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "True",
        value: "true",
    },
    {
        label: "False",
        value: "false",
    },
];

const TABLE_HEAD = ["Room Number", "Room Type", "Maintenance"];



export function RoomTable() {
    const [rows, setRows] = useState([]);
    useEffect(()=>{
        fetchRooms()
    },[])
    const fetchRooms = async () => {
        try {
          const response = await fetch("/api/rooms", {
            method: "GET",
          });
    
          const data = await response.json();
          setRows(data);
        } catch (error) {
          console.error("Error fetching room types:", error);
        }
      };
   
    const [editingIndex, setEditingIndex] = useState(null);
    const [editFormData, setEditFormData] = useState({
        room_no: '',
        room_type: '',
        room_maintaince: '',
    });

    const handleEditClick = (index) => {
        setEditingIndex(index);
        setEditFormData(rows[index]);
    };

    const handleDeleteClick = (index) => {
        const newRows = rows.filter((_, i) => i !== index);
        setRows(newRows);
    };

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setEditFormData({ ...editFormData, [name]: value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newRows = [...rows];
        newRows[editingIndex] = editFormData;
        setRows(newRows);
        setEditingIndex(null);
    };

    const [isCardVisible, setIsCardVisible] = useState(false);
    const [newRoomType, setNewRoomType] = useState('');

    const handleAddClick = () => {
        setIsCardVisible(true);
    };

    const handleAddFormChange = (value) => {
        setNewRoomType(value);
    };

    const handleAddRoom = async(event) => {
        event.preventDefault();
        console.log(newRoomType)
        try {
            const response = await fetch("/api/room/create", {
              method: "POST",
              body: JSON.stringify({
                room_type_name:newRoomType,
                room_maintenance: "false"
              }),
            });
      
            const data = await response.json();
            // const newRoomNumber = (parseInt(rows[rows.length - 1].room_no) + 1).toString().padStart(3, '0');
            const newRoomModel = {
                // room_no: newRoomNumber,
                room_type: {type_name:newRoomType},
                room_maintaince: false,
            };
            setRows([...rows, newRoomModel]);
            setNewRoomType('');
            setIsCardVisible(false);
          } catch (error) {
            console.error("Error fetching room types:", error);
          }
       
    };

    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Rooms
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all rooms
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button onClick={handleAddClick} className="flex items-center gap-3" size="sm">
                            <PlusIcon strokeWidth={2} className="h-4 w-4" /> Add Room
                        </Button>
                    </div>
                </div>
                {isCardVisible && (
                    <div className="mt-10 mb-10 flex justify-center space-x-4">
                        <Card color="transparent" shadow={false}>
                            <form onSubmit={handleAddRoom} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-1 flex flex-col gap-6">
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Room Type
                                    </Typography>
                                    <Select
                                        size="lg"
                                        name="roomType"
                                        placeholder="Deluxe Room"
                                        value={newRoomType}
                                        onChange={handleAddFormChange}
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    >
                                        <Option value="Deluxe Room">Deluxe Room</Option>
                                        <Option value="Executive Room">Executive Room</Option>
                                        <Option value="Presidential Room">Presidential Room</Option>
                                        <Option value="Standard Room">Standard Room</Option>
                                    </Select>
                                </div>
                                <Button type="submit" className="mt-6" fullWidth>
                                    Add Room
                                </Button>
                            </form>
                        </Card>
                    </div>
                )}
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <Tabs value="all" className="w-full md:w-max">
                        <TabsHeader>
                            {TABS.map(({ label, value }) => (
                                <Tab key={value} value={value}>
                                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                </Tab>
                            ))}
                        </TabsHeader>
                    </Tabs>
                    <div className="w-full md:w-72">
                        <Input
                            label="Search"
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                        />
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((item, index) => (
                            <tr key={index} className="even:bg-blue-gray-50/50">
                                {editingIndex === index ? (
                                    <>
                                        <td className="p-4">
                                            <Input
                                                type="text"
                                                name="room_no"
                                                value={editFormData.room_no}
                                                onChange={handleFormChange}
                                                className="font-normal"
                                            />
                                        </td>
                                        <td className="p-2">
                                            <Input
                                                type="text"
                                                name="room_type"
                                                value={editFormData.room_type}
                                                onChange={handleFormChange}
                                                className="font-normal"
                                            />
                                        </td>
                                        <td className="p-4">
                                            <Input
                                                type="text"
                                                name="room_maintaince"
                                                value={editFormData.room_maintaince}
                                                onChange={handleFormChange}
                                                className="font-normal"
                                            />
                                        </td>
                                        <td className="p-4">
                                            <Button onClick={handleFormSubmit} className="mr-2">Save</Button>
                                            <Button onClick={() => setEditingIndex(null)}>Cancel</Button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td className="p-4">
                                            {/* <Typography variant="small" color="blue-gray" className="font-normal">
                                                {room_no}
                                            </Typography> */}
                                        </td>
                                        <td className="p-2">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {item.room_type.type_name}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {item.room_maintenance == false ? "Yes": "No"}
                                            </Typography>
                                        </td>
                                        <td className="p-4 flex gap-2">
                                            <Button onClick={() => handleEditClick(index)} className="mr-2">Edit</Button>
                                            <Button onClick={() => handleDeleteClick(index)}>Delete</Button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page 1
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
