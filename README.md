# RMO - Resource Management and Operations (MVP)

A streamlined Resource Management and Operations web application similar to Monday.com, designed specifically for small and medium-sized businesses (SMBs). This MVP focuses on core functionality with clarity and usability over features.

## 🎯 MVP Vision

Help SMBs organize, assign, and track resources or tasks in a simple, collaborative way. Focus on clarity + usability > features.

## 🚀 MVP Features (8 Core Features)

### 1️⃣ Authentication & Workspace
- Email + Password Login
- Basic role system: Admin, Member
- Organization/Workspace setup for multiple companies

### 2️⃣ Dashboard (Overview Page)
- Summary of projects, tasks, and resources
- "What's going on today?" view
- Key metrics and recent activity

### 3️⃣ Projects / Boards
- Create and manage projects or boards
- Each board represents a project, client, or department
- Simple Kanban and List views

### 4️⃣ Tasks / Items
- Add, edit, and delete tasks inside projects
- Core fields: title, assignee, status (To Do / In Progress / Done), due date, priority
- Task detail modal with full information

### 5️⃣ Simple Collaboration
- Comments on tasks (mini chat per task)
- Basic task discussions and updates

### 6️⃣ Resource Assignment
- Each task can be assigned to a person
- Simple dropdown for "Assigned To"
- Team member management

### 7️⃣ Notifications (Basic)
- In-app notifications (e.g., "Task assigned to you")
- Notification center with unread counts
- Real-time activity updates

### 8️⃣ Activity Log
- Track simple changes: "Anirban updated Task X status to Done"
- Recent activity feed on dashboard
- User action history

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

## 🔐 MVP Demo Credentials

For testing the MVP, use these simplified credentials:

- **Admin**: `admin@rmo.com` / `password`
- **Member**: `member@rmo.com` / `password`

## 📱 Usage

### Getting Started

1. **Login** with MVP demo credentials or create a new account with workspace
2. **Dashboard** - View essential overview, stats, and recent activity
3. **Projects** - Create and manage simple project boards
4. **Tasks** - Manage tasks with core fields and comments
5. **Team** - View team members and basic information
6. **Notifications** - Check in-app notifications and activity

### Key Features

#### Dashboard
- Essential stats: Total Projects, Active Tasks, Team Members, Overdue Tasks
- Recent projects with progress indicators
- Upcoming tasks with priorities
- Recent activity log

#### Project Management
- Simple project boards with basic information
- Progress tracking with visual bars
- Team member assignments
- Kanban and List view options

#### Task Management
- Core task fields: Title, Description, Status, Priority, Due Date, Assignee
- Task detail modal with editing capabilities
- Comments system for collaboration
- Status updates and progress tracking

#### Team Management
- Basic team member profiles
- Role-based access (Admin/Member)
- Simple assignment system
- Contact information display

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

## 🔮 MVP Roadmap

### Phase 2 (Post-MVP)
- [ ] Real-time collaboration with WebSockets
- [ ] Advanced reporting and analytics
- [ ] Mobile app (React Native)
- [ ] Third-party integrations (Slack, GitHub, etc.)
- [ ] Advanced project templates
- [ ] Time tracking and billing
- [ ] Email notifications
- [ ] Dark mode support
- [ ] Multi-language support

### Current MVP Focus
- ✅ Core task and project management
- ✅ Simple collaboration features
- ✅ Basic notifications and activity tracking
- ✅ Clean, intuitive interface
- ✅ Role-based access control

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