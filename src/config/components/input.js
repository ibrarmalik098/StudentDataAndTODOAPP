import TextField from "@mui/material/TextField";

function SMInput(props) {
  const { label, type, variant, onChange, required, disabled, value, color } = props;
  return (
    <>
      <TextField
        id="outlined-basic"
        type={type}
        label={label}
        onChange={onChange}
        required={required}
        disabled={disabled}
        variant={variant ? variant : "outlined"}
        value={value}
        color={color}

      />
    </>
  );
}
export default SMInput;
