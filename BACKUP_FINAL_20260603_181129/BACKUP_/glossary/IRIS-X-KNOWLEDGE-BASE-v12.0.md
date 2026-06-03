# 📊 IRIS-X v12.0 — Knowledge Base & Technical Reference
**Last Updated:** June 3, 2026  
**Status:** Production Ready  
**Integration:** RI-ECOSYS Ecosystem  
**Author:** Ba P. Trần

---

## 🎯 Executive Summary

**IRIS-X** (Intelligent Real-time Index Signal eXchange) is a unified trading analysis platform consolidating 10 years of trading research into a single, modular application. It imports CSV data from Comsec and applies advanced microstructure analysis to generate executive-grade trading insights.

### Key Achievements (v12.0)

✅ **Sydney Datetime Formatting** — Snapshot times display as DD/MM/YYYY, h:mm:ss AM/PM  
✅ **Expandable Sections** — News and Scan lists hidden by default, toggle via buttons  
✅ **Top 5 Signals** — Triangle expand/collapse with WHY interpretation  
✅ **Multi-Engine Architecture** — OB, Trades, CoS, Signal, Phase engines  
✅ **Dynamic Portfolio Expansion** — Auto-creates datasets per stock (unlimited)  
✅ **CIE Report Generation** — Analyst-grade reports with phase scores, macro, news  
✅ **Workspace Persistence** — Save/load/export functionality  
✅ **No Real-Time Requirement** — CSV import workflow, not live streaming  

---

## 📁 File Locations

```
Primary:
  C:\Users\Ba Tran\OneDrive\projects\RI-ECOSYS\iris\iris-x.html (219 KB)

Mirror:
  C:\Users\Ba Tran\Downloads\RI-ECOSYS\index.html (219 KB)

Data:
  C:\Users\Ba Tran\OneDrive\projects\RI-ECOSYS\json1.json
  C:\Users\Ba Tran\Downloads\json1.json
```

---

## 🏗️ Architecture Overview

### 5 Core Processing Engines

```
┌─────────────────────────────────────────────────┐
│           CSV Import (Comsec Data)              │
│    [OB Dump] [Trades CSV] [CoS CSV]             │
└────────────────────┬────────────────────────────┘
                     ↓
     ┌───────────────────────────────────┐
     │    OB (Order Book Engine)         │
     │  → Bid/Ask depth analysis        │
     │  → Imbalance detection           │
     │  → Pressure patterns             │
     └────────┬────────────────────────┘
              ↓
     ┌───────────────────────────────────┐
     │   Trades Engine                   │
     │  → Flow pattern detection        │
     │  → Institutional signatures      │
     │  → Cascade signals               │
     └────────┬────────────────────────┘
              ↓
     ┌───────────────────────────────────┐
     │  CoS (Course of Sales) Engine     │
     │  → Tick-by-tick analysis         │
     │  → Momentum detection            │
     │  → Volume profile                │
     └────────┬────────────────────────┘
              ↓
     ┌───────────────────────────────────┐
     │ Signal Computation Engine (34)    │
     │  → Dark Pool Activity (DPA)      │
     │  → Block Pressure (BP)           │
     │  → Cascade Intensity (CI)        │
     │  → Venue Flow, Vol Regime, etc.  │
     └────────┬────────────────────────┘
              ↓
     ┌───────────────────────────────────┐
     │   WHY Phase Engine (P1-P6)        │
     │  → P1: Accumulation              │
     │  → P2: Breakout                  │
     │  → P3: Distribution              │
     │  → P4: Breakdown                 │
     │  → P5: Capitulation              │
     │  → P6: Systemic Fracture         │
     └────────┬────────────────────────┘
              ↓
     ┌───────────────────────────────────┐
     │ CIE Report Generation             │
     │  → Phase scores                  │
     │  → Top 5 signals                 │
     │  → Macro markets                 │
     │  → News headlines                │
     │  → Rotation analysis             │
     └────────┬────────────────────────┘
              ↓
        [Workspace Save/Export]
```

---

## 🔄 Data Flow (CSV Import Workflow)

### Step 1: User Imports Comsec Data
User exports three CSV files from Comsec:
- `order-book.csv` — Bid/ask depth
- `trades.csv` — Execution history  
- `course-of-sales.csv` — Tick data

### Step 2: Toolbar Import
**Button:** "Import json1.json" (in CIE Report toolbar)
- Parses CSV or JSON input
- Validates data format
- Populates portfolio array

