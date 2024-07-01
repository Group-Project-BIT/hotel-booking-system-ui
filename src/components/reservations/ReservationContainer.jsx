import React, { useState, useEffect } from "react";
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Button,
    Radio,
    Input,
    Typography,
    Select,
    Option,
    Alert,
    Card,
    CardHeader,
    CardBody,
    Popover,
    PopoverHandler,
    PopoverContent
} from "@material-tailwind/react";
import DatePicker from "@/components/DatePicker";
import { HomeIcon, BellIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

function Icon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
        >
            <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const ReservationContainer = () => {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [roomType, setRoomType] = useState("Deluxe Room");
    const [reservationType, setReservationType] = useState("Bed and Breakfast");
    const [guest, setGuest] = useState({ f_name: '', l_name: '', email: '', phone: '', address: '', nic_number: '' });
    const [confirmations, setConfirmations] = useState({ privacy: false, bookingConditions: false });
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");
    const [roomDescription, setRoomDescription] = useState('');
    const [isRoomAvailable, setIsRoomAvailable] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 
    const router = useRouter(); 
    useEffect(() => {
        setRoomType("Deluxe Room");
    }, []);
   
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setGuest({ ...guest, [name]: value });
    };

    const handleConfirmClick = async() => {
        const reservationData = {
            roomType,
            checkIn,
            checkOut,
            reservationType,
            guest,
            confirmations
        };
        console.log(reservationData);
        try {
            setIsLoading(true)
            const response = await fetch("/api/room/book", {
              method: "POST",
              body: JSON.stringify({
                room_type_name: roomType,
                check_in: checkIn,
                check_out: checkOut,
                first_name: guest.f_name,
                last_name: guest.l_name,
                email: guest.email,
                nic_number: guest.nic_number,
                address: guest.address,
                phone: guest.phone,
                reservation_type_name: reservationType
                
              }),
            });
      
            const data = await response.json();
            router.push("/");
            setIsLoading(false)
          } catch (error) {
            console.error("Error fetching room types:", error);
          }
    };

    const handleSearchClick = async () => {
        const isoCheckInDate = new Date(checkIn);
        const isoCheckOutDate = new Date(checkOut);

        const checkInISO = isoCheckInDate.toISOString();
        const checkOutISO = isoCheckOutDate.toISOString();

        const availabilityCheckingData = {
            roomType,
            checkIn: checkInISO,
            checkOut: checkOutISO
        };
        console.log(availabilityCheckingData);
        try {
            const responseFromApi = await fetch("/api/room/search", {
                method: "POST",
                body: JSON.stringify({
                  room_type:roomType,
                  checkin: checkInISO,
                  checkout: checkOutISO
                }),
              });
        
              const response = await responseFromApi.json();
            // const response = await mockApiCall(availabilityCheckingData);
            if (response.available) {
                setAlertMessage("Room is available!");
                setAlertType("success");
                setIsRoomAvailable(true);
            } else {
                setAlertMessage("Room is not available.");
                setAlertType("error");
                setIsRoomAvailable(false);
            }
        } catch (error) {
            setAlertMessage("Error checking availability.");
            setAlertType("error");
            setIsRoomAvailable(false);
        }
    };


    return (
        <div className="justify-center items-center w-full px-64">
            <Card className="w-full flex-row mt-5">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                    <img
                        src="room-01.jpg"
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h4" color="gray" className="mb-4 uppercase">
                        Hotel Zion
                    </Typography>
                    <Typography variant="h2" color="blue-gray" className="mb-2">
                        {roomType}
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                        {roomDescription}
                    </Typography>
                    <a onClick={()=>router.push("/suites")} className="inline-block">
                        <Button variant="text" className="flex items-center gap-2">
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Button>
                    </a>
                </CardBody>
            </Card>
            <div>
                <Button variant="text" className="flex items-center gap-2" onClick={()=>router.back()}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="size-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                        />
                    </svg>
                    Back{" "}
                </Button>
            </div>
            <div>
                <div className="flex justify-center gap-1">
                    <div className="w-1/4 relative">
                        <DatePicker label="Check In" value={checkIn} setValue={setCheckIn} />
                    </div>
                    <div className="w-1/4 relative">
                        <DatePicker label="Check Out" value={checkOut} setValue={setCheckOut} />
                    </div>
                    <div className="w-1/4 relative p-20">
                        <Select
                            label="Selected Room Type"
                            name="roomType"
                            value={roomType}
                            onChange={(value) => setRoomType(value)}
                        >
                            <Option value="Deluxe Room">Deluxe Room</Option>
                            <Option value="Executive Room">Executive Room</Option>
                            <Option value="Presidential Room">Presidential Room</Option>
                            <Option value="Standard Room">Standard Room</Option>
                        </Select>
                    </div>
                    <div className="w-1/4 relative p-20">
                        <Button onClick={handleSearchClick} color="blue">Check Availability</Button>

                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 w-full p-4">
                    {alertMessage && (
                        <Alert
                            icon={<Icon />}
                            className={`rounded-none border-l-4 ${alertType === "success"
                                ? "border-[#2ec946] bg-[#2ec946]/10 text-[#2ec946]"
                                : "border-red-600 bg-red-600/10 text-red-600"
                                } font-medium`}
                        >
                            {alertMessage}
                        </Alert>
                    )}
                    <div className="p-4 rounded mb-4">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Reservation Type</h2>
                        <div className="flex gap-10">
                            <Radio name="reservationType" value="full_board" onChange={(e) => setReservationType(e.target.value)} label="Full Board" />
                            <Radio name="reservationType" value="half_board" onChange={(e) => setReservationType(e.target.value)} label="Half Board" />
                            <Radio name="reservationType" value="bed_and_breakfast" onChange={(e) => setReservationType(e.target.value)} label="Bed and Breakfast" defaultChecked />
                        </div>
                    </div>
                    <div className="p-4 rounded flex flex-col gap-4 mb-4">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Your Information</h2>
                        <Input label="First name" id="f_name" type="text" name="f_name" value={guest.f_name} onChange={handleInputChange} autoComplete="f_name" />
                        <Input label="Last Name" id="l_name" type="text" name="l_name" value={guest.l_name} onChange={handleInputChange} autoComplete="l_name" />
                        <Input label="Email" id="email" name="email" type="email" value={guest.email} onChange={handleInputChange} autoComplete="email" />
                        <Input label="Phone Number" id="phone" name="phone" type="text" value={guest.phone} onChange={handleInputChange} autoComplete="phone" />
                        <Input label="Address" type="text" name="address" id="address" value={guest.address} onChange={handleInputChange} autoComplete="address" />
                        <Input label="NIC Number" type="text" name="nic_number" id="nic_number" value={guest.nic_number} onChange={handleInputChange} autoComplete="nic_number" />
                    </div>
                    <div className="p-4">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Payment Information</h2>
                        <p></p>
                    </div>
                    <div className="p-4 border-b border-gray-900/10 flex flex-col gap-4">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Confirmation</h2>
                        <div className="mt-4">
                            <fieldset>
                                <div>
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="privacy"
                                                name="privacy"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                checked={confirmations.privacy} onChange={() => setConfirmations({ ...confirmations, privacy: !confirmations.privacy })}
                                            />
                                        </div>
                                        <div className="text-sm leading-6">
                                            <label htmlFor="privacy" className="font-medium text-gray-900">* I agree to the privacy policy.*</label>
                                        </div>
                                    </div>
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="bookingConditions"
                                                name="bookingConditions"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                checked={confirmations.bookingConditions} onChange={() => setConfirmations({ ...confirmations, bookingConditions: !confirmations.bookingConditions })}
                                            />
                                        </div>
                                        <div className="text-sm leading-6">
                                            <label htmlFor="bookingConditions" className="font-medium text-gray-900">* I accept the booking conditions.*</label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="w-full">
                        <Timeline>
                            <TimelineItem>
                                <TimelineConnector />
                                <TimelineHeader>
                                    <TimelineIcon className="p-2">
                                        <HomeIcon className="h-4 w-4" />
                                    </TimelineIcon>
                                    <Typography variant="h5" color="blue-gray">
                                        Selected Room Type
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody className="py-8">
                                    <Typography color="gary" className="font-normal text-gray-600">
                                        - {roomType}
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineConnector />
                                <TimelineHeader>
                                    <TimelineIcon className="p-2">
                                        <BellIcon className="h-4 w-4" />
                                    </TimelineIcon>
                                    <Typography variant="h5" color="blue-gray">
                                        Selected Reservation Type
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody className="py-8">
                                    <Typography color="gary" className="font-normal text-gray-600">
                                        - {reservationType}
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineHeader>
                                    <TimelineIcon className="p-2">
                                        <CurrencyDollarIcon className="h-4 w-4" />
                                    </TimelineIcon>
                                    <Typography variant="h5" color="blue-gray">
                                        Total Charges
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody>
                                    <Typography color="gary" className="font-normal text-gray-600">
                                        - {roomType}  -   120$
                                    </Typography>
                                    <Typography color="gary" className="font-normal text-gray-600">
                                        - {reservationType}     -   65$
                                    </Typography>
                                    <Typography color="gary" className="font-normal text-gray-600">
                                        - Total Charge     -   185$
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                        </Timeline>
                    </div>
                    <div className="flex flex-auto gap-4 mt-4 mb-16">
                        {!isRoomAvailable || !confirmations.privacy || !confirmations.bookingConditions ? (
                            <Button disabled={true}>Confirm</Button>
                        ) : (
                            <Button onClick={handleConfirmClick} loading = {isLoading}>Confirm</Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationContainer;
