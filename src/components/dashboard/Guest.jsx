import React, { useState } from 'react';
import { Card, Typography, Button, Input } from "@material-tailwind/react";

const TABLE_HEAD = ["First Name", "Last Name", "Email", "Phone", "Address"];

const INITIAL_TABLE_ROWS = [
  {
    firstName: "John",
    lastName: "Michael",
    email: "john.michael@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Springfield",
  },
  {
    firstName: "Alexa",
    lastName: "Liras",
    email: "alexa.liras@example.com",
    phone: "987-654-3210",
    address: "456 Elm St, Springfield",
  },
  {
    firstName: "Laurent",
    lastName: "Perrier",
    email: "laurent.perrier@example.com",
    phone: "555-123-4567",
    address: "789 Oak St, Springfield",
  },
  {
    firstName: "Michael",
    lastName: "Levi",
    email: "michael.levi@example.com",
    phone: "444-555-6666",
    address: "101 Pine St, Springfield",
  },
  {
    firstName: "Richard",
    lastName: "Gran",
    email: "richard.gran@example.com",
    phone: "333-444-5555",
    address: "202 Birch St, Springfield",
  },
];

export function TableWithStripedGuest() {
  const [rows, setRows] = useState(INITIAL_TABLE_ROWS);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editFormData, setEditFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
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
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ firstName, lastName, email, phone, address }, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
              {editingIndex === index ? (
                <>
                  <td className="p-4">
                    <Input
                      type="text"
                      name="firstName"
                      value={editFormData.firstName}
                      onChange={handleFormChange}
                      className="font-normal"
                    />
                  </td>
                  <td className="p-4">
                    <Input
                      type="text"
                      name="lastName"
                      value={editFormData.lastName}
                      onChange={handleFormChange}
                      className="font-normal"
                    />
                  </td>
                  <td className="p-2">
                    <Input
                      type="email"
                      name="email"
                      value={editFormData.email}
                      onChange={handleFormChange}
                      className="font-normal"
                    />
                  </td>
                  <td className="p-4">
                    <Input
                      type="text"
                      name="phone"
                      value={editFormData.phone}
                      onChange={handleFormChange}
                      className="font-normal"
                    />
                  </td>
                  <td className="p-4">
                    <Input
                      type="text"
                      name="address"
                      value={editFormData.address}
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
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {firstName}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {lastName}
                    </Typography>
                  </td>
                  <td className="p-2">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {email}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {phone}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {address}
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
    </Card>
  );
}
