---
version: "alpha"
name: "AfyaBridge"
description: "A calm, clinical, community-centered design system for a low-bandwidth digital health referral and follow-up platform."

colors:
  primary: "#0F766E"
  on-primary: "#FFFFFF"
  primary-container: "#D9F5F0"
  on-primary-container: "#063F3B"

  secondary: "#102A43"
  on-secondary: "#FFFFFF"
  secondary-container: "#E6EEF5"
  on-secondary-container: "#102A43"

  accent: "#C2410C"
  on-accent: "#FFFFFF"
  accent-container: "#FFEDD5"
  on-accent-container: "#7C2D12"

  success: "#15803D"
  on-success: "#FFFFFF"
  success-container: "#DCFCE7"
  on-success-container: "#14532D"

  warning: "#B45309"
  on-warning: "#FFFFFF"
  warning-container: "#FEF3C7"
  on-warning-container: "#78350F"

  error: "#B42318"
  on-error: "#FFFFFF"
  error-container: "#FEE4E2"
  on-error-container: "#7A271A"

  risk-critical: "#991B1B"
  on-risk-critical: "#FFFFFF"
  risk-critical-container: "#FEE2E2"
  on-risk-critical-container: "#7F1D1D"

  background: "#F7FAF9"
  surface: "#FFFFFF"
  surface-muted: "#EEF7F5"
  surface-subtle: "#F8FAFC"

  text-primary: "#102A43"
  text-secondary: "#52616B"
  text-muted: "#697586"
  text-disabled: "#9AA4B2"

  border: "#D9E6E2"
  border-strong: "#B7CAC4"
  divider: "#E5ECEA"

  focus-ring: "#14B8A6"

typography:
  display-lg:
    fontFamily: "Public Sans"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: "3.5rem"
    letterSpacing: "-0.04em"

  h1:
    fontFamily: "Public Sans"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: "2.75rem"
    letterSpacing: "-0.03em"

  h2:
    fontFamily: "Public Sans"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: "2.375rem"
    letterSpacing: "-0.025em"

  h3:
    fontFamily: "Public Sans"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: "2rem"
    letterSpacing: "-0.02em"

  title-md:
    fontFamily: "Public Sans"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: "1.75rem"

  body-lg:
    fontFamily: "Public Sans"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.625rem"

  body-md:
    fontFamily: "Public Sans"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: "1.5rem"

  body-sm:
    fontFamily: "Public Sans"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: "1.375rem"

  label:
    fontFamily: "Public Sans"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: "1.25rem"

  caption:
    fontFamily: "Public Sans"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: "1rem"

  mono-sm:
    fontFamily: "Roboto Mono"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: "1.25rem"

rounded:
  xs: "6px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  full: "999px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 18px"

  button-secondary:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 18px"

  button-danger:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-error}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 18px"

  card-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"

  card-muted:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"

  chip-safe:
    backgroundColor: "{colors.success-container}"
    textColor: "{colors.on-success-container}"
    rounded: "{rounded.full}"
    padding: "4px 10px"

  chip-warning:
    backgroundColor: "{colors.warning-container}"
    textColor: "{colors.on-warning-container}"
    rounded: "{rounded.full}"
    padding: "4px 10px"

  chip-risk:
    backgroundColor: "{colors.risk-critical}"
    textColor: "{colors.on-risk-critical}"
    rounded: "{rounded.full}"
    padding: "4px 10px"

  input-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "12px 14px"
---

## Overview

AfyaBridge uses a design language called **Clinical Calm + Community Operations**.

The product should feel trustworthy, calm, lightweight, and operational. It is built for community health workflows where CHWs capture screenings, nurses review risk queues, supervisors monitor follow-ups, and program teams export indicators.

The interface should never feel like a flashy AI product. AI should appear as a quiet assistant that helps summarize, prioritize, and explain — while humans remain responsible for clinical decisions.

## Colors

