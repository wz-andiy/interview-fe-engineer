import { AppBar, Toolbar, Typography, Container, Link, Box } from "@mui/material";

export default function Footer() {
  return (
    <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <Typography aria-label="aktuelle Version" title="aktuelle Version">
              Version: {process.env.NEXT_PUBLIC_BUILD_NUMBER} © 2022 - Wiener Zeitung
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Link
              href="/"
              aria-label="Hilfe und Support Link"
              title="Hilfe und Support aufrufen"
              role="button"
            >
              Hilfe &amp; Support
            </Link>
            <Link
              href="/"
              aria-label="AGB Link"
              title="Allgemeine Geschäftsbedingungen anzeigen"
              role="button"
            >
              AGB
            </Link>
            <Link href="/" aria-label="Impressum Link" title="Impressum anzeigen" role="button">
              Impressum
            </Link>
            <Link
              href="/"
              aria-label="Nutzungsbedingungen Link"
              title="Nutzungsbedingunen anzeigen"
              role="button"
            >
              Nutzungsbedingung
            </Link>
            <Link
              href="/"
              aria-label="Datenschutzerklärung Link"
              title="Datenschutzerklärung anzeigen"
              role="button"
            >
              Datenschutzerklärung
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
