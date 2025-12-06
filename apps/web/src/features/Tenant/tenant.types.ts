export interface TenantType {
    id?: string;             // Unique tenant ID
    name: string;           // Tenant name
    domain?: string | null;
    logoUrl?: string;       // Branding
    theme?: TenantTheme;    // Optional theme config
    primaryColor: string; // Primary color for the tenant
    icon?: string | null;
}

export interface TenantTheme {
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    textColor?: string;
}

export interface TenantConfig {
    tenants: TenantType[];
    defaultTenantId: string;
}
