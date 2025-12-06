import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { PAPERAX_COLORS } from "@repo/ui";

import { Controller } from "react-hook-form";
const PaperxTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        borderRadius: "3px",
        backgroundColor: PAPERAX_COLORS.background,
        "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: PAPERAX_COLORS.blue,
            },
        },
        "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: PAPERAX_COLORS.blue,
                borderWidth: "2px",
            },
        },
    },
    "& .MuiInputLabel-root": {
        fontSize: "14px",
        color: PAPERAX_COLORS.textSecondary,
    },
    "& .MuiFormHelperText-root": {
        fontSize: "12px",
        marginLeft: "0",
        color: PAPERAX_COLORS.textSecondary,
    },
});
export const InputTextField: React.FC<{ control: any; errors: any; label: string; name: string; placeholder?: string, key?: string }> = ({ control, errors, label, name, placeholder, key }) => {


    return (
        <Box sx={{ mb: 3 }} >
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <>
                        <PaperxTextField
                            {...field}
                            label={label}
                            variant="outlined"
                            fullWidth
                            error={!!errors[name]}
                            helperText={errors[name]?.message}
                            placeholder={placeholder}
                        />
                    </>
                )}
            />
        </Box>
    )
}
