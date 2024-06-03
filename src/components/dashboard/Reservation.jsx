import { Card, Typography, Button, Input } from "@material-tailwind/react";
import { useState } from "react";

const TABLE_HEAD = ["Room No", "Room Type", "Date", "Actions"];

const initialRows = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

export function TableWithStripedRows() {
  const [rows, setRows] = useState(initialRows);
  const [isEditing, setIsEditing] = useState(null);
  const [editData, setEditData] = useState({ name: "", job: "", date: "" });

  const handleDelete = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setIsEditing(index);
    setEditData(rows[index]);
  };

  const handleSave = (index) => {
    const newRows = [...rows];
    newRows[index] = editData;
    setRows(newRows);
    setIsEditing(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  return (
    <Card className="h-full w-full overflow-scroll">
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
          </tr>
        </thead>
        <tbody>
          {rows.map(({ name, job, date }, index) => (
            <tr key={name} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                {isEditing === index ? (
                  <Input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleChange}
                  />
                ) : (
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                )}
              </td>
              <td className="p-4">
                {isEditing === index ? (
                  <Input
                    type="text"
                    name="job"
                    value={editData.job}
                    onChange={handleChange}
                  />
                ) : (
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                )}
              </td>
              <td className="p-4">
                {isEditing === index ? (
                  <Input
                    type="text"
                    name="date"
                    value={editData.date}
                    onChange={handleChange}
                  />
                ) : (
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {date}
                  </Typography>
                )}
              </td>
              <td className="p-4 flex gap-2">
                {isEditing === index ? (
                  <Button onClick={() => handleSave(index)} size="sm">
                    Save
                  </Button>
                ) : (
                  <Button onClick={() => handleEdit(index)} size="sm">
                    Edit
                  </Button>
                )}
                <Button onClick={() => handleDelete(index)} size="sm" color="red">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
