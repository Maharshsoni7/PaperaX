
export const getTenants = async () => {
    return [
        { id: "1", name: "Tenant A", domain: "tenantA.example.com", logoUrl: "logoA.png", theme: { primaryColor: "#ff0000" } },
        { id: "2", name: "Tenant B", domain: "tenantB.example.com", logoUrl: "logoB.png", theme: { primaryColor: "#00ff00" } },
    ];
};
