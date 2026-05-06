# EduLearn - E-Learning Platform

A comprehensive e-learning platform built with Next.js, featuring interactive courses, live chat, authentication, and YouTube video integration.

## Features

### 🔐 Authentication System
- User registration and login
- Secure session management with localStorage
- Profile management with avatars
- Demo credentials: `demo@edulearn.com` / `demo123`

### 📚 Course Management
- Browse and filter courses by category and level
- Detailed course pages with instructor information
- Progress tracking and completion status
- Mobile-responsive course cards

### 🎥 Video Learning
- Custom YouTube video player with in-app playback
- Full video controls (play/pause, volume, fullscreen)
- Lesson progression and automatic advancement
- Responsive video player design

### 💬 Live Chat
- Real-time messaging interface
- Online user counter and connection status
- Message history and timestamps
- Authentication-protected chat access

### 📱 Mobile-First Design
- Fully responsive across all devices
- Touch-friendly interface elements
- Optimized layouts for mobile screens
- Smooth transitions and animations

## Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Video Integration**: react-youtube
- **Authentication**: Custom auth context with localStorage
- **State Management**: React Context API

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Usage

### Authentication
1. Click the "Sign In" button in the header
2. Use demo credentials or register a new account
3. Your session will persist across browser refreshes

### Courses
1. Browse available courses on the `/courses` page
2. Filter by category and difficulty level
3. Click on any course to view details and start learning
4. Progress is automatically saved as you complete lessons

### Live Chat
1. Navigate to the `/chat` page
2. Authentication is required to participate
3. Send messages and interact with other users
4. View online user count and connection status

## Demo Content

The platform includes pre-configured demo courses with:
- Web Development (HTML, CSS, JavaScript, React)
- Data Science (Python)
- UI/UX Design
- Mobile Development

All videos use placeholder YouTube IDs for demonstration purposes.

## Mobile Responsiveness

The application is fully optimized for mobile devices:
- Responsive navigation with hamburger menu
- Touch-friendly buttons and controls
- Optimized video player for mobile screens
- Adaptive layouts for all screen sizes

## Project Structure

```
app/
├── components/          # Reusable components
│   ├── auth-context.tsx    # Authentication context
│   ├── auth-modal.tsx      # Login/Register modal
│   ├── chat-context.tsx    # Chat functionality
│   ├── chat-interface.tsx  # Chat UI component
│   ├── video-player.tsx    # YouTube video player
│   ├── course-card.tsx     # Course display card
│   └── header.tsx          # Navigation header
├── courses/            # Course-related pages
│   ├── page.tsx           # Course listing
│   └── [id]/page.tsx      # Individual course pages
├── chat/               # Live chat page
├── page.tsx            # Homepage
├── layout.tsx          # Root layout
└── not-found.tsx       # 404 error page
```

## License

This project is licensed under the MIT License.
