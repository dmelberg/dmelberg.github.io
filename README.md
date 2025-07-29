# Transfers UI

A modern, clean web application for managing financial transfers with a design system-compliant interface.

## 🎨 Features

- **Modern Design**: Clean, professional interface following design system principles
- **Responsive Layout**: Flexible sidebar navigation with main content area
- **Interactive Elements**: Hover effects, toggle switches, and smooth animations
- **Design System Colors**: Consistent color palette using CSS custom properties
- **Font Awesome Icons**: Professional iconography throughout the interface
- **Typography**: Inter font family for excellent readability

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd transfers-ui
   ```

2. Open the project:
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. Navigate to `http://localhost:8000` in your browser

## 📁 Project Structure

```
transfers-ui/
├── index.html          # Main HTML file
├── style.css           # CSS styles with design system
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## 🎯 Design System

This project follows a comprehensive design system with:

### Color Palette
- **Grey Scale**: 0-1000 for neutral colors
- **Blue**: Primary brand colors
- **Mint**: Success states and positive values
- **Red**: Danger states and negative values
- **Orange**: Warning states
- **Yellow**: Caution states
- **Purple**: Ongoing states

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Fallback**: System fonts for better performance

### Icons
- **Font Awesome 6.4.0**: Professional icon library
- **Consistent sizing**: 14px base size with proper alignment

## 🔧 Customization

### Colors
All colors are defined as CSS custom properties in `style.css`. To modify the color scheme:

```css
:root {
    --grey-1000: #000000;  /* Primary text */
    --blue-600: #2563eb;   /* Brand primary */
    --mint-600: #0d9488;   /* Success states */
    /* ... more colors */
}
```

### Layout
The layout uses CSS Flexbox for responsive design:
- **Sidebar**: Fixed 280px width
- **Main Content**: Flexible width with proper padding
- **Header**: Removed for cleaner interface

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Inter Font](https://rsms.me/inter/) by Rasmus Andersson
- [Font Awesome](https://fontawesome.com/) for icons
- Design system inspiration from modern UI frameworks 