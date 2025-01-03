import { all_routes } from "../../../feature-module/router/all_routes";
import { route } from "../../common/selectoption/selectoption";
const routes = all_routes;

export const SidebarDataTest = [
  {
    tittle: 'Main Menu',
    icon: 'airplay',
    showAsTab: true,
    separateRoute: false,
    submenuItems: [
      {
        label: 'Dashboard',
        link: 'index',
        submenu: true,
        showSubRoute: false,
        icon: 'smart-home',
        base: 'dashboard',
        materialicons: 'start',
        dot: true,
        submenuItems: [
          { label: "Admin Dashboard", link: routes.adminDashboard },

        ],
      },
      {
        label: 'Applications',
        link: 'apps',
        submenu: true,
        showSubRoute: false,
        icon: 'layout-grid-add',
        base: 'application',
        materialicons: 'dashboard',
        submenuItems: [
          {
            label: 'Calendar',
            showSubRoute: false,
            link: routes.calendar,
            customSubmenuTwo: false,
            base: 'calendar',
          },
          {
            label: 'Email',
            showSubRoute: false,
            link: routes.email,
            customSubmenuTwo: false,
            base: 'email',
          },
        ],
      },
    ],
  },
  {
    tittle: 'CRM',
    icon: 'file',
    showAsTab: false,
    separateRoute: false,
    submenuItems: [
      {
        label: 'Contacts',
        link: routes.contactGrid,
        submenu: false,
        showSubRoute: false,
        icon: 'user-shield',
        base: 'contact',
        materialicons: 'confirmation_number',
        submenuItems: [],
      },
    ],
  },
  {
    tittle: 'HRM',
    icon: 'file',
    showAsTab: false,
    separateRoute: false,
    submenuItems: [
      {
        label: 'Employees',
        link: routes.employeeList,
        submenu: true,
        showSubRoute: false,
        icon: 'users',
        base: 'employees',
        materialicons: 'people',
        submenuItems: [
          {
            label: 'Employees Details',
            link: routes.employeedetails,
            base: 'employees',
            base2: 'employee-details',
          },
          {
            label: 'Departments',
            link: routes.departments,
            base: 'departments',
          },
        ],
      },
      {
        label: 'Tickets',
        link: 'ticketList',
        submenu: true,
        showSubRoute: false,
        icon: 'ticket',
        base: 'tickets',
        materialicons: 'leaderboard',
        submenuItems: [
          {
            label: 'Tickets',
            link: routes.tickets,
            base: 'ticket-list',
          },
          {
            label: 'Tickets Detail',
            link: routes.ticketDetails,
            base: 'ticket-details',
          },
        ],
      },
      {
        label: 'Holidays',
        link: routes.holidays,
        base: 'holidays',
        submenu: false,
        showSubRoute: false,
        icon: 'calendar-event',
        materialicons: 'confirmation_number',
        submenuItems: [],
      },
    ],
  },
  {
    tittle: 'RECRUITMENT',
    icon: 'file',
    showAsTab: false,
    separateRoute: false,
    submenuItems: [
      {
        label: 'Jobs',
        link: routes.jobgrid,
        submenu: false,
        showSubRoute: false,
        icon: 'timeline',
        base: 'jobs',
        materialicons: 'confirmation_number',
        submenuItems: [],
      },
      {
        label: 'Candidates',
        link: routes.candidatesGrid,
        submenu: false,
        showSubRoute: false,
        icon: 'user-shield',
        base: 'candidates',
        materialicons: 'shopping_bag',
        submenuItems: [],
      },
      {
        label: 'Refferals',
        link: routes.refferal,
        submenu: false,
        showSubRoute: false,
        icon: 'ux-circle',
        base: 'refferals',
        materialicons: 'account_balance_wallet',
        submenuItems: [],
      },
    ],
  },

  {
    tittle: 'Finance & Accounts',
    icon: 'file',
    showAsTab: false,
    separateRoute: false,
    submenuItems: [
      {
        label: 'Payroll',
        base: 'payroll',
        submenu: true,
        showSubRoute: false,
        icon: 'cash',
        submenuItems: [
          {
            label: 'Employee Salary',
            link: routes.employeesalary,
            base: 'employee-salary',
          },
          {
            label: 'Payslip',
            link: routes.payslip,
            base: 'payslip',
          },
          {
            label: 'Payroll Items',
            link: routes.payrollAddition,
            base: 'payroll-items',
          },
        ],
      },
    ],
  },


  {
    tittle: 'Administration',
    showAsTab: false,
    separateRoute: false,
    submenuItems: [
      {
        label: 'Help & Supports',
        base: 'supports',
        submenu: true,
        showSubRoute: false,
        icon: 'headset',
        submenuItems: [
          {
            label: 'Knowledge Base',
            link: routes.knowledgebase,
            base: 'knowledgebase',
            base2: 'knowledgebase-view',
            base3: 'knowledgebase-details',
          },
          {
            label: 'Activities',
            link: routes.activity,
            base: 'activities',
          },
        ],
      },
      {
        label: 'User Management',
        base: 'user-management',
        submenu: true,
        showSubRoute: false,
        icon: 'user-star',
        submenuItems: [
          {
            label: 'Users',
            link: routes.users,
            base: 'users',
          },
          {
            label: 'Roles & Permissions',
            link: routes.rolePermission,
            base: 'roles-permissions',
          },
        ],
      },
    ],
  },
  {
    tittle: 'Authentication',
    showAsTab: false,
    separateRoute: false,
    submenuItems: [
      {
        label: 'Login',
        submenu: true,
        showSubRoute: false,
        icon: 'login',
        submenuItems: [
          {
            label: 'Cover',
            link: routes.login,
          },
          {
            label: 'Illustration',
            link: routes.login2,
          },
          {
            label: 'Basic',
            link: routes.login3,
          },
        ],
      },
      {
        label: 'Register',
        submenu: true,
        showSubRoute: false,
        icon: 'forms',
        submenuItems: [
          {
            label: 'Cover',
            link: routes.register,
          },
          {
            label: 'Illustration',
            link: routes.register2,
          },
          {
            label: 'Basic',
            link: routes.register3,
          },
        ],
      },
      {
        label: 'Forgot Password',
        submenu: true,
        showSubRoute: false,
        icon: 'help-triangle',
        submenuItems: [
          {
            label: 'Cover',
            link: routes.forgotPassword,
          },
          {
            label: 'Illustration',
            link: routes.forgotPassword2,
          },
          {
            label: 'Basic',
            link: routes.forgotPassword3,
          },
        ],
      },
      {
        label: 'Reset Password',
        submenu: true,
        showSubRoute: false,
        icon: 'restore',
        submenuItems: [
          {
            label: 'Cover',
            link: routes.resetPassword,
          },
          {
            label: 'Illustration',
            link: routes.resetPassword2,
          },
          {
            label: 'Basic',
            link: routes.resetPassword3,
          },
        ],
      },
      {
        label: 'Email Verification',
        submenu: true,
        showSubRoute: false,
        icon: 'mail-exclamation',
        submenuItems: [
          {
            label: 'Cover',
            link: routes.emailVerification,
          },
          {
            label: 'Illustration',
            link: routes.emailVerification2,
          },
          {
            label: 'Basic',
            link: routes.emailVerification3,
          },
        ],
      },
      {
        label: '2 Step Verification',
        submenu: true,
        showSubRoute: false,
        icon: 'password',
        submenuItems: [
          {
            label: 'Cover',
            link: routes.twoStepVerification,
          },
          {
            label: 'Illustration',
            link: routes.twoStepVerification2,
          },
          {
            label: 'Basic',
            link: routes.twoStepVerification3,
          },
        ],
      },
    ],
  },







];