/**
 * Enhanced Google Apps Script Code
 * 
 * 1. Open your Google Sheet
 * 2. Go to Extensions -> Apps Script
 * 3. Delete everything and paste this code
 * 4. Ensure you have two sheets (tabs) at the bottom:
 *    - "Submissions" (for questionnaire)
 *    - "Bookings" (for lead capture/booking)
 * 5. Deployment: Deploy -> New Deployment -> Web App -> Execute as "Me" -> Access "Anyone"
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    if (data.formType === 'booking') {
      // Logic for Booking/Lead Capture
      var sheet = ss.getSheetByName("Bookings") || ss.insertSheet("Bookings");
      
      // Ensure headers if empty
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(["Timestamp", "Name", "Email", "Phone", "Motivation/Goals"]);
      }
      
      sheet.appendRow([
        data.timestamp,
        data.name,
        data.email,
        data.phone || "N/A",
        data.motivation
      ]);
      
    } else {
      // Default Logic for Questionnaire
      var sheet = ss.getSheetByName("Submissions") || ss.getSheets()[0];
      
      // Ensure headers if empty
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(["Timestamp", "Email", "Law ID", "Q1", "Q2", "Q3", "Consent"]);
      }
      
      sheet.appendRow([
        data.timestamp,
        data.email,
        data.law_id,
        data.q1,
        data.q2,
        data.q3,
        data.consent
      ]);
    }
    
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    return ContentService.createTextOutput("Error: " + err.message).setMimeType(ContentService.MimeType.TEXT);
  }
}
