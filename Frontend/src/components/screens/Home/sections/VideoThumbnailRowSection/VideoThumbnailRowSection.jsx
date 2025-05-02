import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../ui/avatar";
import { Card, CardContent } from "../../../../ui/card";

export const VideoThumbnailRowSection = () => {
  // Video data for mapping
  const videos = [
    {
      id: 1,
      title: "IM BETTER",
      channel: "Personal Channel",
      views: "1M",
      timeAgo: "2 hours ago",
      thumbnail: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image.png",
      avatar: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-2.png",
      duration: "23:45",
    },
    {
      id: 2,
      title: "Hello from Instagram!",
      channel: "Instagram",
      views: "2.7M",
      timeAgo: "7 years ago",
      thumbnail: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-1-19.png",
      avatar: "https://c.animaapp.com/m8hmh8dscNuAQt/img/user-avatar-18.png",
      duration: "23:45",
    },
    {
      id: 3,
      title: "TikTok Generation!",
      channel: "TikTok",
      views: "15K",
      timeAgo: "1 week ago",
      thumbnail: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-1-19.png",
      avatar: "https://c.animaapp.com/m8hmh8dscNuAQt/img/user-avatar-18.png",
      duration: "23:45",
    },
    {
      id: 4,
      title: "Hello from Netflix!",
      channel: "Netflix",
      views: "7M",
      timeAgo: "9 years ago",
      thumbnail: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-1-19.png",
      avatar: "https://c.animaapp.com/m8hmh8dscNuAQt/img/user-avatar-18.png",
      duration: "23:45",
    },
  ];

  return (
    <div className="w-full flex gap-4">
      {videos.map((video) => (
        <Card
          key={video.id}
          className="w-[236px] border-0 rounded-none bg-transparent"
        >
          <CardContent className="p-0">
            <div className="relative w-full h-[155px]">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-1 right-1 bg-black px-1 py-[3px]">
                <span className="text-[10px] text-white-color font-normal [font-family:'Roboto',Helvetica]">
                  {video.duration}
                </span>
              </div>
            </div>

            <div className="flex mt-0 pt-0">
              <div className="pt-3 pr-3">
                <Avatar className="w-9 h-9 rounded-3xl">
                  <AvatarImage src={video.avatar} alt={video.channel} />
                  <AvatarFallback>{video.channel[0]}</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex flex-col gap-1.5 pt-3">
                <h3 className="text-xs font-bold text-white-color [font-family:'Roboto',Helvetica] w-[204px]">
                  {video.title}
                </h3>
                <div className="flex flex-col w-[204px]">
                  <p className="text-xs font-normal text-gray-color [font-family:'Roboto',Helvetica] whitespace-nowrap">
                    {video.channel}
                  </p>
                  <p className="text-xs font-normal text-gray-color [font-family:'Roboto',Helvetica] whitespace-nowrap">
                    {video.views} Views .{video.timeAgo}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
