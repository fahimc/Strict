(function(){
	function Strict(type){
		var value;
		switch(type)
		{
			case Strict.TYPE.STRING:
			value=String('');
			break;
			case Strict.TYPE.NUMBER:
			value=Number(0);
			break;
			case Strict.TYPE.BOOLEAN:
			value=Boolean(false);
			break;
			case Strict.TYPE.OBJECT:
			value={};
			break;
			case Strict.TYPE.FUNCTION:
			value=function(){};
			break;
			case Strict.TYPE.SYMBOL:
			value=Symbol();
			break;
			case Strict.TYPE.DATE:
			value=new Date();
			break;
			default:
			if(Strict.CUSTOM_TYPES[type] && Strict.CUSTOM_TYPES[type].value)
			{
				value = Strict.CUSTOM_TYPES[type].value;
			}else{
				Strict.log('Type not found');
				return null;
			}
			break;
		}
		return new StrictValue(value,type);
	}
	Strict.TYPE={
		STRING:'string',
		NUMBER:'number',
		BOOLEAN:'boolean',
		OBJECT:'object',
		FUNCTION:'function',
		SYMBOL:'symbol',
		DATE:'date'
	}
	Strict.CUSTOM_TYPES=
	{
		date:{
			type:'object',
			validate:function(val){
				console.log(val instanceof Date);
				return val instanceof Date?true:false;
			}
		}
	};
	Strict.getType=function(type)
	{
		if(!Strict.CUSTOM_TYPES[type])return type;
		return Strict.CUSTOM_TYPES[type].type;
	};
	Strict.isValid=function(value,type){
		if(Strict.CUSTOM_TYPES[type] && Strict.CUSTOM_TYPES[type].validate)
		{
			return Strict.CUSTOM_TYPES[type].validate(value);
		}

		return typeof value === type;
	}
	Strict.log=function(message)
	{
		var stack = new Error('').stack;
		console.log('%c Strict Error ', 'background: #f00; color: #ffffff',message,"\n"+stack);
	}
	//STRICT VALUE CLASS
	function StrictValue(val,type){
		this.type = type;
		this.value = val;
	};

	StrictValue.prototype = {
		get value(){
			return this._value;
		},
		set value(val){
			if(!Strict.isValid(val,Strict.getType(this.type)))
			{
				Strict.log('Wrong type has been set. Expected '+String(this.type).toUpperCase()+' got '+String(typeof(val)).toUpperCase());
				return; 
			}
			this._value = val;
		}
	};
	window.Strict=Strict;
})();