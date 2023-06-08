module.exports = {
    title: 'Akaunt',
    description: 'stand alone accounting application',
    themeConfig: {
        base: '/akaunt-doc/',
        sidebarDepth: 2,
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/guide/'},
            {text: 'Dev', link: '/developer/'},
            {text: 'Nepex Group', link: 'https://www.nepexgroup.com'},
        ],
        sidebar: {
            '/guide/': [
                '',
                'Basic',
                'Complete Book-keeping',
                'Why is Akaunt the best for basic Financial Management',
                'Why is Akaunt the best for advanced Financial Management',
                'Why Akaunt is best for basic Inventory Management',
                'Why Akaunt is the best for advanced Inventory Management',
                'The Technology Advantage of Akaunt',
                'Statutory Compliance Capabilities',
                'Payroll Compliance',
                'Accounting Voucher',
                'More Informations'
            ],
            '/developer/': [
                '',
                'Git Branching Model',
                'Versioning Software',
                'Balance Sheet',
                'Backend',
                'Todo'
            ]
        }
        // sidebar: 'auto'
    }
}
