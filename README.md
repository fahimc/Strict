Strict
======

JavaScript library which check variable types and flags incorrect values.


##Types that are supported  

```
Strict.TYPE={
				STRING:'string',
				NUMBER:'number',
				BOOLEAN:'boolean',
				OBJECT:'object',
				FUNCTION:'function',
				SYMBOL:'symbol'
}
```

##Usage  

When you create a variable set the value to a Strict type:  

```
var customerName = Strict(Strict.TYPE.STRING);
var customerAge = Strict(Strict.TYPE.NUMBER);
var customerHasJob = Strict(Strict.TYPE.BOOLEAN);
```

This will turn your variable into a Strict object.

To set the value use the 'value' property:  

```
customerName.value = 'Tom';
customerAge.value = 43;
customerHasJob.value = true;
```

To get the value just use the 'value' property:  

```
var name = customerName.value;
```

If you set the variable to an incorrect value you will get and error and Strict will not set the value:  

```
customerAge.value = '43';
```

