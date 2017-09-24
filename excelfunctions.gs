function myFunction() {
  var sheet = 0;
  var spreadsheet = SpreadsheetApp.openById("1XxRPPe2IGikhPNnTjsxdWk2GfhnDetnTdSNdrL8JXQc").getSheets()[sheet];  
  var cols = ["horodateur","nomdefamille","prenom","emailpersonnel","ddn","numerodetelephonemobile","adressepersonnelle","adresseprofessionnelle","cp","ville","pays","profession","specialite","materiel","iban","swift","actif"];
  var values = getallvalues(spreadsheet,2,1,cols.length+1);
  var object = getvaluesfromrow
  Logger.log(object);
}

function getallvalues(spreadsheet,startline,startcolumn,endcolumn){
  var lastrow = spreadsheet.getLastRow();
  return spreadsheet.getRange(startline,startcolumn,lastrow-1,endcolumn).getValues(); 
}

function getvaluesfromrow(values,row,cols){
  var rowdata = {};
  values.forEach(function(row){
    for(key in cols){
      rowdata[cols[key]] = row[key]}
  },rowdata,cols);
  //var now = new Date();
  return rowdata;
}