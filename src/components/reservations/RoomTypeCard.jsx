import React from "react";
import { Typography, Button, Card, CardBody, CardHeader } from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { MinusCircleIcon } from "@heroicons/react/24/outline";

const RoomTypeCard = ({ type_name, desc, adults_count, children_count, price, options, onSelectRoomType }) => {
  return (
    <Card variant="gradient" color="white">
      <CardHeader floated={false} shadow={false} color="transparent" className="!m-0">
        <Typography variant="h3" color="white" className="text-gradient">
          {type_name}
        </Typography>
      </CardHeader>
      <CardBody className="p-8">
        <Typography color="gray" className="mt-2 font-normal">
          {desc}
        </Typography>
        <Typography color="gray" className="mt-2 font-normal">
          {adults_count}
        </Typography>
        <Typography color="gray" className="mt-2 font-normal">
          {children_count}
        </Typography>
        <ul className="my-8 flex flex-col gap-4">
          {options.map(({ title, icon, color }, index) => (
            <li key={index} className="flex items-center gap-4">
              {React.createElement(icon, { className: "h-6 w-6", style: { color } })}
              <Typography className="font-normal">{title}</Typography>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          {price.map((p, index) => (
            <Typography key={index} className="mt-2">
              {p}
            </Typography>
          ))}
        </div>
      </CardBody>
      <Button onClick={() => onSelectRoomType({ type_name, desc, adults_count, children_count, price })}>Select</Button>
    </Card>
  );
}

RoomTypeCard.defaultProps = {
  options: [
    { title: "2 passengers", icon: CheckCircleIcon, color: "text-green-500" },
    { title: "Safety first", icon: MinusCircleIcon, color: "text-green-500" },
  ],
};

export default RoomTypeCard;
