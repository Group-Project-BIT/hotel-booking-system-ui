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
    Alert
} from "@material-tailwind/react";
import DatePicker from "@/components/DatePicker";
import { HomeIcon, BellIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

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
    const [guest, setGuest] = useState({ f_name: '', l_name: '', email: '', phone: '', passport: '', nic_number: '' });
    const [confirmations, setConfirmations] = useState({ privacy: false, bookingConditions: false });
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");

    useEffect(() => {
        setRoomType("Deluxe Room");
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setGuest({ ...guest, [name]: value });
    };

    const handleConfirmClick = () => {
        const reservationData = {
            roomType,
            checkIn,
            checkOut,
            reservationType,
            guest,
            confirmations
        };
        console.log(reservationData);
    };

    const handleSearchClick = async () => {
        const isoCheckInDate = new Date(checkIn);
        const checkInISO = isoCheckInDate.toISOString();

        const isoCheckOutDate = new Date(checkOut);
        const checkOutISO = isoCheckOutDate.toISOString();

        const availabilityCheckingData = {
            roomType,
            checkIn: checkInISO,
            checkOut: checkOutISO
        };
        console.log(availabilityCheckingData);

        try {
            const response = await mockApiCall(availabilityCheckingData);
            if (response.success) {
                setAlertMessage("Room is available!");
                setAlertType("success");
            } else {
                setAlertMessage("Room is not available.");
                setAlertType("error");
            }
        } catch (error) {
            setAlertMessage("Error checking availability.");
            setAlertType("error");
        }
    };

    const mockApiCall = (data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true });
            }, 1000);
        });
    };

    return (
        <div className="justify-center items-center w-full px-64">
            <section className="my-5">
                <div className="p-10 border border-blue-gray-100 bg-[url('@/public/Deluxe Room .jpg')] rounded-xl bg-no-repeat lg:bg-contain bg-cover bg-right">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold mb-2">
                        Hotel Zion
                    </Typography>
                    <Typography variant="h3" color="blue-gray">
                        {roomType}
                    </Typography>
                </div>
            </section>
            <div>
                <Button variant="text" className="flex items-center gap-2">
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
                            <Radio name="reservationType" value="Full Board" onChange={(e) => setReservationType(e.target.value)} label="Full Board" />
                            <Radio name="reservationType" value="Half Board" onChange={(e) => setReservationType(e.target.value)} label="Half Board" />
                            <Radio name="reservationType" value="Bed and Breakfast" onChange={(e) => setReservationType(e.target.value)} label="Bed and Breakfast" defaultChecked />
                        </div>
                    </div>
                    <div className="p-4 rounded flex flex-col gap-4 mb-4">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Your Information</h2>
                        <Input label="First name" id="f_name" type="text" name="f_name" value={guest.f_name} onChange={handleInputChange} autoComplete="f_name" />
                        <Input label="Last Name" id="l_name" type="text" name="l_name" value={guest.l_name} onChange={handleInputChange} autoComplete="l_name" />
                        <Input label="Email" id="email" name="email" type="email" value={guest.email} onChange={handleInputChange} autoComplete="email" />
                        <Input label="Phone Number" id="phone" name="phone" type="text" value={guest.phone} onChange={handleInputChange} autoComplete="phone" />
                        <Input label="Passport Number" type="text" name="passport" id="passport" value={guest.passport} onChange={handleInputChange} autoComplete="passport" />
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
                                        - {roomType}  -   $
                                    </Typography>
                                    <Typography color="gary" className="font-normal text-gray-600">
                                        - {reservationType}     -   $
                                    </Typography>
                                    <Typography color="gary" className="font-normal text-gray-600">
                                        - Total Charge     -   $
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                        </Timeline>
                    </div>
                    <div className="flex flex-auto gap-4 mt-4 mb-16">
                        {!confirmations.privacy || !confirmations.bookingConditions ? (
                            <Button disabled={true}>Confirm</Button>
                        ) : (
                            <Button onClick={handleConfirmClick}>Confirm</Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationContainer;
