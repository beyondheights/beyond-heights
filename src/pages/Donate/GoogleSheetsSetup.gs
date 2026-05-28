/**
 * Google Apps Script — Deploy as Web App
 *
 * Instructions:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1F4MT0tzueRbKPx3RZxLtnyiAWrC5z7sH2cez-dLS22c/edit
 * 2. Make sure the active tab (sheet) is named exactly "Donations" (or whatever sheet tab is active/first)
 * 3. Open Extensions > Apps Script
 * 4. Paste this entire file, save (Ctrl+S)
 * 5. Click Deploy > New Deployment
 *    - Type: Web App
 *    - Execute as: Me (your-email)
 *    - Who has access: Anyone
 * 6. Copy the Web App URL and paste it into src/pages/Donate/config.ts
 */

function doGet() {
  return ContentService
    .createTextOutput('✅ Web App is live. Please send a POST request.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    // Fallback if script is standalone (not container-bound to the sheet)
    ss = SpreadsheetApp.openById("1F4MT0tzueRbKPx3RZxLtnyiAWrC5z7sH2cez-dLS22c");
  }
  
  var sheet = ss.getActiveSheet();

  // 1. Save Image to Google Drive
  var fileParams = "";
  var screenshotUrl = "";
  
  if (e.parameter.screenshot) {
    try {
      var base64String = e.parameter.screenshot;
      // Strip base64 data prefix if present (e.g. data:image/png;base64,)
      if (base64String.indexOf(",") > -1) {
        base64String = base64String.split(",")[1];
      }
      var decodedData = Utilities.base64Decode(base64String);
      var blob = Utilities.newBlob(decodedData, e.parameter.screenshotMimeType || "image/png", e.parameter.screenshotName || "Payment_Screenshot");
      
      var folderIter = DriveApp.getFoldersByName("Marathon_Payments");
      var folder;
      if (folderIter.hasNext()) {
        folder = folderIter.next();
      } else {
        folder = DriveApp.createFolder("Marathon_Payments");
      }
      var file = folder.createFile(blob);
      
      // CRITICAL: We make the file accessible to anyone with a link so Google Sheets can show it!
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      
      var fileId = file.getId();
      screenshotUrl = "https://drive.google.com/uc?export=view&id=" + fileId;
      // Generate the IMAGE formula using the direct view link
      fileParams = '=IMAGE("https://drive.google.com/uc?export=view&id=' + fileId + '")';
      
    } catch (err) {
      screenshotUrl = "Error uploading file: " + err.toString();
      fileParams = "";
    }
  }

  // 2. Set Row Headers if the sheet is empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp", "Name", "Email", "Phone", "Amount", "Screenshot Link", "Screenshot Preview"
    ]);
  }

  // 3. Save Data to the Spreadsheet Row
  var rowData = [];
  rowData.push(new Date());
  rowData.push(e.parameter.name || "");
  rowData.push(e.parameter.email || "");
  rowData.push(e.parameter.phone || "");
  rowData.push(e.parameter.amount || "");
  rowData.push(screenshotUrl || "No screenshot");
  rowData.push(fileParams || "No screenshot");
  
  sheet.appendRow(rowData);
  
  // 4. Return success 
  return ContentService.createTextOutput("Success")
    .setMimeType(ContentService.MimeType.TEXT);
}
