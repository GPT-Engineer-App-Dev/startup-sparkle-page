import { LayoutDashboard, Users, Settings, FileText, Shield, CheckSquare } from "lucide-react";
import Index from "./pages/Index.jsx";
import Todo from "./pages/Todo.jsx";
import Confetti from "./pages/Confetti.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <LayoutDashboard className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Users className="h-4 w-4" />,
    page: <div>About Page</div>,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <div>Settings Page</div>,
  },
  {
    title: "Terms",
    to: "/terms",
    icon: <FileText className="h-4 w-4" />,
    page: <div>Terms and Conditions</div>,
  },
  {
    title: "Privacy",
    to: "/privacy",
    icon: <Shield className="h-4 w-4" />,
    page: <div>Privacy Policy</div>,
  },
  {
    title: "Todo",
    to: "/todo",
    icon: <CheckSquare className="h-4 w-4" />,
    page: <Todo />,
  },
  {
    title: "Confetti",
    to: "/confetti",
    icon: null,
    page: <Confetti />,
  },
];
