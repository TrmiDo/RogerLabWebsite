import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Publications",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Publications",
        path: "/publications",
        newTab: false,
      },
      {
        id: 22,
        title: "Presentations",
        path: "/presentations",
        newTab: false,
      }

    ]
  },
  {
    id: 3,
    title: "Members",
    path: "/member",
    newTab: false,
  },
  {
    id: 4,
    title: "Awards",
    path: "/award",
    newTab: false,
  },
  {
    id: 5,
    title: "Participants",
    path: "/signup",
    newTab: false,
  },
  {
    id: 6,
    title: "Opportunities",
    path: "/opportunity",
    newTab: false,
    
  },
];
export default menuData;