### Step 3: Expand Workspace
**Button:** "Expand Workspace" 
- Auto-creates per-stock datasets
- Runs all 5 engines on each stock
- Generates 34 signals per stock
- Computes P1-P6 phase

### Step 4: CIE Report Generation
Auto-generates analyst-grade report:
- Snapshot metadata (Sydney time)
- Phase probability
- Macro markets summary
- Top 5 structural signals (with WHY interpretation)
- News list (expandable)
- Scan list (expandable, rotation data)
- Domain activity heatmap
- Allowed sectors
- AI Interpreter section

### Step 5: Export & Persist
User can:
- **Export as JSON** — Save full workspace state
- **Save locally** — Browser localStorage (auto-save every 30s)
- **Re-import** — Load prior analysis session

---

## 📊 CIE Report Structure (v12.0)

### Metadata Section
```
┌───────────────────────────────────────────┐
│ SNAPSHOT TIME (SYDNEY)                    │
│ 02/06/2026, 8:00:00 PM                   │
│                                           │
│ [📰 Show News] [🔍 Show Scan]            │
└───────────────────────────────────────────┘
```

**Components:**
- **Sydney Timestamp:** DD/MM/YYYY, h:mm:ss AM/PM format
- **UTC Reference:** ISO8601 format
- **Snapshot ID:** Raw millisecond timestamp
- **Toggle Buttons:** Expand News and Scan sections

### Phase Probability Section
```
Phase P1: ████░░░░░░ 40%
Phase P2: ██████░░░░ 60%
Phase P3: ████████░░ 80%
Phase P4: █████░░░░░ 50%
Phase P5: ███████░░░ 70%
Phase P6: ██████████ 100%
```

### Best-Core Signal Section
```
┌─────────────────────────────────────┐
│ 🟠 BEST-CORE SIGNAL (MOST IMPORTANT)│
│                                     │
│ CP | Imp:91 | Casc:6 | Conf:89%   │
│                                     │
│ WHY: Industrial metals demand      │
│ softens globally. High-grade       │
│ phosphate pressure. Influence      │
│ phase transition.                  │
│                                     │
│ ACTION: RECOMMEND                  │
└─────────────────────────────────────┘
```

### Top 5 Signals Section (Expandable)
```
[▼] TOP 5 STRUCTURAL SIGNALS [54 SIGNALS]

[#1] [CP] [Imp:91] [Casc:6] [Conf:89%]
     Industrial metals demand softens...
     [DOMAIN] [IMPACT] [CASCADE] [CONF]
     ACTION: RECOMMEND

[#2] [AL] [Imp:89] [Casc:5] [Conf:87%]
     ... 

[...3 more]
```

**Features:**
- Triangle toggle (▶/▼) for expand/collapse
- 4-column metrics grid per signal
- WHY interpretation (2-3 sentences)
- Governance action badge (RECOMMEND/HOLD/EXIT)
- Color-coded domain border

### News List Section (Expandable, Hidden by Default)
```
[📰 Show News] → [📰 Hide News]

┌─────────────────────────────────┐
│ NEWS FROM JSON1 [10 ARTICLES]   │
├─────────────────────────────────┤
│ [1] Services inflation remains..│
│ [2] Goods disinflation...       │
│ [3] Food inflation rises...     │
│ ... (scrollable)                │
└─────────────────────────────────┘
```

**Features:**
- Hidden by default (shows only button)
- Click to expand/collapse
- Scrollable list (max 400px height)
- Numbered articles
- From json1.news array

### Scan List Section (Expandable, Hidden by Default)
```
[🔍 Show Scan] → [🔍 Hide Scan]

┌──────────────────────────────────┐
│ SCAN ANALYSIS SUMMARY            │
├──────────────────────────────────┤
│ Leaders: [CP] [KE]               │
│ Laggers: [RG] [COM]              │
│                                  │
│ 34 structural signals detected   │
│ in macro cycle analysis          │
└──────────────────────────────────┘
```

**Features:**
- Hidden by default (shows only button)
- Rotation leaders (green tags)
- Rotation laggers (red tags)
- Signal count summary
- From json1.rotation, json1.signals

### Additional Sections
- **Macro Markets** — Commodity, FX, indices
- **Domain Activity** — Heatmap of sector concentration
- **Allowed Sectors** — Trading-permitted sectors
- **AI Interpreter** — Claude explanation (optional)

---

## 🔑 Key Functions (v12.0)

