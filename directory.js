/*
 * The Developer Advocates directory data source:
 * Schema:
 * directory[]
 *
 *   companies[]
 *
 *     companyName
 *     companyUrl
 *     companyLogo
 *
 *     devs[]
 *        devName
 *        devRole
 *        devDescription
 *        devLocation
 *        devProducts
 *        devEmail
 *        devGithub
 *        devStackOverflow
 *        devTwitter
 *        products[]
 *
 *     products[]
 *        productName
 *        documentationUrl
 */
const directory = [
    {
        companyName: "Microsoft",
        companyUrl: "https://microsoft.com/",
        companyLogo:
            "https://storage.googleapis.com/build-amsterdam/upload/1a3af539ab5cc889b3faa5f8c0496fa8215d24e1fbdae96806bead302658d9f0.png",
        devs: [
            {
                devName: "Jeff Sandquist",
                devRole: "Lead Developer Relations",
                devDescription: "I am responsible ...",
                devTwitter: "jeffsand",
                products: ['Azure']
            }
        ],
        products: [
            {
                productName: "Azure",
                documentationUrl: "https://docs.microsoft.com/azure/"
            }
        ]
    }
];

module.exports = directory;
