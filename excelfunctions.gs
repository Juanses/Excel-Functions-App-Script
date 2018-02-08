var excelClass = function(){
  /*
  GIST - Start - 
  
  var excel = new excelClass();
  excel.setSheetbyName("RH");
  var cols = ["nom","prenom","fonction","email","telephone","ddn","ldn","adresse","ddc","feuille"]
  excel.setCols(cols);
  var values = excel.getallvalues(2,1,cols.length);
  var feuillename = excel.get_colnumber_fromname("feuille");
  for (var i = 0; i < values.length; i++) {
    Logger.log(values[0][feuillename]);
  }
  */
  
  
  //*************** SHEET START ***************
  
  //SET SHEET FROM SHEET NUMBER [FROM 0 TO X]
  this.setSheetbyNumber = function (number){
    this.ss = SpreadsheetApp.getActiveSpreadsheet();
    this.sheet = this.ss.getSheets()[number]; 
  }
  
  //SET SHEET FROM SHEET NAME
  this.setSheetbyName = function (name){
    this.ss = SpreadsheetApp.getActiveSpreadsheet();
    this.sheet = this.ss.getSheetByName(name); 
  }
  
  //SET SHEET FROM SPREEDSHEET ID
  this.setsheetbyId = function(id,sheetnumber){
    this.sheet = SpreadsheetApp.openById(id).getSheets()[sheetnumber];
  }
  
  //*************** SHEET END ***************
  
  //*************** COLUMNS START ***************
  
  //GET THE LETTER OF THE COLUMN CORRESPONDING TO THE COLS TITLE
  this.getColletterfromCol = function (colname){
    var index = this.cols.indexOf(colname);
    return String.fromCharCode(index+65);
  }
  //GET COL NUMBER BASED ON COLNAME
  this.get_colnumber_fromname = function (name){
    return this.cols.indexOf(name);
  }
  
  //SET THE COLS IN EXCEL OBJECT
  this.setCols = function (cols){
    this.cols = cols;
  }
  
  //*************** COLUMNS END ***************
  
  //*************** VALUES START ***************
  
  //SET VALUE IN CELL BASED ON ROW AND COLNAME
  this.setValueinCol = function (value,row,colname){
    var index = this.cols.indexOf(colname);
    if (index != -1) {var range = this.sheet.getRange(row,index+1);range.setValue(value);}
  }
  
  //SET VALUE IN CELL BASED ON ROW AND COLNAME
  this.setformulaincol = function (value,row,colname){
    var index = this.cols.indexOf(colname);
    var range = this.sheet.getRange(row,index+1);
    range.setFormula(value);
  }
  
  //GET LAST ROW OF THE SHEET
  this.getLastRow = function(){
    this.lastrow = this.sheet.getLastRow()+1;
    return this.lastrow;
  }
  
  //GET ALL THE VALUES IN A RANGE
  this.getallvalues = function(startline,startcolumn,endcolumn){
    var lastrow = this.sheet.getLastRow();
    return this.sheet.getRange(startline,startcolumn,lastrow-1,endcolumn).getValues(); 
  }
  
  //GET ALL THE VALUES AND CREATE AN OBJECT FROM A ROW BASED ON THE COLUMNS 
  this.getvaluesfromrow = function(values,startrow,rownumber){
    var row;
    var rowdata = {};
    for (var i = 0; i < values.length; i++) {
      if (i == (rownumber-startrow)){
        for(key in this.cols){
          rowdata[this.cols[key]] = values[i][key];
        }
        break;
      }
    }   
    return rowdata;
  } 
  
  //*************** VALUES END ***************
  
  //*************** OTHER START ***************
  
  //SET FONT COLOR IN CELL BASED ON ROW AND COLNAME
  this.setcolorincol = function (color,row,colname){
    var index = this.cols.indexOf(colname);
    var range = this.sheet.getRange(row,index+1);
    range.setFontColor(color);
  }
  
  this.setDataValidationbyRange = function (sheet1,optionsrange,sheet2,validation){
    var range1 = SpreadsheetApp.getActiveSpreadsheet().getSheets()[sheet1].getRange(optionsrange);
    var range2 = SpreadsheetApp.getActiveSpreadsheet().getSheets()[sheet2].getRange(validation);
    var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range1).build();
    range2.setDataValidation(rule);
  }
  
  //*************** OTHER END ***************
}
