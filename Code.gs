function myFunction() {
  var responsesheet = SpreadsheetApp.openById("1XxRPPe2IGikhPNnTjsxdWk2GfhnDetnTdSNdrL8JXQc").getSheets()[0];
  var lastrow = responsesheet.getLastRow();
  var values = responsesheet.getRange(2,2,lastrow-1,1).getValues();
}
