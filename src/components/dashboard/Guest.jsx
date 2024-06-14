import React, { useState } from 'react';
import { Card, Typography, Button, Input } from "@material-tailwind/react";

const TABLE_HEAD = ["First Name", "Last Name", "Email", "Phone", "NIC Number", "Passport"];

const INITIAL_TABLE_ROWS = [
  {
    f_name: "John",
    l_name: "Michael",
    email: "john.michael@example.com",
    phone: "123-456-7890",
    nic_number: "200030200300",
    passport: "N/A"
  },
  {
    f_name: "John",
    l_name: "Michael",
    email: "john.michael@example.com",
    phone: "123-456-7890",
    nic_number: "200030200300",
    passport: "N/A"
  },
  {
    f_name: "John",
    l_name: "Michael",
    email: "john.michael@example.com",
    phone: "123-456-7890",
    nic_number: "200030200300",
    passport: "N/A"
  },
  {
    f_name: "John",
    l_name: "Michael",
    email: "john.michael@example.com",
    phone: "123-456-7890",
    nic_number: "200030200300",
    passport: "N/A"
  },
  
];

export function TableWithStripedGuest() {
  const [rows, setRows] = useState(INITIAL_TABLE_ROWS);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editFormData, setEditFormData] = useState({
    f_name: '',
    l_name: '',
    email: '',
    phone: '',
    nic_number: '',
    passport: ''
  });

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
          {rows.map(({ f_name, l_name, email, phone, nic_number, passport }, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
              {editingIndex === index ? (
                <>
                  <td className="p-4">
                    <Input
                      type="text"
                      name="firstName"
                      value={editFormData.f_name}
                      onChange={handleFormChange}
                      className="font-normal"
                    />
                  </td>
                  <td className="p-4">
                    <Input
                      type="text"
                      name="lastName"
                      value={editFormData.l_name}
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
                      value={editFormData.nic_number}
                      onChange={handleFormChange}
                      className="font-normal"
                    />
                  </td>
                  <td className="p-4">
                    <Input
                      type="text"
                      name="address"
                      value={editFormData.passport}
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
                      {f_name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {l_name}
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
                      {nic_number}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {passport}
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
