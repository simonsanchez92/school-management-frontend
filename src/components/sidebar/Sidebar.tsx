import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-menu-container">
        <ul className="sidebar-menu">
          <li>Dashboard</li>
          <li>Teachers</li>
          <li>Students</li>
          <li>Departments</li>
          <li>Parents</li>
          <li>Exams list</li>
          <li>Library</li>
          <li>Events</li>
          <li>Subjects</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
