import React from "react";
import { Avatar, AvatarImage } from "../../../../ui/avatar";
import { Card, CardContent } from "../../../../ui/card";
export const MainContentSection = () => {
  // Video data array to map over
  const videoData = [
    {
      id: 1,
      thumbnailUrl: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-1-19.png",
      duration: "23:45",
      avatarUrl: "https://c.animaapp.com/m8hmh8dscNuAQt/img/user-avatar-18.png",
      title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
      channelName: "James Gouse",
      views: "15K Views",
      uploadTime: "1 week ago",
    },
    {
      id: 2,
      thumbnailUrl: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-1-19.png",
      duration: "23:45",
      avatarUrl: "https://c.animaapp.com/m8hmh8dscNuAQt/img/user-avatar-18.png",
      title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
      channelName: "James Gouse",
      views: "15K Views",
      uploadTime: "1 week ago",
    },
    {
      id: 3,
      thumbnailUrl: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-1-19.png",
      duration: "23:45",
      avatarUrl: "https://c.animaapp.com/m8hmh8dscNuAQt/img/user-avatar-18.png",
      title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
      channelName: "James Gouse",
      views: "15K Views",
      uploadTime: "1 week ago",
    },
    {
      id: 4,
      thumbnailUrl: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-1-19.png",
      duration: "23:45",
      avatarUrl: "https://c.animaapp.com/m8hmh8dscNuAQt/img/user-avatar-18.png",
      title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
      channelName: "James Gouse",
      views: "15K Views",
      uploadTime: "1 week ago",
    },
  ];

  return (
    <section className="w-full py-4">
      <div className="flex flex-row gap-4 overflow-x-auto">
        {videoData.map((video) => (
          <Card
            key={video.id}
            className="w-[236px] bg-transparent border-0 flex-shrink-0"
          >
            <div className="relative w-full h-[155px]">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${video.thumbnailUrl})` }}
              >
                <div className="absolute bottom-1 right-1 bg-black px-1 py-[3px]">
                  <span className="font-normal text-white-color text-[10px]">
                    {video.duration}
                  </span>
                </div>
              </div>
            </div>

            <CardContent className="flex p-0 pt-0">
              <div className="flex items-start pt-3 pr-3">
                <Avatar className="w-9 h-9 rounded-3xl mr-3">
                  <AvatarImage src={video.avatarUrl} alt="User avatar" />
                </Avatar>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="pt-3">
                  <h3 className="font-bold text-white-color text-xs leading-normal">
                    {video.title}
                  </h3>
                </div>

                <div className="flex flex-col">
                  <span className="font-normal text-gray-color text-xs">
                    {video.channelName}
                  </span>
                  <span className="font-normal text-gray-color text-xs">
                    {video.views} .{video.uploadTime}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
