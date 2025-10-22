const PlanSection = ({ data }) => {
    return (
        <div className='text-secondary p-8 shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-3xl'>
            <p className='text-color-primary text-lg font-medium mb-6'>{data?.plan}</p>
            <div className='flex items-center justify-between mb-9'>
                <p className='text-2xl font-semibold'>Total Cost:</p>
                <p className='font-semibold text-3xl'>{data?.totalCost}</p>
            </div>


            <div>
                {
                    data?.planInfo?.map(info => {
                        return (
                            <div key={info.label} className='border-b border-neutral40 py-2 flex items-center justify-between'>
                                <p className='text-lg'>{info?.label}:</p>
                                <p className='text-lg font-medium'>{info?.info}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default PlanSection;