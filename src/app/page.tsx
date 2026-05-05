import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <h1>Welcome to AfyaBridge</h1>
      <p>
        AfyaBridge is a low-bandwidth, FHIR-aligned community health referral
        and follow-up platform that helps CHWs collect screening data, supports
        nurse-reviewed referrals, and produces interoperable health-system
        reporting.
      </p>
    </Container>
  );
}
