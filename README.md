Strict
======
A JavaScript library that checks variable types and will flag incorrect values when you try to set them.


##Types that are currently supported  

```
Strict.TYPE={
		STRING:'string',
		NUMBER:'number',
		BOOLEAN:'boolean',
		OBJECT:'object',
		FUNCTION:'function',
		SYMBOL:'symbol',
		DATE:'date'
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

Strict takes one parameter which is the type that you want to set the variable or object.  

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

##Creating a Constant  
You can create a constant variable which will not allow the variable to be modified once it has been created.  

Strict.CONST takes two parameters, the first is the constant value and the second (optional) is the type.
```
var constVal = Strict.CONST('HELLO WORLD',Strict.TYPE.STRING);
//This should log an error
constVal = '';
```


