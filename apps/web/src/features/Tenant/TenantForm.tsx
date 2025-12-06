import { TenantType } from "./tenant.types";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BusinessIcon from "@mui/icons-material/Business";
import DomainIcon from "@mui/icons-material/Domain";
import DoneIcon from "@mui/icons-material/Done";
import { styled } from "@mui/material/styles";
import { Header } from "@/components/Header";
import { PAPERAX_COLORS } from "@repo/ui";
import { InputTextField } from "@/components/InputText";


// Define your form values type
type TenantFormValues = {
    name: string;
    domain?: string | null;
    primaryColor: string;
    icon?: string | null;
    logo?: File | null;
};

// Validation schema
export const tenantSchema = yup.object({
    name: yup.string().required("Tenant Name is required"),
    domain: yup.string().nullable().optional(),
    primaryColor: yup.string().required("Primary Color is required"),
    icon: yup.string().nullable().optional(),
    logo: yup.mixed().nullable().optional(),
}).required();

interface TenantFormProps {
    onSubmit: (tenant: TenantType) => void;
}


const JiraCard = styled(Card)({
    borderRadius: "3px",
    border: `1px solid ${PAPERAX_COLORS.border}`,
    boxShadow: "0 1px 1px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: PAPERAX_COLORS.background,
    "&:hover": {
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
});


const FormSection = styled(Paper)({
    padding: "24px 32px",
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: `1px solid ${PAPERAX_COLORS.border}`,
    "&:last-child": {
        borderBottom: "none",
    },
});

const JiraButton = styled(Button)({
    borderRadius: "3px",
    textTransform: "none",
    fontWeight: 500,
    fontSize: "14px",
    padding: "8px 16px",
    height: "40px",
    "&.primary": {
        backgroundColor: PAPERAX_COLORS.blue,
        color: "white",
        "&:hover": {
            backgroundColor: "#0747A6",
        },
    },
    "&.secondary": {
        backgroundColor: PAPERAX_COLORS.blueLight,
        color: PAPERAX_COLORS.blue,
        border: `1px solid ${PAPERAX_COLORS.blue}`,
        "&:hover": {
            backgroundColor: "#B3D4FF",
        },
    },
});




const FormLabel = styled(InputLabel)({
    fontSize: "14px",
    fontWeight: 600,
    color: PAPERAX_COLORS.text,
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
});

const FormHint = styled(Typography)({
    fontSize: "12px",
    color: PAPERAX_COLORS.textSecondary,
    marginTop: "4px",
    marginBottom: "12px",
});




const FormActions = styled(Box)({
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    padding: "24px 32px",
    backgroundColor: PAPERAX_COLORS.surface,
    borderTop: `1px solid ${PAPERAX_COLORS.border}`,
});



export const TenantForm = ({ onSubmit }: TenantFormProps) => {
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<TenantFormValues>({
        resolver: yupResolver(tenantSchema) as any,
        defaultValues: {
            name: "",
            domain: null,
            primaryColor: PAPERAX_COLORS.blue,
            icon: null,
            logo: null,
        },
    });

    const submitHandler: SubmitHandler<TenantFormValues> = async (data) => {
        const newTenant: TenantType = {
            id: Date.now().toString(),
            name: data.name,
            domain: data.domain || undefined,
            primaryColor: data.primaryColor,
            icon: data.icon || undefined,
            logoUrl: data.logo ? URL.createObjectURL(data.logo) : undefined,
        };

        onSubmit(newTenant);
        reset({
            name: "",
            domain: null,
            primaryColor: PAPERAX_COLORS.blue,
            icon: null,
            logo: null,
        });
    };



    return (
        <JiraCard>
            <Header title="Create New Tenant" subtitle="Configure settings and branding for your new tenant" />
            <CardContent sx={{ padding: 0 }}>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <FormSection>
                        <FormLabel>
                            <BusinessIcon fontSize="small" />
                            Basic information
                        </FormLabel>
                        <FormHint>
                            Provide a name and optional domain for your organization
                        </FormHint>

                        <InputTextField
                            control={control}
                            errors={errors}
                            label="Tenant name *"
                            name="name"
                            placeholder="e.g., Engineering"
                        />


                        <Box>
                            <FormLabel>
                                <DomainIcon fontSize="small" />
                                Custom domain (optional)
                            </FormLabel>
                            <FormHint>
                                Set up a custom domain for branded access
                            </FormHint>
                            <InputTextField
                                control={control}
                                errors={errors}
                                label="Custom domain (optional)"
                                name="domain"
                                placeholder="your-company.tenantapp.com"
                            />
                        </Box>
                    </FormSection>

                    <FormActions>
                        <JiraButton
                            type="button"
                            className="secondary"
                            onClick={() => {
                                reset({
                                    name: "",
                                    domain: null,
                                    primaryColor: PAPERAX_COLORS.blue,
                                    icon: null,
                                    logo: null,
                                });
                            }}
                        >
                            Cancel
                        </JiraButton>
                        <JiraButton
                            type="submit"
                            className="primary"
                            disabled={isSubmitting}
                            startIcon={isSubmitting ? null : <DoneIcon />}
                        >
                            {isSubmitting ? "Creating..." : "Create organization"}
                        </JiraButton>
                    </FormActions>
                </form>
            </CardContent>
        </JiraCard>
    );
};