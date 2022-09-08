import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "@mui/system";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ mt: 3, mb: 11 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
}
