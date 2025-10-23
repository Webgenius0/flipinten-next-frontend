'use client'

import DataTable from "../../Table/DataTable";
import MilestoneCostColumns from "../../TableColumns/MilestoneCostColumns";

const MilestoneCostTable = ({ data }) => {
    return (
        <div className='text-secondary shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-3xl'>
            <DataTable columns={MilestoneCostColumns} data={data?.milestonePayment} />
        </div>
    );
};

export default MilestoneCostTable;