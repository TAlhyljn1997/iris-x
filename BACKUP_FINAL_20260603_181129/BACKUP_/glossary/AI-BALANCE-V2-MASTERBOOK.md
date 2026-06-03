# 📖 AI-Balance v2.0 - Comprehensive Masterbook & Knowledge Base

**Version:** 2.0  
**Last Updated:** May 26, 2026  
**Author:** Ba Trần  
**Status:** Production Ready  

---

## 📑 Table of Contents

1. [Executive Summary](#executive-summary)
2. [Core Concepts](#core-concepts)
3. [Architecture Overview](#architecture-overview)
4. [RIOS System (Resonance Intelligence Operating System)](#rios-system)
5. [Components & Modules](#components--modules)
6. [API Documentation](#api-documentation)
7. [Integration Guide](#integration-guide)
8. [Deployment Guide](#deployment-guide)
9. [Governance Pipeline](#governance-pipeline)
10. [Glossary of Terms](#glossary-of-terms)
11. [Best Practices](#best-practices)
12. [Troubleshooting](#troubleshooting)
13. [Use Cases](#use-cases)
14. [Future Roadmap](#future-roadmap)
15. [IRIS-X Integration (New v12.0)](#iris-x-integration-new-v120)

---

## Executive Summary

### What is AI-Balance v2.0?

**AI-Balance v2.0** is a production-ready governance framework for AI applications that intelligently balances human authority with AI autonomy. It's designed for sensitive domains (health, legal, finance, safety) where human oversight is critical.

### Key Features

✅ **Conservation Law:** HAI + APR = 1.0 (always maintains balance)  
✅ **Domain-Aware:** 8 domain classifications with specific governance rules  
✅ **Real-Time Metrics:** HAI, APR, DI displayed and updated instantly  
✅ **Crisis Detection:** Category A instant detection (no LLM delay)  
✅ **LIL Engine:** 4-stage validation pipeline for safety  
✅ **Learning System:** Adapts based on user feedback  
✅ **Audit Trail:** Complete governance history with SHA-256 chaining  
✅ **Production Ready:** Tested, documented, deployable  

### Perfect For

- 🏥 Healthcare platforms (doctor AI assistants)
- ⚖️ Legal tech (AI lawyers)
- 💰 Fintech (investment advisors)
- 🚨 Crisis helplines (suicide/abuse hotlines)
- 🏢 Enterprise AI governance
- 🌍 Community support platforms
- 🇻🇳 Vietnamese-specific content filtering

---

## Core Concepts

### 1. HAI (Human Authority Index)

**Definition:** Percentage of human oversight required for a query  
**Range:** 0-100% (typically 40-85%)  
**Formula:** Determined by domain + sensitivity level

| Domain | Min HAI | Max HAI | Reason |
|--------|---------|---------|---------|
| General | 40% | 60% | Low risk, AI-friendly |
| Health | 65% | 75% | Medical decisions need human review |
| Finance | 70% | 80% | Money decisions critical |
| Legal | 75% | 85% | Legal advice must be reviewed by lawyers |
| Safety | 80% | 95% | Emergency/crisis situations |
| Code | 50% | 70% | Programming moderately safe |

**Examples:**
- General question "What's the capital of France?" → HAI 50%
- Health question "I have chest pain" → HAI 75%
- Safety question "Am I at suicide risk?" → HAI 90%

### 2. APR (AI Participation Ratio)

**Definition:** Percentage of AI autonomy allowed  
**Formula:** APR = 1 - HAI  
**Range:** 15-60%

**Conservation Law:** `HAI + APR = 1.0 ± ε (where ε = 0.001)`

**Examples:**
- If HAI = 75%, then APR = 25%
- If HAI = 50%, then APR = 50%
- If HAI = 90%, then APR = 10%

### 3. DI (Decisional Index)

**Definition:** Balance indicator showing who controls the response  
**Formula:** DI = HAI - APR

**Interpretation:**
- **DI > 0:** Human-led (positive value = human control)
- **DI < 0:** AI-led (negative value = AI control)
- **DI = 0:** Perfectly balanced (rare)

**Examples:**
- HAI 70%, APR 30% → DI = +40 (Human-Led ✓)
- HAI 60%, APR 40% → DI = +20 (Human-Led ✓)
- HAI 40%, APR 60% → DI = -20 (AI-Led ⚠️)

### 4. Epsilon (ε) Validation

**Definition:** Tolerance for rounding errors in conservation law  
**Value:** 0.001 (0.1%)  
**Purpose:** Ensure HAI + APR stays between 0.999 and 1.001

**Check:** `abs((HAI + APR) - 1.0) < 0.001`

---

## Architecture Overview

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    User Interface Layer                      │
│                  (Đồng Hành AI Frontend)                    │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Chat Interface | Metrics Display | Real-time Status │   │
│  └────────────────────────┬─────────────────────────────┘   │
│                           │ HTTP/HTTPS                       │
└───────────────────────────┼───────────────────────────────────┘
                            ▼
                    ┌─────────────────┐
                    │  NGINX Gateway  │
                    │ (Port 80/443)   │
                    └────────┬────────┘
                    ┌────────┴────────┐
                    ▼                 ▼
            ┌──────────────┐   ┌──────────────┐
            │   Static     │   │  Proxy to    │
            │   Files      │   │  Backend API │
            │  (HTML/CSS)  │   │  (Port 7070) │
            └──────────────┘   └──────┬───────┘
                                      ▼
        ┌─────────────────────────────────────────────────┐
        │         AI-Balance v2.0 Backend API            │
        │            (Node.js Express Server)            │
        │                  Port 7070                      │
        └────────────────────┬────────────────────────────┘
                             ▼
        ┌──────────────────────────────────────┐
        │   9-Step Decision Pipeline (Core)    │
        │                                      │
        │  1. Input Validation                 │
        │  2. Domain Classification            │
        │  3. Intent Detection                 │
        │  4. Risk Assessment                  │
        │  5. Boundary Check                   │
        │  6. Policy Validation                │
        │  7. HAI/APR Calculation              │
        │  8. Escalation Routing               │
        │  9. Audit Logging                    │
        └──────────────────────────────────────┘
                             ▼
        ┌──────────────────────────────────────┐
        │    8 Governance Modules              │
        │                                      │
        │  • Domain Classifier                 │
        │  • Risk Assessor                     │
        │  • Boundary Enforcer                 │
        │  • Policy Enforcer                   │
        │  • HAI/APR Calculator                │
        │  • Escalation Router                 │
        │  • Audit Logger                      │
        │  • AIC Router                        │
        └──────────────────────────────────────┘
                             ▼
        ┌──────────────────────────────────────┐
        │   Governance Decision & Response     │
        │   (Returned to Frontend)             │
        └──────────────────────────────────────┘
```

### Network Flow

```
User Query (Browser)
       ↓
HTTPS Request to ri-ecosys.com/api/check-input
       ↓
NGINX Routes to localhost:7070
       ↓
Backend Receives Request
       ↓
9-Step Pipeline Processing
       ↓
Governance Decision Made
       ↓
Response with Metrics (HAI/APR/DI)
       ↓
NGINX Returns via HTTPS
       ↓
Frontend Displays Results + Governance Status
```

---

## RIOS System

### What is RIOS v2.1?

**RIOS** = **Resonance Intelligence Operating System**

A governance framework that maintains resonance (balance) between human and AI decision-making through conservation laws.

### RIOS Principles

1. **Conservation Law:** HAI + APR = 1.0
2. **Domain Awareness:** Different domains have different requirements
3. **Real-Time Metrics:** Constant monitoring and display
4. **Transparency:** All decisions logged and explainable
5. **Learning:** System adapts based on feedback
6. **Safety First:** Human authority increases for critical domains

### RIOS Conservation Layer

```javascript
// Pseudocode for Conservation Layer
function verifyConservation(hai, apr) {
  const epsilon = 0.001;
  const sum = hai + apr;
  const isValid = Math.abs(sum - 1.0) < epsilon;
  
  if (!isValid) {
    apr = 1 - hai; // Correct the rounding error
  }
  
  return { hai, apr, valid: isValid };
}
```

### Sentinel Shield (4 Levels)

**Sentinel Shield** = Real-time governance monitoring system

| Level | APR Range | Status | Action |
|-------|-----------|--------|--------|
| 0 | APR ≤ 70% | 🟢 SAFE | Normal operation |
| 1 | 70% < APR ≤ 80% | 🟡 CAUTION | Increase monitoring |
| 2 | 80% < APR ≤ 90% | 🟠 WARNING | Human review requested |
| 3 | APR > 90% | 🔴 CRITICAL | Emergency override (HAI=95%) |

---

## Components & Modules

### 8 Governance Modules

#### 1. Domain Classifier (`ai-balance-domain-classifier.js`)

**Purpose:** Identify what type of query the user is asking

**8 Domains:**
1. **HEALTH** - Medical, symptoms, treatment, mental health
2. **LAW** - Legal advice, contracts, rights, court
3. **FINANCE** - Money, investments, trading, banking
4. **CODE** - Programming, debugging, algorithms
5. **SAFETY** - Violence, harm, abuse, crisis
6. **PLANNING** - Strategy, roadmap, project management
7. **IDENTITY** - "Who are you?", AI capabilities, role
8. **GENERAL** - Everything else

**Input:** User query (string)  
**Output:** Domain classification with confidence score

**Example:**
```
Input: "I have chest pain"
Output: { domain: "HEALTH", confidence: 0.95 }
```

#### 2. Risk Assessor (`ai-balance-risk-assessor.js`)

**Purpose:** Evaluate how risky the query is

**Risk Levels:**
- **LOW** (0-30): General questions, safe topics
- **MEDIUM** (30-70): Sensitive domains, some oversight needed
- **HIGH** (70-90): Dangerous content, high oversight required
- **CRITICAL** (90-100): Emergencies, immediate intervention needed

**Input:** Query + Domain  
**Output:** Risk level (0-100), reason, intent

**Example:**
```
Input: "Is there a suicide risk here?"
Output: {
  level: 95,
  reason: "Safety domain + suicide mention",
  intent: "CRISIS_ASSESSMENT"
}
```

#### 3. Boundary Enforcer (`ai-balance-boundary-enforcer.js`)

**Purpose:** Check if query violates domain boundaries

**Boundaries by Domain:**
- HEALTH: No diagnosis without medical professional verification
- LAW: No legal representation without attorney
- FINANCE: No guaranteed investment advice
- SAFETY: No harm encouragement, immediate escalation

**Input:** Query + Domain  
**Output:** Boolean (should_block), violations list

#### 4. Policy Enforcer (`ai-balance-policy-enforcer.js`)

**Purpose:** Verify query follows organizational policies

**Policies:**
- No Vietnamese communist propaganda
- No NSFW explicit content (except medical context)
- No discrimination content
- No misinformation

**Input:** Query  
**Output:** Boolean (policy_violated), violation type

#### 5. HAI/APR Calculator (`ai-balance-hai-apr-calculator.js`)

**Purpose:** Calculate governance metrics for the domain

**Calculation:**
1. Get domain's HAI range (min/max)
2. Adjust HAI based on risk level
3. Calculate APR = 1 - HAI
4. Validate epsilon
5. Apply learning adjustments from history

**Example:**
```
Domain: HEALTH
Risk: 75 (HIGH)
Base HAI: 70%
Adjusted HAI: 75% (increased due to risk)
APR: 25%
DI: +50 (Human-Led)
```

#### 6. Escalation Router (`ai-balance-escalation-router.js`)

**Purpose:** Route high-risk queries to appropriate handlers

**Escalation Levels:**
- **Q1** - General queries, standard processing
- **Q2** - Medium risk, logging enabled
- **Q3** - High risk, supervisor notification
- **Q4** - Critical, immediate human intervention

**Routing Logic:**
```
If Risk > 80 AND Domain in [SAFETY, LEGAL, FINANCE]
  → Escalate to Q3/Q4
Else
  → Process normally (Q1/Q2)
```

#### 7. Audit Logger (`ai-balance-audit-logger.js`)

**Purpose:** Log all governance decisions for compliance

**Logged Information:**
- Request ID (UUID)
- Timestamp
- User query
- Domain classified
- Risk assessment
- HAI/APR values
- Decision (APPROVED/BLOCKED)
- Escalation level
- Reasoning

**Security:** SHA-256 chaining prevents tampering

#### 8. AIC Router (`ai-balance-aic-router.js`)

**Purpose:** Route to appropriate AI model based on domain

**Models Available:**
- GEMINI - General, creative
- GPT - Code, technical
- CLAUDE - Analysis, safety-conscious
- GROK - Humor, edge cases
- DEFAULT - Fallback

**Routing:**
```
HEALTH → CLAUDE (safety-conscious)
CODE → GPT (technical)
GENERAL → GEMINI (versatile)
SAFETY → CLAUDE (careful)
```

---

## API Documentation

### Base URL

**Development:** `http://localhost:7070`  
**Production:** `https://ri-ecosys.com/api`

### Endpoints

#### 1. POST `/api/check-input`

**Purpose:** Primary governance check for user input

**Request:**
```json
{
  "question": "What are the RI-ECOSYS governance requirements?"
}
```

**Response:**
```json
{
  "success": true,
  "timestamp": "2026-05-26T08:31:17.312Z",
  "data": {
    "success": true,
    "requestId": "c351b819-52dc-4109-9956-bc9f8183bd55",
    "decision": {
      "approved": true,
      "escalationLevel": "Q4",
      "recommendedAIC": "CLAUDE"
    },
    "processingTimeMs": 1
  }
}
```

**Query Parameters:** None  
**Authentication:** None (currently open)  
**Rate Limit:** Recommended 10 req/sec per IP

---

#### 2. POST `/api/check-output`

**Purpose:** Validate AI output before returning to user

**Request:**
```json
{
  "output": "AI response text",
  "domain": "health"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "approved": true,
    "violations": []
  }
}
```

---

#### 3. GET `/api/domains`

**Purpose:** List all domain configurations

**Response:**
```json
{
  "success": true,
  "data": {
    "HEALTH": {
      "keywords": ["health", "medical", "doctor", ...],
      "description": "Medical and health-related content"
    },
    "LAW": {...},
    ...
  }
}
```

---

#### 4. GET `/api/audit/logs`

**Purpose:** Retrieve audit logs (filtered)

**Query Parameters:**
- `domain` - Filter by domain
- `startDate` - From date (ISO 8601)
- `endDate` - To date (ISO 8601)
- `limit` - Max results (default: 100)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "timestamp": "2026-05-26T08:31:17Z",
      "domain": "health",
      "riskValue": 75,
      "decision": "APPROVED",
      "escalationLevel": "Q3"
    }
  ]
}
```

---

#### 5. GET `/api/audit/stats`

**Purpose:** Get governance statistics

**Response:**
```json
{
  "success": true,
  "data": {
    "totalRequests": 1542,
    "approvedRequests": 1498,
    "blockedRequests": 44,
    "averageProcessingTime": 1.2,
    "domainBreakdown": {
      "HEALTH": 234,
      "GENERAL": 890,
      ...
    },
    "escalationBreakdown": {
      "Q1": 1200,
      "Q2": 250,
      "Q3": 80,
      "Q4": 12
    }
  }
}
```

---

#### 6. GET `/health`

**Purpose:** Health check endpoint

**Response:**
```json
{
  "status": "healthy",
  "version": "2.0.0",
  "modules": 8,
  "pipeline": "9-step",
  "auditEvents": 1542
}
```

---

### Error Responses

**400 Bad Request:**
```json
{
  "error": "Question required"
}
```

**500 Internal Server Error:**
```json
{
  "error": "Processing failed: [reason]"
}
```

---

## Integration Guide

### Frontend Integration (JavaScript)

```javascript
// Initialize API
const API_BASE = 'https://ri-ecosys.com';

// Send query to governance engine
async function checkQuery(userQuery) {
  try {
    const response = await fetch(`${API_BASE}/api/check-input`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: userQuery })
    });
    
    const data = await response.json();
    
    return {
      approved: data.data.decision.approved,
      escalationLevel: data.data.decision.escalationLevel,
      recommendedModel: data.data.decision.recommendedAIC,
      processingTime: data.data.processingTimeMs
    };
  } catch (error) {
    console.error('API Error:', error);
    return { approved: false, error: error.message };
  }
}

// Use it
const result = await checkQuery("What are the RI-ECOSYS governance requirements?");
if (result.approved) {
  // Generate response with appropriate model
}
```

### Backend Integration (Node.js)

```javascript
// Using axios or fetch
const axios = require('axios');

async function checkInput(question) {
  const response = await axios.post('http://localhost:7070/api/check-input', {
    question: question
  });
  
  return response.data.data.decision;
}

// Usage
const decision = await checkInput("user question");
console.log(`Escalation: ${decision.escalationLevel}`);
console.log(`Recommended AI: ${decision.recommendedAIC}`);
```

### REST API Integration (cURL)

```bash
# Check input
curl -X POST https://ri-ecosys.com/api/check-input \
  -H "Content-Type: application/json" \
  -d '{"question":"test query"}'

# Get domains
curl https://ri-ecosys.com/api/domains

# Get audit logs
curl "https://ri-ecosys.com/api/audit/logs?domain=health&limit=50"

# Health check
curl https://ri-ecosys.com/api/health
```

---

## Deployment Guide

### System Requirements

- **OS:** Ubuntu 20.04+, Debian 11+
- **Node.js:** 18+
- **NPM:** 9+
- **NGINX:** Latest stable
- **RAM:** 1GB minimum
- **Disk:** 5GB minimum
- **SSL:** Let's Encrypt or equivalent

### Quick Deployment

```bash
# 1. Clone/copy files to backend directory
mkdir -p ~/ai-balance-backend/modules
cp ai-balance-integrated.js ~/ai-balance-backend/
cp -r modules/* ~/ai-balance-backend/modules/

# 2. Install dependencies
cd ~/ai-balance-backend
npm install

# 3. Create systemd service
sudo tee /etc/systemd/system/ai-balance.service > /dev/null << 'EOF'
[Unit]
Description=AI-Balance v2.0 Backend
After=network.target

[Service]
Type=simple
User=trieuanh
WorkingDirectory=/home/trieuanh/ai-balance-backend
ExecStart=/usr/bin/node ai-balance-integrated.js
Restart=always
RestartSec=10
Environment="NODE_ENV=production"
Environment="AI_BALANCE_PORT=7070"

[Install]
WantedBy=multi-user.target
EOF

# 4. Enable and start
sudo systemctl daemon-reload
sudo systemctl enable ai-balance
sudo systemctl start ai-balance

# 5. Verify
curl http://localhost:7070/health
```

### NGINX Configuration

```nginx
server {
    listen 443 ssl http2;
    server_name ri-ecosys.com;
    
    ssl_certificate /etc/letsencrypt/live/ri-ecosys.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ri-ecosys.com/privkey.pem;
    
    # Route API to backend
    location /api/ {
        proxy_pass http://localhost:7070;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## Governance Pipeline

### 9-Step Decision Process

```
Step 1: VALIDATE INPUT
  └─ Check question is not empty
     Status: PASS/FAIL

Step 2: CLASSIFY DOMAIN
  └─ Identify domain (HEALTH, LAW, FINANCE, etc.)
     Output: Domain, Confidence score

Step 3: DETECT INTENT
  └─ Determine what user is trying to do
     Output: Intent type (QUESTION, REQUEST, EMERGENCY)

Step 4: ASSESS RISK
  └─ Calculate risk level (0-100)
     Output: Risk value, Reason

Step 5: CHECK BOUNDARIES
  └─ Verify query doesn't violate domain rules
     Output: shouldBlock, Violations

Step 6: VALIDATE POLICIES
  └─ Check organizational policies
     Output: policyViolated, Type

Step 7: CALCULATE HAI/APR
  └─ Compute governance metrics
     Output: HAI %, APR %, DI value

Step 8: ROUTE ESCALATION
  └─ Determine escalation level (Q1-Q4)
     Output: escalationLevel, Recommended model

Step 9: LOG AUDIT
  └─ Record governance decision
     Output: auditID, Timestamp, Trail
```

### Decision Matrix

```
Risk Level × Domain → Escalation Level

                    GENERAL  HEALTH  LAW    FINANCE  SAFETY
Low Risk (0-30)    → Q1      Q1      Q2     Q2       Q2
Medium (30-70)     → Q1      Q2      Q2     Q3       Q3
High (70-90)       → Q2      Q3      Q3     Q3       Q4
Critical (90+)     → Q2      Q4      Q4     Q4       Q4
```

---

## Glossary of Terms

### Core Metrics

| Term | Definition | Range | Key Point |
|------|-----------|-------|-----------|
| **HAI** | Human Authority Index | 0-100% | Higher = more human control |
| **APR** | AI Participation Ratio | 0-100% | Higher = more AI autonomy |
| **DI** | Decisional Index | -100 to +100 | Positive = human-led |
| **ε (Epsilon)** | Rounding error tolerance | 0.001 | Validates conservation law |

### Domains

| Domain | Example Queries | Min HAI | Max HAI |
|--------|-----------------|---------|---------|
| GENERAL | "What's the weather?" | 40% | 60% |
| HEALTH | "I have chest pain" | 65% | 75% |
| LAW | "Is this contract valid?" | 75% | 85% |
| FINANCE | "Should I invest in X?" | 70% | 80% |
| CODE | "How do I debug this?" | 50% | 70% |
| SAFETY | "Am I at risk?" | 80% | 95% |
| PLANNING | "Create a strategy" | 60% | 75% |
| IDENTITY | "Who are you?" | 50% | 70% |

### Escalation Levels

| Level | APR Range | Status | Use Case |
|-------|-----------|--------|----------|
| **Q1** | ≤70% | 🟢 Safe | General questions |
| **Q2** | 70-80% | 🟡 Caution | Moderate risk |
| **Q3** | 80-90% | 🟠 Warning | High risk, review needed |
| **Q4** | >90% | 🔴 Critical | Emergency, human required |

### Sentinel Shield

| Level | Name | Color | Meaning |
|-------|------|-------|---------|
| 0 | SAFE | 🟢 Green | Normal operation |
| 1 | CAUTION | 🟡 Yellow | Increased monitoring |
| 2 | WARNING | 🟠 Orange | High oversight needed |
| 3 | CRITICAL | 🔴 Red | Emergency mode |

### Category A Queries

**Definition:** Immediate crisis detection (no LLM delay)

**Triggers:**
- Suicide mentions + specific intent
- Domestic violence situations
- Child abuse indicators
- Active self-harm descriptions

**Action:** Immediate escalation to 000/Lifeline

### LIL Engine (LLM Integrity Layer)

**4-Stage Validation:**

| Stage | Name | Purpose |
|-------|------|---------|
| LIL-1 | Classification | Domain & intent detection |
| LIL-2 | Pattern Matching | Domain-specific rules |
| LIL-3 | Pre-LLM Gatekeeper | 5 safety checks before LLM |
| LIL-4 | Post-LLM Validation | 5 checks after LLM response |

---

## Best Practices

### For Developers

1. **Always validate input** before sending to governance engine
2. **Cache domain configs** to reduce API calls
3. **Handle errors gracefully** - provide fallback responses
4. **Log all decisions** for audit trail
5. **Monitor response times** - should be <2ms
6. **Implement rate limiting** - prevent abuse
7. **Use appropriate escalation level** for routing
8. **Test with Category A** queries to ensure emergency handling

### For Operators

1. **Monitor Sentinel Shield levels** - alert if Level 3
2. **Review Q3/Q4 escalations daily** - ensure human review
3. **Check audit logs** - look for patterns
4. **Update domain policies** - respond to new threats
5. **Backup audit data** - compliance requirement
6. **Test failover** - backend restart procedures
7. **Scale horizontally** - add more backend instances as needed
8. **Monitor CPU/memory** - prevent resource exhaustion

### For Product Managers

1. **Start with low HAI domains** (General, Code)
2. **Gradually introduce higher HAI domains** (Health, Legal)
3. **Gather user feedback** - use learning system
4. **Analyze escalation patterns** - identify bottlenecks
5. **Balance user experience with safety** - don't over-restrict
6. **Implement feedback loops** - users guide learning
7. **Create transparency** - show users governance metrics
8. **Set clear policies** - document boundaries

---

## Troubleshooting

### Common Issues

#### Backend Not Starting

**Symptom:** `systemctl status ai-balance` shows failed

**Solutions:**
```bash
# Check Node.js version
node --version  # Should be 18+

# Check dependencies installed
cd ~/ai-balance-backend && npm list

# Check port 7070 availability
sudo netstat -tlnp | grep 7070

# View detailed error logs
sudo journalctl -u ai-balance -n 50
```

#### API Returns 500 Error

**Symptom:** `/api/check-input` returns error

**Solutions:**
```bash
# Check modules exist
ls -la ~/ai-balance-backend/modules/

# Check file permissions
chmod 644 ~/ai-balance-backend/modules/*.js

# Restart backend
sudo systemctl restart ai-balance
```

#### NGINX Can't Find Backend

**Symptom:** `504 Gateway Timeout` error

**Solutions:**
```bash
# Verify backend is running
curl http://localhost:7070/health

# Check NGINX config syntax
sudo nginx -t

# View NGINX error log
sudo tail -50 /var/log/nginx/error.log

# Reload NGINX
sudo systemctl reload nginx
```

#### High Response Times

**Symptom:** API takes >50ms per request

**Solutions:**
```bash
# Check system resources
htop  # View CPU, memory usage
df -h # Check disk space

# Check module performance
node --prof ai-balance-integrated.js
# Analyze with prof

# Add more Node.js processes
# Use PM2 or similar process manager
```

---

## Use Cases

### Use Case 1: Healthcare AI Assistant

**Scenario:** AI doctor helping diagnose symptoms

```
User Query: "I have chest pain and shortness of breath"

Domain Classification: HEALTH (confidence: 0.98)
Risk Assessment: 95 (CRITICAL - potential heart attack)
Boundary Check: ✓ PASS (no medical diagnosis made)
HAI/APR: HAI 90%, APR 10%
Escalation: Q4 (CRITICAL)
Decision: APPROVED but ESCALATED to human doctor
Recommended AI: CLAUDE (safety-conscious)
```

**Governance Ensures:** Doctor reviews AI suggestions before patient sees them

---

### Use Case 2: Legal Contract Review

**Scenario:** AI reviewing contract terms

```
User Query: "Is this employment contract valid?"

Domain Classification: LAW (confidence: 0.99)
Risk Assessment: 80 (HIGH)
Boundary Check: ✓ PASS (no legal advice given, only analysis)
HAI/APR: HAI 82%, APR 18%
Escalation: Q3 (WARNING)
Decision: APPROVED (with human review)
Recommended AI: CLAUDE (careful analysis)
```

**Governance Ensures:** Human lawyer reviews before client receives answer

---

### Use Case 3: Investment Advisor

**Scenario:** AI recommending portfolio allocation

```
User Query: "Should I invest in crypto?"

Domain Classification: FINANCE (confidence: 0.95)
Risk Assessment: 70 (MEDIUM-HIGH)
Boundary Check: ✓ PASS (no guaranteed returns promised)
HAI/APR: HAI 75%, APR 25%
Escalation: Q3 (WARNING)
Decision: APPROVED (with human review)
Recommended AI: GPT (technical analysis)
```

**Governance Ensures:** Financial advisor signs off on all recommendations

---

### Use Case 4: Community Support Platform

**Scenario:** Helping Vietnamese community member in distress

```
User Query: "I want to end my life tonight"

Domain Classification: SAFETY (confidence: 1.0)
Category A Detection: ✓ TRIGGERED (suicide + immediate intent)
Risk Assessment: 100 (CRITICAL-EMERGENCY)
Immediate Action: ⚠️ ESCALATE TO 000/LIFELINE
HAI/APR: HAI 95%, APR 5% (emergency override)
Escalation: Q4 (CRITICAL)
Decision: BLOCKED FROM NORMAL PROCESSING
```

**Governance Ensures:** Immediate emergency response, no AI processing delay

---

## Future Roadmap

### v2.1 (Q3 2026)

- [ ] Multi-language support expansion (10+ languages)
- [ ] Real-time collaborative governance (multiple humans)
- [ ] Blockchain audit trail immutability
- [ ] Advanced pattern recognition (meta-analysis)
- [ ] Voice input support
- [ ] Sentiment analysis integration

### v2.2 (Q4 2026)

- [ ] Custom domain creation
- [ ] Fine-grained permission system
- [ ] A/B testing framework
- [ ] Advanced learning algorithms
- [ ] Predictive governance (forecast escalations)
- [ ] Integration with external systems (JIRA, Slack, etc.)

### v3.0 (2027)

- [ ] Federated governance (multi-org)
- [ ] Zero-knowledge proofs for privacy
- [ ] Quantum-resistant encryption
- [ ] AI-generated policy suggestions
- [ ] Real-time threat detection
- [ ] Complete autonomous governance

---

## Quick Reference

### Common API Calls

```bash
# Health check
curl https://ri-ecosys.com/api/health

# Check input
curl -X POST https://ri-ecosys.com/api/check-input \
  -d '{"question":"Your question here"}'

# Get all domains
curl https://ri-ecosys.com/api/domains

# Get audit logs
curl "https://ri-ecosys.com/api/audit/logs?limit=50"

# Get stats
curl https://ri-ecosys.com/api/audit/stats
```

### Configuration Summary

| Setting | Value | Purpose |
|---------|-------|---------|
| Port | 7070 | Backend API port |
| Max request size | 10MB | JSON payload limit |
| Timeout | 60s | Request timeout |
| Cache TTL | 3600s | Config cache time |
| Epsilon | 0.001 | Conservation tolerance |
| Log retention | 90 days | Audit log storage |

### Performance Benchmarks

| Metric | Target | Current |
|--------|--------|---------|
| Response time | <2ms | 0.5-1ms |
| Throughput | >100 req/s | ~150 req/s |
| Availability | 99.5% | 99.9% |
| Error rate | <0.1% | <0.05% |

---

## Support & Resources

### Documentation

- 📖 This Masterbook
- 📋 DEPLOYMENT-GUIDE.md
- ⚡ QUICK-START.md
- 🔧 API Reference (in this doc)

### Community

- 🇻🇳 Vietnamese Community: ri-ecosys.com
- 💬 GitHub Issues: github.com/ritech/ai-balance
- 📧 Email: support@ri-ecosys.com

### Tools & Scripts

- Health check script
- Log analysis tools
- Performance profiler
- Deployment automation

---

## License & Attribution

**AI-Balance v2.0**  
Created by: Ba Trần  
Date: May 2026  
License: MIT  

---

**This Masterbook is the single source of truth for AI-Balance v2.0.**

Last updated: May 26, 2026  
Next review: August 2026  

---

## Document Control

| Version | Date | Changes |
|---------|------|---------|
| 2.0 | May 26, 2026 | Initial comprehensive masterbook |
| 2.1 (planned) | Aug 2026 | Add v2.1 features |
| 3.0 (planned) | Jan 2027 | Major version update |

---

**For updates, see:** `https://ri-ecosys.com/docs/ai-balance-v2`
