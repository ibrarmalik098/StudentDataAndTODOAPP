import Button from "@mui/material/Button";

function SMButton(props) {
  const { label, onClick,type } = props;
  return (
    <>
      <Button type={type} onClick={onClick} variant="contained">
        {label}

      </Button>
    </>
  );
}
export default SMButton;
