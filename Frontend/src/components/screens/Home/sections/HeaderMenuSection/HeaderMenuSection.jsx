import React from "react";
import { Badge } from "../../../../ui/badge";
import { ScrollArea, ScrollBar } from "../../../../ui/scroll-area";

export const HeaderMenuSection = () => {
  // Menu items data for easy mapping
  const menuItems = [
    { id: 1, label: "For You", active: true },
    { id: 2, label: "Item", active: false },
    { id: 3, label: "Item", active: false },
    { id: 4, label: "Item", active: false },
    { id: 5, label: "Item", active: false },
    { id: 6, label: "Item", active: false },
    { id: 7, label: "Item", active: false },
    { id: 8, label: "Item", active: false },
    { id: 9, label: "Item", active: false },
    { id: 10, label: "Item", active: false },
  ];

  return (
    <nav className="w-full border-y border-border-color bg-background-color">
      <ScrollArea className="w-full">
        <div className="flex items-center h-14 px-6">
          {menuItems.map((item) => (
            <div key={item.id} className="pr-3 py-3 flex-shrink-0">
              {item.active ? (
                <Badge
                  variant="outline"
                  className="px-3 py-2 bg-white text-[#030303] rounded-[32px] border-none font-normal text-sm"
                >
                  {item.label}
                </Badge>
              ) : (
                <Badge
                  variant="outline"
                  className="px-3 py-2 bg-border-color text-white-color rounded-[32px] border-[0.3px] border-solid border-[#aaaaaa] font-normal text-sm"
                >
                  {item.label}
                </Badge>
              )}
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </nav>
  );
};
