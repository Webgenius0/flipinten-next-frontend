import React from 'react';
import CommonSection from '../common/CommonSection';
import SectionHeading from '../common/SectionHeading';
import InvestmentPlanContainer from '../common/Tabs/InvestmentPlan/InvestmentPlanContainer';

const InvestmentPlanSection = () => {
    return (
        <CommonSection>
            <SectionHeading
                title={'Investment Plans'}
                subtitle={'Choose the plan that fits your investment goals and budget'}
            />

            <InvestmentPlanContainer />
        </CommonSection>
    );
};

export default InvestmentPlanSection;