import React from "react";
import { Avatar, AvatarImage } from "../../../../ui/avatar";
import { Card, CardContent } from "../../../../ui/card";

export const VideoGridWrapperSection = () => {
  // Video data for mapping
  const videos = [
    {
      id: 1,
      title: "Honeypot Simulation",
      channel: "BigCo Team 20",
      views: "100 Views",
      timeAgo: "4 minutes ago",
      duration: "23:45",
      thumbnail: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-1-19.png",
      avatar: "https://c.animaapp.com/m8hmh8dscNuAQt/img/user-avatar-18.png",
    },
    {
      id: 2,
      title: "Introduction to Spotify",
      channel: "Spotify",
      views: "17M Views",
      timeAgo: "1 month ago",
      duration: "23:45",
      thumbnail: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-1-19.png",
      avatar: "https://c.animaapp.com/m8hmh8dscNuAQt/img/user-avatar-18.png",
    },
    {
      id: 3,
      title: "Hello Discord!",
      channel: "Discord",
      views: "775K Views",
      timeAgo: "11 months ago",
      duration: "23:45",
      thumbnail: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-1-19.png",
      avatar: "https://c.animaapp.com/m8hmh8dscNuAQt/img/user-avatar-18.png",
    },
    {
      id: 4,
      title: "Welcome Tesla!",
      channel: "Tesla",
      views: "556K Views",
      timeAgo: "2 weeks ago",
      duration: "23:45",
      thumbnail: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-1-19.png",
      avatar: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-3.png",
    },
  ];

  return (
    <section className="w-full py-4">
      <div className="grid grid-cols-4 gap-4 w-full">
        {videos.map((video) => (
          <Card
            key={video.id}
            className="w-[236px] h-[247px] border-0 rounded-none overflow-hidden bg-transparent"
          >
            <div className="relative w-full h-[155px]">
              <img
                className="w-full h-full object-cover"
                alt={video.title}
                src={video.thumbnail}
              />
              <div className="absolute bottom-1 right-1 bg-black px-1 py-[3px]">
                <span className="text-[10px] text-white-color font-normal font-['Roboto',Helvetica]">
                  {video.duration}
                </span>
              </div>
            </div>

            <CardContent className="p-0">
              <div className="flex items-start w-full">
                <div className="pl-0 pr-3 pt-3 pb-[26px]">
                  <Avatar className="w-9 h-9 rounded-3xl">
                    <AvatarImage src={video.avatar} alt={video.channel} />
                  </Avatar>
                </div>

                <div className="flex flex-col items-start gap-1.5 pt-3">
                  <h3 className="w-[204px] font-bold text-white-color text-xs font-['Roboto',Helvetica]">
                    {video.title}
                  </h3>

                  <div className="flex flex-col w-[204px] items-start">
                    <p className="text-gray-color text-xs font-normal font-['Roboto',Helvetica]">
                      {video.channel}
                    </p>
                    <p className="text-gray-color text-xs font-normal font-['Roboto',Helvetica]">
                      {video.views} {video.timeAgo}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
