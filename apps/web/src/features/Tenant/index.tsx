import { useEffect, useState } from "react";
import { getTenants } from "./tenant.api";
import TenantList from "./TenantList";
import TenantDetail from "./TenantDetail";

import { TenantType } from "./tenant.types";
import { TenantForm } from "./TenantForm";


export default function Tenant() {


    const onSubmit = (tenant: TenantType) => {
        console.log("Submitting tenant:", tenant);

        // Here you would normally handle form submission, e.g., save to API
        // For now, we just go back to the list view
        // setMode("list");
        // loadTenants();
    }

    return (
        <div style={{ padding: 20 }}>
            <TenantForm onSubmit={onSubmit} />
        </div>
    );
}
