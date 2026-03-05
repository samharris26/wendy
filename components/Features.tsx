"use client";

import { Calendar, CheckSquare, ListChecks, Users, Bell } from "lucide-react";
import { useEffect, useState } from "react";

function CalendarCard() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const events = [
    { color: "bg-accent", label: "Team standup" },
    { color: "bg-blue-400", label: "School pickup" },
    { color: "bg-emerald-500", label: "Dinner w/ James" },
  ];
  const [activeDay, setActiveDay] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => setActiveDay((prev) => (prev + 1) % 7), 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-primaryText/10 bg-card p-6 shadow-surface-xs">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex gap-2">
          <span className="rounded-full border border-accent/30 px-2.5 py-1 font-mono text-[10px] text-accent">Sam</span>
          <span className="rounded-full border border-blue-400/30 px-2.5 py-1 font-mono text-[10px] text-blue-500">Jane</span>
          <span className="rounded-full border border-emerald-500/30 px-2.5 py-1 font-mono text-[10px] text-emerald-600">Kids</span>
        </div>
        <div className="flex justify-between">
          {days.map((day, i) => (
            <div key={i} className={`flex h-8 w-8 items-center justify-center rounded-full font-mono text-xs transition-all duration-300 ${i === activeDay ? "scale-110 bg-accent text-white" : "text-secondaryText"}`}>
              {day}
            </div>
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-2">
          {events.map((ev, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg border border-primaryText/5 bg-white px-3 py-2">
              <div className={`h-6 w-2 rounded-full ${ev.color}`} />
              <span className="text-xs text-secondaryText">{ev.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 min-h-[88px]">
        <div className="mb-2 flex items-center gap-2">
          <Calendar className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-semibold text-primaryText">Unified Calendar</h3>
        </div>
        <p className="text-sm leading-relaxed text-secondaryText">See work, school and family plans together.</p>
      </div>
    </article>
  );
}

function TasksCard() {
  const [tasks, setTasks] = useState([
    { id: 1, label: "Book dentist appointment", priority: "high" as const, done: false },
    { id: 2, label: "Buy birthday present", priority: "medium" as const, done: false },
    { id: 3, label: "Submit insurance claim", priority: "low" as const, done: true },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTasks((prev) => prev.map((t, i) => (i === 0 ? { ...t, done: !t.done } : t)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const priorityColor = { high: "bg-red-400", medium: "bg-amber-400", low: "bg-emerald-400" };

  return (
    <article className="flex h-full flex-col rounded-2xl border border-primaryText/10 bg-card p-6 shadow-surface-xs">
      <div className="flex flex-1 flex-col gap-3">
        <div className="mb-2 flex gap-2">
          <span className="rounded-full border border-primaryText/10 bg-primaryText/5 px-2.5 py-1 font-mono text-[10px] text-secondaryText">Inbox</span>
          <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 font-mono text-[10px] text-accent">Home</span>
        </div>
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center gap-3 rounded-lg border border-primaryText/5 bg-white px-3 py-2.5">
            <div className={`flex h-4 w-4 items-center justify-center rounded border-2 transition-all ${task.done ? "border-primaryText bg-primaryText" : "border-primaryText/20"}`}>
              {task.done && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
            </div>
            <span className={`flex-1 text-xs transition-all ${task.done ? "text-secondaryText/40 line-through" : "text-primaryText"}`}>{task.label}</span>
            <div className={`h-2 w-2 rounded-full ${priorityColor[task.priority]}`} />
          </div>
        ))}
      </div>
      <div className="mt-6 min-h-[88px]">
        <div className="mb-2 flex items-center gap-2">
          <CheckSquare className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-semibold text-primaryText">Smart Tasks</h3>
        </div>
        <p className="text-sm leading-relaxed text-secondaryText">Capture things quickly and stay on top of everyday life.</p>
      </div>
    </article>
  );
}

function ListsCard() {
  const items = [
    { label: "Oat milk", checked: true },
    { label: "Sourdough bread", checked: false },
    { label: "Avocados", checked: false },
  ];

  return (
    <article className="flex h-full flex-col rounded-2xl border border-primaryText/10 bg-card p-6 shadow-surface-xs">
      <div className="flex flex-1 flex-col gap-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 font-mono text-[10px] text-accent">Shopping List</span>
          <span className="font-mono text-[10px] text-secondaryText/60">Shared</span>
        </div>
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg border border-primaryText/5 bg-white px-3 py-2.5">
            <div className={`flex h-4 w-4 items-center justify-center rounded border-2 ${item.checked ? "border-accent bg-accent" : "border-primaryText/20"}`}>
              {item.checked && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
            </div>
            <span className={`text-xs ${item.checked ? "text-secondaryText/40 line-through" : "text-primaryText"}`}>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 min-h-[88px]">
        <div className="mb-2 flex items-center gap-2">
          <ListChecks className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-semibold text-primaryText">Lists & Collections</h3>
        </div>
        <p className="text-sm leading-relaxed text-secondaryText">Shopping lists, packing lists and shared planning.</p>
      </div>
    </article>
  );
}

function HouseholdCard() {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-primaryText/10 bg-card p-6 shadow-surface-xs">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-center gap-3 rounded-xl border border-primaryText/5 bg-white p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primaryText/10 text-sm font-bold text-primaryText">SH</div>
          <div className="flex-1">
            <p className="text-xs font-medium text-primaryText">Sam Harris</p>
            <p className="font-mono text-[10px] text-secondaryText/60">Owner</p>
          </div>
          <span className="h-2 w-2 rounded-full bg-success" />
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-primaryText/5 bg-white p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">JH</div>
          <div className="flex-1">
            <p className="text-xs font-medium text-primaryText">Jane Harris</p>
            <p className="font-mono text-[10px] text-secondaryText/60">Member</p>
          </div>
          <span className="h-2 w-2 rounded-full bg-success" />
        </div>
        <div className="mt-auto flex gap-2">
          <span className="rounded-full border border-primaryText/10 bg-primaryText/5 px-2.5 py-1 font-mono text-[10px] text-secondaryText">3 shared calendars</span>
          <span className="rounded-full border border-primaryText/10 bg-primaryText/5 px-2.5 py-1 font-mono text-[10px] text-secondaryText">2 shared lists</span>
        </div>
      </div>
      <div className="mt-6 min-h-[88px]">
        <div className="mb-2 flex items-center gap-2">
          <Users className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-semibold text-primaryText">Household</h3>
        </div>
        <p className="text-sm leading-relaxed text-secondaryText">Invite family members and assign tasks.</p>
      </div>
    </article>
  );
}

function WidgetsCard() {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-primaryText/10 bg-card p-6 shadow-surface-xs">
      <div className="flex flex-1 flex-col gap-4">
        <div className="rounded-2xl border border-primaryText/5 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-bold text-primaryText">Today</span>
            <span className="font-mono text-[10px] text-secondaryText/60">3 events</span>
          </div>
          <div className="flex flex-col gap-2">
            {[
              { color: "bg-accent", text: "9:00 Team standup" },
              { color: "bg-blue-400", text: "12:30 Lunch with Sarah" },
              { color: "bg-emerald-500", text: "15:00 School pickup" },
            ].map((e, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`h-1.5 w-1.5 rounded-full ${e.color}`} />
                <span className="text-[11px] text-secondaryText">{e.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-primaryText/5 bg-white p-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10">
            <Bell className="h-4 w-4 text-accent" />
          </div>
          <div>
            <p className="text-[11px] font-medium text-primaryText">Overdue: Submit insurance claim</p>
            <p className="font-mono text-[9px] text-secondaryText/50">Nudge · 2 days overdue</p>
          </div>
        </div>
      </div>
      <div className="mt-6 min-h-[88px]">
        <div className="mb-2 flex items-center gap-2">
          <Bell className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-semibold text-primaryText">Widgets & Alerts</h3>
        </div>
        <p className="text-sm leading-relaxed text-secondaryText">See today at a glance and get reminders before things slip.</p>
      </div>
    </article>
  );
}

export function Features() {
  return (
    <section id="features" className="px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">Built for Families</p>
          <h2 className="text-3xl font-semibold tracking-tight text-primaryText sm:text-4xl lg:text-5xl">
            Everything your household needs. In one place.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <CalendarCard />
          <TasksCard />
          <ListsCard />
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <HouseholdCard />
          <WidgetsCard />
        </div>
      </div>
    </section>
  );
}
