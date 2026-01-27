import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Crown,
  Search,
  CalendarCheck,
  UserPlus,
  BedDouble,
  Clock,
  Phone,
  ChevronRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";

const todayArrivals = [
  { id: "BK001", guest: "John Smith", room: "201 - Presidential Suite", time: "14:00", phone: "+1 555-0101", status: "arriving" },
  { id: "BK002", guest: "Emma Wilson", room: "305 - Executive Suite", time: "15:30", phone: "+1 555-0102", status: "arriving" },
  { id: "BK003", guest: "Michael Brown", room: "412 - Deluxe Room", time: "16:00", phone: "+1 555-0103", status: "checked-in" },
];

const todayDepartures = [
  { id: "BK004", guest: "Sarah Davis", room: "203 - Executive Suite", time: "11:00", status: "checked-out" },
  { id: "BK005", guest: "James Wilson", room: "108 - Deluxe Room", time: "12:00", status: "pending" },
];

const roomStatus = [
  { floor: 1, rooms: [
    { number: "101", status: "occupied" },
    { number: "102", status: "available" },
    { number: "103", status: "available" },
    { number: "104", status: "cleaning" },
    { number: "105", status: "occupied" },
  ]},
  { floor: 2, rooms: [
    { number: "201", status: "reserved" },
    { number: "202", status: "available" },
    { number: "203", status: "checkout" },
    { number: "204", status: "occupied" },
    { number: "205", status: "available" },
  ]},
  { floor: 3, rooms: [
    { number: "301", status: "occupied" },
    { number: "302", status: "occupied" },
    { number: "303", status: "available" },
    { number: "304", status: "maintenance" },
    { number: "305", status: "reserved" },
  ]},
];

const statusColors: Record<string, string> = {
  available: "bg-green-500",
  occupied: "bg-blue-500",
  reserved: "bg-amber-500",
  cleaning: "bg-purple-500",
  checkout: "bg-orange-500",
  maintenance: "bg-red-500",
};

export default function ReceptionPortal() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
              <Crown className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-serif text-xl font-semibold">Grandeur</h1>
              <p className="text-xs text-primary-foreground/70">Reception Portal</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-primary-foreground/50" />
              <input
                type="text"
                placeholder="Search guest or booking..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 bg-primary-foreground/10 rounded-lg text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <Link to="/">
              <Button variant="hero-outline" size="sm">
                Back to Website
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Quick Actions */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-4 flex flex-wrap gap-3">
          <Button variant="gold" className="gap-2">
            <CalendarCheck className="w-4 h-4" />
            New Booking
          </Button>
          <Button variant="outline" className="gap-2">
            <UserPlus className="w-4 h-4" />
            Walk-in Check-in
          </Button>
          <Button variant="outline" className="gap-2">
            <BedDouble className="w-4 h-4" />
            Room Assignment
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Arrivals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-xl shadow-sm border border-border"
          >
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                  <UserPlus className="w-4 h-4 text-green-600" />
                </div>
                <h2 className="font-serif text-lg font-semibold">Today's Arrivals</h2>
              </div>
              <span className="text-sm text-muted-foreground">{todayArrivals.length} guests</span>
            </div>
            <div className="divide-y divide-border">
              {todayArrivals.map((arrival) => (
                <div key={arrival.id} className="p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{arrival.guest}</h3>
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium",
                        arrival.status === "checked-in" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                      )}
                    >
                      {arrival.status === "checked-in" ? "Checked In" : "Arriving"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{arrival.room}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {arrival.time}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      {arrival.phone}
                    </span>
                  </div>
                  {arrival.status === "arriving" && (
                    <Button variant="gold" size="sm" className="w-full mt-3">
                      Check In
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Today's Departures */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl shadow-sm border border-border"
          >
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                  <CalendarCheck className="w-4 h-4 text-orange-600" />
                </div>
                <h2 className="font-serif text-lg font-semibold">Today's Departures</h2>
              </div>
              <span className="text-sm text-muted-foreground">{todayDepartures.length} guests</span>
            </div>
            <div className="divide-y divide-border">
              {todayDepartures.map((departure) => (
                <div key={departure.id} className="p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{departure.guest}</h3>
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium",
                        departure.status === "checked-out" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                      )}
                    >
                      {departure.status === "checked-out" ? "Checked Out" : "Pending"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{departure.room}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    Expected: {departure.time}
                  </div>
                  {departure.status === "pending" && (
                    <Button variant="outline" size="sm" className="w-full mt-3">
                      Process Check Out
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Room Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-xl shadow-sm border border-border"
          >
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                  <BedDouble className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="font-serif text-lg font-semibold">Room Status</h2>
              </div>
              <button className="text-accent text-sm font-medium flex items-center gap-1 hover:underline">
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4">
              {/* Legend */}
              <div className="flex flex-wrap gap-3 mb-4 text-xs">
                {Object.entries(statusColors).map(([status, color]) => (
                  <div key={status} className="flex items-center gap-1">
                    <span className={cn("w-3 h-3 rounded-full", color)} />
                    <span className="capitalize text-muted-foreground">{status}</span>
                  </div>
                ))}
              </div>

              {/* Room Grid */}
              {roomStatus.map((floor) => (
                <div key={floor.floor} className="mb-4 last:mb-0">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Floor {floor.floor}</p>
                  <div className="flex gap-2">
                    {floor.rooms.map((room) => (
                      <button
                        key={room.number}
                        className={cn(
                          "w-12 h-12 rounded-lg flex items-center justify-center text-sm font-medium text-primary-foreground transition-transform hover:scale-105",
                          statusColors[room.status]
                        )}
                      >
                        {room.number}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
