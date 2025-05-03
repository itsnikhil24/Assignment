// components/Header.tsx

"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from ".//ui/input";
import { MapPin } from "lucide-react";
import "../styles/globals.css";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              <div className="flex items-center space-x-2 apollo-logo">
                <img
                  src="https://images.apollo247.in/images/icons/apollo247.svg"
                  alt="Apollo Logo"
                  className="h-8 w-auto"
                />
                
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-2 text-sm border rounded-md px-3 py-2 cursor-pointer">
              <MapPin className="h-4 w-4" />
              <span>Select Location</span>
              <span className="font-medium">Select Address</span>
              <span className="text-gray-400">▼</span>
            </div>
          </div>

          <div className="flex-1 mx-6">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search Doctors, Specialities, Conditions etc."
                className="w-full pl-10 py-2 border border-gray-300 rounded-md"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div>
          <Button
  variant="outline"
  className="flex items-center gap-2 text-[#165d59] border-[#165d59] hover:bg-[#165d59]/10"
>
  <svg
    className="h-5 w-5 text-[#165d59]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
  Login
</Button>

          </div>
        </div>
      </div>

      <nav className="bg-white border-t">
        <div className="container mx-auto">
          <div className="flex items-center justify-between overflow-x-auto scrollbar-hide">
            <NavItem href="/doctors" label="Buy Medicines" />
            <NavItem href="/doctors" label="Find Doctors" active />
            <NavItem href="/doctors" label="Lab Tests" />
            <NavItem href="/doctors" label="Circle Membership" />
            <NavItem href="/doctors" label="Health Records" />
            <NavItem href="/doctors" label="Diabetes Reversal" />
            <NavItem href="/doctors" label="Buy Insurance" badge="New" />
          </div>
        </div>
      </nav>
    </header>
  );
};

interface NavItemProps {
  href: string;
  label: string;
  active?: boolean;
  badge?: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, active, badge }) => {
  return (
    <Link
      href={href}
      className={`flex items-center whitespace-nowrap px-4 py-3 text-sm font-medium ${
        active
          ? "text-primary border-b-2 border-primary"
          : "text-gray-600 hover:text-primary"
      }`}
    >
      {label}
      {badge && (
        <span className="ml-1 bg-green-100 text-green-800 text-xs font-semibold px-1 py-0.5 rounded">
          {badge}
        </span>
      )}
    </Link>
  );
};

export default Header;
