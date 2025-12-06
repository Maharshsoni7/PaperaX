import { useState } from "react";
import { TenantForm } from "./TenantForm";
import { TenantType } from "./tenant.types";

export default function AddTenantPage() {
    const [tenants, setTenants] = useState<TenantType[]>([]);

    const handleAddTenant = (tenant: TenantType) => {
        setTenants([...tenants, tenant]);
        alert(`Tenant ${tenant.name} added!`);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            <TenantForm onSubmit={handleAddTenant} />

            {tenants.length > 0 && (
                <div className="mt-10 w-full max-w-md">
                    <h3 className="text-xl font-bold mb-4">Tenants List</h3>
                    <ul className="space-y-2">
                        {tenants.map((t) => (
                            <li
                                key={t.id}
                                className="p-3 bg-white rounded-xl shadow flex justify-between items-center"
                            >
                                <span>{t.name}</span>
                                <span
                                    className="w-6 h-6 rounded-full"
                                    style={{ backgroundColor: t.primaryColor }}
                                ></span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
