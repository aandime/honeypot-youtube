import React from "react";
import { Avatar, AvatarImage } from "../../../../ui/avatar";
import { Card, CardContent } from "../../../../ui/card";

export const VideoGridSection = () => {
  // Video data array for mapping
  const videos = [
    {
      id: 1,
      thumbnailUrl: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-1-19.png",
      duration: "23:45",
      avatarUrl: "https://c.animaapp.com/m8hmh8dscNuAQt/img/user-avatar-18.png",
      title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
      channel: "James Gouse",
      views: "15K Views",
      time: "1 week ago",
    },
    {
      id: 2,
      thumbnailUrl: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-1-19.png",
      duration: "23:45",
      avatarUrl: "https://c.animaapp.com/m8hmh8dscNuAQt/img/user-avatar-18.png",
      title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
      channel: "James Gouse",
      views: "15K Views",
      time: "1 week ago",
    },
    {
      id: 3,
      thumbnailUrl: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-1-19.png",
      duration: "23:45",
      avatarUrl: "https://c.animaapp.com/m8hmh8dscNuAQt/img/user-avatar-18.png",
      title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
      channel: "James Gouse",
      views: "15K Views",
      time: "1 week ago",
    },
    {
      id: 4,
      thumbnailUrl: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-1-19.png",
      duration: "23:45",
      avatarUrl: "https://c.animaapp.com/m8hmh8dscNuAQt/img/user-avatar-18.png",
      title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
      channel: "James Gouse",
      views: "15K Views",
      time: "1 week ago",
    },
  ];

  return (
    <section className="w-full max-w-[991px] py-4">
      <div className="grid grid-cols-4 gap-4">
        {videos.map((video) => (
          <Card
            key={video.id}
            className="w-[236px] h-[247px] border-none bg-transparent"
          >
            <div className="relative w-full h-[155px]">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${video.thumbnailUrl})` }}
              >
                <div className="inline-flex items-center px-1 py-[3px] absolute bottom-[3px] right-[3px] bg-black">
                  <span className="font-normal text-white-color text-[10px]">
                    {video.duration}
                  </span>
                </div>
              </div>
            </div>

            <CardContent className="flex p-0 h-[74px]">
              <div className="flex pt-3 pr-3">
                <Avatar className="w-9 h-9 rounded-3xl">
                  <AvatarImage src={video.avatarUrl} alt="User avatar" />
                </Avatar>
              </div>

              <div className="flex flex-col gap-1.5 pt-3">
                <div className="w-[204px]">
                  <h3 className="font-bold text-white-color text-xs leading-normal">
                    {video.title}
                  </h3>
                </div>

                <div className="flex flex-col w-[204px]">
                  <p className="font-normal text-gray-color text-xs whitespace-nowrap">
                    {video.channel}
                  </p>
                  <p className="font-normal text-gray-color text-xs whitespace-nowrap">
                    {video.views} .{video.time}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
