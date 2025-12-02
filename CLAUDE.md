# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a data visualization project for the NFIB (National Federation of Independent Business) Small Business Optimism Index. The project consists of a standalone HTML dashboard that displays quarterly trends and analysis of business optimism and uncertainty indices.

## Architecture

- **Single-file HTML dashboard** (`nfib-optimism-quarterly-chart.html`)
  - Self-contained visualization with embedded CSS and JavaScript
  - Uses Chart.js 4.4.1 (loaded from CDN) for chart rendering
  - Contains hardcoded quarterly data for optimism and uncertainty indices
  - Displays metrics, trend charts, and detailed quarterly analysis

## Key Components

1. **Data Structure**: Quarterly data arrays embedded in JavaScript (Q1 2023 - Q3 2025)
   - Optimism Index values
   - Uncertainty Index values
   - 52-year average baseline (98)

2. **Visual Elements**:
   - Dual-axis line chart with optimism and uncertainty trends
   - Metric cards showing current values and changes
   - Detailed quarterly breakdowns with positive/negative factors
   - Color-coded impact indicators and trend arrows

## Development Tasks

### Updating Data
- Modify the `quarterlyData` object in the script section (lines 514-524)
- Update metric cards with new current values
- Add new quarterly analysis periods in the drivers-analysis section

### Modifying Charts
- Chart configuration starts at line 532
- Uses dual y-axes for optimism (left) and uncertainty (right) indices
- Customizable through Chart.js options

### Styling Changes
- All CSS is embedded in the `<style>` section (lines 8-263)
- Uses modern CSS with grid layouts and custom properties
- Color scheme: Primary blue (#3b82f6), secondary purple (#8b5cf6)

## Testing & Validation

Since this is a standalone HTML file:
- Open directly in any modern web browser to test
- Verify Chart.js CDN is accessible
- Check responsive behavior at different screen sizes
- Validate data points match source NFIB reports