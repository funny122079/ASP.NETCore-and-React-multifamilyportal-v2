interface MenuItem {
    id: number;
    title: string;
    class_name?:string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
    menu_column?: {
        id: number;
        mega_title: string;
        mega_menus: {
            link: string;
            title: string;
        }[];
    }[]
}[];

const menu_data: MenuItem[] = [

    {
        id: 1,
        has_dropdown: true,
        title: "Home",
        link: "#",
        sub_menus: [
            { link: "/", title: "Home 01" },
            { link: "/home-two", title: "Home 02" },
            { link: "/home-three", title: "Home 03" },
            { link: "/home-four", title: "Home 04" },
            { link: "/home-five", title: "Home 05" },
            { link: "/home-six", title: "Home 06" },
            { link: "/home-seven", title: "Home 07" },
        ],
    },
    {
        id: 2,
        has_dropdown: true,
        title: "Listing",
        class_name:"mega-dropdown-sm",
        link: "#",
        menu_column: [
            {
                id: 1,
                mega_title: "Listing Type",
                mega_menus: [
                    { link: "/listing_01", title: "Grid Sidebar-1" },
                    { link: "/listing_05", title: "Grid Sidebar-2" },
                    { link: "/listing_02", title: "List Sidebar-1" },
                    { link: "/listing_06", title: "List Sidebar-2" },
                    { link: "/listing_03", title: "Grid Top Filter-1" },
                    { link: "/listing_07", title: "Grid Top Filter-2" },
                    { link: "/listing_04", title: "List Top Filter-1" },
                    { link: "/listing_08", title: "List Top Filter-2" },
                    { link: "/listing_09", title: "Grid Banner Filter-1" },
                ]
            },
            {
                id: 2,
                mega_title: "Listing Type",
                mega_menus: [
                    { link: "/listing_11", title: "Grid Banner Filter-2" },
                    { link: "/listing_10", title: "List Banner Filter-1" },
                    { link: "/listing_12", title: "List Banner Filter-2" },
                    { link: "/listing_13", title: "Grid Fullwidth" },
                    { link: "/listing_14", title: "Grid Fullwidth Map-1" },
                    { link: "/listing_16", title: "Grid Fullwidth Map-2" },
                    { link: "/listing_15", title: "List Fullwidth Map-1" },
                    { link: "/listing_17", title: "List Fullwidth Map-2" },
                ]
            },
            {
                id: 3,
                mega_title: "Single Listing",
                mega_menus: [
                    { link: "/listing_details_01", title: "Listing Details-1" },
                    { link: "/listing_details_02", title: "Listing Details-2" },
                    { link: "/listing_details_03", title: "Listing Details-3" },
                    { link: "/listing_details_04", title: "Listing Details-4" },
                    { link: "/listing_details_05", title: "Listing Details-5" },
                    { link: "/listing_details_06", title: "Listing Details-6" },
                ]
            },
        ]
    },
    {
        id: 3,
        has_dropdown: true,
        title: "Pages",
        class_name:"mega-dropdown-sm",
        link: "#",
        menu_column: [
            {
                id: 1,
                mega_title: "Essential",
                mega_menus: [
                    { link: "/about_us_01", title: "About us -1" },
                    { link: "/about_us_02", title: "About us -2" },
                    { link: "/agency", title: "Agency" },
                    { link: "/agency_details", title: "Agency Details" },
                    { link: "/agent", title: "Agent" },
                    { link: "/agent_details", title: "Agent Details" },
                ]
            },
            {
                id: 2,
                mega_title: "Features",
                mega_menus: [
                    { link: "/project_01", title: "Project -1" },
                    { link: "/project_02", title: "Project -2" },
                    { link: "/project_03", title: "Project -3" },
                    { link: "/project_04", title: "Project -4" },
                    { link: "/project_details_01", title: "Project Details" },
                    { link: "/service_01", title: "Service -1" },
                    { link: "/service_02", title: "Service -2" },
                    { link: "/service_details", title: "Service Details" },
                ]
            },
            {
                id: 3,
                mega_title: "Others",
                mega_menus: [
                    { link: "/compare", title: "Property Compare" },
                    { link: "/pricing_01", title: "Pricing -1" },
                    { link: "/pricing_02", title: "Pricing -2" },
                    { link: "/contact", title: "Contact Us" },
                    { link: "/faq", title: "FAQ's" },
                    { link: "/not-found", title: "404-Error" },
                ]
            },
        ]
    },
    {
        id: 4,
        has_dropdown: true,
        title: "Blog",
        link: "#",
        sub_menus: [
            { link: "/blog_01", title: "Blog Grid" },
            { link: "/blog_02", title: "Blog List" },
            { link: "/blog_03", title: "Blog 2 column" },
            { link: "/blog_details", title: "Blog Details" },
        ],
    },
];
export default menu_data;
