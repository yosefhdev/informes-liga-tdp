"use client"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"


export function NavLink({ label, route, className }) {
  const location = useLocation()
  const isActive = location.pathname === route

  return (
    <Link
      to={route}
      className={cn(
        "px-3 py-2 rounded-md text-sm font-medium transition-colors",
        isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted",
        "md:inline-block block",
        className,
      )}
    >
      {label}
    </Link>
  )
}

