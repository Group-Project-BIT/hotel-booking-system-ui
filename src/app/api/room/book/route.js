import connectDb from "@/app/server/config/configDb";
import roomModel from "@/app/server/model/roomModel";
import guestModel from "@/app/server/model/guestModel";
import reservationModel from "@/app/server/model/reservationModel";
import reservationType from "@/app/server/model/reservationType";
import roomType from "@/app/server/model/roomType";


export const POST = async (req) => {
  await connectDb();

  const {
    room_type_name,
    check_in,
    check_out,
    first_name,
    last_name,
    email,
    nic_number,
    address,
    phone,
    reservation_type_name
  } = await req.json();

  try {
    const room_Type = await roomType.findOne({
      type_name: room_type_name
    })
    const room = await roomModel.findOne({
      room_type: room_Type._id,
    });
    
    const guest = new guestModel({
      first_name,
      last_name,
      email,
      phone,
      address,
      nic_number
      
      
    });
    await guest.save();


    // const reservation_type = new reservationType({
    //   reservation_type_name
    // })
    const reservation_type = await reservationType.findOne({
      reservation_type_name:reservation_type_name
    })
    // await reservation_type.save();

    const reservation = new reservationModel({
      guest_id: guest._id,
      room_id: room._id,
      reservation_type: reservation_type._id,
      check_in,
      check_out,
      status: "confirmed",
    });
    await reservation.save();

    return new Response(JSON.stringify(reservation), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};