### snapshotIdToDateFormatted(snapshotId)
Converts millisecond timestamp to Sydney datetime

```javascript
function snapshotIdToDateFormatted(snapshotId) {
  var dt = new Date(Number(snapshotId));
  var opts = { 
    timeZone: 'Australia/Sydney', 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: true 
  };
  return dt.toLocaleString('en-AU', opts);
}

// Returns: "02/06/2026, 8:00:00 PM"
```

### expandAndRestoreWorkspace()
Auto-expands portfolio with per-stock datasets

```javascript
// Adds for each stock:
// - dataset.orderBook (OB data)
// - dataset.trades (Trades history)
// - dataset.courseOfSales (CoS data)
// - dataset.signals (34 computed metrics)
// - dataset.whyPhase (P1-P6 phase data)
```

### computeWhyPhase(stockData, ticker)
Calculates market regime (P1-P6)

```javascript
// Returns:
// {
//   phase: "P3",
//   compositeScore: 73,
//   decision: "DISTRIBUTE",
//   confidence: 0.82
// }
```

### exportWorkspaceReport()
Exports complete analysis as JSON file

```javascript
// Saves:
// - Full workspace (portfolio + datasets)
// - All computed signals
// - Phase history
// - Metadata (timestamps, IDs)
// - User-added notes
```

### toggleNewsSection()
Toggle news list visibility

```javascript
// On click:
// 1. Toggle .hidden class on #news-list
// 2. Change button text: "Show News" ↔ "Hide News"
// 3. Smooth CSS transition animation
```

### toggleScanSection()
Toggle scan list visibility

```javascript
// On click:
// 1. Toggle .hidden class on #scan-list
// 2. Change button text: "Show Scan" ↔ "Hide Scan"
// 3. Smooth CSS transition animation
```

---

## 📐 Signal Metrics Reference

### 34 Structural Signals
Computed automatically from CSV imports

| # | Signal | Category | Source |
|---|--------|----------|--------|
| 1 | Dark Pool Activity (DPA) | Flow | Trades |
| 2 | Block Pressure (BP) | Volume | OB |
| 3 | Cascade Intensity (CI) | Momentum | CoS |
| 4 | Venue Flow (VF) | Micro | Trades |
| 5 | Volatility Regime (VR) | Volatility | CoS |
| ... | (29 more) | Various | Various |

### Per-Signal Metrics
Each signal displays:
- **Domain** — Market region (Commodities, Energy, etc.)
- **Impact** — 0-100 scale (predictive value)
- **Cascade** — 0-10 scale (confirmation depth)
- **Confidence** — 0-100% (statistical confidence)

### Composite Score
```
Composite = (Impact × Cascade × Confidence) / 100
```

---

## 💾 Workspace Persistence

### Auto-Save
Every 30 seconds, workspace saves to browser localStorage

```javascript
setInterval(() => {
  localStorage.setItem('iris-workspace', JSON.stringify(window.state));
}, 30000);
```

### Manual Save
User clicks "Export Workspace" → Downloads JSON file

```javascript
const workspace = {
  portfolio: [...],
  datasets: {...},
  phase: "P3",
  signals: [...],
  metadata: {
    timestamp: ISO8601,
    snapshotId: 1780430400341,
    sydneyTime: "02/06/2026, 8:00:00 PM"
  }
};
```

### Import Previous Session
User clicks "Import CIE File" → Loads JSON workspace

---

## 🎨 UI/UX Features (v12.0)

### Typography
- **Metadata labels:** Font-weight 600-700, color #1a1a1a (dark)
- **Signal headers:** Bold uppercase, 14px
- **News/Scan lists:** 500-600 weight, readable blue links

### Expandable Sections
```css
.hidden {
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.visible {
  display: block;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}
```

### Toggle Buttons
```html
<button onclick="toggleNewsSection()" class="btn-secondary">
  📰 Show News
</button>

<!-- After click -->
<button onclick="toggleNewsSection()" class="btn-secondary">
  📰 Hide News
</button>
```

### Expand Icon (Signals)
Triangle toggle: ▶ (collapsed) / ▼ (expanded)

---

## 🚀 Deployment Status

### Current Version
- **Version:** v12.0
- **Release Date:** June 3, 2026
- **Status:** Production Ready
- **File Size:** 219 KB
- **Last Updated:** June 3, 2026

### Deployment Locations
1. **OneDrive:** `C:\Users\Ba Tran\OneDrive\projects\RI-ECOSYS\iris\iris-x.html`
2. **Downloads (Mirror):** `C:\Users\Ba Tran\Downloads\RI-ECOSYS\index.html`

