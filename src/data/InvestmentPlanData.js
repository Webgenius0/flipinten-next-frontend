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


const premiumPlanData = {
    plan: 'Premium Plan',
    totalCost: '₹4,75,000',
    planInfo: [
        {
            label: 'Earning Potential',
            info: '$45k - $90k',
        },
        {
            label: 'Niche Option',
            info: 'Up to 10 (custom curated)',
        },
        {
            label: 'Content',
            info: 'Faceless / AI / Hybrid',
        },
        {
            label: 'Profit Share',
            info: 'AdSense 65-70% Brand/Products 35% Client/65% Company',
        },
        {
            label: 'Guarantees',
            info: 'Refund if not monetized + Buyback with premium multiplier',
        },
    ],
    milestonePayment: [
        {
            id: "m1",
            label: "M1 - Kickoff & Strategy Setup",
            percentage: "25%",
            amount: "¥1,18,750",
            facilities: {
                video: 10,
                shorts: 8,
                watchHours: 300,
                subscribers: 200
            }
        },
        {
            id: "m2",
            label: "M2 - Initial Growth",
            percentage: "20%",
            amount: "¥95,000",
            facilities: {
                video: 8,
                shorts: 6,
                watchHours: 1500,
                subscribers: 500
            }
        },
        {
            id: "m3",
            label: "M3 - Consistent Traction",
            percentage: "20%",
            amount: "¥95,000",
            facilities: {
                video: 8,
                shorts: 6,
                watchHours: 4000,
                subscribers: 1000
            }
        },
        {
            id: "m4",
            label: "M4 - Pre-Monetize Boost",
            percentage: "20%",
            amount: "¥95,000",
            facilities: {
                video: 6,
                shorts: 5,
                watchHours: 6000,
                subscribers: 1500
            }
        },
        {
            id: "m5",
            label: "M5 - Monetized & Scaling",
            percentage: "15%",
            amount: "¥71,250",
            facilities: {
                watchHours: 6000,
                subscribers: 1500,
                yppApproval: true
            }
        }
    ]
}

const wealthPlanData = {
    plan: 'Wealth Plan',
    totalCost: '₹8,25,000',
    planInfo: [
        {
            label: 'Earning Potential',
            info: '$100k - $250k',
        },
        {
            label: 'Niche Option',
            info: 'Unlimited (full creative freedom)',
        },
        {
            label: 'Content',
            info: 'Faceless / AI / Hybrid / Influencer-Driven',
        },
        {
            label: 'Profit Share',
            info: 'AdSense 80% Brand/Products 50% Client/50% Company',
        },
        {
            label: 'Guarantees',
            info: 'Guaranteed monetization or full refund + lifetime buyback option',
        },
    ],
    milestonePayment: [
        {
            id: "m1",
            label: "M1 - Kickoff & Channel Setup",
            percentage: "20%",
            amount: "¥1,65,000",
            facilities: {
                video: 12,
                shorts: 10,
                watchHours: 500,
                subscribers: 300
            }
        },
        {
            id: "m2",
            label: "M2 - Growth Foundation",
            percentage: "20%",
            amount: "¥1,65,000",
            facilities: {
                video: 10,
                shorts: 8,
                watchHours: 2500,
                subscribers: 1000
            }
        },
        {
            id: "m3",
            label: "M3 - Monetization Ready",
            percentage: "20%",
            amount: "¥1,65,000",
            facilities: {
                video: 8,
                shorts: 6,
                watchHours: 6000,
                subscribers: 2000
            }
        },
        {
            id: "m4",
            label: "M4 - Monetized & Expansion",
            percentage: "20%",
            amount: "¥1,65,000",
            facilities: {
                video: 8,
                shorts: 5,
                watchHours: 10000,
                subscribers: 4000
            }
        },
        {
            id: "m5",
            label: "M5 - Scaling & Partnerships",
            percentage: "20%",
            amount: "¥1,65,000",
            facilities: {
                watchHours: 10000,
                subscribers: 4000,
                yppApproval: true,
                brandDeals: true
            }
        }
    ]
}

export { basicPlanData, premiumPlanData, wealthPlanData };

