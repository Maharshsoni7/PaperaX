import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { PAPERAX_COLORS } from "@repo/ui";

interface HeaderProps {
    title: string;
    subtitle?: string;
}
export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {

    const FormHeader = styled(Box)({
        padding: "24px 32px",
        borderBottom: `1px solid ${PAPERAX_COLORS.border}`,
        backgroundColor: PAPERAX_COLORS.surface,
        display: "flex",
        alignItems: "center",
        gap: "16px",
    });
    return (
        <FormHeader >
            <Box>
                <Typography variant="h6" sx={{ color: PAPERAX_COLORS.text, fontWeight: 600 }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: PAPERAX_COLORS.textSecondary }}>
                    {subtitle}
                </Typography>
            </Box>
        </FormHeader >
    );

}