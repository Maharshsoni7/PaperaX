import { TenantType } from "./tenant.types";

export default function TenantDetail({ tenant, onBack, onEdit }: { tenant: TenantType; onBack: () => void; onEdit: () => void }) {
    return (
        <div>
            <button onClick={onBack}>Back</button>

            <h2>{tenant.name}</h2>
            <p>Domain: {tenant.domain}</p>

            <button onClick={onEdit}>Edit Tenant</button>
        </div>
    );
}
