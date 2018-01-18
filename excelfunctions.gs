var excelClass = function(id){
  this.id = id;
  
  //SET SHEET FROM SHEET NUMBER [FROM 0 TO X]
  this.setsheet = function(sheetnumber,cols){
    this.sheet = SpreadsheetApp.openById(this.id).getSheets()[sheetnumber];  
    this.cols = cols;
  }
  
  //SET FONT COLOR IN CELL BASED ON ROW AND COLNAME
  this.setcolorincol = function (color,row,colname){
    var index = this.cols.indexOf(colname);
    var range = this.sheet.getRange(row,index+1);
    range.setFontColor(color);
  }
  
  //SET VALUE IN CELL BASED ON ROW AND COLNAME
  this.setvalueincol = function (value,row,colname){
    var index = this.cols.indexOf(colname);
    var range = this.sheet.getRange(row,index+1);
    range.setValue(value);
  }
  
  //SET VALUE IN CELL BASED ON ROW AND COLNAME
  this.setformulaincol = function (value,row,colname){
    var index = this.cols.indexOf(colname);
    var range = this.sheet.getRange(row,index+1);
    range.setFormula(value);
  }
   
  //GET LAST ROW OF THE SHEET
  this.getlastrow = function(){
    this.lastrow = this.sheet.getLastRow()+1;
    return this.lastrow;
  }
  
  //GET COL NUMBER BASED ON COLNAME
  this.get_colnumber_fromname = function (name){
    var found = false;
    for (var i = 0; i < this.cols.length; i++) {
      if (this.cols[i] == name){
        found = i+1
        break;
      }
    }
    return found;
  }
  
  //GET ALL THE VALUES IN A RANGE
  this.getallvalues = function(startline,startcolumn,endcolumn){
    var lastrow = this.sheet.getLastRow();
    return this.sheet.getRange(startline,startcolumn,lastrow-1,endcolumn).getValues(); 
  }
  
  //GET ALL THE VALUES FROM A ROW BASED ON THE COLUMNS 
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
  
}
