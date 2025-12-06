import { TenantType } from "./tenant.types";

export default function TenantList({ tenants, onSelect, onAdd }: { tenants: TenantType[]; onSelect: (tenant: TenantType) => void; onAdd: () => void }) {
    return (
        <div>
            <h2>Tenants</h2>
            <button onClick={onAdd}>+ Add Tenant</button>

            <ul>
                {tenants.map((t) => (
                    <li key={t.id} onClick={() => onSelect(t)}>
                        {t.name} — {t.domain}
                    </li>
                ))}
            </ul>
        </div>
    );
}
