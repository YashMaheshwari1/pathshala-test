import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import DeleteRequest from "../userManagement/deleteRequest";
import Login from "../auth/login/login";
import Register from "../auth/register/register";
import TwoStepVerification from "../auth/twoStepVerification/twoStepVerification";
import EmailVerification from "../auth/emailVerification/emailVerification";
import ResetPassword from "../auth/resetPassword/resetPassword";
import ForgotPassword from "../auth/forgotPassword/forgotPassword";
import Email from "../application/email";
import CallHistory from "../application/call/callHistory";
import AdminDashboard from "../mainMenu/adminDashboard";
import Profile from "../pages/profile";
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
import Profilesettings from "../settings/generalSettings/profile-settings";
import Securitysettings from "../settings/generalSettings/security-settings";
import Notificationssettings from "../settings/generalSettings/notifications-settings";
import ConnectedApps from "../settings/generalSettings/connected-apps";
import Bussinesssettings from "../settings/websiteSettings/bussiness-settings";
import Seosettings from "../settings/websiteSettings/seo-settings";
import CompanySettings from "../settings/websiteSettings/companySettings";
import Localizationsettings from "../settings/websiteSettings/localization-settings";
import Prefixes from "../settings/websiteSettings/prefixes";
import Preference from "../settings/websiteSettings/preferences";
import Authenticationsettings from "../settings/websiteSettings/authentication-settings";
import Languagesettings from "../settings/websiteSettings/language";
import InvoiceSettings from "../settings/appSettings/invoiceSettings";
import CustomFields from "../settings/appSettings/customFields";
import EmailSettings from "../settings/systemSettings/emailSettings";
import Emailtemplates from "../settings/systemSettings/email-templates";
import SmsSettings from "../settings/systemSettings/smsSettings";
import OtpSettings from "../settings/systemSettings/otp-settings";
import GdprCookies from "../settings/systemSettings/gdprCookies";
import PaymentGateways from "../settings/financialSettings/paymentGateways";
import TaxRates from "../settings/financialSettings/taxRates";
import Storage from "../settings/otherSettings/storage";
import BanIpAddress from "../settings/otherSettings/banIpaddress";
import EmailVerification2 from "../auth/emailVerification/emailVerification-2";
import EmailVerification3 from "../auth/emailVerification/emailVerification-3";
import Calendars from "../mainMenu/apps/calendar";
import Knowledgebase from "../administration/help-support/knowledgebase";
import Activity from "../administration/help-support/activity";
import Users from "../administration/user-management/users";
import RolesPermission from "../administration/user-management/rolePermission";
import Appearance from "../settings/websiteSettings/appearance";
import SuperAdminDashboard from "../super-admin/dashboard";
import EmployeeDetails from "../hrm/employees/employeedetails";
import PermissionPage from "../administration/user-management/permissionpage";
import JobGrid from "../recruitment/jobs/jobgrid";
import JobList from "../recruitment/joblist/joblist";
import CandidateGrid from "../recruitment/candidates/candidategrid";
import CandidateKanban from "../recruitment/candidates/candidatekanban";
import CandidatesList from "../recruitment/candidates/candidatelist";
import RefferalList from "../recruitment/refferal/refferallist";
import EditInvoice from "../finance-accounts/payrool/payslip";
import EmployeeSalary from "../finance-accounts/payrool/employee_salary";
import PaySlip from "../finance-accounts/payrool/payslip";
import PayRoll from "../finance-accounts/payrool/payroll";
import PayRollOvertime from "../finance-accounts/payrool/payrollOvertime";
import PayRollDeduction from "../finance-accounts/payrool/payrollDedution";
import Tickets from "../tickets/tickets";
import TicketGrid from "../tickets/tickets-grid";
import TicketDetails from "../tickets/ticket-details";
import Aisettings from "../settings/websiteSettings/ai-settings";
import Salarysettings from "../settings/appSettings/salary-settings";
import Approvalsettings from "../settings/appSettings/approval-settings";
import LeaveType from "../settings/appSettings/leave-type";
import SmsTemplate from "../settings/systemSettings/sms-template";
import Maintenancemode from "../settings/systemSettings/maintenance-mode";
import Currencies from "../settings/financialSettings/currencies";
import Customcss from "../settings/otherSettings/custom-css";
import Customjs from "../settings/otherSettings/custom-js";
import Cronjob from "../settings/otherSettings/cronjob";
import Cronjobschedule from "../settings/otherSettings/cronjobSchedule";
import Backup from "../settings/otherSettings/backup";
import Clearcache from "../settings/otherSettings/clearCache";
import Languageweb from "../settings/websiteSettings/language-web";
import Addlanguage from "../settings/websiteSettings/add-language";
import Department from "../hrm/employees/deparment";
import ContactDetails from "../crm/contacts/contactDetails";
import ContactList from "../crm/contacts/contactList";
import ContactGrid from "../crm/contacts/contactGrid";
import Holidays from "../hrm/holidays";

