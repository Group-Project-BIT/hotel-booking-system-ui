import React, { useState } from "react";
import { Button, Radio, Textarea, Input, Typography } from "@material-tailwind/react";

const ReservationContainer = ({ selectedRoomType }) => {
    const [reservationType, setReservationType] = useState({ type_name: '' });
    const [guest, setGuest] = useState({ f_name: '', l_name: '', email: '', passport: '', nic_number: '' });
    const [specialRequest, setSpecialRequest] = useState("");
    const [paymentInfo, setPaymentInfo] = useState("");
    const [confirmations, setConfirmations] = useState({ newsletter: false, privacy: false, bookingConditions: false });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setGuest({ ...guest, [name]: value });
    };

    const handleConfirmClick = () => {
        const reservationData = {
            reservationType,
            guest,
            specialRequest,
            paymentInfo,
            confirmations
        };
        console.log(reservationData);
    };

    return (
        <div className="flex flex-col justify-center items-center w-full" style={{ paddingLeft: "10%", paddingRight: "10%" }}>
            {/* Display selected room details */}
            <section className="m-10">
                <div className="p-10 rounded-l-xl border border-blue-gray-100 bg-[url('/image/gradient-bg-1.png')] rounded-xl bg-no-repeat lg:bg-contain bg-cover bg-right">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold mb-2"
                    >
                        Upcoming Events
                    </Typography>
                    <Typography variant="h3" color="blue-gray">
                        {selectedRoomType.type_name}
                    </Typography>
                    <Typography
                        className="mt-2 mb-6 !text-base font-normal text-gray-500">
                        {selectedRoomType.desc}
                    </Typography>
                    <Typography
                        className="mt-2 mb-6 !text-base font-normal text-gray-500">
                        {selectedRoomType.adults_count}
                    </Typography>
                    <Typography
                        className="mt-2 mb-6 !text-base font-normal text-gray-500">
                        {selectedRoomType.children_count}
                    </Typography>
                    <Typography
                        className="mt-2 mb-6 !text-base font-normal text-gray-500"
                    >
                        {selectedRoomType.price.join(' ')}
                    </Typography>
                </div>
            </section>

            {/* Reservation Type Selection */}
            <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">Reservation Type</h2>
                <div className="flex gap-10">
                    <Radio name="reservationType" value="full_board" onChange={(e) => setReservationType(e.target.value)} label="Full Board" />
                    <Radio name="reservationType" value="half_board" onChange={(e) => setReservationType(e.target.value)} label="Half Board" />
                    <Radio name="reservationType" value="bed_and_breakfast" onChange={(e) => setReservationType(e.target.value)} label="Bed and Breakfast" defaultChecked />
                    <Radio name="reservationType" value="none" onChange={(e) => setReservationType(e.target.value)} label="None" />
                </div>
            </div>

            {/* User Information */}
            <div className="w-1/2 p-4 rounded mb-4">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Your Information</h2>
                <Input label="First name" id="f_name" type="text" name="f_name" value={guest.f_name} onChange={handleInputChange} autoComplete="f_name" />
                <Input label="Last Name" id="l_name" type="text" name="l_name" value={guest.l_name} onChange={handleInputChange} autoComplete="l_name" />
                <Input label="Email" id="email" name="email" type="email" value={guest.email} onChange={handleInputChange} autoComplete="email" />
                <Input label="Passport Number" type="text" name="passport" id="passport" value={guest.passport} onChange={handleInputChange} autoComplete="passport" />
                <Input label="NIC Number" type="text" name="nic_number" id="nic_number" value={guest.nic_number} onChange={handleInputChange} autoComplete="nic_number" />
            </div>

            {/* Special Request */}
            <div className="w-1/2 p-4">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Special Request</h2>
                <Textarea value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)} placeholder="Please let us know of any additional requests to help us ensure you have a comfortable stay." />
            </div>

            {/* Payment Information */}
            <div className="w-1/2 p-4">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Payment Information</h2>
                <input type="text" value={paymentInfo} onChange={(e) => setPaymentInfo(e.target.value)} placeholder="Card Details" className="mb-2 p-2 border rounded w-full" />
            </div>

            {/* Confirmations */}
            <div className="border-b border-gray-900/10 pb-4">
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

            {/* Submit button */}
            <div className="flex flex-auto gap-4 mt-4 mb-16">
                {!confirmations.privacy || !confirmations.bookingConditions ? (
                    <Button loading={true}>Confirm</Button>
                ) : (
                    <Button onClick={handleConfirmClick}>Confirm</Button>
                )}
            </div>
        </div>
    );
};

export default ReservationContainer;
