import {
    BellIcon,
    MenuIcon,
    MicIcon,
    PlusIcon,
    SearchIcon,
    StarIcon,
  } from "lucide-react";
import React from "react";
import { Avatar } from "../../ui/avatar";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { HeaderMenuSection } from "./sections/HeaderMenuSection/HeaderMenuSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationSidebarSection } from "./sections/NavigationSidebarSection/NavigationSidebarSection";
import { VideoGridSection } from "./sections/VideoGridSection/VideoGridSection";
import { VideoGridWrapperSection } from "./sections/VideoGridWrapperSection/VideoGridWrapperSection";
import { VideoThumbnailRowSection } from "./sections/VideoThumbnailRowSection/VideoThumbnailRowSection";
import { VideoThumbnailWrapperSection } from "./sections/VideoThumbnailWrapperSection/VideoThumbnailWrapperSection";
  
export const Home = () => {
  // Navigation items data
  const navigationItems = [
    {
      icon: "https://c.animaapp.com/m8hmh8dscNuAQt/img/history.svg",
      label: "History",
    },
    {
      icon: "https://c.animaapp.com/m8hmh8dscNuAQt/img/yourvideos.svg",
      label: "Your Videos",
    },
    {
      icon: "https://c.animaapp.com/m8hmh8dscNuAQt/img/liked.svg",
      label: "Liked Videos",
    },
  ];

  return (
    <div className="bg-[#000000] flex flex-row justify-center w-full">
      <div className="bg-black overflow-hidden w-full relative">
        {/* Header MenuIcon */}
        <header className="w-full h-14 bg-background-color flex items-center justify-between px-4">
          {/* Left section - Logo */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="p-2">
              <MenuIcon className="w-6 h-6" />
            </Button>
            <div className="pl-4 pr-3.5 py-[18px]">
              <img
                className="w-[90px] h-5"
                alt="Youtube logo"
                src="https://c.animaapp.com/m8hmh8dscNuAQt/img/youtube-logo.svg"
              />
            </div>
          </div>

          {/* Middle section - SearchIcon */}
          <div className="flex items-center">
            <div className="flex">
              <div className="relative flex items-center">
                <Input
                  className="w-[310px] h-10 bg-[#121212] rounded-[2px_0px_0px_2px] border border-border-color px-2 text-gray-color"
                  placeholder="Search"
                />
              </div>
              <Button className="w-16 h-10 bg-border-color rounded-[0px_2px_2px_0px] border border-solid border-[#303030] flex justify-center items-center">
                <SearchIcon className="w-6 h-6" />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-4 bg-black rounded-[40px]"
            >
              <MicIcon className="w-6 h-6" />
            </Button>
          </div>

          {/* Right section - User controls */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="p-2">
              <PlusIcon className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="p-2">
              <StarIcon className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="p-2">
              <BellIcon className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="p-0 ml-2">
              <Avatar className="w-8 h-8">
                <img
                  src="https://c.animaapp.com/m8hmh8dscNuAQt/img/user-avatar.png"
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              </Avatar>
            </Button>
          </div>
        </header>

        {/* Main content layout */}
        <div className="flex relative">
          {/* Sidebar navigation */}
          <aside className="fixed left-0 h-screen w-60 bg-[#0F0F0F] z-10 hidden md:block pt-2">
            {/* Primary Navigation */}
            <div className="py-3">
              <div className="flex items-center gap-6 px-3 py-2 mx-3 bg-[#272727] rounded-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M12 4.33l7 4.66v10.02l-7-4.66v-10.02zm0 0l-7 4.66v10.02l7-4.66v-10.02z"/>
                </svg>
                <span className="text-white text-sm font-medium">Home</span>
              </div>
              <div className="flex items-center gap-6 px-3 py-2 mx-3 hover:bg-[#272727] rounded-lg cursor-pointer">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M17.77 10.32c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z"/>
                </svg>
                <span className="text-white text-sm">Explore</span>
              </div>
              <div className="flex items-center gap-6 px-3 py-2 mx-3 hover:bg-[#272727] rounded-lg cursor-pointer">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"/>
                </svg>
                <span className="text-white text-sm">Subscriptions</span>
              </div>
            </div>

            <div className="border-t border-[#272727] pt-3">
              {/* Secondary Navigation */}
              <div className="flex items-center gap-6 px-3 py-2 mx-3 hover:bg-[#272727] rounded-lg cursor-pointer">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M14.97 16.95L10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"/>
                </svg>
                <span className="text-white text-sm">History</span>
              </div>
              <div className="flex items-center gap-6 px-3 py-2 mx-3 hover:bg-[#272727] rounded-lg cursor-pointer">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M10 8l6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"/>
                </svg>
                <span className="text-white text-sm">Your Videos</span>
              </div>
              <div className="flex items-center gap-6 px-3 py-2 mx-3 hover:bg-[#272727] rounded-lg cursor-pointer">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h5.59c0.45,0,0.83,0.3,0.95,0.77C19.78,12.91,19.93,13.04,19.98,13.17z"/>
                </svg>
                <span className="text-white text-sm">Liked Videos</span>
              </div>
            </div>
          </aside>

          {/* Main content area */}
          <main className="flex-1 min-h-screen w-full md:ml-60">
            <HeaderMenuSection />

            <div className="mt-8 ml-4 overflow-y-auto h-screen relative" >
              <VideoThumbnailRowSection />
              <VideoGridWrapperSection />
              {/* <VideoThumbnailWrapperSection /> */}
              {/* <VideoGridSection /> */}
              <MainContentSection />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
  