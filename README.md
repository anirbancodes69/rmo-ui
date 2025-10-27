# RMO - Resource Management and Operations

A modern, intuitive Resource Management and Operations web application similar to Monday.com, tailored specifically for small and medium-sized businesses (SMBs). Built with React, TailwindCSS, and modern web technologies.

## 🚀 Features

### Core Functionality
- **Dashboard**: Visual overview of tasks, projects, team utilization, and KPIs
- **Project Management**: Create and manage projects with flexible data structure
- **Task Management**: Kanban and List views with drag-and-drop functionality
- **Team Management**: User roles, permissions, and collaboration features
- **Real-time Updates**: Activity logs, comments, and notifications

### Authentication & Security
- JWT-based authentication
- Role-based access control (Admin, Manager, Member)
- Secure password policies
- Session management

### User Experience
- Responsive design (desktop-first, mobile-friendly)
- Modern, clean UI similar to Monday.com
- Drag-and-drop task management
- Real-time notifications
- Customizable dashboard widgets

## 🛠️ Tech Stack

- **Frontend**: React 19, TailwindCSS 4
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM
- **Authentication**: JWT tokens
- **Drag & Drop**: @dnd-kit
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Build Tool**: Vite
- **Linting**: ESLint

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rmo/ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔐 Demo Credentials

For testing purposes, use these demo credentials:

- **Admin**: `admin@rmo.com` / `password`
- **Manager**: `manager@rmo.com` / `password`
- **Member**: `member@rmo.com` / `password`

## 📱 Usage

### Getting Started

1. **Login** with your credentials or create a new account
2. **Dashboard** - View project overview, KPIs, and recent activity
3. **Projects** - Create and manage projects with team assignments
4. **Tasks** - Switch between Kanban and List views for task management
5. **Team** - Manage team members and their roles
6. **Settings** - Configure workspace settings (Manager/Admin only)

### Key Features

#### Dashboard
- Customizable widgets showing project status, task progress, and team activity
- Real-time KPIs and metrics
- Recent activity feed
- Quick action buttons

#### Project Management
- Create projects with descriptions, due dates, and team assignments
- Track progress with visual progress bars
- Assign team members and set priorities
- Switch between Kanban and List views

#### Task Management
- Drag-and-drop functionality for task status updates
- Priority levels (High, Medium, Low)
- Due date tracking
- Assignee management
- Comments and file attachments
- Activity logs

#### Team Management
- Role-based permissions (Admin, Manager, Member)
- Team member profiles with contact information
- Online status indicators
- Project and task assignments

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.jsx      # Main application layout
│   ├── ProtectedRoute.jsx # Route protection
│   ├── DragDropKanban.jsx # Drag & drop task board
│   └── TaskDetailModal.jsx # Task details modal
├── contexts/           # React contexts
│   ├── AuthContext.jsx # Authentication state
│   └── DataContext.jsx # Data management with React Query
├── pages/             # Page components
│   ├── LoginPage.jsx  # Login form
│   ├── RegisterPage.jsx # Registration form
│   ├── DashboardPage.jsx # Main dashboard
│   ├── ProjectsPage.jsx # Projects management
│   ├── TeamPage.jsx   # Team management
│   └── SettingsPage.jsx # Settings (Manager/Admin)
├── App.jsx           # Main application component
├── main.jsx         # Application entry point
└── index.css        # Global styles and TailwindCSS
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=RMO
VITE_APP_VERSION=1.0.0
```

### Customization

- **Colors**: Modify CSS variables in `src/index.css`
- **API Endpoints**: Update mock API functions in `src/contexts/DataContext.jsx`
- **Authentication**: Configure JWT settings in `src/contexts/AuthContext.jsx`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔮 Future Enhancements

- [ ] Real-time collaboration with WebSockets
- [ ] Advanced reporting and analytics
- [ ] Mobile app (React Native)
- [ ] Third-party integrations (Slack, GitHub, etc.)
- [ ] Advanced project templates
- [ ] Time tracking and billing
- [ ] Advanced notification system
- [ ] Dark mode support
- [ ] Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🙏 Acknowledgments

- Monday.com for UI/UX inspiration
- React and TailwindCSS communities
- All contributors and testers

---

**RMO** - Empowering SMBs with efficient project and resource management.