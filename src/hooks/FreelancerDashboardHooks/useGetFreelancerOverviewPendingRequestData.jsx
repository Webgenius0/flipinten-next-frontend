export default function useGetFreelancerOverviewPendingRequestData() {
  const pendingActions = [
    {
      id: 1,
      approved: false,
      message: "Revision required for Project #2032.",
      action: 'Resolve'
    },
    {
      id: 2,
      approved: true,
      message: "Awaiting client approval ...",
      action: 'View'
    },
    {
      id: 3,
      approved: true,
      message: "Awaiting client approval ...",
      action: 'View'
    },
    {
      id: 4,
      approved: true,
      message: "Awaiting client approval ...",
      action: 'View'
    },
    {
      id: 5,
      approved: true,
      message: "Awaiting client approval ...",
      action: 'View'
    },
    {
      id: 6,
      approved: true,
      message: "Awaiting client approval ...",
      action: 'View'
    },
    {
      id: 7,
      approved: true,
      message: "Awaiting client approval ...",
      action: 'View'
    },
  ];

  return pendingActions;
}
