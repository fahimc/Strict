describe("Strict", function() {
 
  beforeEach(function() {
   
  });

  it("create a string", function() {
    var str = new Strict(Strict.TYPE.STRING);
    str.value="hello";
    expect(str.value).toEqual('hello');
  });
  
  it("create a number", function() {
    var str = new Strict(Strict.TYPE.NUMBER);
    str.value=43;
    expect(str.value).toEqual(43);
  });
  
  it("create a boolean", function() {
    var str = new Strict(Strict.TYPE.BOOLEAN);
    str.value=true;
    expect(str.value).toEqual(true);
  });
  
  it("create a object", function() {
    var str = new Strict(Strict.TYPE.OBJECT);
    str.value={};
    expect(str.value).toEqual({});
  });
  
  it("set a string to number should fail", function() {
    var str = new Strict(Strict.TYPE.STRING);
    str.value=43;
    expect(str.value).toEqual('');
  });
   it("set a number to string should fail", function() {
    var str = new Strict(Strict.TYPE.NUMBER);
    str.value="";
    expect(str.value).toEqual(0);
  });
   it("set a boolean to number should fail", function() {
    var str = new Strict(Strict.TYPE.BOOLEAN);
    str.value=43;
    expect(str.value).toEqual(false);
  });
  
/*
  it("create a function", function() {
    var str = new Strict(Strict.TYPE.FUNCTION);
    str.value=function(){};
    expect(str.value).toEqual(function(){});
  });
  
  it("create a symbol", function() {
    var str = new Strict(Strict.TYPE.SYMBOL);
    str.value=true;
    expect(str.value).toEqual(true);
  });
*/
});
