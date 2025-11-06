
import img from '@/assets/images/user-avatar.png'

export default function useGetFreelancerOverviewRecentMessagesData() {
  const messages = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: img, 
      message: "Hi! can you provide an update on the video editing project",
      timeAgo: "2m ago",
      status: "Reply",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      avatar: img,
      message: "Hi! can you provide an update on the video editing project",
      timeAgo: "2m ago",
      status: "Reply",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      avatar: img,
      message: "Hi! can you provide an update on the video editing project",
      timeAgo: "2m ago",
      status: "Reply",
    },
  ];

  return messages;
}
