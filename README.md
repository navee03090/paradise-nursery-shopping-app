# Paradise Nursery Shopping Application

A beautiful React-based e-commerce application for a plant nursery, featuring a modern UI with shopping cart functionality.

## Features

- **Landing Page**: Welcome page with company information and call-to-action
- **Product Listing**: Browse plants organized by categories (Aromatic, Medicinal, Decorative)
- **Shopping Cart**: Add, remove, and manage items with real-time updates
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **State Management**: Redux for cart state management
- **Modern UI**: Beautiful gradients, animations, and hover effects

## Technologies Used

- React 18
- Redux Toolkit
- React Router DOM
- CSS3 with modern features
- Responsive design principles

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd paradise-nursery-shopping-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Landing.js      # Landing page
│   ├── ProductListing.js # Product catalog
│   └── ShoppingCart.js # Shopping cart
├── store/              # Redux store
│   ├── store.js        # Store configuration
│   └── cartSlice.js    # Cart state management
├── data/               # Static data
│   └── products.js     # Product information
└── App.js              # Main app component
```

## Features Overview

### Landing Page
- Hero section with background image
- Company description
- Call-to-action button
- Feature highlights

### Product Listing
- Category filtering
- Product cards with images and details
- Add to cart functionality
- Responsive grid layout

### Shopping Cart
- View all cart items
- Quantity adjustment
- Item removal
- Total calculation
- Checkout functionality

## Deployment

The app can be deployed to various platforms:

### GitHub Pages
1. Build the project: `npm run build`
2. Follow GitHub Pages deployment instructions
3. Update the homepage field in package.json if needed

### Netlify/Vercel
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