import Companies from "../super-admin/companies";
import Subscription from "../super-admin/subscription";
import Packages from "../super-admin/packages/packagelist";
import PackageGrid from "../super-admin/packages/packagelist";
import Domain from "../super-admin/domin";
import PurchaseTransaction from "../super-admin/purchase-transaction";
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

  // pages

  {
    path: routes.profile,
    element: <Profile />,
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
    path: routes.superAdminDashboard,
    element: <SuperAdminDashboard />,
    route: Route,
  },

  

  
  {
    path: routes.customFields,
    element: <CustomFields />,
    route: Route,
  },
 

  {
    path: routes.deleteRequest,
    element: <DeleteRequest />,
    route: Route,
  },
 

  
  
 
 
  {
    path: routes.banIpAddress,
    element: <BanIpAddress />,
    route: Route,
  },

  {
    path: routes.email,
    element: <Email />,
    route: Route,
  },


 
 

 
  

  // {
  //   path: routes.chart,
  //   element: <ChartJs />,
  //   route: Route,
  // },

  

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
 
  {
    path: routes.holidays,
    element: <Holidays />,
    route: Route,
  },
  




  //Settings

  {
    path: routes.profilesettings,
    element: <Profilesettings />,
  },
  {
    path: routes.securitysettings,
    element: <Securitysettings />,
  },
  {
    path: routes.notificationssettings,
    element: <Notificationssettings />,
  },
  {
    path: routes.connectedApps,
    element: <ConnectedApps />,
  },
  {
    path: routes.bussinessSettings,
    element: <Bussinesssettings />,
  },
  {
    path: routes.seoSettings,
    element: <Seosettings />,
  },
  {
    path: routes.companySettings,
    element: <CompanySettings />,
  },
  {
    path: routes.localizationSettings,
    element: <Localizationsettings />,
  },
  {
    path: routes.prefixes,
    element: <Prefixes />,
  },
  {
    path: routes.preference,
    element: <Preference />,
  },
  {
    path: routes.authenticationSettings,
    element: <Authenticationsettings />,
  },
  {
    path: routes.aiSettings,
    element: <Aisettings />,
  },
  {
    path: routes.salarySettings,
    element: <Salarysettings />,
  },
  {
    path: routes.approvalSettings,
    element: <Approvalsettings />,
  },
  {
    path: routes.appearance,
    element: <Appearance />,
  },
  {
    path: routes.language,
    element: <Languagesettings />,
  },
  {
    path: routes.languageWeb,
    element: <Languageweb />,
  },
  {
    path: routes.addLanguage,
    element: <Addlanguage />,
  },
  {
    path: routes.invoiceSettings,
    element: <InvoiceSettings />,
  },
  {
    path: routes.customFields,
    element: <CustomFields />,
  },
  {
    path: routes.leaveType,
    element: <LeaveType />,
  },
  {
    path: routes.emailSettings,
    element: <EmailSettings />,
  },
  {
    path: routes.emailTemplates,
    element: <Emailtemplates />,
  },
  {
    path: routes.smsSettings,
    element: <SmsSettings />,
  },
  {
    path: routes.smsTemplate,
    element: <SmsTemplate />,
  },
  {
    path: routes.otpSettings,
    element: <OtpSettings />,
  },
  {
    path: routes.gdprCookies,
    element: <GdprCookies />,
  },
  {
    path: routes.maintenanceMode,
    element: <Maintenancemode />,
  },

  {
    path: routes.paymentGateways,
    element: <PaymentGateways />,
  },
  {
    path: routes.taxRates,
    element: <TaxRates />,
  },
  {
    path: routes.currencies,
    element: <Currencies />,
  },
  {
    path: routes.backup,
    element: <Backup />,
  },
  {
    path: routes.clearcache,
    element: <Clearcache />,
  },
  {
    path: routes.customCss,
    element: <Customcss />,
  },
  {
    path: routes.customJs,
    element: <Customjs />,
  },
  {
    path: routes.cronjob,
    element: <Cronjob />,
  },
  {
    path: routes.Cronjobschedule,
    element: <Cronjobschedule />,
  },
  {
    path: routes.storage,
    element: <Storage />,
  },
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
    path: routes.employeedetails,
    element: <EmployeeDetails />,
    route: Route,
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

  {
    path: routes.departments,
    element: <Department />,
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


 
  {
    path: routes.superAdminCompanies,
    element: <Companies />,
    route: Route,
  },
  {
    path: routes.superAdminSubscriptions,
    element: <Subscription />,
    route: Route,
  },
  {
    path: routes.superAdminPackages,
    element: <Packages />,
    route: Route,
  },
  {
    path: routes.superAdminPackagesGrid,
    element: <PackageGrid />,
    route: Route,
  },
  {
    path: routes.superAdminDomain,
    element: <Domain />,
    route: Route,
  },
  {
    path: routes.superAdminPurchaseTransaction,
    element: <PurchaseTransaction />,
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