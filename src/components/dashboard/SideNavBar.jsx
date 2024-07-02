import React, { useEffect } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export function SidebarWithContentSeparator({ setActiveTab }) {
  const [open, setOpen] = React.useState(0);
  const [role, setRole] = React.useState();
  useEffect(() => {
    const isAdminOrRecep = localStorage.getItem("role");
    setRole(isAdminOrRecep);
  }, []);
  const router = useRouter();
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const handleLogout = async () => {
    try {
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("role");

      // Redirect the user to the login page or home page
      router.push("/auth/sign-in");
    } catch (err) {
      // Handle logout error (if any)
      console.error("Logout failed", err);
    }
  };

  return (
    <Card className="h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <List className="mb-2">
        <ListItem onClick={() => setActiveTab("Dashboard")}>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <hr className="my-2 border-blue-gray-50" />
        <ListItem onClick={() => setActiveTab("Reservations")}>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Reservations
        </ListItem>
        <ListItem onClick={() => setActiveTab("Inbox")}>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
        </ListItem>
        <ListItem onClick={() => setActiveTab("Transactions")}>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Transactions
        </ListItem>
        <hr className="my-2 border-blue-gray-50" />
        <ListItem onClick={() => setActiveTab("Guest")}>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Guest
        </ListItem>
        <hr className="my-2 border-blue-gray-50" />
        
        <ListItem onClick={() => setActiveTab("Rooms")}>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Rooms
        </ListItem>
        <hr className="my-2 border-blue-gray-50" />
        {role == "admin" && (
          <ListItem onClick={() => setActiveTab("Receptionists")}>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Receptionists
          </ListItem>
        )}

        <Popover placement="left">
          <PopoverHandler>
            <ListItem >
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </PopoverHandler>
          <PopoverContent className="w-96">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <Typography variant="h6" color="blue-gray" className="mb-6">
              Logout
            </Typography>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 font-bold"
            >
              Are you sure to logout from the application?
            </Typography>
            <div className="flex gap-2">
              <Button
                onClick={handleLogout}
                variant="gradient"
                className="flex-shrink-0"
              >
                Logout
              </Button>
              <Button variant="gradient" className="flex-shrink-0">
                No
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </List>
    </Card>
  );
}
