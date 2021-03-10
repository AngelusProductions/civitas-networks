import * as pix from './assets/pix'

export const paths = {
    home: '/',
    vision: '/vision',
    partners: '/partners',
    contact: '/contact',
    portal: '/portal'
}

export const portalPwd = 'civitas1234'

export const contentBoxes = {
    ourVision: [
        {
            id: 'mission',
            title: 'Mission Statement',
            content: `What is needed is a deeper understanding of the community’s goals, and then building a
            system around them. Civitas’ s customized, flexible Open Source 5G based wireless network
            supplies the community with not only reliable, secure, and high-speed data, but a whole host
            of sensors which enable the community to better understand their environment and adapt to
            the changing needs of their world.
            
            By employing a network of connected 5G transmitters along with IOT based sensors, the
            network not only brings a whole host of new services, but also collects and analyzes data for
            the community to use to improve infrastructure, public utilities, services, and more. The digital
            infrastructure of a smart city sets the stage for a network of partnerships all focused on one
            goal: Creating a smarter city.`,
            pic: pix.cityCenterWoman
        },
        {
            id: 'smartSystems',
            title: 'Smart Systems & Sensors',
            content: `Hyper local data, obtained from sensors in the network, generate reams of data that benefits
            the community by helping them understand where they need to invest to improve the quality
            of life for their citizens. These sensors provide information that can ultimately help deter
            crime, improve security and safety, increase efficient use of other utilities such as water,
            power, and lighting. Civitas made networks will be designed as data farming engines,
            continuously harvesting large amounts of data per node. This data will serve a community for a
            whole range of services:`,
            pic: pix.trafficLight
        },
        {
            id: 'dataManagement',
            title: 'Data Management',
            content: `The driver of the Civitas business model is the management of valuable data for the community
            as well as the commercial market. The company enables the community to operate more
            efficiently on real-time data previously unavailable to anyone, and to monetize that data to the
            market as an important revenue source.  All data collection is governed by the community’s
            security and privacy policies.  Data is collected from the many sensors located on or near our
            smart poles.  The data is run through an intelligence system that is either local, or via software
            intelligence as a service (IAAS), depending on security, level of desired analytics, and cost trade-
            offs the community selects.`,
            pic: pix.okCrosswalk
        },
        {
            id: 'services',
            title: 'Services',
            content: `Civitas disrupts the traditional telecom model by creating a smart city system precisely
            designed for the present and future needs of the host community, not just for benefit of the
            wireless operator. Civitas custom designs the entire system around the growth plan and goals
            of the community. As a single source provider of optional unlicensed network services and
            connectivity, smart pole hosted sensor and 5G technology, robust security services, and data
            governance models, Civitas custom designs the entire system based around the growth plan
            and goals of the community. Some of the benefits for the community include offering the
            latest in 5G technology, advanced high efficiency lighting, and environmental sensors with little
            or no community investment. The community will also realize an increase in revenue,
            estimated to be as much as 7-10% year-over-year.
            `,
            pic: pix.townOverhead
        }
    ]
}

export const partners = [
    {
        id: 'apex',
        title: 'Apex Advanced Technology',
        content: 'Apex Advanced Technology LLC (Apex), an engineering firm based in Herndon, VA which provides Engineering services to customers worldwide. Apex has well qualified and professional staff members with years of experience. It provides quality engineering services to many projects and clients of international repute under the leadership of following highly accomplished people.',
        link: 'http://www.apexadvancedtech.com/about/',
        pic: pix.logoApex
    },
    {
        id: 'DSG',
        title: 'DSG Telecom',
        content: 'DSG Telecom is a privately held company focused on providing high quality passive components to the wireless telecommunications infrastructure market. DSG Telecom is rated among the best in the industry, designing and manufacturing products of the highest quality that will solve your complex issues.',
        link: 'https://www.dsgtelecom.com',
        pic: pix.logoDsg
    },
    {
        id: 'greenIslandResources',
        title: 'Green Island Resources',
        content: 'Green Island is a Project Management Company for wireless networks.  With more than 30 years of experience from design services to site acquisition, construction, optimization, and maintenance.',
        link: null,
        pic: pix.logoGreenIsland
    }
]