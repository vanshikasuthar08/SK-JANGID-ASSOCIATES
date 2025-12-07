import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { LogOut, Users, MessageSquare, Briefcase, Plus, Phone, Mail, Calendar, Trash2, Edit2, X, Loader2, Shield, User as UserIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// --- Types ---
interface Lead {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  submittedAt: string;
}

interface Project {
  _id: string;
  title: string;
  category: string;
  image: string;
  location: string;
  year: string;
}

interface UserData {
  _id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

export function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('leads');
  
  // Data State
  const [leads, setLeads] = useState<Lead[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [employees, setEmployees] = useState<UserData[]>([]);
  
  // Project Form State
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [projectForm, setProjectForm] = useState({
    title: '',
    category: 'Residential',
    image: '',
    location: '',
    year: new Date().getFullYear().toString(),
    description: ''
  });

  // Employee Form State
  const [employeeForm, setEmployeeForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'employee'
  });

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const fetchData = async () => {
    try {
      // 1. Leads
      const leadsRes = await fetch('http://localhost:5000/api/contact');
      const leadsData = await leadsRes.json();
      if (leadsData.success) setLeads(leadsData.data);

      // 2. Projects
      const projectsRes = await fetch('http://localhost:5000/api/projects');
      const projectsData = await projectsRes.json();
      if (projectsData.success) setProjects(projectsData.data);

      // 3. Employees
      const empRes = await fetch('http://localhost:5000/api/auth/users');
      const empData = await empRes.json();
      if (empData.success) setEmployees(empData.data);

    } catch (error) {
      console.error("Error loading dashboard data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // --- HANDLERS: IMAGES ---
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setProjectForm(prev => ({ ...prev, image: data.imageUrl }));
        toast.success("Image uploaded successfully!");
      } else {
        toast.error("Upload failed");
      }
    } catch (error) {
      toast.error("Error uploading image");
    } finally {
      setIsUploading(false);
    }
  };

  // --- HANDLERS: PROJECTS ---
  const handleEditClick = (project: Project) => {
    setIsEditing(project._id);
    setProjectForm({
      title: project.title,
      category: project.category,
      image: project.image,
      location: project.location,
      year: project.year,
      description: '' 
    });
    const formElement = document.getElementById('project-form');
    if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setIsEditing(null);
    setProjectForm({ title: '', category: 'Residential', image: '', location: '', year: '', description: '' });
  };

  const handleSubmitProject = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = isEditing 
        ? `http://localhost:5000/api/projects/${isEditing}` 
        : 'http://localhost:5000/api/projects';
      
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectForm)
      });
      const data = await res.json();
      
      if (data.success) {
        toast.success(isEditing ? "Project updated!" : "Project added successfully!");
        if (isEditing) {
          setProjects(projects.map(p => p._id === isEditing ? data.data : p));
        } else {
          setProjects([data.data, ...projects]);
        }
        handleCancelEdit();
      } else {
        toast.error("Error: " + data.message);
      }
    } catch (error) {
      toast.error("Operation failed");
    }
  };

  const handleDeleteProject = async (id: string) => {
    if(!confirm("Are you sure you want to delete this project?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/projects/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setProjects(projects.filter(p => p._id !== id));
        toast.success("Project deleted");
      }
    } catch (error) {
      toast.error("Failed to delete");
    }
  };

  // --- HANDLERS: EMPLOYEES ---
  const handleAddEmployee = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // We use the existing Register route to create a new user
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employeeForm)
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Employee account created!");
        // Refresh employee list
        const empRes = await fetch('http://localhost:5000/api/auth/users');
        const empData = await empRes.json();
        if (empData.success) setEmployees(empData.data);
        
        // Reset form
        setEmployeeForm({ name: '', email: '', password: '', role: 'employee' });
      } else {
        toast.error(data.message || "Failed to create account");
      }
    } catch (error) {
      toast.error("Error creating employee");
    }
  };

  const handleDeleteEmployee = async (id: string) => {
    if(!confirm("Are you sure? This user will lose access immediately.")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/auth/users/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setEmployees(employees.filter(e => e._id !== id));
        toast.success("User removed");
      }
    } catch (error) {
      toast.error("Failed to remove user");
    }
  };

  return (
    <div className="min-h-screen bg-secondary/30 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" /> 
              {user?.name} ({user?.role})
            </p>
          </div>
          <div className="flex gap-3">
            <Button onClick={() => navigate('/')} variant="outline">View Website</Button>
            <Button onClick={handleLogout} variant="destructive">
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{leads.length}</div>
              <p className="text-xs text-muted-foreground">potential clients</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{projects.length}</div>
              <p className="text-xs text-muted-foreground">Portfolio Items</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Staff Members</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{employees.length}</div>
              <p className="text-xs text-muted-foreground">Registered Employees</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="leads" className="space-y-4" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="leads">Contact Leads</TabsTrigger>
            <TabsTrigger value="projects">Portfolio Projects</TabsTrigger>
            <TabsTrigger value="employees">Employee Management</TabsTrigger>
          </TabsList>

          {/* LEADS TAB */}
          <TabsContent value="leads" className="space-y-4">
            <Card>
              <CardHeader><CardTitle>Recent Inquiries</CardTitle></CardHeader>
              <CardContent>
                {leads.length === 0 ? (
                  <p className="text-center py-10 text-muted-foreground">No inquiries yet.</p>
                ) : (
                  <div className="space-y-4">
                    {leads.map((lead) => (
                      <div key={lead._id} className="flex flex-col md:flex-row justify-between p-4 border rounded-lg bg-background hover:bg-muted/30 transition-colors">
                        <div className="space-y-1">
                          <div className="font-semibold flex items-center gap-2">
                            {lead.firstName} {lead.lastName}
                            <span className="text-xs font-normal px-2 py-0.5 bg-primary/10 text-primary rounded-full">{lead.projectType}</span>
                          </div>
                          <div className="text-sm text-muted-foreground flex flex-col sm:flex-row gap-2 sm:gap-4">
                            <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {lead.email}</span>
                            {lead.phone && <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {lead.phone}</span>}
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(lead.submittedAt).toLocaleDateString()}</span>
                          </div>
                          <p className="text-sm mt-2 bg-muted/50 p-3 rounded">{lead.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* PROJECTS TAB */}
          <TabsContent value="projects" className="space-y-4">
            <div id="project-form">
              <Card className={isEditing ? "border-primary shadow-md" : ""}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    {isEditing ? <><Edit2 className="w-5 h-5 text-primary"/> Edit Project</> : <><Plus className="w-5 h-5"/> Add New Project</>}
                  </CardTitle>
                  {isEditing && (
                    <Button variant="ghost" size="sm" onClick={handleCancelEdit}>
                      <X className="w-4 h-4 mr-2" /> Cancel Edit
                    </Button>
                  )}
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitProject} className="grid gap-4 md:grid-cols-2">
                    <Input placeholder="Project Title" value={projectForm.title} onChange={e => setProjectForm({...projectForm, title: e.target.value})} required />
                    <Input placeholder="Location" value={projectForm.location} onChange={e => setProjectForm({...projectForm, location: e.target.value})} />
                    
                    <select 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={projectForm.category}
                      onChange={e => setProjectForm({...projectForm, category: e.target.value})}
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Interior">Interior</option>
                    </select>

                    <Input placeholder="Year" value={projectForm.year} onChange={e => setProjectForm({...projectForm, year: e.target.value})} />
                    
                    {/* Image Upload */}
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-4">
                        <Input 
                          type="file" 
                          accept="image/*"
                          onChange={handleImageUpload}
                          disabled={isUploading}
                          className="flex-1 cursor-pointer"
                        />
                        {isUploading && <Loader2 className="w-6 h-6 animate-spin text-primary" />}
                      </div>
                      <input type="hidden" value={projectForm.image} />
                      {projectForm.image && (
                        <div className="mt-2 relative w-32 h-20 rounded overflow-hidden border">
                          <img src={projectForm.image} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                    
                    <Button type="submit" className="md:col-span-2" disabled={isUploading || !projectForm.image}>
                      {isEditing ? "Update Project" : "Add Project to Portfolio"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {projects.map((project) => (
                <Card key={project._id} className="overflow-hidden group relative">
                  <div className="h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Button variant="secondary" size="icon" className="h-8 w-8 bg-white" onClick={() => handleEditClick(project)}>
                      <Edit2 className="w-4 h-4 text-blue-600" />
                    </Button>
                    <Button variant="destructive" size="icon" className="h-8 w-8" onClick={() => handleDeleteProject(project._id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.category} • {project.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* EMPLOYEES TAB */}
          <TabsContent value="employees" className="space-y-4">
            <Card>
              <CardHeader><CardTitle>Add New Employee</CardTitle></CardHeader>
              <CardContent>
                <form onSubmit={handleAddEmployee} className="flex flex-col md:flex-row gap-4 items-end">
                  <div className="w-full">
                    <label className="text-sm font-medium">Name</label>
                    <Input 
                      placeholder="Employee Name" 
                      value={employeeForm.name} 
                      onChange={e => setEmployeeForm({...employeeForm, name: e.target.value})} 
                      required 
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      type="email"
                      placeholder="employee@skjangid.com" 
                      value={employeeForm.email} 
                      onChange={e => setEmployeeForm({...employeeForm, email: e.target.value})} 
                      required 
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-sm font-medium">Temporary Password</label>
                    <Input 
                      type="text" // Visible so you can copy-paste it to them
                      placeholder="Password123" 
                      value={employeeForm.password} 
                      onChange={e => setEmployeeForm({...employeeForm, password: e.target.value})} 
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full md:w-auto">Create Account</Button>
                </form>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {employees.map((emp) => (
                <Card key={emp._id} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-secondary rounded-full">
                      <UserIcon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{emp.name}</h4>
                      <p className="text-sm text-muted-foreground">{emp.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium capitalize">
                      {emp.role}
                    </span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-destructive hover:bg-destructive/10"
                      onClick={() => handleDeleteEmployee(emp._id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
              {employees.length === 0 && (
                <p className="text-center text-muted-foreground py-4">No employees added yet.</p>
              )}
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
}
