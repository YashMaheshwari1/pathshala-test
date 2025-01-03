import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import DeleteRequest from "../userManagement/deleteRequest";
import Login from "../auth/login/login";
import Register from "../auth/register/register";
import TwoStepVerification from "../auth/twoStepVerification/twoStepVerification";
import EmailVerification from "../auth/emailVerification/emailVerification";
import ResetPassword from "../auth/resetPassword/resetPassword";
import ForgotPassword from "../auth/forgotPassword/forgotPassword";
import CallHistory from "../application/call/callHistory";
import Email from "../application/email";
import AdminDashboard from "../mainMenu/adminDashboard";
import EditInvoice from "../finance-accounts/payrool/payslip";
import EmployeeSalary from "../finance-accounts/payrool/employee_salary";
import PaySlip from "../finance-accounts/payrool/payslip";
import PayRoll from "../finance-accounts/payrool/payroll";
import PayRollOvertime from "../finance-accounts/payrool/payrollOvertime";
import PayRollDeduction from "../finance-accounts/payrool/payrollDedution";


import Login2 from "../auth/login/login-2";
import Login3 from "../auth/login/login-3";
import ResetPassword2 from "../auth/resetPassword/resetPassword-2";
import ResetPassword3 from "../auth/resetPassword/resetPassword-3";
import TwoStepVerification2 from "../auth/twoStepVerification/twoStepVerification-2";
import TwoStepVerification3 from "../auth/twoStepVerification/twoStepVerification-3";
import Register2 from "../auth/register/register-2";
import Register3 from "../auth/register/register-3";
import ForgotPassword2 from "../auth/forgotPassword/forgotPassword-2";
import ForgotPassword3 from "../auth/forgotPassword/forgotPassword-3";
import ResetPasswordSuccess from "../auth/resetPasswordSuccess/resetPasswordSuccess";
import ResetPasswordSuccess2 from "../auth/resetPasswordSuccess/resetPasswordSuccess-2";
import ResetPasswordSuccess3 from "../auth/resetPasswordSuccess/resetPasswordSuccess-3";

import RolesPermissions from "../userManagement/rolesPermissions";
import Permission from "../userManagement/permission";
import Manageusers from "../userManagement/manageusers";
import EmailVerification2 from "../auth/emailVerification/emailVerification-2";
import EmailVerification3 from "../auth/emailVerification/emailVerification-3";
import Calendars from "../mainMenu/apps/calendar";
import Knowledgebase from "../administration/help-support/knowledgebase";
import Activity from "../administration/help-support/activity";
import Users from "../administration/user-management/users";
import RolesPermission from "../administration/user-management/rolePermission";
import PermissionPage from "../administration/user-management/permissionpage";
import JobGrid from "../recruitment/jobs/jobgrid";
import JobList from "../recruitment/joblist/joblist";
import CandidateGrid from "../recruitment/candidates/candidategrid";
import CandidateKanban from "../recruitment/candidates/candidatekanban";
import CandidatesList from "../recruitment/candidates/candidatelist";
import RefferalList from "../recruitment/refferal/refferallist";
import Tickets from "../tickets/tickets";
import TicketGrid from "../tickets/tickets-grid";
import TicketDetails from "../tickets/ticket-details";
import ContactDetails from "../crm/contacts/contactDetails";
import ContactList from "../crm/contacts/contactList";
import ContactGrid from "../crm/contacts/contactGrid";

const routes = all_routes;

