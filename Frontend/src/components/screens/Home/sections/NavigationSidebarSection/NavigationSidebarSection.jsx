import {
    CompassIcon,
    FlagIcon,
    HelpCircleIcon,
    HomeIcon,
    MessageSquareIcon,
    RadioIcon,
    SettingsIcon,
  } from "lucide-react";
  import React from "react";
  import { Button } from "../../../../ui/button";
  import { Separator } from "../../../../ui/separator";
  
  export const NavigationSidebarSection = () => {
    // Navigation menu items data
    const mainNavItems = [
      { icon: <HomeIcon className="w-6 h-6" />, label: "Home", active: true },
      {
        icon: <CompassIcon className="w-6 h-6" />,
        label: "Explore",
        active: false,
      },
      {
        icon: <RadioIcon className="w-6 h-6" />,
        label: "Subscriptions",
        active: false,
      },
    ];
  
    // Additional menu items that would appear in the middle section (not visible in screenshot)
    const middleNavItems = [];
  
    // Bottom utility navigation items
    const utilityNavItems = [
      { icon: <SettingsIcon className="w-6 h-6" />, label: "Settings" },
      { icon: <FlagIcon className="w-6 h-6" />, label: "Report history" },
      { icon: <HelpCircleIcon className="w-6 h-6" />, label: "Help" },
      { icon: <MessageSquareIcon className="w-6 h-6" />, label: "Send feedback" },
    ];
  
    // Footer links data
    const footerLinks = [
      ["About", "Press", "Copyright"],
      ["Contact us", "Creators"],
      ["Advertise", "Developers"],
      ["Terms", "Privacy", "Policy & Safety"],
      ["How Youtube works"],
      ["Test new features"],
    ];
  
    return (
      <nav className="w-60 h-full bg-background-color overflow-hidden flex flex-col">
        {/* Top navigation items */}
        <div className="flex flex-col items-start py-3">
          {mainNavItems.map((item, index) => (
            <div
              key={`main-nav-${index}`}
              className={`inline-flex flex-col items-start gap-2.5 pl-6 pr-2 py-2 w-full ${item.active ? "bg-border-color" : ""}`}
            >
              <div className="flex items-start gap-6 w-48">
                {item.icon}
                <div className="flex items-start gap-2.5 px-0 py-1 w-36">
                  <span className="font-normal text-white-color text-sm whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Middle section with separator */}
        <div className="flex flex-col items-start gap-3 mt-8">
          <Separator className="w-full bg-border-color" />
          <div className="w-full h-60">
            {middleNavItems.map((item, index) => (
              <div
                key={`middle-nav-${index}`}
                className="inline-flex flex-col items-start gap-2.5 pl-6 pr-2 py-2"
              >
                <div className="flex items-start gap-6 w-48" />
              </div>
            ))}
          </div>
        </div>
  
        {/* Utility navigation items */}
        <div className="flex flex-col items-start gap-3 pt-3 mt-auto">
          <div className="w-full">
            {utilityNavItems.map((item, index) => (
              <div
                key={`utility-nav-${index}`}
                className="inline-flex flex-col items-start gap-2.5 pl-6 pr-2 py-2"
              >
                <div className="flex items-start gap-6 w-48">
                  {item.icon}
                  <div className="flex items-start gap-2.5 px-0 py-1 w-36">
                    <span className="font-normal text-white-color text-sm whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Separator className="w-full bg-border-color" />
        </div>
  
        {/* Footer links */}
        <div className="w-full">
          {/* First footer section */}
          <div className="flex flex-col w-full items-start gap-2.5 pt-4 pb-0 px-6">
            <div className="w-[148px] h-[45px]">
              {footerLinks.slice(0, 3).map((linkGroup, groupIndex) => (
                <div
                  key={`footer-group-${groupIndex}`}
                  className={`${groupIndex > 0 ? "absolute top-[15px]" : "w-[149px] h-[15px] absolute top-0"} ${groupIndex === 1 ? "left-0" : groupIndex === 2 ? "left-0" : "left-0"}`}
                >
                  {linkGroup.map((link, linkIndex) => (
                    <Button
                      key={`footer-link-${groupIndex}-${linkIndex}`}
                      variant="link"
                      className={`p-0 h-auto ${linkIndex > 0 ? `absolute left-[${linkIndex * 40 + 3}px]` : "inline-flex pl-0 pr-2 py-0"}`}
                    >
                      <span className="text-[13px] font-bold text-gray-color whitespace-nowrap">
                        {link}
                      </span>
                    </Button>
                  ))}
                </div>
              ))}
            </div>
          </div>
  
          {/* Second footer section */}
          <div className="flex flex-col w-full pt-3 pb-0 px-6 items-start gap-2.5">
            <div className="w-[189px] h-[45px]">
              {footerLinks.slice(3).map((linkGroup, groupIndex) => (
                <div
                  key={`footer-group-2-${groupIndex}`}
                  className={`${groupIndex > 0 ? `absolute top-[${15 * groupIndex}px]` : "w-48 h-[15px] absolute top-0"} left-0`}
                >
                  {linkGroup.map((link, linkIndex) => (
                    <Button
                      key={`footer-link-2-${groupIndex}-${linkIndex}`}
                      variant="link"
                      className={`p-0 h-auto ${linkIndex > 0 ? `absolute left-[${linkIndex * 50}px]` : "inline-flex pl-0 pr-2 py-0"}`}
                    >
                      <span className="text-[13px] font-bold text-gray-color whitespace-nowrap">
                        {link}
                      </span>
                    </Button>
                  ))}
                </div>
              ))}
            </div>
          </div>
  
          {/* Copyright footer */}
          <div className="flex flex-col w-full px-6 py-4 items-start gap-2.5">
            <div className="flex-[0_0_auto] inline-flex items-start gap-2.5 pl-0 pr-2 py-0">
              <span className="text-xs font-bold text-gray-color whitespace-nowrap">
                © 2021 Google LLC
              </span>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  