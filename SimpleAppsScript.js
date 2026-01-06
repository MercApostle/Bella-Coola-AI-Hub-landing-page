/**
 * Simple Google Apps Script Template
 * 
 * 1. Open your Google Sheet
 * 2. Go to Extensions -> Apps Script
 * 3. Delete everything and paste this code
 * 4. Create columns in your sheet: Timestamp, Email, Law ID, Q1, Q2, Q3, Consent
 * 5. Click "Deploy" -> "New Deployment"
 * 6. Select "Web App"
 * 7. Execute as: "Me"
 * 8. Who has access: "Anyone"
 * 9. Copy the Web App URL and paste it into your .env.local file
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    
    // Append the data as a new row
    sheet.appendRow([
      data.timestamp,
      data.email,
      data.law_id,
      data.q1,
      data.q2,
      data.q3,
      data.consent
    ]);
    
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    return ContentService.createTextOutput("Error: " + err.message).setMimeType(ContentService.MimeType.TEXT);
  }
}
