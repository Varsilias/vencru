import home from "../../../assets/icons/home.svg";
import dashboard from "../../../assets/icons/dasboard.svg";
import projects from "../../../assets/icons/projects.svg";
import task from "../../../assets/icons/task.svg";
import report from "../../../assets/icons/report.svg";
import users from "../../../assets/icons/users.svg";
import support from "../../../assets/icons/support.svg";
import settings from "../../../assets/icons/settings.svg";

export const nav_data = [
  {
    name: "Home",
    icon: home,
    to: "/home",
  },
  {
    name: "Dashboard",
    icon: dashboard,
    to: "/dashbord",
    count: 10,
  },
  {
    name: "Projects",
    icon: projects,
    to: "/projects",
  },
  {
    name: "Tasks",
    icon: task,
    to: "/tasks",
  },
  {
    name: "Reporting",
    icon: report,
    to: "/reports",
  },
  {
    name: "Users",
    icon: users,
    to: "/users",
  },
];

export const settings_support = [
  {
    name: "Support",
    icon: support,
    to: "/support",
  },
  {
    name: "Settings",
    icon: settings,
    to: "/",
  },
];
