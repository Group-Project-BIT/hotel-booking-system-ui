"use client"
import React, { useState } from 'react';
import { SidebarWithContentSeparator } from './SideNavBar';
import { ReservationTable } from './Reservation';
import { InquiryTable } from './Inbox';
import { TransactionsTable } from './Transactions';
import { TableWithStripedGuest } from './Guest';
import { ReceptionistsTable } from './User';
import { RoomTypeTable } from './RoomType';
import { ReservationTypeTable } from './ReservationType';
import { RoomTable } from './Rooms';
import { Dashboard } from './Dashboard';

export default function App() {
  const [activeTab, setActiveTab] = useState();

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Reservations':
        return <ReservationTable />;
      case 'Inbox':
        return <InquiryTable />;
      case 'Transactions':
        return <TransactionsTable />;
      case 'Guest':
        return <TableWithStripedGuest />;
      case 'RoomType':
        return <RoomTypeTable />;
      case 'ReservationType':
        return <ReservationTypeTable />;
      case 'Receptionists':
        return <ReceptionistsTable />;
      case 'Rooms':
        return <RoomTable />;
      default:
        return <ReservationTable />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <div>
        <SidebarWithContentSeparator setActiveTab={setActiveTab} />
      </div>
      <div className="flex-grow flex justify-center items-center bg-gray-100 m-1 shadow-xl shadow-blue-gray-900/5">
        {renderContent()}
      </div>
    </div>
  );
}
