(function(){
			function Strict(type){
				var value;
				switch(type)
				{
					case Strict.TYPE.STRING:
					value='';
					break;
					case Strict.TYPE.NUMBER:
					value=0;
					break;
					case Strict.TYPE.BOOLEAN:
					value=false;
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
				SYMBOL:'symbol'
			}
			function StrictValue(val,type){
				this.type = type;
				this.value = val;
				return this.value;
			};

			StrictValue.prototype = {
				get value(){
					return this._value;
				},
				set value(val){
					if(typeof val !== this.type)
					{
						var stack = new Error('').stack;
						console.log('%c Strict Error ', 'background: #f00; color: #ffffff',': Wrong type has been set. Expected '+String(this.type).toUpperCase()+' got '+String(typeof(val)).toUpperCase(),"\n"+stack);
						return; 
					}
					this._value = val;
				}
			};
			window.Strict=Strict;
		})();