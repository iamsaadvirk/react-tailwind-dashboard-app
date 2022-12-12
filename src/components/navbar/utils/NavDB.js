import { ChartPieIcon, CogIcon, LogoutIcon, ShoppingCartIcon, TemplateIcon, UserGroupIcon, UserIcon } from "@heroicons/react/outline";

export const navLinks = [
  {
    id: 0,
    title: "Dashboard",
    icon: <TemplateIcon className="nav-icon" />,
  },
  {
    id: 1,
    title: "Jobs",
    icon: <ShoppingCartIcon className="nav-icon" />,
  },
  {
    id: 2,
    title: "Audit",
    icon: <UserIcon className="nav-icon" />,
  },
  {
    id: 3,
    title: "Reports",
    icon: <ChartPieIcon className="nav-icon" />,
  },
  {
    id: 4,
    title: "Contractors",
    icon: <UserGroupIcon className="nav-icon" />,
  },
  {
    id: 5,
    title: "Settings",
    icon: <CogIcon className="nav-icon" />,
  },
  {
    id: 6,
    title: "LogOut",
    icon: <LogoutIcon className="nav-icon" />,
  },
];