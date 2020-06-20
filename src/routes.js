/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/bcp",
    name: "Buku Catatan Pabean",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
    children: [
      {
        path: "/bcp/btd",
        name: "BCP - BTD",
        rtlName: "قائمة الجدول",
        icon: "Unarchive",
        component: Typography,
        layout: "/admin",
      },
      {
        path: "/bcp/bdn",
        name: "BCP - BDN",
        rtlName: "قائمة الجدول",
        icon: "content_paste",
        component: TableList,
        layout: "/admin",
      },
      {
        path: "/bcp/bmn",
        name: "BCP - BMN",
        rtlName: "قائمة الجدول",
        icon: "content_paste",
        component: DashboardPage,
        layout: "/admin",
      },
    ]
  },
  {
    path: "/btd",
    name: "BTD",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
    children: [
      {
        path: "/btd/tambah-btd",
        name: "Tambah BTD",
        rtlName: "قائمة الجدول",
        icon: "content_paste",
        component: TableList,
        layout: "/admin",
      },
      {
        path: "/btd/daftar-btd",
        name: "Daftar BTD",
        rtlName: "قائمة الجدول",
        icon: "content_paste",
        component: TableList,
        layout: "/admin",
      },
      {
        path: "/btd/penarikan-pencacahan",
        name: "Penarikan & Pencacahan",
        rtlName: "قائمة الجدول",
        icon: "content_paste",
        component: TableList,
        layout: "/admin",
      },
      {
        path: "/btd/tindak-lanjut",
        name: "Tindak Lanjut BTD",
        rtlName: "قائمة الجدول",
        icon: "content_paste",
        component: TableList,
        layout: "/admin",
      },
      {
        path: "/btd/penyelesaian",
        name: "Penyelesaian BTD",
        rtlName: "قائمة الجدول",
        icon: "content_paste",
        component: TableList,
        layout: "/admin",
      },
      {
        path: "/btd/anjing",
        name: "anjing BTD",
        rtlName: "قائمة الجدول",
        icon: "content_paste",
        component: TableList,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/bdn",
    name: "BDN",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
    children: [
      {
        path: "/bdn/tambah",
        name: "Tambah BDN",
        rtlName: "طباعة",
        icon: LibraryBooks,
        component: Typography,
        layout: "/admin",
      },
      {
        path: "/bdn/daftar",
        name: "Daftar BDN",
        rtlName: "طباعة",
        icon: LibraryBooks,
        component: DashboardPage,
        layout: "/admin",
      },
      {
        path: "/bdn/penyerahan",
        name: "Penyerahan BDN",
        rtlName: "طباعة",
        icon: LibraryBooks,
        component: Typography,
        layout: "/admin",
      },
      {
        path: "/bdn/serah-terima-cacah",
        name: "Serah Terima & Pencacahan",
        rtlName: "طباعة",
        icon: LibraryBooks,
        component: Typography,
        layout: "/admin",
      },
      {
        path: "/bdn/tindak-lanjut",
        name: "Tindak Lanjut BDN",
        rtlName: "طباعة",
        icon: LibraryBooks,
        component: Typography,
        layout: "/admin",
      },
      {
        path: "/bdn/penyelesaian",
        name: "Penyelesaian BDN",
        rtlName: "طباعة",
        icon: LibraryBooks,
        component: Typography,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/bmn",
    name: "BMN",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
    children: [
      {
        path: "/bmn/daftar",
        name: "Daftar BMN",
        rtlName: "طباعة",
        icon: LibraryBooks,
        component: Typography,
        layout: "/admin",
      },
      {
        path: "/bmn/persetujuan-peruntukan",
        name: "Persetujuan Peruntukan BMN",
        rtlName: "طباعة",
        icon: LibraryBooks,
        component: Typography,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/laporan-tpp",
    name: "Laporan TPP",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
    children: [
      {
        path: "/laporan-tpp/btd",
        name: "Laporan BTD",
        rtlName: "قائمة الجدول",
        icon: "content_paste",
        component: TableList,
        layout: "/admin",
      },
      {
        path: "/laporan-tpp/bdn",
        name: "Laporan BDN",
        rtlName: "قائمة الجدول",
        icon: "content_paste",
        component: TableList,
        layout: "/admin",
      },
      {
        path: "/laporan-tpp/bmn",
        name: "Laporan BMN",
        rtlName: "قائمة الجدول",
        icon: "content_paste",
        component: TableList,
        layout: "/admin",
      },
      {
        path: "/laporan-tpp/smt-bmn",
        name: "Laporan Semester BMN",
        rtlName: "قائمة الجدول",
        icon: "content_paste",
        component: TableList,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/laporan-harian-tps",
    name: "Laporan Harian TPS",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
    chirdren: [
      {
        path: "/laporan-harian-tps/daftar",
        name: "Daftar Laporan Harian",
        rtlName: "قائمة الجدول",
        icon: "content_paste",
        component: TableList,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/scan-barcode-tpp",
    name: "Scan Barcode TPP",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
    children: [
      {
        path: "/cek-barcode-tpp",
        name: "Cek Barcode TPP",
        rtlName: "قائمة الجدول",
        icon: "content_paste",
        component: DashboardPage,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/piranti",
    name: "Piranti",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
    children: [
      {
        path: "/piranti/tanda-tangan",
        name: "Tanda Tangan",
        rtlName: "إخطارات",
        icon: Notifications,
        component: NotificationsPage,
        layout: "/admin",
      },
      {
        path: "/piranti/manajemen-pengguna-bc",
        name: "Manajemen pengguna BC",
        rtlName: "إخطارات",
        icon: Notifications,
        component: NotificationsPage,
        layout: "/admin",
      },
      {
        path: "/piranti/manajemen-pengguna-tps",
        name: "Manajemen Pengguna TPS",
        rtlName: "إخطارات",
        icon: Notifications,
        component: NotificationsPage,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
  },

  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl",
  },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Kucing,
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
