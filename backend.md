# Bella Coola AI Hub - Simple Data Collection

This landing page is configured for a **"Keep It Simple, Stupid" (KISS)** data collection flow.

## How it Works
1.  **Frontend**: The landing page collects the user's email and answers.
2.  **Submission**: When a user submits a "Law Section," the browser sends a clean JSON payload directly to your Google Apps Script URL.
3.  **Backend**: The Google Apps Script receives the data and appends it as a new row in your Google Sheet.

## Payload Structure
The system only sends the essentials:
- `timestamp`: When the submission happened.
- `email`: User's email address.
- `law_id`: Which law they were answering (e.g., mentalism).
- `q1`, `q2`, `q3`: Their answers (optional).
- `consent`: Confirmed agreement.

## Setup Instructions

### 1. Create your Google Sheet
Create a new Google Sheet with these headers in the first row:
`Timestamp | Email | Law ID | Q1 | Q2 | Q3 | Consent`

### 2. Deploy your Web App
1.  In your Google Sheet, go to **Extensions -> Apps Script**.
2.  Copy the code from [SimpleAppsScript.js](SimpleAppsScript.js) and paste it into the script editor.
3.  Click **Deploy -> New Deployment**.
4.  Select **Web App**.
5.  Set **Execute as** to "Me".
6.  Set **Who has access** to "Anyone".
7.  Copy the **Web App URL**.

### 3. Update the Website
1.  Create or update your `.env.local` file in the project folder.
2.  Add your URL: `NEXT_PUBLIC_APPS_SCRIPT_URL=YOUR_URL_HERE`

## Troubleshooting
- Open the browser console (Right-click -> Inspect -> Console).
- Look for `📦 Data:` to see if the payload is forming correctly.
- Look for `✅ Sent successfully` to confirm the network request fired.
