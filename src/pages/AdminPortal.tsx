import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Crown,
  LayoutDashboard,
  BedDouble,
  Users,
  CalendarCheck,
  CreditCard,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  Menu,
  Bell,
  Search,
  TrendingUp,
  TrendingDown,
  DollarSign,
  UserCheck,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";



const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: BedDouble, label: "Rooms" },
  { icon: CalendarCheck, label: "Bookings" },
  { icon: Users, label: "Guests" },
  { icon: CreditCard, label: "Payments" },
  { icon: BarChart3, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

const stats = [
  {
    label: "Total Revenue",
    value: "$124,580",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    label: "Occupancy Rate",
    value: "87%",
    change: "+5.2%",
    trend: "up",
    icon: BedDouble,
  },
  {
    label: "Total Bookings",
    value: "1,247",
    change: "+8.1%",
    trend: "up",
    icon: CalendarCheck,
  },
  {
    label: "Check-ins Today",
    value: "24",
    change: "-2.3%",
    trend: "down",
    icon: UserCheck,
  },
];

const recentBookings = [
  { id: "BK001", guest: "John Smith", room: "Presidential Suite", checkIn: "Jan 28", checkOut: "Feb 2", status: "Confirmed" },
  { id: "BK002", guest: "Emma Wilson", room: "Executive Suite", checkIn: "Jan 27", checkOut: "Jan 30", status: "Checked In" },
  { id: "BK003", guest: "Michael Brown", room: "Deluxe Room", checkIn: "Jan 29", checkOut: "Feb 1", status: "Pending" },
  { id: "BK004", guest: "Sarah Davis", room: "Executive Suite", checkIn: "Jan 28", checkOut: "Jan 31", status: "Confirmed" },
];

export default function AdminPortal() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarCollapsed ? 80 : 280 }}
        className="bg-sidebar text-sidebar-foreground flex flex-col fixed h-screen z-20"
      >
        {/* Logo */}
        <div className="p-6 flex items-center gap-3 border-b border-sidebar-border">
          <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
            <Crown className="w-5 h-5 text-primary" />
          </div>
          {!sidebarCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h1 className="font-serif text-lg font-semibold">Grandeur</h1>
              <p className="text-xs text-sidebar-foreground/60">Admin Portal</p>
            </motion.div>
          )}
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                item.active
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
              )}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {!sidebarCollapsed && (
                <span className="font-medium">{item.label}</span>
              )}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-4 border-t border-sidebar-border space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors">
            <LogOut className="w-5 h-5 shrink-0" />
            {!sidebarCollapsed && <span className="font-medium">Logout</span>}
          </button>
        </div>

        {/* Collapse Button */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="absolute -right-3 top-20 w-6 h-6 bg-card rounded-full shadow-md flex items-center justify-center border border-border"
        >
          <ChevronLeft
            className={cn("w-4 h-4 text-muted-foreground transition-transform", sidebarCollapsed && "rotate-180")}
          />
        </button>
      </motion.aside>

      {/* Main Content */}
      <div className={cn("flex-1 transition-all", sidebarCollapsed ? "ml-20" : "ml-[280px]")}>
        {/* Top Bar */}
        <header className="sticky top-0 bg-background/95 backdrop-blur-md border-b border-border z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button className="lg:hidden p-2 rounded-lg hover:bg-muted">
                <Menu className="w-5 h-5" />
              </button>
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search bookings, guests..."
                  className="pl-10 pr-4 py-2 w-64 bg-muted rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-lg hover:bg-muted">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                  <span className="text-primary font-semibold">A</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-muted-foreground">admin@grandeur.com</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="mb-8">
            <h1 className="font-serif text-3xl font-semibold text-foreground mb-2">
              Dashboard Overview
            </h1>
            <p className="text-muted-foreground">
              Welcome back! Here's what's happening at Grandeur Hotels today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-sm border border-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium",
                      stat.trend === "up" ? "text-green-600" : "text-red-500"
                    )}
                  >
                    {stat.trend === "up" ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    {stat.change}
                  </span>
                </div>
                <p className="font-serif text-2xl font-semibold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Recent Bookings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-xl shadow-sm border border-border"
          >
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="font-serif text-xl font-semibold">Recent Bookings</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Booking ID</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Guest</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Room</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Check In</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Check Out</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                      <td className="px-6 py-4 text-sm font-medium">{booking.id}</td>
                      <td className="px-6 py-4 text-sm">{booking.guest}</td>
                      <td className="px-6 py-4 text-sm">{booking.room}</td>
                      <td className="px-6 py-4 text-sm">{booking.checkIn}</td>
                      <td className="px-6 py-4 text-sm">{booking.checkOut}</td>
                      <td className="px-6 py-4">
                        <span
                          className={cn(
                            "px-3 py-1 rounded-full text-xs font-medium",
                            booking.status === "Confirmed" && "bg-green-100 text-green-700",
                            booking.status === "Checked In" && "bg-blue-100 text-blue-700",
                            booking.status === "Pending" && "bg-amber-100 text-amber-700"
                          )}
                        >
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Back Link */}
          <div className="mt-8">
            <Link to="/">
              <Button variant="outline">← Back to Website</Button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