The palette is centered on clinical teal, warm health-system neutrals, and clear operational status colors.

- **Primary Teal (#0F766E):** Used for primary actions, active navigation, key progress states, and brand moments.
- **Deep Slate (#102A43):** Used for headings, high-emphasis text, and supervisor/nurse dashboard structure.
- **Warm Off-white (#F7FAF9):** Used as the main app background to reduce harshness.
- **White Surface (#FFFFFF):** Used for cards, forms, tables, modals, and review panels.
- **Risk Red (#991B1B / #B42318):** Used sparingly for urgent risk, overdue referral, safety issue, and critical escalation states.
- **Warning Amber (#B45309):** Used for pending review, missing data, sync issues, and overdue follow-up.
- **Success Green (#15803D):** Used for safe, completed, synced, validated, and resolved states.

Do not overuse red. A red state should mean the user needs to act.

## Typography

Use **Public Sans** for all product UI.

The typography should feel clean, serious, and readable on low-cost devices. Avoid decorative fonts. Avoid overly large headings in operational screens. Most dashboard screens should prioritize scannability over marketing expression.

Use heavier weights for:

- Page titles
- Section headers
- Queue counts
- Risk labels
- Primary buttons

Use regular weights for:

- Body copy
- Form helper text
- Table content
- AI explanations

## Layout

Use generous spacing, but keep screens dense enough for operational work.

Mobile CHW screens should use single-column layouts with large tap targets.

Nurse and supervisor dashboards can use two-column or three-column layouts:

- Left: navigation or filters
- Center: queue/list/table
- Right: detail, insight card, or action panel

Important operational states should be visible without scrolling.

## Elevation & Depth

Use subtle shadows only. The product should feel practical, not glossy.

Cards should use:

- White surface
- Soft border
- Light shadow
- 16px corner radius

Risk cards may use stronger borders or tinted backgrounds, but should not become visually noisy.

## Shapes

Use rounded corners to make the product approachable, but avoid overly playful shapes.

Recommended:

- Inputs: 12px
- Buttons: 12px
- Cards: 16px
- Modals: 20px
- Chips: fully rounded

## Components

### Buttons

Primary buttons should be teal with white text. Use them for the most important action on a screen:

- Submit screening
- Generate review
- Validate recommendation
- Create referral
- Mark follow-up complete

Danger buttons should only be used for critical destructive or urgent actions.

### Cards

Cards are the main layout unit. Use them for:

- Screening summaries
- AI insight cards
- Referral details
- Follow-up tasks
- Dashboard metrics
- Patient snapshots

Cards should have clear headings, compact metadata, and obvious next actions.

### Forms

Forms should be calm, readable, and mobile-first.

Use:

- Clear labels
- Helper text where needed
- Section headers
- Step-based grouping for long screenings
- Required indicators
- Inline validation

Do not show too many fields at once on CHW mobile screens.

### Status Chips

Status chips should be short and obvious.

Examples:

- Synced
- Pending sync
- Needs review
- High risk
- Safe
- Overdue
- Completed
- Referred

### AI Insight Card

AI-generated content should be clearly labeled.

The AI card should include:

- Summary
- Risk level
- Reasons
- Missing data
- Recommended workflow action
- Human validation state

Always include a human validation action near AI output.

## Do's and Don'ts

### Do

- Prioritize clarity over decoration.
- Make risk and overdue states obvious.
- Use teal for constructive action.
- Use red only when action is urgent.
- Make forms readable on mobile.
- Show sync status clearly.
- Keep AI language humble and reviewable.
- Use cards, queues, and timelines to show workflow progress.

### Don't

- Do not make the UI look like a generic SaaS analytics dashboard.
- Do not make AI recommendations look like final clinical decisions.
- Do not use bright neon colors.
- Do not overload CHW screens with dense tables.
- Do not hide referral status.
- Do not use tiny text for form questions.
- Do not rely on color alone for risk state.