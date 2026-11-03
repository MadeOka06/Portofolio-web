---
name: Format Bureau Editorial Design System
description: Swiss-inspired minimalist editorial design system driven by visible structural grids, disciplined typography, and high-contrast literary aesthetics.
colors:
  primary: "#121212"
  secondary: "#585752"
  accent: "#D84227"
  background: "#F5F3EC"
  surface: "#EFECE3"
  surface-subtle: "#E9E5DA"
  border: "#DDD9CD"
  border-light: "#EAE6DC"
  text-primary: "#121212"
  text-secondary: "#585752"
  text-muted: "#87857E"
  success: "#2E6930"
  error: "#C23616"
typography:
  display-hero:
    fontFamily: "'Fraunces', Georgia, serif"
    fontSize: "clamp(3.5rem, 8vw, 7rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  h1:
    fontFamily: "'Fraunces', Georgia, serif"
    fontSize: "2.75rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  h2:
    fontFamily: "'Fraunces', Georgia, serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body-lg:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  code-folio:
    fontFamily: "'Fraunces', Georgia, serif"
    fontSize: "3.5rem"
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: "-0.02em"
  meta-mono:
    fontFamily: "'IBM Plex Mono', monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
    textTransform: "uppercase"
rounded:
  none: "0px"
  sm: "0px"
  md: "0px"
  lg: "0px"
  full: "9999px"
spacing:
  2xs: "4px"
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "64px"
  3xl: "96px"
  4xl: "128px"
components:
  navbar:
    backgroundColor: "transparent"
    borderColor: "{colors.border}"
    height: "56px"
    font: "{typography.meta-mono}"
  gridLine:
    borderColor: "{colors.border}"
    borderWidth: "1px"
  editorialRow:
    borderColor: "{colors.border}"
    borderTopWidth: "1px"
    borderBottomWidth: "0px"
    padding: "32px 0"
  underlineInput:
    backgroundColor: "transparent"
    borderBottom: "1px solid {colors.primary}"
    textColor: "{colors.text-primary}"
    padding: "8px 0"
    font: "{typography.meta-mono}"
  actionLink:
    textColor: "{colors.text-primary}"
    font: "{typography.meta-mono}"
    hoverOpacity: "0.6"
---

## Overview
Format Bureau's design system embodies Swiss structural rationalism merged with bespoke physical publication design. Created for an independent graphic and brand studio based in Zürich and New York, it treats the browser viewport as an architectonic printed broadsheet. The identity relies on deliberate constraints: strict visible 12-column construction, unyielding zero-radius geometry, and pure flat depth driven by typographic tension.

## Colors & Surface Architecture
- **Canvas (`#F5F3EC`):** A custom warm unbleached paper tone avoiding the harsh sterile glare of `#FFFFFF` while retaining organic warmth.
- **Ink Primary (`#121212`):** A softened carbon black used for primary typography and high-impact headlines, delivering a 16.8:1 contrast ratio (WCAG AAA).
- **Slate Secondary (`#585752`):** Carbon-derived grey utilized for methodology narratives and supporting body copy (7.2:1 contrast ratio, WCAG AAA).
- **Structural Lines (`#DDD9CD`):** 1px hairlines delineating columns and horizontal section rows without distracting from copy.
- **Signal Dot (`#D84227`):** High-saturation Swiss cinnabar used strictly for state indication (active navigation dot) and never for gratuitous decoration.

## Typography System
A deliberate tripartite typographic hierarchy combining three distinct type families:
1. **Display & Expressive Headers (Fraunces):** A warm, high-contrast serif variable face that carries dramatic character, expressive serifs, and sharp optical weights.
2. **Body & Method Explanations (Inter):** Neutral, highly legible humanist sans-serif for comfortable reading at small and medium measure.
3. **Navigation, Indexes, & Metadata (IBM Plex Mono):** Precise, technical monospace rendered with letter-spacing tracking (+0.08em) for administrative precision, references, and system markers.

## Spacing & Grid Geometry
- **12-Column Manifest Grid:** The 12-column layout is permanently exposed via 1px vertical borders across the viewport. Column gutters are eliminated in favor of clean internal padding.
- **Sectional Rhythms:** Vertical spacing follows an 8px base rhythm with substantial vertical leaps (64px to 128px) to establish confident editorial presence.
- **Proximity Law:** Headings sit tightly over their associated copy with top margins at least 3× larger than bottom margins to ensure grouping clarity.

## Shapes & Elevation
- **Zero Radius Law:** All elements possess an absolute `border-radius: 0px`. There are no rounded corners, no pill tags, and no rounded inputs.
- **Zero Shadow Law:** The design is completely flat (`box-shadow: none`). Spatial depth is established purely through horizontal hairlines, line-weight variation, and compositional contrast.

## Component Rules
- **Navigation:** Plain uppercase text items separated by generous inline gaps. The active link is identified by a left cinnabar dot (`•`).
- **Practice Rows:** Structured 3-column rows (Code, Title, Description) bounded by top and bottom 1px hairlines. Interactive states are limited to a subtle background change (`#EFECE3`) or underline apparition.
- **Newsletter Subscription:** Frameless input with a single active bottom border and text-only "SUBSCRIBE →" trigger.

## Rules to Never Break
- Never introduce drop shadows, glassmorphism, or multi-tone gradients.
- Never use border radii under any circumstances.
- Never hide or break the continuous vertical 12-column grid structure.
- Never substitute generic lorem ipsum for editorial studio narratives.