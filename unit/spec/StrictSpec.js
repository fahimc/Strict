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

  it("create a function", function() {
    var str = new Strict(Strict.TYPE.FUNCTION);
    str.value=function test(){};
    var valid = typeof str.value ==='function';
    expect(valid).toEqual(true);
  });
  
  it("create a symbol", function() {
    var str = new Strict(Strict.TYPE.SYMBOL);
    str.value=Symbol('foo');
    var valid = typeof str.value ==='symbol';
    expect(valid).toEqual(true);
  });
   it("create a date", function() {
    var str = new Strict(Strict.TYPE.DATE);
    str.value=new Date();
    var valid = str.value instanceof Date;
    expect(valid).toEqual(true);
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
  it("set a object to string should fail", function() {
    var str = new Strict(Strict.TYPE.OBJECT);
    str.value='tom';
    expect(str.value).toEqual({});
  });
  it("set a function to string should fail", function() {
    var str = new Strict(Strict.TYPE.FUNCTION);
    str.value='tom';
    var valid = typeof str.value ==='function';
    expect(valid).toEqual(true);
  });
  it("set a symbol to number should fail", function() {
    var str = new Strict(Strict.TYPE.SYMBOL);
    str.value=23;
    var valid = typeof str.value ==='symbol';
    expect(valid).toEqual(true);
  });
  it("set a date to number should fail", function() {
    var str = new Strict(Strict.TYPE.DATE);
    str.value=23;
    var valid = str.value instanceof Date;
    expect(valid).toEqual(true);
  });

});
