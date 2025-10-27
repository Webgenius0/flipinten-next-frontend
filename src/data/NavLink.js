const navLinks = [
    {
        label: 'Plans',
        path: '/plans'
    },
    {
        label: 'YTC Services',
        path: '/ytc-services',
        childLinks: [
            {
                label: 'YTC Services',
                path: '/ytc-services'
            },
            {
                label: 'link2',
                path: '/'
            },
        ]
    },
    {
        label: 'Creator Marketplace',
        path: '/creator-marketplace'
    },
    {
        label: 'Advertisers',
        path: '/advertisers'
    },
    {
        label: 'Freelancers',
        path: '/freelancers'
    },
    {
        label: 'Resources',
        path: '/resources',
        childLinks: [
            {
                label: 'Resources',
                path: '/resources'
            },
            {
                label: 'Case Studies',
                path: '/resources/case-studies'
            },
            {
                label: 'Blogs',
                path: '/resources/blogs'
            },
        ]
    },
    {
        label: 'Contact',
        path: '/contact'
    },
]

export default navLinks