export const publicRoutes = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to="/index" />,
    route: Route,
  },
  {
    path: routes.adminDashboard,
    element: <AdminDashboard />,
    route: Route,
  },


  // finance-accounts
  {
    path: routes.editinvoice,
    element: <EditInvoice />,
    route: Route,
  },
  
  {
    path: routes.employeesalary,
    element: <EmployeeSalary />,
    route: Route,
  },
  {
    path: routes.payslip,
    element: <PaySlip />,
    route: Route,
  },
  {
    path: routes.payrollAddition,
    element: <PayRoll />,
    route: Route,
  },
  {
    path: routes.payrollOvertime,
    element: <PayRollOvertime />,
    route: Route,
  },
  {
    path: routes.payrollDeduction,
    element: <PayRollDeduction />,
    route: Route,
  },

  //Application
  {
    path: routes.callHistory,
    element: <CallHistory />,
    route: Route,
  },

  {
    path: routes.calendar,
    element: <Calendars />,
    route: Route,
  },

   {
    path: routes.email,
    element: <Email />,
    route: Route,
  },
 
  {
    path: routes.deleteRequest,
    element: <DeleteRequest />,
    route: Route,
  },

  
 
  {
    path: routes.tickets,
    element: <Tickets />,
    route: Route,
  },
  {
    path: routes.ticketGrid,
    element: <TicketGrid />,
    route: Route,
  },
  {
    path: routes.ticketDetails,
    element: <TicketDetails />,
    route: Route,
  },
  //Settings

 
  {
    path: routes.rolesPermissions,
    element: <RolesPermissions />,
  },
  {
    path: routes.permissionpage,
    element: <PermissionPage />,
  },
  {
    path: routes.manageusers,
    element: <Manageusers />,
  },
  {
    path: routes.knowledgebase,
    element: <Knowledgebase />,
  },
  {
    path: routes.activity,
    element: <Activity />,
  },
  {
    path: routes.users,
    element: <Users />,
  },
  {
    path: routes.rolePermission,
    element: <RolesPermission />,
  },
  {
    path: routes.permissionpage,
    element: <Permission />,
  },
  
  {
    path: routes.jobgrid,
    element: <JobGrid />,
    route: Route,
  },
  {
    path: routes.joblist,
    element: <JobList />,
    route: Route,
  },
  {
    path: routes.candidatesGrid,
    element: <CandidateGrid />,
    route: Route,
  },
  {
    path: routes.candidateslist,
    element: <CandidatesList />,
    route: Route,
  },
  {
    path: routes.candidateskanban,
    element: <CandidateKanban />,
    route: Route,
  },
  {
    path: routes.refferal,
    element: <RefferalList />,
    route: Route,
  },

  //crm
  {
    path: routes.contactList,
    element: <ContactList />,
    route: Route,
  },
  {
    path: routes.contactGrid,
    element: <ContactGrid />,
    route: Route,
  },
  {
    path: routes.contactDetails,
    element: <ContactDetails />,
    route: Route,
  },
];

export const authRoutes = [
  {
    path: routes.login,
    element: <Login />,
    route: Route,
  },
  {
    path: routes.login2,
    element: <Login2 />,
    route: Route,
  },
  {
    path: routes.login3,
    element: <Login3 />,
    route: Route,
  },
  {
    path: routes.register,
    element: <Register />,
    route: Route,
  },
  {
    path: routes.twoStepVerification,
    element: <TwoStepVerification />,
    route: Route,
  },
  {
    path: routes.twoStepVerification2,
    element: <TwoStepVerification2 />,
    route: Route,
  },
  {
    path: routes.twoStepVerification3,
    element: <TwoStepVerification3 />,
    route: Route,
  },
  {
    path: routes.emailVerification,
    element: <EmailVerification />,
    route: Route,
  },
  {
    path: routes.emailVerification2,
    element: <EmailVerification2 />,
    route: Route,
  },
  {
    path: routes.emailVerification3,
    element: <EmailVerification3 />,
    route: Route,
  },
  {
    path: routes.register,
    element: <Register />,
    route: Route,
  },
  {
    path: routes.register2,
    element: <Register2 />,
    route: Route,
  },
  {
    path: routes.register3,
    element: <Register3 />,
    route: Route,
  },
  {
    path: routes.resetPassword,
    element: <ResetPassword />,
    route: Route,
  },
  {
    path: routes.resetPassword2,
    element: <ResetPassword2 />,
    route: Route,
  },
  {
    path: routes.resetPassword3,
    element: <ResetPassword3 />,
    route: Route,
  },
  {
    path: routes.forgotPassword,
    element: <ForgotPassword />,
    route: Route,
  },
  {
    path: routes.forgotPassword2,
    element: <ForgotPassword2 />,
    route: Route,
  },
  {
    path: routes.forgotPassword3,
    element: <ForgotPassword3 />,
    route: Route,
  },
  {
    path: routes.resetPasswordSuccess,
    element: <ResetPasswordSuccess />,
  },
  {
    path: routes.resetPasswordSuccess2,
    element: <ResetPasswordSuccess2 />,
  },
  {
    path: routes.resetPasswordSuccess3,
    element: <ResetPasswordSuccess3 />,
  },
];
