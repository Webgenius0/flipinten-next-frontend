const basicPlanData = {
    plan: 'Basic Plan',
    totalCost: '₹2,65,000',
    planInfo: [
        {
            label: 'Earning Potential',
            info: '$18k - $38k',
        },
        {
            label: 'Niche Option',
            info: 'Up to 5 (choose!)',
        },
        {
            label: 'Content',
            info: 'Faceless / AI',
        },
        {
            label: 'Profit Share',
            info: 'AdSense 50-60% Brand/Products 26% Client/75% Company',
        },
        {
            label: 'Guarantees',
            info: 'Refund if not monetized Buyback available',
        },
    ],
    milestonePayment: [
        {
            id: "m1",
            label: "M1 - Kickoff & Brand Setup",
            percentage: "25%",
            amount: "¥66,250",
            facilities: {
                video: 8,
                shorts: 6,
                watchHours: 100,
                subscribers: 100
            }
        },
        {
            id: "m2",
            label: "M2 - Early Traction",
            percentage: "20%",
            amount: "¥53,000",
            facilities: {
                video: 6,
                shorts: 5,
                watchHours: 800,
                subscribers: 250
            }
        },
        {
            id: "m3",
            label: "M3 - Momentum",
            percentage: "20%",
            amount: "¥53,000",
            facilities: {
                video: 6,
                shorts: 4,
                watchHours: 2500,
                subscribers: 500
            }
        },
        {
            id: "m4",
            label: "M4 - Pre-Monetize",
            percentage: "20%",
            amount: "¥53,000",
            facilities: {
                video: 5,
                shorts: 4,
                watchHours: 3500,
                subscribers: 800
            }
        },
        {
            id: "m5",
            label: "M5 - Monetized",
            percentage: "15%",
            amount: "¥39,750",
            facilities: {
                watchHours: 3500,
                subscribers: 800,
                yppApproval: true
            }
        }
    ]
}

export default basicPlanData;