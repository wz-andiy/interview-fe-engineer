import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  Link,
  Menu,
  MenuItem,
  MenuList,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PersonFilled from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";
import * as React from "react";

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" elevation={2}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Link
              href="/"
              aria-label="Home Link"
              title="Home Link"
              role="img"
              sx={{ paddingX: "0px" }}
            >
              🚀
            </Link>
          </Box>
          <Box>
            <Button
              variant="text"
              size="large"
              aria-label="Benutzer"
              title="Benutzer"
              role="button"
              sx={{
                paddingX: "1.25rem",
                display: { xs: "none", md: "inline-flex" },
              }}
            >
              <PersonFilled />
              Vorname Nachname
            </Button>
            <Box
              sx={{
                display: { xs: "none", md: "inline-flex" },
              }}
            >
              <Button
                variant="text"
                size="medium"
                sx={{ width: "2rem", minWidth: "2rem" }}
                aria-label="Deutsch"
                title="Deutsch wählen"
                role="button"
              >
                DE
              </Button>
              <Typography sx={{ paddingY: "6px" }}>|</Typography>
              <Button
                variant="text"
                size="medium"
                sx={{ width: "2rem", minWidth: "2rem" }}
                aria-label="Englisch"
                title="Englisch wählen"
                role="button"
              >
                EN
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
