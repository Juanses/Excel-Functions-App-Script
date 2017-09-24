function myFunction() {
  var sheet = 0;
  var spreadsheet = SpreadsheetApp.openById("1XxRPPe2IGikhPNnTjsxdWk2GfhnDetnTdSNdrL8JXQc").getSheets()[sheet];  
  var cols = ["horodateur","nomdefamille","prenom","emailpersonnel","ddn","numerodetelephonemobile","adressepersonnelle","adresseprofessionnelle","cp","ville","pays","profession","specialite","materiel","iban","swift","actif"];
  //var values = getallvalues(spreadsheet,2,1,cols.length+1);
  //var object = getvaluesfromrow(values,4,cols);
  datacleaning(spreadsheet,4);
}

function datacleaning(spreadsheet,col){
  var lastrow = spreadsheet.getLastRow();
  for (var i = 1; i < lastrow; i++) {
    /*if (parseInt(spreadsheet.getRange(i,col).getValue()) == 1){
      spreadsheet.getRange(i,col-1).setValue("");
    };*/
    value = spreadsheet.getRange(i,col).getValue();
    if (value.indexOf("mhq.fr") != -1){
      spreadsheet.getRange(i,col+2).setValue("del");
    };
  }  
}

function getallvalues(spreadsheet,startline,startcolumn,endcolumn){
  var lastrow = spreadsheet.getLastRow();
  return spreadsheet.getRange(startline,startcolumn,lastrow-1,endcolumn).getValues(); 
}

function getvaluesfromrow(values,rownumber,cols){
  var row;
  var rowdata = {};
  for (var i = 0; i < values.length; i++) {
    if (i == rownumber-1){
      for(key in cols){
        rowdata[cols[key]] = values[i][key];
      }
      break;
    }
  }   
  return rowdata;
}