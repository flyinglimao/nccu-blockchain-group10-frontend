import { Link as RouterLink } from "react-router-dom";
import { Link, Toolbar, Box, AppBar, Button } from "@mui/material";
import { Wallet } from "./Wallet";

export function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link
            component={RouterLink}
            variant="h6"
            sx={{ flexGrow: 1, textDecoration: "none" }}
            to="/"
            color="inherit"
          >
            Enexco
          </Link>
          <div>
            <Button component={RouterLink} variant="inherit" to="/register">
              Register
            </Button>
            <Wallet />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
