import MilestonePaymentCard from "../../Cards/MilestonePaymentCard";

const MilestonePaymentSection = ({ data }) => {
    return (
        <div className='p-6 shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-3xl'>
            <h2 className="mb-4 text-primary  font-semibold text-lg">Milestones Payment System</h2>


            {/* container */}
            <div className="grid grid-cols-5 gap-4 text-secondary ">
                {
                    data?.milestonePayment?.map(item => {
                        return (
                            <MilestonePaymentCard key={item.id} item={item} />
                        )
                    })
                }
            </div>
        </div>
    );
};
export default MilestonePaymentSection;