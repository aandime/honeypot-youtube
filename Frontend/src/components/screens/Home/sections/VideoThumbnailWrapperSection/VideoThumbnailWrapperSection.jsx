import React from "react";
import { Card, CardContent } from "../../../../ui/card";

export const VideoThumbnailWrapperSection = () => {
  // Video data for mapping
  const videoData = [
    {
      id: 1,
      thumbnail: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-1-19.png",
      duration: "23:45",
      title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
      channel: "James Gouse",
      views: "15K Views",
      timeAgo: "1 week ago",
      avatarPosition: "-264.00px",
    },
    {
      id: 2,
      thumbnail: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-1-19.png",
      duration: "23:45",
      title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
      channel: "James Gouse",
      views: "15K Views",
      timeAgo: "1 week ago",
      avatarPosition: "-516.00px",
    },
    {
      id: 3,
      thumbnail: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-1-19.png",
      duration: "23:45",
      title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
      channel: "James Gouse",
      views: "15K Views",
      timeAgo: "1 week ago",
      avatarPosition: "-768.00px",
    },
    {
      id: 4,
      thumbnail: "https://c.animaapp.com/m8hmh8dscNuAQt/img/image-1-19.png",
      duration: "23:45",
      title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
      channel: "James Gouse",
      views: "15K Views",
      timeAgo: "1 week ago",
      avatarPosition: "-1020.00px",
    },
  ];

  return (
    <section className="w-full flex gap-4 overflow-hidden">
      {videoData.map((video) => (
        <Card key={video.id} className="w-[236px] border-none bg-transparent">
          <CardContent className="p-0">
            <div className="relative h-[155px]">
              <div className="w-full h-[155px]">
                <img
                  className="h-[120px] w-full object-cover"
                  alt="Video thumbnail"
                  src={video.thumbnail}
                />
              </div>

              <div className="inline-flex items-start px-1 py-[3px] absolute top-[133px] right-0 bg-black">
                <span className="text-white-color text-[10px] font-normal [font-family:'Roboto',Helvetica]">
                  {video.duration}
                </span>
              </div>
            </div>

            <div className="flex mt-0">
              <div className="pt-3 pr-3 overflow-hidden">
                <div
                  className={`mt-[-879.00px] ml-[${video.avatarPosition}] bg-[url(https://c.animaapp.com/m8hmh8dscNuAQt/img/user-avatar-18.png)] bg-cover bg-[50%_50%] w-9 h-9 rounded-3xl`}
                />
              </div>

              <div className="flex flex-col gap-1.5 pt-3">
                <h3 className="w-[204px] [font-family:'Roboto',Helvetica] font-bold text-white-color text-xs">
                  {video.title}
                </h3>

                <div className="flex flex-col w-[204px]">
                  <span className="[font-family:'Roboto',Helvetica] font-normal text-gray-color text-xs whitespace-nowrap">
                    {video.channel}
                  </span>
                  <span className="[font-family:'Roboto',Helvetica] font-normal text-gray-color text-xs whitespace-nowrap">
                    {video.views} .{video.timeAgo}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
