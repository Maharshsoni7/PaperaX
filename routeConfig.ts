export const ROUTE_MAPPINGS = [
    {
        path: "/auth/*",
        remote: "auth/AuthApp",   // Exposed from MFE
    },
    {
        path: "/dashboard/*",
        remote: "dashboard/DashboardApp",
    },
    {
        path: "/reports/*",
        remote: "reports/ReportsApp",
    }
];