### Browser Compatibility
✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  

---

## 📋 Version History

### v12.0 (Current — June 3, 2026)
✅ Added Sydney datetime formatting (DD/MM/YYYY, h:mm:ss AM/PM)  
✅ Expandable News list (hidden by default)  
✅ Expandable Scan list (hidden by default)  
✅ Improved typography (dark, bold labels)  
✅ CIE Report toolbar refinement  

### v11.0 (May 28, 2026)
✅ Top 5 Signals expandable section  
✅ Better typography throughout  
✅ Cleaner toolbar (4 buttons only)  
✅ WHY interpretation for signals  

### v10.0 (May 20, 2026)
✅ Workspace Object Model v10.0  
✅ Dynamic portfolio expansion  
✅ Per-stock dataset containers  
✅ CIE Report generation  

---

## ❓ FAQ

**Q: Is IRIS-X real-time?**  
A: No. It's CSV-import based. Users export Comsec data, import into IRIS-X, and analyze. Not streaming/live.

**Q: How many stocks can it analyze?**  
A: Unlimited. The workspace expansion auto-creates datasets per ticker.

**Q: Where does the data come from?**  
A: User exports CSV files from Comsec (order book, trades, course of sales).

**Q: What format are timestamps?**  
A: Sydney format (DD/MM/YYYY, h:mm:ss AM/PM) for human readability, ISO8601 for backend.

**Q: Can I hide the news and scan lists?**  
A: Yes. Click the toggle buttons ("Show News" / "Show Scan"). Hidden by default.

**Q: What does "34 signals" mean?**  
A: 34 different structural microstructure patterns are auto-computed from the CSV data.

---

## 🔗 Integration with RI-ECOSYS

IRIS-X is part of the broader RI-ECOSYS ecosystem:

| Component | Purpose | Status |
|-----------|---------|--------|
| **IRIS-X** | Trading analysis | ✅ v12.0 Production |
| **CIE-PAE** | Portfolio allocation | ✅ v2.0 Production |
| **AI-Balance** | Governance framework | ✅ v2.0 Production |
| **NeuroKernel** | Signal orchestration | ✅ Production |
| **Masterbook** | Knowledge base | ✅ Production |

---

## 📚 Related Documentation

- **PAE-07-GLOSSARY.md** — Complete term definitions (updated with IRIS-X)
- **AI-BALANCE-V2-MASTERBOOK.md** — Governance and governance architecture
- **CLAUDE-MEMORY-RI-ECOSYS.md** — System-wide context and port mapping
- **IRIS-X LinkedIn Article** — Public announcement and technical overview

---

## ✅ Implementation Checklist (v12.0)

- [x] Sydney datetime conversion function (`snapshotIdToDateFormatted`)
- [x] News list section (HTML + CSS)
- [x] Scan list section (HTML + CSS)
- [x] Toggle buttons (📰 Show/Hide News, 🔍 Show/Hide Scan)
- [x] Expandable signals (Top 5 with triangle toggle)
- [x] Typography improvements (dark, bold labels)
- [x] CIE Report toolbar (4 distinct buttons)
- [x] Workspace persistence
- [x] Export functionality
- [x] File deployment (OneDrive + Downloads mirror)

---

## 🎯 Next Steps (Future Versions)

- **v13.0:** Add options flow data integration
- **v14.0:** Institutional flow patterns (if data available)
- **v15.0:** Real-time Comsec API integration (if available)
- **v16.0:** Mobile-responsive dashboard
- **v17.0:** Batch import multiple CSV files
- **v18.0:** Advanced filtering and search

---

**Status:** ✅ PRODUCTION READY  
**Last Reviewed:** June 3, 2026  
**Created by:** RI-ECOSYS Development Team

---

## 📞 Quick Reference

| Need | Answer |
|------|--------|
| How to import data? | Export CSV from Comsec, click "Import json1.json" button |
| Where's the file? | `iris-x.html` in OneDrive or `index.html` in Downloads |
| How many signals? | 34 structural microstructure signals (auto-computed) |
| What's the phase? | P1-P6 (Accumulation to Systemic Fracture) |
| Can I hide sections? | Yes, News and Scan are hidden by default, toggle via buttons |
| How's data saved? | Auto-save to localStorage every 30s, or manual export as JSON |
| Is it live? | No, it's CSV-based analysis. Not real-time streaming. |
