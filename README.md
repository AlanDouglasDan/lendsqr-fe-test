# LENDSQR-FE-TEST DASHBOARD TEMPLATE

**Lendsqr** is a Lending-as-a-Service solution powers lenders to launch in the shortest possible time, and scale their digital lending business across multiple channels, at the lowest cost.

## Additional Info About The Project
- Due to the fact that no login endpoint was provided to use, this app accepts any value for email and password provided the fields are not empty. This is to enable the user to login and see the dashboard.
- The main dashboard page is the users page which is connected with the users endpoint provided. The user can click on an ellipsis of a user and proceed to click View details to see the user details page.
- The user details page is also connected with the get single user by id endpoint provided with a caching mechanism built in like instructed to store a users details in the local storage so when the page is revisited it will not make another call to the endpoint but rather get the data from the local storage which is a means of optimizing the app.
- The filter function on the users page is not connected to an api but rather just works with a client side filtering mechanism to filter the users by their organization, username, email and phone number.
- The pagination bit is also done using client side pagination to slice the users array into pages of whatever the rowsPerPage value is set to, everything on that aspect is also purely dynamic.
- The sidebar on the dashboard is also mostly static apart from the users menu item that links to the users page and the logout button that logs the user out of the app and redirects them to the login page.
- Most of the components in the header are also static apart from the logo which just links to the users page.
- The cards on the users page are dynamically generating those numbers based on information from the api.
- Because statuses were not returned from the api, I had to create a function that generates a random status for each user and that status is what is displayed on the users page, also those statuses are being managed by state because they can be changed using the action buttons on the menu of each user.
- On the user details page some of the fields rendered aren't being returned from the api so for those ones i just used static data gotten from the design

# Preview

### Screenshot

![Admin Login (Desktop View)](/public/login-desktop-preview.png)
![Admin Login (Mobile View)](/public/login-mobile-preview.png)
![Admin Dashboard Users Page (Desktop View)](/public/dashboard-desktop-preview.png)
![Admin Dashboard Users Page (Mobile View)](/public/dashboard-mobile-preview.png)
![Admin Dashboard User Details Page (Desktop View)](/public/user-details-desktop-preview.png)
![Admin Dashboard User Details Page (Mobile View)](/public/user-details-mobile-preview.png)
![Admin Dashboard User Details Page2 (Mobile View)](/public/user-details-mobile-preview2.png)

### Demo Site: [Here](https://alan-douglas-lendsqr-fe-test.vercel.app/)

## TOC

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing & Local Development](#installing--local-development)
- [Files/Folder Structure](#filesfolders-structure)
- [Deployment](#deployment)
- [Built With](#built-with)
- [Changelog](#changelog)
- [Authors](#authors)

## Getting Started

In order to run **Lendsqr** on your local machine all what you need to do is to have the prerequisites stated below installed on your machine and follow the installation steps down below.

#### Prerequisites

- Node.js
- Yarn or NPM
- Git CLI

#### Installing & Local Development

Start by typing the following commands in your terminal in order to get **Lendsqr** full package on your machine and starting a local development server with live reload feature.

```
> git clone https://github.com/AlanDouglasDan/lendsqr-fe-test lendsqr
> cd lendsqr
> npm install
> npm run start
```

## Files/Folders Structure

Here is a brief explanation of the template folder structure and some of its main files usage:

```
└── src              # Contains all template source files.
│   └── assets       # Contains images folder.
│   │    └── image   # Contains important static images used throughout the app
│   └── components   # Contains important Re-useable data
│   └── pages        # Files for site pages (.tsx)
│   └── constants    # Basic reusable constants utilized
│   └── queries      # Contains functions for making API calls
│   └── routes       # Defines all the routes for the app
│   └── types        # Has all the predefined interfaces for variables and functions in the app
│   └── utils        # Contains helper functions for some logic in the app
│   └── *.scss       # Styling Files for app
│   └── index.tsx    # Entry point for Application
│
│
└── public           # Ignored files in Git.
│    └──*.png        # Image File
│    └──*.ico        # Favicon
│    └──index.html   # Entry point -- html
│    └──*.json       # Manifest file
└── .gitignore       # Ignored files in Git.
└── package.json     # Package metadata.
└── README.md        # Precise and Tailord Documentation of
└── tsconfig.json    # TypeScript compiler options.
└── package.lock     # npm metadata.
```

## Deployment

In deployment process, you have two commands:

1. Build command
   Used to generate the final result of compiling src files into build folder. This can be achieved by running the following command:

```
> npm run build
```

2. Test command
   Used to create a local dev server in order to preview the final output of build process. This can be achieved by running the following command:

```
> npm run test
```

## Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)

## Changelog

#### V 0.1.0

Initial Release

## Authors

[Alan Douglas](https://github.com/AlanDouglasDan)

## More info

This was done as a FrontEnd Engineering Test Provided by [Alan](https://github.com/AlanDouglasDan)
Appreciate the opportunity
