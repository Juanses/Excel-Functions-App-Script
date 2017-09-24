function myFunction() {
  var responsesheet = SpreadsheetApp.openById("1XxRPPe2IGikhPNnTjsxdWk2GfhnDetnTdSNdrL8JXQc").getSheets()[0];
  var lastrow = responsesheet.getLastRow();
  var cols = ["horodateur","nomdefamille","prenom","emailpersonnel","ddn","numerodetelephonemobile","adressepersonnelle","adresseprofessionnelle","cp","ville","pays","profession","specialite","materiel","iban","swift","actif"];
  
  var rowdata = {};for(key in cols){rowdata[key] = row[cols[key]];}
  Logger.log(rowdata);
}
