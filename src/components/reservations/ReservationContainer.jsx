import React, { useState } from "react";
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Button,
    Radio,
    Textarea,
    Input,
    Typography,
    Select,
    Option
} from "@material-tailwind/react";
import DatePicker from "@/components/DatePicker";
import { HomeIcon, BellIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const ReservationContainer = () => {
    const [roomType, setRoomType] = useState({ type_name: 'Deluxe Room' });  // Default room type
    const [reservationType, setReservationType] = useState("Bed and Breakfast");
    const [guest, setGuest] = useState({ f_name: '', l_name: '', email: '', phone: '', passport: '', nic_number: '' });
    const [specialRequest, setSpecialRequest] = useState("");
    const [paymentInfo, setPaymentInfo] = useState("");
    const [confirmations, setConfirmations] = useState({ newsletter: false, privacy: false, bookingConditions: false });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setGuest({ ...guest, [name]: value });
    };

    const handleConfirmClick = () => {
        const reservationData = {
            roomType,
            reservationType,
            guest,
            specialRequest,
            paymentInfo,
            confirmations
        };
        console.log(reservationData);
    };

    return (
        <div className="justify-center items-center w-full px-64">
            {/* Display selected room details */}
            <section className="m-5">
                <div className="p-10 rounded-l-xl border border-blue-gray-100 bg-[url('/image/gradient-bg-1.png')] rounded-xl bg-no-repeat lg:bg-contain bg-cover bg-right">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold mb-2">
                        Hotel Zion
                    </Typography>
                    <Typography variant="h3" color="blue-gray">
                        {roomType.type_name}
                    </Typography>
                    {/* Additional details about the room type can be added here */}
                </div>
            </section>

            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 w-full p-4">
                    <div className="grid grid-cols-2 gap-4">
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
                        {/* Room Type Selection */}
                        <div className="w-1/2 mt-4">
                            <Select
                                label="Selected Room Type"
                                name="roomType"
                                onChange={(val) => setRoomType({ type_name: val })}
                            >
                                <Option value="Deluxe Room">Deluxe Room</Option>
                                <Option value="Executive Room">Executive Room</Option>
                                <Option value="Standard Room">Standard Room</Option>
                            </Select>
                        </div>
                    </div>
                    {/* Check-in & Check-out */}
                    <div className="grid grid-cols-2 gap-2">
                        <div className="col-span-1 w-full">
                            <DatePicker label="Check In" />
                        </div>
                        <div className="col-span-1 w-full">
                            <DatePicker label="Check Out" />
                        </div>
                    </div>
                    {/* Reservation Type Selection */}
                    <div className="p-4 rounded mb-4">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Reservation Type</h2>
                        <div className="flex gap-10">
                            <Radio name="reservationType" value="Full Board" onChange={(e) => setReservationType(e.target.value)} label="Full Board" />
                            <Radio name="reservationType" value="Half Board" onChange={(e) => setReservationType(e.target.value)} label="Half Board" />
                            <Radio name="reservationType" value="Bed and Breakfast" onChange={(e) => setReservationType(e.target.value)} label="Bed and Breakfast" defaultChecked />
                        </div>
                    </div>

                    {/* User Information */}
                    <div className="p-4 rounded flex flex-col gap-4 mb-4">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Your Information</h2>
                        <Input label="First name" id="f_name" type="text" name="f_name" value={guest.f_name} onChange={handleInputChange} autoComplete="f_name" />
                        <Input label="Last Name" id="l_name" type="text" name="l_name" value={guest.l_name} onChange={handleInputChange} autoComplete="l_name" />
                        <Input label="Email" id="email" name="email" type="email" value={guest.email} onChange={handleInputChange} autoComplete="email" />
                        <Input label="Phone Number" id="phone" name="phone" type="text" value={guest.phone} onChange={handleInputChange} autoComplete="phone" />
                        <Input label="Passport Number" type="text" name="passport" id="passport" value={guest.passport} onChange={handleInputChange} autoComplete="passport" />
                        <Input label="NIC Number" type="text" name="nic_number" id="nic_number" value={guest.nic_number} onChange={handleInputChange} autoComplete="nic_number" />
                    </div>

                    {/* Special Request */}
                    <div className="p-4">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Special Request</h2>
                        <Textarea value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)} placeholder="Please let us know of any additional requests to help us ensure you have a comfortable stay." />
                    </div>

                    {/* Payment Information */}
                    <div className="p-4">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Payment Information</h2>
                        <input type="text" value={paymentInfo} onChange={(e) => setPaymentInfo(e.target.value)} placeholder="Card Details" className="mb-2 p-2 border rounded w-full" />
                    </div>

                    {/* Confirmations */}
                    <div className="p-4 border-b border-gray-900/10 flex flex-col gap-4">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Confirmation</h2>
                        <div className="mt-4">
                            <fieldset>
                                <div>
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="newsletter"
                                                name="newsletter"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                checked={confirmations.newsletter} onChange={() => setConfirmations({ ...confirmations, newsletter: !confirmations.newsletter })}
                                            />
                                        </div>
                                        <div className="text-sm leading-6">
                                            <label htmlFor="newsletter" className="font-medium text-gray-900">Yes, I would like to receive newsletters and promotional offers by e-mail.</label>
                                        </div>
                                    </div>
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
                                        - {roomType.type_name}
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
                                    - {roomType.type_name}  -   $
                                    </Typography>
                                    <Typography color="gary" className="font-normal text-gray-600">
                                    - {reservationType}     -   $
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                        </Timeline>
                    </div>
                    {/* Submit button */}
                    <div className="flex flex-auto gap-4 mt-4 mb-16">
                        {!confirmations.privacy || !confirmations.bookingConditions ? (
                            <Button loading={true}>Confirm</Button>
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
