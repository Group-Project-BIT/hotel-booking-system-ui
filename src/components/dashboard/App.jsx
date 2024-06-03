"use client"
import React from 'react';
import { DefaultSidebar } from './SideNavBar';
import { TableWithStripedRows } from './Reservation';




export default function App() {
  return (
    <div className="flex min-h-screen">
      <div>
        <DefaultSidebar />
      </div>
      <div className="flex-grow flex justify-center items-center bg-gray-100 mt-12">
        <TableWithStripedRows/>
      </div>
    </div>
  );
}
