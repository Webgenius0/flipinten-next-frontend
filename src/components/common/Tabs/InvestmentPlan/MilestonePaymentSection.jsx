import { CheckCircle, Clock, Film, Users, Video } from "lucide-react";

const MilestonePaymentSection = ({ data }) => {

    return (

        <div className='p-6 shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-3xl'>
            <h2 className="mb-4 text-primary  font-semibold text-lg">Milestones Payment System</h2>


            {/* container */}
            <div className="grid grid-cols-5 gap-4 text-secondary ">
                {
                    data?.milestonePayment?.map(item => {
                        console.log(item?.facilities?.yppApproval);
                        return (
                            <div className="p-4 rounded-3xl shadow-[0_0_20px_0_rgba(0,0,0,0.08)] ">
                                <div className="mb-6 text-secondary flex items-center justify-between">
                                    <p className="shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] p-3 bg-primary rounded-full text-neutral font-medium">{item?.id}</p>
                                    <p className="font-medium">({item?.percentage}-{item?.amount})</p>
                                </div>



                                <div className=" space-y-3 text-lg text-secondary">
                                    {
                                        !!item?.facilities?.video &&
                                        <div className="text-secondary flex gap-3">
                                            <Video color="#404A60" size={24} />
                                            <p>{item?.facilities?.video} Video</p>
                                        </div>
                                    }

                                    {
                                        !!item?.facilities?.shorts &&
                                        <div className="text-secondary flex gap-3">
                                            <Film color="#404A60" size={24} />
                                            <p>{item?.facilities?.shorts} Shorts</p>
                                        </div>
                                    }

                                    {
                                        !!item?.facilities?.watchHours &&
                                        <div className="text-secondary flex gap-3">
                                            <Clock color="#404A60" size={24} />
                                            <p>{item?.facilities?.watchHours} Watch Hours</p>
                                        </div>
                                    }

                                    {
                                        !!item?.facilities?.subscribers &&
                                        <div className="text-secondary flex gap-3">
                                            <Users color="#404A60" size={24} />
                                            <p>{item?.facilities?.subscribers} Subscribers</p>
                                        </div>
                                    }

                                    {
                                        !!item?.facilities?.yppApproval &&
                                        <div className="text-secondary flex gap-3">
                                            <CheckCircle color="green" size={24} />
                                            <p>YPP Approval</p>
                                        </div>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};
export default MilestonePaymentSection;