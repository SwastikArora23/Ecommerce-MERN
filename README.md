<h1 align="center">
<img src="https://user-images.githubusercontent.com/42696800/147324216-b7c6f919-e9c4-4e3a-9411-4ffabb3a35d2.png" alt="logo" width="30" height="30" />
Kosells
	
</h1>
An installable e-commerce app built using the MERN stack, Redux.js, Bootstrap 5 and AWS's S3 Storage. The user authentication includes basic authentication.
<br/>
The app also implements an email verification system for users registering using an email and password. Stripe payment gateway is implemented to provide payment options, and the app also includes an admin panel to keep track of all products, orders and users. This is also a PWA

## Getting Started

-   Fork this repo and run the `git clone <forked repo>` command from your terminal/bash.
-   Cd into the directories and `npm install`
-   Create a `.env` file in the root directory and add the variables as in [this file](https://github.com/SwastikArora23/Ecommerce-MERN/blob/main/.env.sample)
-   Create a `.env` file in the frontend folder and add the variables as in [this file](https://github.com/SwastikArora23/Ecommerce-MERN/blob/main/frontend/.env.sample)
-   Run the command `npm run dev` to run the server side and the client side concurrently.

You can obtain the MONGO_URI after creating a collection on [mongodb atlas](https://www.mongodb.com/cloud/atlas).

## Info

-   **Kosells** is an installable E-commerce PWA.
-   It has been built from scratch using the MERN stack with the client side using a redux store as well. Bootstrap 5 is used along with some custom styling.
-   The client side uses React hooks along with Redux.js and redux-thunk middleware
-   The server side is built using the express framework of node.js.
-   The database used to store the users, orders, products and refresh tokens is the free tier of the cloud based mongoDB service from MongoDB Atlas.
-   The user authentication and authorisation has been implemented as following:

**An email & password based login**:

-   Here, the JWT tokens are used to verify each new registered user by sending an email for account verification.
-   There is also a feature of allowing the user to reset password in case he/she forgets the credentials. This also uses refresh tokens and access tokens of varying life spans.
-   If user changes the email id after logging in, another verification link is sent to verify the new email id for extra security.
-   This feature has been implemented using the [nodemailer](https://nodemailer.com/about/) package, along with the json web tokens(JWT).

-   The user avatar is a [gravatar](https://en.gravatar.com/) based on the stored user email.
-   The workflow for ordering the items is very simple and quick. The status tracker helps keep track of the number of steps left before placing the order.
-   The product page implements an image maginifier on hover.
-   The user can review a product only once, after the placing an order for it.
-   There is an admin panel built into the app, that can help the admin set any order as being delivered, and also allows the admin to add/update/delete any product.
-   The admin panel also provides information regarding all orders and users.
-   The app has only 1 payment option available, as of now:

The [Stripe API](https://stripe.com/en-in) is used to accept payments via a **Credit or Debit Card**. Since the app is still using the sandbox version, you can test this using 4242 4242 4242 4242 and any combition of date/cvv

-   The images for the user avatar and the product are stored in a private AWS S3 bucket.
-   The app is responsive and is also an installable progressive web app, with a notification sent to the user everytime the app has an update.

## A Few Features

There were a few challenges that came up during the development of the application. In this section, I aim to clarify my approach in overcoming these challeges, as a way to help you understand the code better!

### User authentication and authorization

-   As explained earlier, there are 2 approaches implemented. One makes use of **JWT**s and the other approach needs the use of a popular npm package called **passport.js**.
    -   Along with a regular email login, I wanted to implement a system for **email verification** so that the number of troll accounts is kept to a minimum.
    -   This involved sending an email with a verification link that consists of a web token/access token valid for a 15 minute duration.
    -   Once this link is clicked, the client side then makes an API call to **verify the token** and confirm the user's account.
    -   This same system is implemented to build the feature where a user can ask to reset the password.
    -   The mails are sent using [nodemailer](https://nodemailer.com/about/), and a gmail account is used to send the mails securely.
    -   The access tokens meant to validate the user session is **valid for an hour**, after which the refresh token has to be used to get new access tokens. These refresh tokens are **valid for 7 days**, after which they are removed from the Database automatically, using the **TTL concept of mongoose**.

### Payment Gateways

-   To make the payment for the ordered items we're using Stripe API
-   The **Stripe API** is used to provide the option of using a Credit/Debit Card
-   The Stripe payment makes use of creating a unique **payment intent** from the server side, for each payment and logs an invoice in the stripe developer account.

### Admin Panel

-   The admin panel view is meant to handle all the orders, products and registered users
-   An order can be marked as delivered, after the user has completed the payment
-   The admin can create a product for the shop, which makes it easier to add/remove more products to replicate a real world e-commerce site
-   The users detail can altered, only by setting them as admin or not. Other than this, the admin cannot change any other detail about the registered user.
-   Helps give an estimate of the total number of orders and users on the app.

### Easy Workflow for Ordering Items

-   The app has been designed and built in a manner that makes it very easy to order items once they are added to the cart.
-   There is a status bar implemented that can help keep the user informed about the number of steps left in placing an order.

### Responsive Design & PWA

-   Bootstrap 5 is used in the form of the latest version of [react-bootstrap](https://react-bootstrap.github.io/) and a theme from [bootswatch](https://bootswatch.com/) helps in maintaining a colour palette.
-   Additional styling is included to format various smaller elements throughout the app.
-   The app has been created using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) and has opted in for using service workers.
-   There is also a Toast component which alerts the user of a newer version of the app evrey time the app is updated.
-   The Favicons are extracted with the help of [Favicon.io](https://favicon.io/)
-   The navbar is not built using the nav elements for toggling, instead it is rendered differently based on display classes offered by bootstrap.

### Miscellaneous

-   The app makes use of [react-helmet-async](https://www.npmjs.com/package/react-helmet-async) to add a custom HTML title for different pages.
-   The app uses an **S3 storage option** to store all the gravatars or user profile pics, and the access is limited to the sdk setup in the server side.
-   A user can submit a review for any product only if he/she has placed an order for the product, and hasn't already submitted a review
-   The cart page makes it very easy to alter the quantity of the products, and the cart size is indicated to the user at all instants.
-   The product carousel in the home page fetches the top rated products and provides the details
-   Pagination is also implemented to be server side rendered list of products/orders.

## Technologies Used

Some of the technologies used in the development of this web application are as follow:

-   [MongoDB Atlas](https://www.mongodb.com/cloud/atlas): It provides a free cloud service to store MongoDB collections.
-   [React.js](https://reactjs.org/): A JavaScript library for building user interfaces.
-   [Node.js](https://nodejs.org/en/): A runtime environment to help build fast server applications using JS.
-   [Express.js](https://expressjs.com/): A popular Node.js framework to build scalable server-side for web applications.
-   [Redux.js](https://redux.js.org/): A predictable & global state container for React apps.
-   [Mongoose](https://mongoosejs.com/): An ODM(Object Data Modelling)library for MongoDB and Node.js
-   [JSON Web Tokens or JWTs](https://jwt.io/): A standard to securely authenticate HTTP requests
-   [Bootstrap 5](https://getbootstrap.com/docs/4.0/getting-started/introduction/): A popular framework for building responsive, mobile-first sites.
-   [React Bootstrap](https://react-bootstrap.github.io/): The most popular front-end framework, rebuilt for React.
-   [passport.js](http://www.passportjs.org/): Simple, unobtrusive authentication for Node.js
-   [nodemailer](https://nodemailer.com/about/): Send mails using a node based server
-   [bootswatch](https://bootswatch.com/): Free & customisable themes for Bootstrap
-   [Multer](https://www.npmjs.com/package/multer) and [Multer-S3](https://www.npmjs.com/package/multer-s3): Node.js packages that help in dealing with file uploads.
-   [AWS S3 Storage Bucket](https://aws.amazon.com/s3/): An object storage service that offers industry-leading scalability, data availability, security, and performance.
