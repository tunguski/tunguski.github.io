(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}



// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (!x.$)
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}



// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.multiline) { flags += 'm'; }
	if (options.caseInsensitive) { flags += 'i'; }

	try
	{
		return elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? elm$core$Maybe$Just(submatch)
				: elm$core$Maybe$Nothing;
		}
		out.push(A4(elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? elm$core$Maybe$Just(submatch)
				: elm$core$Maybe$Nothing;
		}
		return replacer(A4(elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800)
			+
			String.fromCharCode(code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

var _Json_decodeInt = { $: 2 };
var _Json_decodeBool = { $: 3 };
var _Json_decodeFloat = { $: 4 };
var _Json_decodeValue = { $: 5 };
var _Json_decodeString = { $: 6 };

function _Json_decodeList(decoder) { return { $: 7, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 8, b: decoder }; }

function _Json_decodeNull(value) { return { $: 9, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 10,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 11,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 12,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 13,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 14,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 15,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 3:
			return (typeof value === 'boolean')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a BOOL', value);

		case 2:
			if (typeof value !== 'number') {
				return _Json_expecting('an INT', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return elm$core$Result$Ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return elm$core$Result$Ok(value);
			}

			return _Json_expecting('an INT', value);

		case 4:
			return (typeof value === 'number')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a FLOAT', value);

		case 6:
			return (typeof value === 'string')
				? elm$core$Result$Ok(value)
				: (value instanceof String)
					? elm$core$Result$Ok(value + '')
					: _Json_expecting('a STRING', value);

		case 9:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 5:
			return elm$core$Result$Ok(_Json_wrap(value));

		case 7:
			if (!Array.isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 8:
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 10:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 11:
			var index = decoder.e;
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 12:
			if (typeof value !== 'object' || value === null || Array.isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 13:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 14:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 15:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 3:
		case 2:
		case 4:
		case 6:
		case 5:
			return true;

		case 9:
			return x.c === y.c;

		case 7:
		case 8:
		case 12:
			return _Json_equality(x.b, y.b);

		case 10:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 11:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 13:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 14:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 15:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2(elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var elm$core$Maybe$Nothing = {$: 'Nothing'};
var elm$core$Basics$EQ = {$: 'EQ'};
var elm$core$Basics$LT = {$: 'LT'};
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$List$cons = _List_cons;
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$GT = {$: 'GT'};
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0.a;
	return elm$core$Dict$keys(dict);
};
var elm$core$String$trim = _String_trim;
var elm$core$Basics$False = {$: 'False'};
var elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {index: index, match: match, number: number, submatches: submatches};
	});
var elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var elm$regex$Regex$fromString = function (string) {
	return A2(
		elm$regex$Regex$fromStringWith,
		{caseInsensitive: false, multiline: false},
		string);
};
var elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
var author$project$MainView$cleanup = function (text) {
	var trimWs = elm$regex$Regex$fromString('[ \t]+');
	var toRemove = elm$regex$Regex$fromString('[^a-z\u00c4\u00e4\u00d6\u00f6\u00dc\u00fc\u00df ]+');
	var replaced = function () {
		var _n0 = _Utils_Tuple2(toRemove, trimWs);
		if ((_n0.a.$ === 'Just') && (_n0.b.$ === 'Just')) {
			var remove = _n0.a.a;
			var trim = _n0.b.a;
			return elm$core$String$trim(
				A3(
					elm$regex$Regex$replace,
					trim,
					function (match) {
						return ' ';
					},
					A3(
						elm$regex$Regex$replace,
						remove,
						function (match) {
							return ' ';
						},
						text)));
		} else {
			return 'error regex';
		}
	}();
	return replaced;
};
var elm$core$Basics$True = {$: 'True'};
var elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$append = _Utils_append;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 'Nothing') {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var author$project$Model$noMsg = function (model) {
	return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
};
var elm$core$Basics$not = _Basics_not;
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(x);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return elm$core$Maybe$Just(
				f(value));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var elm$core$String$length = _String_length;
var elm$core$String$foldr = _String_foldr;
var elm$core$String$toList = function (string) {
	return A3(elm$core$String$foldr, elm$core$List$cons, _List_Nil, string);
};
var rluiten$stringdistance$StringDistance$maxl = F2(
	function (xs, ys) {
		return (_Utils_cmp(
			elm$core$List$length(xs),
			elm$core$List$length(ys)) > 0) ? xs : ys;
	});
var rluiten$stringdistance$StringDistance$lcsLimit_ = F4(
	function (offset, maxLookAhead, xs_, ys_) {
		if (_Utils_cmp(offset, maxLookAhead) > 0) {
			return _List_Nil;
		} else {
			var _n0 = _Utils_Tuple2(xs_, ys_);
			if (_n0.a.b && _n0.b.b) {
				var _n1 = _n0.a;
				var x = _n1.a;
				var xs = _n1.b;
				var _n2 = _n0.b;
				var y = _n2.a;
				var ys = _n2.b;
				return _Utils_eq(x, y) ? A2(
					elm$core$List$cons,
					x,
					A4(rluiten$stringdistance$StringDistance$lcsLimit_, 0, maxLookAhead, xs, ys)) : A2(
					rluiten$stringdistance$StringDistance$maxl,
					A4(rluiten$stringdistance$StringDistance$lcsLimit_, offset + 1, maxLookAhead, xs_, ys),
					A4(rluiten$stringdistance$StringDistance$lcsLimit_, offset + 1, maxLookAhead, xs, ys_));
			} else {
				return _List_Nil;
			}
		}
	});
var rluiten$stringdistance$StringDistance$lcsLimit = rluiten$stringdistance$StringDistance$lcsLimit_(0);
var rluiten$stringdistance$StringDistance$sift3Distance = F2(
	function (s1, s2) {
		var s2Len = elm$core$String$length(s2);
		var s1Len = elm$core$String$length(s1);
		var lcs_ = rluiten$stringdistance$StringDistance$lcsLimit(5);
		if (!s1Len) {
			return s2Len;
		} else {
			if (!s2Len) {
				return s1Len;
			} else {
				var common = A2(
					lcs_,
					elm$core$String$toList(s1),
					elm$core$String$toList(s2));
				return ((s1Len + s2Len) / 2) - elm$core$List$length(common);
			}
		}
	});
var author$project$LearnApp$actionCheck = function (model) {
	return A2(
		elm$core$Maybe$withDefault,
		author$project$Model$noMsg(model),
		A2(
			elm$core$Maybe$map,
			function (_n0) {
				var pl = _n0.a;
				var de = _n0.b;
				var distances = A2(
					elm$core$List$map,
					function (word) {
						return _Utils_Tuple3(
							word,
							A2(
								rluiten$stringdistance$StringDistance$sift3Distance,
								author$project$MainView$cleanup(model.input),
								author$project$MainView$cleanup(word)),
							(elm$core$String$length(
								author$project$MainView$cleanup(word)) / 5) | 0);
					},
					de);
				var foundMatch = !elm$core$List$isEmpty(
					A2(
						elm$core$List$filter,
						function (_n2) {
							var word = _n2.a;
							var dist = _n2.b;
							var allowed = _n2.c;
							return _Utils_cmp(dist, allowed) < 0;
						},
						distances));
				return author$project$Model$noMsg(
					function () {
						if (foundMatch) {
							return _Utils_update(
								model,
								{
									correct: model.correct + 1,
									result: elm$core$Maybe$Just(
										_Utils_Tuple2(true, distances))
								});
						} else {
							return _Utils_update(
								model,
								{
									incorrect: model.incorrect + 1,
									result: elm$core$Maybe$Just(
										_Utils_Tuple2(false, distances))
								});
						}
					}());
			},
			A2(elm$core$Maybe$andThen, elm$core$List$head, model.shuffled)));
};
var author$project$Model$SaveState = F2(
	function (a, b) {
		return {$: 'SaveState', a: a, b: b};
	});
var elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, list);
			var jsArray = _n0.a;
			var remainingItems = _n0.b;
			if (_Utils_cmp(
				elm$core$Elm$JsArray$length(jsArray),
				elm$core$Array$branchFactor) < 0) {
				return A2(
					elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					elm$core$List$cons,
					elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return elm$core$Array$empty;
	} else {
		return A3(elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$core$Task$init = elm$core$Task$succeed(_Utils_Tuple0);
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0.a;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return _Utils_Tuple0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(_Utils_Tuple0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0.a;
		return elm$core$Task$Perform(
			A2(elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			elm$core$Task$Perform(
				A2(elm$core$Task$map, toMessage, task)));
	});
var elm$core$Tuple$second = function (_n0) {
	var y = _n0.b;
	return y;
};
var elm$random$Random$step = F2(
	function (_n0, seed) {
		var generator = _n0.a;
		return generator(seed);
	});
var elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var elm$time$Time$customZone = elm$time$Time$Zone;
var elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var elm$time$Time$millisToPosix = elm$time$Time$Posix;
var elm$time$Time$now = _Time_now(elm$time$Time$millisToPosix);
var elm$core$Array$isEmpty = function (_n0) {
	var len = _n0.a;
	return !len;
};
var elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var elm$random$Random$Generator = function (a) {
	return {$: 'Generator', a: a};
};
var elm$random$Random$andThen = F2(
	function (callback, _n0) {
		var genA = _n0.a;
		return elm$random$Random$Generator(
			function (seed) {
				var _n1 = genA(seed);
				var result = _n1.a;
				var newSeed = _n1.b;
				var _n2 = callback(result);
				var genB = _n2.a;
				return genB(newSeed);
			});
	});
var elm$random$Random$constant = function (value) {
	return elm$random$Random$Generator(
		function (seed) {
			return _Utils_Tuple2(value, seed);
		});
};
var elm$random$Random$map = F2(
	function (func, _n0) {
		var genA = _n0.a;
		return elm$random$Random$Generator(
			function (seed0) {
				var _n1 = genA(seed0);
				var a = _n1.a;
				var seed1 = _n1.b;
				return _Utils_Tuple2(
					func(a),
					seed1);
			});
	});
var elm$core$Elm$JsArray$appendN = _JsArray_appendN;
var elm$core$Elm$JsArray$slice = _JsArray_slice;
var elm$core$Array$appendHelpBuilder = F2(
	function (tail, builder) {
		var tailLen = elm$core$Elm$JsArray$length(tail);
		var notAppended = (elm$core$Array$branchFactor - elm$core$Elm$JsArray$length(builder.tail)) - tailLen;
		var appended = A3(elm$core$Elm$JsArray$appendN, elm$core$Array$branchFactor, builder.tail, tail);
		return (notAppended < 0) ? {
			nodeList: A2(
				elm$core$List$cons,
				elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: A3(elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
		} : ((!notAppended) ? {
			nodeList: A2(
				elm$core$List$cons,
				elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: elm$core$Elm$JsArray$empty
		} : {nodeList: builder.nodeList, nodeListSize: builder.nodeListSize, tail: appended});
	});
var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var elm$core$Array$bitMask = 4294967295 >>> (32 - elm$core$Array$shiftStep);
var elm$core$Basics$ge = _Utils_ge;
var elm$core$Bitwise$and = _Bitwise_and;
var elm$core$Elm$JsArray$push = _JsArray_push;
var elm$core$Elm$JsArray$singleton = _JsArray_singleton;
var elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var elm$core$Array$insertTailInTree = F4(
	function (shift, index, tail, tree) {
		var pos = elm$core$Array$bitMask & (index >>> shift);
		if (_Utils_cmp(
			pos,
			elm$core$Elm$JsArray$length(tree)) > -1) {
			if (shift === 5) {
				return A2(
					elm$core$Elm$JsArray$push,
					elm$core$Array$Leaf(tail),
					tree);
			} else {
				var newSub = elm$core$Array$SubTree(
					A4(elm$core$Array$insertTailInTree, shift - elm$core$Array$shiftStep, index, tail, elm$core$Elm$JsArray$empty));
				return A2(elm$core$Elm$JsArray$push, newSub, tree);
			}
		} else {
			var value = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (value.$ === 'SubTree') {
				var subTree = value.a;
				var newSub = elm$core$Array$SubTree(
					A4(elm$core$Array$insertTailInTree, shift - elm$core$Array$shiftStep, index, tail, subTree));
				return A3(elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			} else {
				var newSub = elm$core$Array$SubTree(
					A4(
						elm$core$Array$insertTailInTree,
						shift - elm$core$Array$shiftStep,
						index,
						tail,
						elm$core$Elm$JsArray$singleton(value)));
				return A3(elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			}
		}
	});
var elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var elm$core$Array$unsafeReplaceTail = F2(
	function (newTail, _n0) {
		var len = _n0.a;
		var startShift = _n0.b;
		var tree = _n0.c;
		var tail = _n0.d;
		var originalTailLen = elm$core$Elm$JsArray$length(tail);
		var newTailLen = elm$core$Elm$JsArray$length(newTail);
		var newArrayLen = len + (newTailLen - originalTailLen);
		if (_Utils_eq(newTailLen, elm$core$Array$branchFactor)) {
			var overflow = _Utils_cmp(newArrayLen >>> elm$core$Array$shiftStep, 1 << startShift) > 0;
			if (overflow) {
				var newShift = startShift + elm$core$Array$shiftStep;
				var newTree = A4(
					elm$core$Array$insertTailInTree,
					newShift,
					len,
					newTail,
					elm$core$Elm$JsArray$singleton(
						elm$core$Array$SubTree(tree)));
				return A4(elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, elm$core$Elm$JsArray$empty);
			} else {
				return A4(
					elm$core$Array$Array_elm_builtin,
					newArrayLen,
					startShift,
					A4(elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
					elm$core$Elm$JsArray$empty);
			}
		} else {
			return A4(elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
		}
	});
var elm$core$Array$appendHelpTree = F2(
	function (toAppend, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		var itemsToAppend = elm$core$Elm$JsArray$length(toAppend);
		var notAppended = (elm$core$Array$branchFactor - elm$core$Elm$JsArray$length(tail)) - itemsToAppend;
		var appended = A3(elm$core$Elm$JsArray$appendN, elm$core$Array$branchFactor, tail, toAppend);
		var newArray = A2(elm$core$Array$unsafeReplaceTail, appended, array);
		if (notAppended < 0) {
			var nextTail = A3(elm$core$Elm$JsArray$slice, notAppended, itemsToAppend, toAppend);
			return A2(elm$core$Array$unsafeReplaceTail, nextTail, newArray);
		} else {
			return newArray;
		}
	});
var elm$core$Elm$JsArray$foldl = _JsArray_foldl;
var elm$core$Array$builderFromArray = function (_n0) {
	var len = _n0.a;
	var tree = _n0.c;
	var tail = _n0.d;
	var helper = F2(
		function (node, acc) {
			if (node.$ === 'SubTree') {
				var subTree = node.a;
				return A3(elm$core$Elm$JsArray$foldl, helper, acc, subTree);
			} else {
				return A2(elm$core$List$cons, node, acc);
			}
		});
	return {
		nodeList: A3(elm$core$Elm$JsArray$foldl, helper, _List_Nil, tree),
		nodeListSize: (len / elm$core$Array$branchFactor) | 0,
		tail: tail
	};
};
var elm$core$Array$append = F2(
	function (a, _n0) {
		var aTail = a.d;
		var bLen = _n0.a;
		var bTree = _n0.c;
		var bTail = _n0.d;
		if (_Utils_cmp(bLen, elm$core$Array$branchFactor * 4) < 1) {
			var foldHelper = F2(
				function (node, array) {
					if (node.$ === 'SubTree') {
						var tree = node.a;
						return A3(elm$core$Elm$JsArray$foldl, foldHelper, array, tree);
					} else {
						var leaf = node.a;
						return A2(elm$core$Array$appendHelpTree, leaf, array);
					}
				});
			return A2(
				elm$core$Array$appendHelpTree,
				bTail,
				A3(elm$core$Elm$JsArray$foldl, foldHelper, a, bTree));
		} else {
			var foldHelper = F2(
				function (node, builder) {
					if (node.$ === 'SubTree') {
						var tree = node.a;
						return A3(elm$core$Elm$JsArray$foldl, foldHelper, builder, tree);
					} else {
						var leaf = node.a;
						return A2(elm$core$Array$appendHelpBuilder, leaf, builder);
					}
				});
			return A2(
				elm$core$Array$builderToArray,
				true,
				A2(
					elm$core$Array$appendHelpBuilder,
					bTail,
					A3(
						elm$core$Elm$JsArray$foldl,
						foldHelper,
						elm$core$Array$builderFromArray(a),
						bTree)));
		}
	});
var elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = elm$core$Array$bitMask & (index >>> shift);
			var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_n0.$ === 'SubTree') {
				var subTree = _n0.a;
				var $temp$shift = shift - elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _n0.a;
				return A2(elm$core$Elm$JsArray$unsafeGet, elm$core$Array$bitMask & index, values);
			}
		}
	});
var elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var elm$core$Array$get = F2(
	function (index, _n0) {
		var len = _n0.a;
		var startShift = _n0.b;
		var tree = _n0.c;
		var tail = _n0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			elm$core$Array$tailIndex(len)) > -1) ? elm$core$Maybe$Just(
			A2(elm$core$Elm$JsArray$unsafeGet, elm$core$Array$bitMask & index, tail)) : elm$core$Maybe$Just(
			A3(elm$core$Array$getHelp, startShift, index, tree)));
	});
var elm$core$Array$length = function (_n0) {
	var len = _n0.a;
	return len;
};
var elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var elm$core$Array$sliceLeft = F2(
	function (from, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		if (!from) {
			return array;
		} else {
			if (_Utils_cmp(
				from,
				elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					elm$core$Array$Array_elm_builtin,
					len - from,
					elm$core$Array$shiftStep,
					elm$core$Elm$JsArray$empty,
					A3(
						elm$core$Elm$JsArray$slice,
						from - elm$core$Array$tailIndex(len),
						elm$core$Elm$JsArray$length(tail),
						tail));
			} else {
				var skipNodes = (from / elm$core$Array$branchFactor) | 0;
				var helper = F2(
					function (node, acc) {
						if (node.$ === 'SubTree') {
							var subTree = node.a;
							return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
						} else {
							var leaf = node.a;
							return A2(elm$core$List$cons, leaf, acc);
						}
					});
				var leafNodes = A3(
					elm$core$Elm$JsArray$foldr,
					helper,
					_List_fromArray(
						[tail]),
					tree);
				var nodesToInsert = A2(elm$core$List$drop, skipNodes, leafNodes);
				if (!nodesToInsert.b) {
					return elm$core$Array$empty;
				} else {
					var head = nodesToInsert.a;
					var rest = nodesToInsert.b;
					var firstSlice = from - (skipNodes * elm$core$Array$branchFactor);
					var initialBuilder = {
						nodeList: _List_Nil,
						nodeListSize: 0,
						tail: A3(
							elm$core$Elm$JsArray$slice,
							firstSlice,
							elm$core$Elm$JsArray$length(head),
							head)
					};
					return A2(
						elm$core$Array$builderToArray,
						true,
						A3(elm$core$List$foldl, elm$core$Array$appendHelpBuilder, initialBuilder, rest));
				}
			}
		}
	});
var elm$core$Array$fetchNewTail = F4(
	function (shift, end, treeEnd, tree) {
		fetchNewTail:
		while (true) {
			var pos = elm$core$Array$bitMask & (treeEnd >>> shift);
			var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_n0.$ === 'SubTree') {
				var sub = _n0.a;
				var $temp$shift = shift - elm$core$Array$shiftStep,
					$temp$end = end,
					$temp$treeEnd = treeEnd,
					$temp$tree = sub;
				shift = $temp$shift;
				end = $temp$end;
				treeEnd = $temp$treeEnd;
				tree = $temp$tree;
				continue fetchNewTail;
			} else {
				var values = _n0.a;
				return A3(elm$core$Elm$JsArray$slice, 0, elm$core$Array$bitMask & end, values);
			}
		}
	});
var elm$core$Array$hoistTree = F3(
	function (oldShift, newShift, tree) {
		hoistTree:
		while (true) {
			if ((_Utils_cmp(oldShift, newShift) < 1) || (!elm$core$Elm$JsArray$length(tree))) {
				return tree;
			} else {
				var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, 0, tree);
				if (_n0.$ === 'SubTree') {
					var sub = _n0.a;
					var $temp$oldShift = oldShift - elm$core$Array$shiftStep,
						$temp$newShift = newShift,
						$temp$tree = sub;
					oldShift = $temp$oldShift;
					newShift = $temp$newShift;
					tree = $temp$tree;
					continue hoistTree;
				} else {
					return tree;
				}
			}
		}
	});
var elm$core$Array$sliceTree = F3(
	function (shift, endIdx, tree) {
		var lastPos = elm$core$Array$bitMask & (endIdx >>> shift);
		var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, lastPos, tree);
		if (_n0.$ === 'SubTree') {
			var sub = _n0.a;
			var newSub = A3(elm$core$Array$sliceTree, shift - elm$core$Array$shiftStep, endIdx, sub);
			return (!elm$core$Elm$JsArray$length(newSub)) ? A3(elm$core$Elm$JsArray$slice, 0, lastPos, tree) : A3(
				elm$core$Elm$JsArray$unsafeSet,
				lastPos,
				elm$core$Array$SubTree(newSub),
				A3(elm$core$Elm$JsArray$slice, 0, lastPos + 1, tree));
		} else {
			return A3(elm$core$Elm$JsArray$slice, 0, lastPos, tree);
		}
	});
var elm$core$Array$sliceRight = F2(
	function (end, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		if (_Utils_eq(end, len)) {
			return array;
		} else {
			if (_Utils_cmp(
				end,
				elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					elm$core$Array$Array_elm_builtin,
					end,
					startShift,
					tree,
					A3(elm$core$Elm$JsArray$slice, 0, elm$core$Array$bitMask & end, tail));
			} else {
				var endIdx = elm$core$Array$tailIndex(end);
				var depth = elm$core$Basics$floor(
					A2(
						elm$core$Basics$logBase,
						elm$core$Array$branchFactor,
						A2(elm$core$Basics$max, 1, endIdx - 1)));
				var newShift = A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep);
				return A4(
					elm$core$Array$Array_elm_builtin,
					end,
					newShift,
					A3(
						elm$core$Array$hoistTree,
						startShift,
						newShift,
						A3(elm$core$Array$sliceTree, startShift, endIdx, tree)),
					A4(elm$core$Array$fetchNewTail, startShift, end, endIdx, tree));
			}
		}
	});
var elm$core$Array$translateIndex = F2(
	function (index, _n0) {
		var len = _n0.a;
		var posIndex = (index < 0) ? (len + index) : index;
		return (posIndex < 0) ? 0 : ((_Utils_cmp(posIndex, len) > 0) ? len : posIndex);
	});
var elm$core$Array$slice = F3(
	function (from, to, array) {
		var correctTo = A2(elm$core$Array$translateIndex, to, array);
		var correctFrom = A2(elm$core$Array$translateIndex, from, array);
		return (_Utils_cmp(correctFrom, correctTo) > 0) ? elm$core$Array$empty : A2(
			elm$core$Array$sliceLeft,
			correctFrom,
			A2(elm$core$Array$sliceRight, correctTo, array));
	});
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 'Seed', a: a, b: b};
	});
var elm$random$Random$next = function (_n0) {
	var state0 = _n0.a;
	var incr = _n0.b;
	return A2(elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var elm$core$Bitwise$xor = _Bitwise_xor;
var elm$random$Random$peel = function (_n0) {
	var state = _n0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var elm$random$Random$int = F2(
	function (a, b) {
		return elm$random$Random$Generator(
			function (seed0) {
				var _n0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
				var lo = _n0.a;
				var hi = _n0.b;
				var range = (hi - lo) + 1;
				if (!((range - 1) & range)) {
					return _Utils_Tuple2(
						(((range - 1) & elm$random$Random$peel(seed0)) >>> 0) + lo,
						elm$random$Random$next(seed0));
				} else {
					var threshhold = (((-range) >>> 0) % range) >>> 0;
					var accountForBias = function (seed) {
						accountForBias:
						while (true) {
							var x = elm$random$Random$peel(seed);
							var seedN = elm$random$Random$next(seed);
							if (_Utils_cmp(x, threshhold) < 0) {
								var $temp$seed = seedN;
								seed = $temp$seed;
								continue accountForBias;
							} else {
								return _Utils_Tuple2((x % range) + lo, seedN);
							}
						}
					};
					return accountForBias(seed0);
				}
			});
	});
var elm_community$random_extra$Random$Array$choose = function (arr) {
	if (elm$core$Array$isEmpty(arr)) {
		return elm$random$Random$constant(
			_Utils_Tuple2(elm$core$Maybe$Nothing, arr));
	} else {
		var lastIndex = elm$core$Array$length(arr) - 1;
		var gen = A2(elm$random$Random$int, 0, lastIndex);
		var front = function (i) {
			return A3(elm$core$Array$slice, 0, i, arr);
		};
		var back = function (i) {
			return _Utils_eq(i, lastIndex) ? elm$core$Array$empty : A3(elm$core$Array$slice, i + 1, lastIndex + 1, arr);
		};
		return A2(
			elm$random$Random$map,
			function (index) {
				return _Utils_Tuple2(
					A2(elm$core$Array$get, index, arr),
					A2(
						elm$core$Array$append,
						front(index),
						back(index)));
			},
			gen);
	}
};
var elm_community$random_extra$Random$Array$shuffle = function (arr) {
	if (elm$core$Array$isEmpty(arr)) {
		return elm$random$Random$constant(arr);
	} else {
		var helper = function (_n0) {
			var done = _n0.a;
			var remaining = _n0.b;
			return A2(
				elm$random$Random$andThen,
				function (_n1) {
					var m_val = _n1.a;
					var shorter = _n1.b;
					if (m_val.$ === 'Nothing') {
						return elm$random$Random$constant(
							_Utils_Tuple2(done, shorter));
					} else {
						var val = m_val.a;
						return helper(
							_Utils_Tuple2(
								A2(elm$core$List$cons, val, done),
								shorter));
					}
				},
				elm_community$random_extra$Random$Array$choose(remaining));
		};
		return A2(
			elm$random$Random$map,
			A2(elm$core$Basics$composeR, elm$core$Tuple$first, elm$core$Array$fromList),
			helper(
				_Utils_Tuple2(_List_Nil, arr)));
	}
};
var author$project$LearnApp$reshuffle = function (model) {
	var _n0 = model.seed;
	if (_n0.$ === 'Just') {
		var seed = _n0.a;
		var state = model.state;
		var array = elm$core$Array$fromList(model.lesson.b);
		var _n1 = A2(
			elm$random$Random$step,
			elm_community$random_extra$Random$Array$shuffle(array),
			seed);
		var shuffled = _n1.a;
		var newSeed = _n1.b;
		var newModel = _Utils_update(
			model,
			{
				correct: 0,
				incorrect: 0,
				input: '',
				result: elm$core$Maybe$Nothing,
				seed: elm$core$Maybe$Just(newSeed),
				shuffled: elm$core$Maybe$Just(
					elm$core$Array$toList(shuffled))
			});
		var _n2 = model.lesson;
		var lessonName = _n2.a;
		return _Utils_Tuple2(
			newModel,
			function () {
				var _n3 = (model.correct > 0) || (model.incorrect > 0);
				if (_n3) {
					return A2(
						elm$core$Task$perform,
						author$project$Model$SaveState(
							{correct: model.correct, incorrect: model.incorrect, lesson: lessonName, time: 0}),
						elm$time$Time$now);
				} else {
					return elm$core$Platform$Cmd$none;
				}
			}());
	} else {
		return author$project$Model$noMsg(model);
	}
};
var author$project$LearnApp$actionNext = function (model) {
	var _n0 = model.shuffled;
	if (_n0.$ === 'Just') {
		var list = _n0.a;
		if (!list.b) {
			return author$project$LearnApp$reshuffle(model);
		} else {
			if (!list.b.b) {
				var a = list.a;
				return author$project$LearnApp$reshuffle(model);
			} else {
				return author$project$Model$noMsg(
					_Utils_update(
						model,
						{
							input: '',
							result: elm$core$Maybe$Nothing,
							shuffled: elm$core$Maybe$Just(
								A2(elm$core$List$drop, 1, list))
						}));
			}
		}
	} else {
		return author$project$LearnApp$reshuffle(model);
	}
};
var elm$json$Json$Encode$int = _Json_wrap;
var elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			elm$core$List$foldl,
			F2(
				function (_n0, obj) {
					var k = _n0.a;
					var v = _n0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var elm$json$Json$Encode$string = _Json_wrap;
var author$project$LearnApp$setStorage = _Platform_outgoingPort(
	'setStorage',
	function ($) {
		return elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'history',
					elm$json$Json$Encode$list(
						function ($) {
							return elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'correct',
										elm$json$Json$Encode$int($.correct)),
										_Utils_Tuple2(
										'incorrect',
										elm$json$Json$Encode$int($.incorrect)),
										_Utils_Tuple2(
										'lesson',
										elm$json$Json$Encode$string($.lesson)),
										_Utils_Tuple2(
										'time',
										elm$json$Json$Encode$int($.time))
									]));
						})($.history))
				]));
	});
var author$project$Model$ChangeLessonView = {$: 'ChangeLessonView'};
var author$project$Model$HistoryView = {$: 'HistoryView'};
var author$project$Model$LessonView = {$: 'LessonView'};
var elm$core$Basics$round = _Basics_round;
var elm$time$Time$posixToMillis = function (_n0) {
	var millis = _n0.a;
	return millis;
};
var author$project$LearnApp$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'Check':
				return author$project$LearnApp$actionCheck(model);
			case 'Next':
				return author$project$LearnApp$actionNext(model);
			case 'ChangeInput':
				var str = msg.a;
				return author$project$Model$noMsg(
					_Utils_update(
						model,
						{input: str}));
			case 'Resize':
				var x = msg.a;
				var y = msg.b;
				return author$project$Model$noMsg(
					_Utils_update(
						model,
						{
							viewportSize: elm$core$Maybe$Just(
								_Utils_Tuple2(x, y))
						}));
			case 'GetViewport':
				var result = msg.a;
				if (result.$ === 'Ok') {
					var v = result.a;
					return author$project$Model$noMsg(
						_Utils_update(
							model,
							{
								viewportSize: elm$core$Maybe$Just(
									_Utils_Tuple2(
										elm$core$Basics$round(v.viewport.width),
										elm$core$Basics$round(v.viewport.height)))
							}));
				} else {
					return author$project$Model$noMsg(model);
				}
			case 'GetSeed':
				var seed = msg.a;
				return author$project$LearnApp$actionNext(
					_Utils_update(
						model,
						{
							seed: elm$core$Maybe$Just(seed)
						}));
			case 'ShowAll':
				return author$project$Model$noMsg(
					_Utils_update(
						model,
						{showAll: !model.showAll}));
			case 'KeyPressed':
				var i = msg.a;
				var _n2 = i === 13;
				if (_n2) {
					var _n3 = model.result;
					if (_n3.$ === 'Just') {
						return author$project$LearnApp$actionNext(model);
					} else {
						return author$project$LearnApp$actionCheck(model);
					}
				} else {
					return author$project$Model$noMsg(model);
				}
			case 'ChangeLesson':
				return author$project$Model$noMsg(
					_Utils_update(
						model,
						{view: author$project$Model$ChangeLessonView}));
			case 'SetLesson':
				var lesson = msg.a;
				return author$project$LearnApp$reshuffle(
					_Utils_update(
						model,
						{lesson: lesson, view: author$project$Model$LessonView}));
			case 'SaveState':
				var _new = msg.a;
				var time = msg.b;
				var state = model.state;
				var newModel = _Utils_update(
					model,
					{
						state: _Utils_update(
							state,
							{
								history: A2(
									elm$core$List$cons,
									_Utils_update(
										_new,
										{
											time: elm$time$Time$posixToMillis(time)
										}),
									state.history)
							})
					});
				return _Utils_Tuple2(
					newModel,
					elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[
								author$project$LearnApp$setStorage(newModel.state)
							])));
			case 'ShowLesson':
				return author$project$Model$noMsg(
					_Utils_update(
						model,
						{view: author$project$Model$LessonView}));
			default:
				return author$project$Model$noMsg(
					_Utils_update(
						model,
						{view: author$project$Model$HistoryView}));
		}
	});
var author$project$Model$SetLesson = function (a) {
	return {$: 'SetLesson', a: a};
};
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$map2 = _Json_map2;
var elm$json$Json$Decode$succeed = _Json_succeed;
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var elm$html$Html$div = _VirtualDom_node('div');
var elm$html$Html$span = _VirtualDom_node('span');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var elm$html$Html$Events$onClick = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var author$project$ChangeLessonView$createLessonButton = function (lesson) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('btn btn-outline-primary'),
				elm$html$Html$Events$onClick(
				author$project$Model$SetLesson(lesson))
			]),
		_List_fromArray(
			[
				elm$html$Html$text(lesson.a),
				A2(
				elm$html$Html$span,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('badge badge-pill badge-light')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(
							elm$core$List$length(lesson.b)))
					]))
			]));
};
var elm$html$Html$h3 = _VirtualDom_node('h3');
var author$project$ChangeLessonView$createGroup = F2(
	function (index, list) {
		var year = ((index / 2) | 0) + 1;
		var semester = (index % 2) + 1;
		if (!list.b) {
			return A2(elm$html$Html$div, _List_Nil, _List_Nil);
		} else {
			return A2(
				elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						elm$html$Html$h3,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('year-header')
							]),
						_List_fromArray(
							[
								elm$html$Html$text(
								'Jahr ' + (elm$core$String$fromInt(year) + (' Semester ' + elm$core$String$fromInt(semester))))
							])),
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('year-list')
							]),
						A2(elm$core$List$map, author$project$ChangeLessonView$createLessonButton, list))
					]));
		}
	});
var author$project$Anfrage$anfrage = _List_fromArray(
	[
		_Utils_Tuple2(
		'prosić o korzystną ofertę',
		_List_fromArray(
			['um ein günstiges Angebot bieten'])),
		_Utils_Tuple2(
		'przesłać ofertę',
		_List_fromArray(
			['ein Angebot übersenden', 'ein Angebot zu schicken'])),
		_Utils_Tuple2(
		'skontaktować się z firmą X',
		_List_fromArray(
			['sich an die Firma X wenden'])),
		_Utils_Tuple2(
		'zdecydować się na ofertę',
		_List_fromArray(
			['sich für ein Angebot entscheiden'])),
		_Utils_Tuple2(
		'nie być zobowiązanym do zamówienia',
		_List_fromArray(
			['zur Bestellung nicht verpflichtet sein'])),
		_Utils_Tuple2(
		'dodać nowe produkty do programu sprzedaży',
		_List_fromArray(
			['neue Produkte in das Verkaufsprogramm aufnehmen'])),
		_Utils_Tuple2(
		'przesłać prospekt, cennik',
		_List_fromArray(
			['das Prospekt, Preislisten übersenden'])),
		_Utils_Tuple2(
		'udostępnić',
		_List_fromArray(
			['zur Verfügung stellen'])),
		_Utils_Tuple2(
		'otrzymać informacje',
		_List_fromArray(
			['Auskünfte erhalten'])),
		_Utils_Tuple2(
		'uświadomić komuś coś',
		_List_fromArray(
			['jemanden auf etwas aufmerksam machen'])),
		_Utils_Tuple2(
		'dostarczyć pod uzgodnionymi warunkami',
		_List_fromArray(
			['zu bestimmten Bedingungen liefern'])),
		_Utils_Tuple2(
		'wyrazić gotowość',
		_List_fromArray(
			['sich bereit erklären'])),
		_Utils_Tuple2(
		'wyznaczyć termin',
		_List_fromArray(
			['eine Frist setzen'])),
		_Utils_Tuple2(
		'specjalizować się w',
		_List_fromArray(
			['sich spezialisieren auf'])),
		_Utils_Tuple2(
		'wykazać żywe zainteresowanie produktami',
		_List_fromArray(
			['das lebhafte Interesse den Produkten entgegenbringen'])),
		_Utils_Tuple2(
		'spełnić życzenie',
		_List_fromArray(
			['den Wunsch erfüllen'])),
		_Utils_Tuple2(
		'wejść w relacje biznesowe',
		_List_fromArray(
			['in Geschäftsbeziehungen kommen', 'in Geschäftsbeziehungen treten'])),
		_Utils_Tuple2(
		'rozważać ofertę',
		_List_fromArray(
			['das Angebot berücksichtigen'])),
		_Utils_Tuple2(
		'Dowiedzieliśmy się od naszego partnera biznesowego',
		_List_fromArray(
			['Wir haben von unserem Geschäftspartner erfahren'])),
		_Utils_Tuple2(
		'Chcielibyśmy poznać państwa aktualny cennik',
		_List_fromArray(
			['Wir möchten Ihre aktuellen Preise erfahren'])),
		_Utils_Tuple2(
		'Proszę, zrób nam korzystną ofertę',
		_List_fromArray(
			['Bitte unterbreiten Sie uns ein günstiges Angebot'])),
		_Utils_Tuple2(
		'Mamy zapotrzebowanie na',
		_List_fromArray(
			['Wir haben ständig Bedarf an'])),
		_Utils_Tuple2(
		'Daj nam znać czy masz towar w magazynie',
		_List_fromArray(
			['Bitte teilen Sie uns mit, ob Sie die Ware am Lager haben'])),
		_Utils_Tuple2(
		'Bierzemy pod uwagę produkty wysokiej jakości',
		_List_fromArray(
			['Für uns kommen hochwertige Produkte in Frage'])),
		_Utils_Tuple2(
		'Przywiązujemy dużą wagę do produktów najwyższej jakości',
		_List_fromArray(
			['Wir legen großen Wert auf Erzeugnisse höchster Qualität'])),
		_Utils_Tuple2(
		'Możesz liczyć na duże zamówienia',
		_List_fromArray(
			['Sie könen mit großen Aufträgen rechnen'])),
		_Utils_Tuple2(
		'Oczekujemy opóźnionego terminu płatności o 30 dni',
		_List_fromArray(
			['Wir erwarten ein Zahlungsziel von 30 Tagen'])),
		_Utils_Tuple2(
		'Będziemy wdzięczni za przesłanie próbek',
		_List_fromArray(
			['Für die Zusendung einiger Muster wären wir Ihnen dankbar'])),
		_Utils_Tuple2(
		'Proszę nam pozwolić zwrócić Pana uwagę na następującą ofertę',
		_List_fromArray(
			['Gestalten Sie uns, Sie uaf folgendes Angebot aufmerksam zu machen'])),
		_Utils_Tuple2(
		'Oferujemy Ci bez zobowiązań',
		_List_fromArray(
			['Wir bieten Ihnen unverbindlich an'])),
		_Utils_Tuple2(
		'Ze względu na duże zapotrzebowanie na nasze produkty oferujemy bez zaangażowania',
		_List_fromArray(
			['Wegen der großen Nachfrage nach unseren Produkten, bieten wir freibleibend an'])),
		_Utils_Tuple2(
		'Na życzenie wysyłamy Państwu nasz katalog',
		_List_fromArray(
			['Auf Ihren Wünsch senden wir Ihnen hiermit unseren Katalog']))
	]);
var author$project$Anfrage$lesson = _Utils_Tuple2('Anfrage', author$project$Anfrage$anfrage);
var author$project$Jahr2Semester1$random = _List_fromArray(
	[
		_Utils_Tuple2(
		'wymienić (np. buty)',
		_List_fromArray(
			['umtauschen'])),
		_Utils_Tuple2(
		'wygłaszać referat',
		_List_fromArray(
			['das Referat halten'])),
		_Utils_Tuple2(
		'wypadać (np. zajęcia)',
		_List_fromArray(
			['ausfallen'])),
		_Utils_Tuple2(
		'oszczędzać pieniądze',
		_List_fromArray(
			['Geld sparen'])),
		_Utils_Tuple2(
		'dozwolone',
		_List_fromArray(
			['erlaubt'])),
		_Utils_Tuple2(
		'regulamin (np. domu)',
		_List_fromArray(
			['die Hausordnung'])),
		_Utils_Tuple2(
		'po uzgodnieniu',
		_List_fromArray(
			['nach Absprache'])),
		_Utils_Tuple2(
		'urządzone komfortowo',
		_List_fromArray(
			['komfortabel eingerichtet'])),
		_Utils_Tuple2(
		'powstają szkody',
		_List_fromArray(
			['Schäden entstehen'])),
		_Utils_Tuple2(
		'poinformować',
		_List_fromArray(
			['benachrichten', 'mitteilen'])),
		_Utils_Tuple2(
		'spełniać życzenia',
		_List_fromArray(
			['Wünsche zu erfüllen'])),
		_Utils_Tuple2(
		'według danych szacunkowych',
		_List_fromArray(
			['nach schätzungen Angaben'])),
		_Utils_Tuple2(
		'zgłaszać rekordowe wyniki',
		_List_fromArray(
			['Rekordergebnisse melden'])),
		_Utils_Tuple2(
		'nocleg',
		_List_fromArray(
			['die Übernachtung'])),
		_Utils_Tuple2(
		'w stosunku do ubiegłego roku',
		_List_fromArray(
			['gegenüber dem Vorjahr'])),
		_Utils_Tuple2(
		'w porównaniu do',
		_List_fromArray(
			['im Vergleich zu'])),
		_Utils_Tuple2(
		'ogólna liczba',
		_List_fromArray(
			['Gesamtzahl'])),
		_Utils_Tuple2(
		'wynosić',
		_List_fromArray(
			['betragen', 'liegen bei ...', 'sich beläuft auf', 'ausmachen'])),
		_Utils_Tuple2(
		'udział w',
		_List_fromArray(
			['der Anteil an'])),
		_Utils_Tuple2(
		'pochodzić z',
		_List_fromArray(
			['stammen aus'])),
		_Utils_Tuple2(
		'odnotowywać wzrost',
		_List_fromArray(
			['Wachstum verzeichnen'])),
		_Utils_Tuple2(
		'szybować w górę',
		_List_fromArray(
			['in die Höhe schnellen'])),
		_Utils_Tuple2(
		'miejsce pamięci',
		_List_fromArray(
			['das Gedenkort', 'die Gedenkstätte'])),
		_Utils_Tuple2(
		'o ile',
		_List_fromArray(
			['sofern'])),
		_Utils_Tuple2(
		'przyciąganie',
		_List_fromArray(
			['die Anziehung']))
	]);
var author$project$Jahr2Semester1$standortAllgemein = _List_fromArray(
	[
		_Utils_Tuple2(
		'bliskość surowców naturalnych',
		_List_fromArray(
			['die Rohstoffnähe'])),
		_Utils_Tuple2(
		'niska cena energii',
		_List_fromArray(
			['niedrige Energiepreis'])),
		_Utils_Tuple2(
		'dobre trasy transportowe',
		_List_fromArray(
			['gute Transportwege'])),
		_Utils_Tuple2(
		'dobra infrastruktura',
		_List_fromArray(
			['gute Infrastruktur'])),
		_Utils_Tuple2(
		'bliskość rynku zbytu',
		_List_fromArray(
			['Nähe des Absatzmarktes'])),
		_Utils_Tuple2(
		'warunki klimatyczne',
		_List_fromArray(
			['klimatische Bedingungen'])),
		_Utils_Tuple2(
		'korzystne opodatkowanie',
		_List_fromArray(
			['günstige Besteuerung'])),
		_Utils_Tuple2(
		'klimat przyjazny przedsiębiorcy',
		_List_fromArray(
			['unternehmensfreindliches Klima'])),
		_Utils_Tuple2(
		'jasne, nieskomplikowane (transparentne) zasady',
		_List_fromArray(
			['klare, nicht komplizierte (transparente) Vorschriften'])),
		_Utils_Tuple2(
		'stabilność polityczna',
		_List_fromArray(
			['politische Stabilität'])),
		_Utils_Tuple2(
		'dostęp do nowoczesnych technologii',
		_List_fromArray(
			['Zugang zu modernen Technologien'])),
		_Utils_Tuple2(
		'dobra dostępność',
		_List_fromArray(
			['gute Erreichbarkeit']))
	]);
var author$project$Jahr2Semester1$lessons = _List_fromArray(
	[
		_Utils_Tuple2('Verschiedene', author$project$Jahr2Semester1$random),
		_Utils_Tuple2('Standort allgemein', author$project$Jahr2Semester1$standortAllgemein)
	]);
var author$project$LieblingslandDeutschen$deutsch = '\nDas Lieblingsland der Deutschen\n\nDas Urlaubsziel Spanien erlebt einen gewaltigen Boom. Die Reiseveranstalter weiten ihre Angebote stark aus\n\nVeranstalter und Hoteliers trauen ihren Augen kaum: Spanien, das beliebteste Reiseland der Deutschen, erlebt derzeit einen Boom wie nie zuvor. Wer dieses Jahr auf Last-minute-Angebote für den Osterurlaub in Spanien spekuliert, könnte am Ende leer ausgehen.\n\n„Wir haben in den Osterfeiertagen kein einziges Bett mehr frei, das habe ich noch nie so erlebt“, sagt Isabel Jorge von der kanarischen Hotelgruppe Lopesan, die zehn Häuser auf Gran Canaria und Teneriffa betreibt. Die Kanarischen Inseln sind hinter Katalonien und den Balearen die drittwichtigste Reiseregion Spaniens.\n\nWährend die gestiegene Terrorgefahr andere Reiseziele wie die Türkei und Ägypten ins Herz trifft, erzielt Spanien einen Rekord nach dem anderen. Für das Sommergeschäft verzeichnen die Hoteliers schon jetzt zweistellige Zuwachsraten bei den Buchungen. Insbesondere die fünf größten deutschen Reiseveranstalter – TUI Group, Thomas Cook, DER Touristik, FTI und Alltours – haben ihre Angebote für Spanien ordentlich ausgeweitet.\n\nAuf den Kanaren meldet TUI einen Zuwachs von fast 40 Prozent in diesem Jahr. Insbesondere Lanzarote legt massiv zu. „Das ist wirklich unglaublich, ich glaube, wir könnten noch mehr Betten auf den Inseln verkaufen”, sagt TUI-Sprecher Mario Köpers. Allerdings sind die Kanaren nur noch begrenzt aufnahmefähig, denn seit 15 Jahren gibt es einen Baustopp für neue Hotels und Apartmentsiedlungen.\n\nBesonders gefragt ist dieses Jahr auch die Costa de la Luz, der Küstenstreifen am Golf von Cádiz. TUI meldet dort einen Zuwachs von 22 Prozent bei den Buchungen. Auch Mallorca kann seine Stellung als Lieblingsinsel der Deutschen weiter festigen, nicht einmal die für Juni geplante Einführung einer neuen Tourismussteuer mindert die Anziehungskraft der Insel.\n\nDie Mehrheit der Deutschen bevorzugt nach wie vor Badeurlaub. „Sonne und Strand ist und bleibt das Hauptmotiv für Spanien-Reisen“, sagt Köpers. Jede siebte Urlaubsreise der Deutschen hat laut der Forschungsgemeinschaft Urlaub und Reisen (FUR) Spanien als Ziel.\n\nDas boomende Spanien-Geschäft geht hauptsächlich zulasten der Türkei. „Das Unglück in anderen Ländern kommt unserem Land zugute“, sagt José Luis Zoreda von Exceltur, dem Dachverband der wichtigsten spanischen Tourismusunternehmen. Nicht nur die Buchungen für die Türkei sind seit den Anschlägen in Istanbul vom Januar drastisch zurückgegangen. Die Tourismusbranche in Ägypten leidet unter den Folgen des Abschusses eines russischen Passagierflugzeugs über dem Sinai durch IS-Terroristen. Auch in Tunesien brachen die Buchungen nach zwei Anschlägen im vergangenen Jahr dramatisch ein. „Das sind die drei Länder, die weiterhin Einbrüche erleiden werden“, prognostiziert Norbert Fiebig, Präsident des Deutschen Reiseverbands (DRV).\n\nSpanien dürfte seine Stellung hingegen weiter festigen: Martin Lohmann von der FUR sieht noch großes Wachstumspotenzial bei neuen Segmenten, wie etwa Wellnessurlaub oder Städtereisen. Das sieht auch Juan Molas, Präsident des spanischen Hoteldachverbands Cehat, so. Früher buchten 80 Prozent aller Spanien-Touristen nur den klassischen Badeurlaub, jetzt sind es lediglich noch 60 Prozent. Kulturtourismus, Städtereisen und Gesundheitsurlaube hätten an Bedeutung gewonnen.\n';
var author$project$LieblingslandDeutschen$polnish = '\nUlubiony kraj Niemców\n\nHiszpański kraj wakacyjny przeżywa wielki rozkwit. Organizatorzy wycieczek poszerzają swoje oferty\n \nOrganizatorzy i hotelarze prawie nie wierzą w swoje oczy: Hiszpania, najpopularniejszy cel podróży Niemców, przeżywa boom jak nigdy dotąd. Każdy, kto spekuluje na temat ofert last minute na święta wielkanocne w Hiszpanii, może w końcu stracić pieniądze.\n\n"W czasie świąt wielkanocnych nie mamy żadnego łóżka pojedynczego, nigdy tego nie doświadczyłem" - mówi Isabel Jorge z grupy hotelowej Lopesan na Wyspach Kanaryjskich, która prowadzi dziesięć domów na Gran Canarii i Teneryfie. Wyspy Kanaryjskie są trzecim najważniejszym celem turystycznym w Hiszpanii, za Katalonią i Balearami.\n\nGdy zagrożenie terrorystyczne trafia do innych miejsc, w tym Turcji i Egiptu, Hiszpania zdobywa kolejne rekordy. Hotelarze już teraz odnotowują dwucyfrowe stopy wzrostu dla rezerwacji dla letniego biznesu. W szczególności pięciu największych niemieckich operatorów turystycznych - TUI Group, Thomas Cook, DER Touristik, FTI i Alltours - odpowiednio rozszerzyło swoje oferty dla Hiszpanii.\n\nNa Wyspach Kanaryjskich TUI odnotowuje w tym roku wzrost o prawie 40 procent. W szczególności Lanzarote jest masowo. "To naprawdę niesamowite, myślę, że moglibyśmy sprzedać jeszcze więcej miejsc na wyspach", mówi rzecznik TUI, Mario Köpers. Wyspy Kanaryjskie są jednak tylko częściowo otwarte, ponieważ od 15 lat istnieje zamrożenie nowych hoteli i osiedli mieszkaniowych.\n\nSzczególnie na zapotrzebowanie w tym roku jest Costa de la Luz, pas nadmorski w Zatoce Kadyksu. TUI odnotowuje wzrost o 22 procent w rezerwacjach. Nawet Majorka może umocnić swoją pozycję jako ulubiona wyspa Niemiec, nawet planowane w czerwcu wprowadzenie nowego podatku turystycznego nie zmniejsza atrakcyjności wyspy.\n\nWiększość Niemców nadal preferuje wakacje na plaży. "Słońce i plaża są i pozostaną głównym motywem podróży do Hiszpanii", mówi Köpers. Co siódma wakacyjna podróż Niemców, według badań Stowarzyszenia Wakacje i Podróże (FUR), Hiszpania jako cel podróży.\n\nRozkwita biznes w Hiszpanii odbywa się głównie kosztem Turcji. "Katastrofa w innych krajach przynosi korzyści naszemu krajowi" - mówi José Luis Zoreda z Exceltur, organizacji parasolowej najważniejszych hiszpańskich firm turystycznych. Nie tylko rezerwacje w Turcji drastycznie spadły od styczniowych ataków w Stambule. Przemysł turystyczny w Egipcie cierpi na terrorystów z IS w wyniku zestrzelenia rosyjskiego samolotu pasażerskiego na Synaju. Również w Tunezji rezerwacje spadły dramatycznie po dwóch atakach w zeszłym roku. "To są trzy kraje, które będą nadal cierpieć z powodu kryzysu" - prognozuje Norbert Fiebig, prezes Niemieckiego Stowarzyszenia Turystycznego (DRV).\n\nZ drugiej strony Hiszpania prawdopodobnie jeszcze bardziej umocni swoją pozycję: Martin Lohmann z FUR dostrzega ogromny potencjał wzrostu w nowych segmentach, takich jak wakacje wellness czy przerwy w mieście. To wygląda Juan Molas, prezes hiszpańskiego hotelu konfederacji CEHAT tak. Przed 80 procent Spain-turystów zarezerwowany tylko klasyczne wakacje nad morzem, teraz jest tylko 60 proc. Turystyka kulturowa, Zakwaterowanie i urlop zdrowia zyskały na znaczeniu.\n';
var elm$core$Debug$log = _Debug_log;
var author$project$LieblingslandDeutschen$translations = function () {
	var pl = A2(elm$core$String$split, '.', author$project$LieblingslandDeutschen$polnish);
	var lengthPl = A2(
		elm$core$Debug$log,
		'Length pl',
		elm$core$List$length(pl));
	var de = A2(elm$core$String$split, '.', author$project$LieblingslandDeutschen$deutsch);
	var lengthDe = A2(
		elm$core$Debug$log,
		'Length de',
		elm$core$List$length(de));
	return A3(
		elm$core$List$map2,
		F2(
			function (plSentence, deSentence) {
				return _Utils_Tuple2(
					plSentence,
					_List_fromArray(
						[deSentence]));
			}),
		pl,
		de);
}();
var author$project$LieblingslandDeutschen$lesson = _Utils_Tuple2('Das Lieblingsland der Deutschen', author$project$LieblingslandDeutschen$translations);
var author$project$PolensTurismus$deutsch = '\nDas Jahr 2016 war für den Tourismus in Polens Städten und Regionen wiederum ein Erfolgsjahr. Aufgrund der unsicheren Lage in der östlichen Mittelmeerregion entschieden sich mehr Polen für den Urlaub im eigenen Land. Aber auch bei der Zahl der ausländischen Gäste setzte sich der positive Trend der Vorjahre fort. Nach vorläufigen Schätzungen rechnet das Polnische Fremdenverkehrsamt für 2016 mit rund 6,5 Millionen deutschen Touristen in Polen, etwa eine halbe Million mehr als im Jahr zuvor. Auch viele Städte und Touristenattraktionen melden Rekordergebnisse.\n\nNach Angaben des polnischen Statistikamtes stieg die Zahl der Übernachtungen ausländischer Gäste in registrierten Unterkünften mit mindestens zehn Betten in den ersten elf Monaten 2016 um gut sieben Prozent gegenüber dem Vorjahreszeitraum, die der deutschen Gäste um fast acht Prozent. Rechnet man die Zahlen auf das ganze Jahr hoch und bezieht auch die Übernachtungen in kleinen Pensionen, Ferienwohnungen, agrotouristischen Unterkünften oder bei Verwandten und Bekannten mit ein, ist für 2016 mit einer Gesamtzahl von rund 18,5 Millionen ausländischen Touristen zu rechnen. Im Jahr 2015 waren es etwa 17,3 Millionen. Die Zahl der deutschen Touristen stieg danach im gleichen Zeitraum von rund sechs auf fast 6,5 Millionen. Der Anteil deutscher Gäste an der Gesamtzahl aller ausländischen Touristen liegt stabil bei gut einem Drittel.\n\nBeliebtestes Städtereiseziel in Polen ist die alte Königsstadt Krakow (Krakau). Rund 12,5 Millionen Menschen haben die Stadt 2016 besucht. Das ist ein Plus von gut zwei Millionen im Vergleich zum Vorjahr. Etwa 2,9 Millionen Besucher stammten aus dem Ausland. Positiv für die Bilanz wirkte sich der Weltjugendtag aus, der im vergangenen Juli in Krakau stattfand. Allein zur Papstmesse kamen laut Zahlen des Vatikans rund 1,5 Millionen Menschen.\n\nAuch Wroclaw (Breslau) stand 2016 im Fokus des Interesses der Weltöffentlichkeit. Die Europäische Kulturhauptstadt konnte im Verlauf des Festjahres insgesamt rund fünf Millionen Besucher verbuchen. Die Mehrheit der etwa 1,4 Millionen ausländischen Touristen stammte aus Deutschland. Aufgrund der hohen Besucherzahlen will die Stadtverwaltung in diesem Jahr einige Neuerungen für Touristen einführen. So soll künftig ein Shuttle-Bus die Innenstadt noch schneller und häufiger mit dem Flughafen verbinden. Ebenfalls in diesem Jahr soll eine attraktive Touristenkarte eingeführt werden, die gleichzeitig als Ticket für den Nahverkehr, wie auch als Rabattkarte für zahlreiche Sehenswürdigkeiten der Stadt dient.\n\nIn Poznan (Posen) wuchs die Zahl der Besucher im vergangenen Jahr Schätzungen zufolge um etwa zehn Prozent auf rund 1,4 Millionen. Ein enormes Plus an Übernachtungen konnte 2016 auch die polnische Ostseeregion verzeichnen. Wichtige Seebäder wie Kolobrzeg (Kolberg), Swinoujscie (Swinemünde) und Mielno (Großmöllen) begrüßten 2016 bis zu 15 Prozent mehr Gäste, und dies nicht nur während der Hauptsaison. Gerade das milde Septemberwetter ließ die Zahlen nochmals in die Höhe schnellen.\n\nAber nicht nur klassische Städte- und Sommerziele können zufrieden auf das vergangene Tourismusjahr zurückblicken. Auch Museen, Freizeitparks und andere Sehenswürdigkeiten waren viel besucht. So genossen beispielsweise rund 3,5 Millionen Besucher die Reize des Tatra-Nationalparks ganz im Süden des Landes an der Grenze zur Slowakischen Republik. Obwohl die Zahlen einen neuen Rekord markierten, konnte die Nationalparkverwaltung keinen nennenswerten Anstieg der Verstöße gegen die Parkordnung erkennen. Die überwiegende Mehrzahl gehe verantwortungsvoll mit der streng geschützten Naturlandschaft um.\n\nZu den größten Touristenattraktionen Polens gehört das unweit von Krakau gelegene Salzbergwerk von Wieliczka, das Teil des UNESCO-Welterbes ist. Im vergangenen Jahr zählte man fast 1,6 Millionen Besucher und erreichte damit ein neues Allzeithoch. Gegenüber 2015 wuchs die Besucherzahl um rund 13 Prozent. Fast 50 Prozent der Gäste kamen aus dem Ausland, die meisten aus Großbritannien und Deutschland. Noch mehr Interesse verzeichnete eine andere UNESCO-Welterbestätte in der Nähe von Krakau. Mehr als zwei Millionen Besucher zählte 2016 die Gedenkstätte im ehemaligen Konzentrationslager Auschwitz-Birkenau, so viele wie noch nie zuvor. 2015 waren es noch 1,7 Millionen. Rund 155 000 Pilger besuchten das Stammlager Auschwitz und das Lager Birkenau im Rahmen des katholischen Weltjugendtages im Juli. Fast drei Viertel aller Besucher nahmen an einer Führung mit einer der 286 geschulten Fachkräften teil, welche die Geschichte des Vernichtungslagers in fast 20 Sprachen vermitteln.\n';
var author$project$PolensTurismus$polnish = '\nRok 2016 był kolejnym udanym rokiem dla turystyki w polskich miastach i regionach. Ze względu na niepewną sytuację we wschodnim regionie Morza Śródziemnego więcej Polaków postanowiło spędzić wakacje we własnym kraju. Ale liczba gości zagranicznych również kontynuowała pozytywny trend z poprzednich lat. Według wstępnych szacunków, Polska Izba Turystyki spodziewa się około 6,5 miliona niemieckich turystów w Polsce w 2016 roku, o pół miliona więcej niż rok wcześniej. Wiele miast i atrakcji turystycznych również odnotowuje rekordowe wyniki.\n\nWedług polskiego Urzędu Statystycznego, liczba noclegów gości zagranicznych wzrósł w zarejestrowanej zakwaterowania z co najmniej dziesięć łóżek w pierwszych jedenastu miesięcy w 2016 roku do siedmiu procent w porównaniu do tego samego okresu w ubiegłym roku, niemieccy goście przez prawie osiem procent. Jeśli dodać numery na cały rok wysokie i jest również noce w małych pensjonatach, agro noclegowej lub z rodziną i przyjaciółmi z jednej spodziewana jest w sumie około 18,5 mln zagranicznych\nturystów do 2016. W 2015 roku było to około 17,3 miliona. Liczba niemieckich turystów wzrosła w tym samym okresie z około sześciu do niemal 6,5 miliona. Odsetek gości z Niemiec w ogólnej liczbie turystów zagranicznych jest stabilny i wynosi nieco ponad jedną trzecią.\n\nNajbardziej popularnym celem wycieczek w Polsce jest stare królewskie miasto Kraków. Około 12,5 miliona osób odwiedziło miasto w 2016 roku. To plus ponad dwa miliony w porównaniu do poprzedniego roku. Około 2,9 miliona odwiedzających pochodziło z zagranicy. Światowe Dni Młodzieży, które odbyły się w Krakowie w lipcu ubiegłego roku, miały pozytywny wpływ na bilans. Według danych Watykanu do Mszy św Papieża przyszło około 1,5 miliona osób.\n\nWrocław (Wrocław) był również przedmiotem międzynarodowego zainteresowania w 2016 roku. Europejska Stolica Kultury odnotowała w ciągu roku około pięciu milionów odwiedzających. Większość z około 1,4 miliona zagranicznych turystów pochodziła z Niemiec. Ze względu na dużą liczbę odwiedzających, administracja miasta chce wprowadzić w tym roku pewne innowacje dla turystów. W przyszłości autobus będzie łączyć centrum miasta jeszcze szybciej i częściej z lotniskiem. Również w tym roku ma zostać wprowadzona atrakcyjna karta turystyczna, która służy również jako bilet na transport publiczny, a także karta rabatowa dla licznych zabytków miasta.\n\nW Poznaniu liczba odwiedzających w zeszłym roku wzrosła o około dziesięć procent do około 1,4 miliona. Ogromny wzrost noclegów odnotowano również w 2016 roku w polskim regionie Morza Bałtyckiego. Ważne nadmorskie kurorty, takie jak Kołobrzegu (Kolberg) Świnoujście (Świnoujście) oraz Mielno (Mielno) przywitał 2016 do 15 procent więcej osób, a nie tylko w sezonie. Zwłaszcza łagodna wrześniowa pogoda pozwoliła na wzrost liczby.\n\nAle nie tylko klasyczne miejskie i letnie miejscowości mogą cieszyć się z ubiegłorocznej turystyki. Również muzea, parki rozrywki i inne zabytki były często odwiedzane. Na przykład około 3,5 miliona odwiedzających cieszyło się atrakcjami Tatrzańskiego Parku Narodowego na południu kraju, na granicy z Republiką Słowacką. Chociaż liczby ustanowiły nowy rekord, administracja Parku Narodowego nie była w stanie wykryć znacznego wzrostu liczby naruszeń systemu parkingowego. Ogromna większość postępuje w sposób odpowiedzialny wobec ściśle chronionego krajobrazu naturalnego.\n\nJedną z największych atrakcji turystycznych w Polsce jest Kopalnia Soli w Wieliczce, która znajduje się niedaleko Krakowa i wpisana jest na listę światowego dziedzictwa UNESCO. W ubiegłym roku było prawie 1,6 miliona odwiedzających, osiągając nowy rekord wszech czasów. W porównaniu do roku 2015 liczba odwiedzających wzrosła o około 13 procent. Prawie 50 procent gości pochodziło z zagranicy, w większości z Wielkiej Brytanii i Niemiec. Jeszcze większe zainteresowanie wzbudziło kolejne miejsce wpisane na Listę Światowego Dziedzictwa UNESCO pod Krakowem. W 2016 roku ponad dwa miliony odwiedzających policzyło pomnik w byłym obozie koncentracyjnym Auschwitz-Birkenau, bardziej niż kiedykolwiek wcześniej. W 2015 roku było jeszcze 1,7 miliona. Około 155 000 pielgrzymów odwiedziło główny obóz Auschwitz i obóz Birkenau w kontekście Światowego Dnia Młodzieży Katolickiej w lipcu. Prawie trzy czwarte wszystkich odwiedzających wzięło udział w wycieczce z jednym z 286 przeszkolonych specjalistów, którzy nauczają historii obozu zagłady w prawie 20 językach.\n';
var author$project$PolensTurismus$translations = function () {
	var pl = A2(elm$core$String$split, '.', author$project$PolensTurismus$polnish);
	var lengthPl = A2(
		elm$core$Debug$log,
		'Length pl',
		elm$core$List$length(pl));
	var de = A2(elm$core$String$split, '.', author$project$PolensTurismus$deutsch);
	var lengthDe = A2(
		elm$core$Debug$log,
		'Length de',
		elm$core$List$length(de));
	return A3(
		elm$core$List$map2,
		F2(
			function (plSentence, deSentence) {
				return _Utils_Tuple2(
					plSentence,
					_List_fromArray(
						[deSentence]));
			}),
		pl,
		de);
}();
var author$project$PolensTurismus$lesson = _Utils_Tuple2('Polens Turismus', author$project$PolensTurismus$translations);
var author$project$Rektion$rektion = _List_fromArray(
	[
		_Utils_Tuple3(
		'an',
		'A',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'dostosować się do',
				_List_fromArray(
					['anpassen'])),
				_Utils_Tuple2(
				'apelować do',
				_List_fromArray(
					['appelieren'])),
				_Utils_Tuple2(
				'myśleć o',
				_List_fromArray(
					['denken'])),
				_Utils_Tuple2(
				'przypominać sobie coś/kogoś',
				_List_fromArray(
					['sich erinnern'])),
				_Utils_Tuple2(
				'wierzyć w',
				_List_fromArray(
					['glauben'])),
				_Utils_Tuple2(
				'graniczyć z',
				_List_fromArray(
					['grenzen'])),
				_Utils_Tuple2(
				'przyzwyczaić się do',
				_List_fromArray(
					['sich gewöhnen'])),
				_Utils_Tuple2(
				'pisać do',
				_List_fromArray(
					['schreiben'])),
				_Utils_Tuple2(
				'zwracać się do',
				_List_fromArray(
					['sich wenden']))
			])),
		_Utils_Tuple3(
		'an',
		'D',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'pracować nad',
				_List_fromArray(
					['arbeiten'])),
				_Utils_Tuple2(
				'zachorować na',
				_List_fromArray(
					['erkranken'])),
				_Utils_Tuple2(
				'brakować czegoś',
				_List_fromArray(
					['fehlen'])),
				_Utils_Tuple2(
				'cierpieć na',
				_List_fromArray(
					['leiden'])),
				_Utils_Tuple2(
				'brakować czegoś',
				_List_fromArray(
					['mangeln'])),
				_Utils_Tuple2(
				'umrzeć na',
				_List_fromArray(
					['sterben'])),
				_Utils_Tuple2(
				'brać udział w',
				_List_fromArray(
					['teilnehmen'])),
				_Utils_Tuple2(
				'wątpić w',
				_List_fromArray(
					['zweifeln']))
			])),
		_Utils_Tuple3(
		'auf',
		'A',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'uważać na',
				_List_fromArray(
					['achten'])),
				_Utils_Tuple2(
				'zależeć od (w zależności od)',
				_List_fromArray(
					['ankommen'])),
				_Utils_Tuple2(
				'odpowiadać na',
				_List_fromArray(
					['antworten'])),
				_Utils_Tuple2(
				'uważać na',
				_List_fromArray(
					['aufpassen'])),
				_Utils_Tuple2(
				'ograniczać się do',
				_List_fromArray(
					['sich beschränken'])),
				_Utils_Tuple2(
				'nastawić się na',
				_List_fromArray(
					['sich einstellen'])),
				_Utils_Tuple2(
				'cieszyć sie na',
				_List_fromArray(
					['sich freuen'])),
				_Utils_Tuple2(
				'mieć nadzieję na',
				_List_fromArray(
					['hoffen'])),
				_Utils_Tuple2(
				'konzentrować się na',
				_List_fromArray(
					['sich konzentrieren'])),
				_Utils_Tuple2(
				'zrezygnować z',
				_List_fromArray(
					['verzichten'])),
				_Utils_Tuple2(
				'przygotowywać się na',
				_List_fromArray(
					['sich vorbereiten'])),
				_Utils_Tuple2(
				'czekać na',
				_List_fromArray(
					['warten']))
			])),
		_Utils_Tuple3(
		'auf',
		'D',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'opierać się na',
				_List_fromArray(
					['basieren'])),
				_Utils_Tuple2(
				'opierać się na',
				_List_fromArray(
					['beruhen'])),
				_Utils_Tuple2(
				'obstawać przy',
				_List_fromArray(
					['bestehen']))
			])),
		_Utils_Tuple3(
		'aus',
		'D',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'składać się z',
				_List_fromArray(
					['bestehen'])),
				_Utils_Tuple2(
				'wynikać z',
				_List_fromArray(
					['sich ergeben'])),
				_Utils_Tuple2(
				'wywodzić się z/pochodzić z',
				_List_fromArray(
					['stammen']))
			])),
		_Utils_Tuple3(
		'bei',
		'D',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'pomagać przy',
				_List_fromArray(
					['helfen'])),
				_Utils_Tuple2(
				'wpaść do kogoś',
				_List_fromArray(
					['vorbeikommen']))
			])),
		_Utils_Tuple3(
		'durch',
		'A',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'zastąpić czymś',
				_List_fromArray(
					['ersetzen'])),
				_Utils_Tuple2(
				'płynąć przez',
				_List_fromArray(
					['fließen']))
			])),
		_Utils_Tuple3(
		'für',
		'A',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'dziękować za',
				_List_fromArray(
					['danken'])),
				_Utils_Tuple2(
				'zdecydować się na',
				_List_fromArray(
					['sich entscheiden'])),
				_Utils_Tuple2(
				'uważać za',
				_List_fromArray(
					['halten'])),
				_Utils_Tuple2(
				'interesować sie czymś',
				_List_fromArray(
					['sich interessieren'])),
				_Utils_Tuple2(
				'walczyć o',
				_List_fromArray(
					['kämpfen'])),
				_Utils_Tuple2(
				'być za',
				_List_fromArray(
					['sein'])),
				_Utils_Tuple2(
				'zadbać o/ troszczyć się o',
				_List_fromArray(
					['sorgen']))
			])),
		_Utils_Tuple3(
		'gegen',
		'A',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'być przeciwko',
				_List_fromArray(
					['sein'])),
				_Utils_Tuple2(
				'ubezpieczyć się od',
				_List_fromArray(
					['sich versichern'])),
				_Utils_Tuple2(
				'wykroczyć przeciwko',
				_List_fromArray(
					['verstoßen']))
			])),
		_Utils_Tuple3(
		'in',
		'A',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'zapraszać do',
				_List_fromArray(
					['einladen'])),
				_Utils_Tuple2(
				'popaść w',
				_List_fromArray(
					['geraten'])),
				_Utils_Tuple2(
				'przetłumaczyć na',
				_List_fromArray(
					['übersetzen'])),
				_Utils_Tuple2(
				'zakochać się w',
				_List_fromArray(
					['sich verlieben'])),
				_Utils_Tuple2(
				'in	przeobrazić się w',
				_List_fromArray(
					['verwandeln']))
			])),
		_Utils_Tuple3(
		'in',
		'D',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'orientować się w',
				_List_fromArray(
					['sich auskennen'])),
				_Utils_Tuple2(
				'pomylić się w',
				_List_fromArray(
					['sich irren']))
			])),
		_Utils_Tuple3(
		'mit',
		'D',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'pogodzić się z',
				_List_fromArray(
					['sich abfinden'])),
				_Utils_Tuple2(
				'zaczynać coś/od',
				_List_fromArray(
					['anfangen'])),
				_Utils_Tuple2(
				'przestawać, skończyć z',
				_List_fromArray(
					['aufhören'])),
				_Utils_Tuple2(
				'zaczynać coś od',
				_List_fromArray(
					['beginnen'])),
				_Utils_Tuple2(
				'zajmować się czymś',
				_List_fromArray(
					['sich beschäftigen'])),
				_Utils_Tuple2(
				'rozmawiać przez telefon z',
				_List_fromArray(
					['telefonieren'])),
				_Utils_Tuple2(
				'zderzyć się z',
				_List_fromArray(
					['zusammenstoßen']))
			])),
		_Utils_Tuple3(
		'nach',
		'D',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'pachnieć czymś',
				_List_fromArray(
					['duften'])),
				_Utils_Tuple2(
				'dowiadywać się o',
				_List_fromArray(
					['sich erkundigen'])),
				_Utils_Tuple2(
				'pytać o',
				_List_fromArray(
					['fragen'])),
				_Utils_Tuple2(
				'sięgać po',
				_List_fromArray(
					['greifen'])),
				_Utils_Tuple2(
				'wołać kogoś',
				_List_fromArray(
					['rufen'])),
				_Utils_Tuple2(
				'tęsknić za',
				_List_fromArray(
					['sich sehnen'])),
				_Utils_Tuple2(
				'dążyć do',
				_List_fromArray(
					['streben'])),
				_Utils_Tuple2(
				'szukać czegoś',
				_List_fromArray(
					['suchen']))
			])),
		_Utils_Tuple3(
		'über',
		'A',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'złościć się z powodu',
				_List_fromArray(
					['sich ärgern'])),
				_Utils_Tuple2(
				'relacjonować coś',
				_List_fromArray(
					['berichten'])),
				_Utils_Tuple2(
				'sądzić o czymś',
				_List_fromArray(
					['denken'])),
				_Utils_Tuple2(
				'poskarżyć się na',
				_List_fromArray(
					['sich beschweren'])),
				_Utils_Tuple2(
				'dyskutować o',
				_List_fromArray(
					['diskutieren'])),
				_Utils_Tuple2(
				'opowiadać o',
				_List_fromArray(
					['erzählen'])),
				_Utils_Tuple2(
				'cieszyć się z',
				_List_fromArray(
					['sich freuen'])),
				_Utils_Tuple2(
				'informować o',
				_List_fromArray(
					['informieren'])),
				_Utils_Tuple2(
				'pisać o',
				_List_fromArray(
					['schreiben'])),
				_Utils_Tuple2(
				'rozmawiać o',
				_List_fromArray(
					['sprechen'])),
				_Utils_Tuple2(
				'rozmawiać o',
				_List_fromArray(
					['sich unterhalten'])),
				_Utils_Tuple2(
				'dysponować czymś',
				_List_fromArray(
					['verfügen']))
			])),
		_Utils_Tuple3(
		'um',
		'A',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'bemühen	starać się o',
				_List_fromArray(
					['sich'])),
				_Utils_Tuple2(
				'ubiegać się o',
				_List_fromArray(
					['sich bewerben'])),
				_Utils_Tuple2(
				'prosić o',
				_List_fromArray(
					['bitten'])),
				_Utils_Tuple2(
				'walczyć o',
				_List_fromArray(
					['kämpfen'])),
				_Utils_Tuple2(
				'troszczyć się o',
				_List_fromArray(
					['sich kümmern'])),
				_Utils_Tuple2(
				'kłócić się o',
				_List_fromArray(
					['streiten']))
			])),
		_Utils_Tuple3(
		'von',
		'D',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'zależeć od (być zależnym)',
				_List_fromArray(
					['abhängen'])),
				_Utils_Tuple2(
				'uwolnić od',
				_List_fromArray(
					['befreien'])),
				_Utils_Tuple2(
				'relacjonować coś',
				_List_fromArray(
					['berichten'])),
				_Utils_Tuple2(
				'dowiedzieć się o',
				_List_fromArray(
					['erfahren'])),
				_Utils_Tuple2(
				'odpocząć od',
				_List_fromArray(
					['sich erholen'])),
				_Utils_Tuple2(
				'odpowiadać o',
				_List_fromArray(
					['erzählen'])),
				_Utils_Tuple2(
				'sądzić o',
				_List_fromArray(
					['halten'])),
				_Utils_Tuple2(
				'słyszeć o',
				_List_fromArray(
					['hören'])),
				_Utils_Tuple2(
				'marzyć o',
				_List_fromArray(
					['träumen'])),
				_Utils_Tuple2(
				'przekonać o',
				_List_fromArray(
					['überzeugen'])),
				_Utils_Tuple2(
				'pożeganać się z',
				_List_fromArray(
					['sich verabschieden']))
			])),
		_Utils_Tuple3(
		'vor',
		'D',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'bać się czegoś',
				_List_fromArray(
					['Angst haben'])),
				_Utils_Tuple2(
				'bać się czegoś',
				_List_fromArray(
					['sich fürchten'])),
				_Utils_Tuple2(
				'chronić się przed',
				_List_fromArray(
					['sich schützen'])),
				_Utils_Tuple2(
				'ostrzegać przed',
				_List_fromArray(
					['warnen']))
			])),
		_Utils_Tuple3(
		'zu',
		'D',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'przyczyniać się do',
				_List_fromArray(
					['beitragen'])),
				_Utils_Tuple2(
				'służyć do',
				_List_fromArray(
					['dienen'])),
				_Utils_Tuple2(
				'zapraszać na',
				_List_fromArray(
					['einladen'])),
				_Utils_Tuple2(
				'zdecydować się na',
				_List_fromArray(
					['sich entschließen'])),
				_Utils_Tuple2(
				'prowadzić do',
				_List_fromArray(
					['führen'])),
				_Utils_Tuple2(
				'należeć do',
				_List_fromArray(
					['gehören'])),
				_Utils_Tuple2(
				'gratulować z okazji',
				_List_fromArray(
					['gratulieren'])),
				_Utils_Tuple2(
				'stawać się czymś/kimś',
				_List_fromArray(
					['werden'])),
				_Utils_Tuple2(
				'zmuszać do',
				_List_fromArray(
					['zwingen']))
			]))
	]);
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var elm$core$List$concat = function (lists) {
	return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
};
var elm$core$List$concatMap = F2(
	function (f, list) {
		return elm$core$List$concat(
			A2(elm$core$List$map, f, list));
	});
var author$project$Rektion$rektionLesson = _Utils_Tuple2(
	'Rektion',
	A2(
		elm$core$List$concatMap,
		function (_n0) {
			var word = _n0.a;
			var case_ = _n0.b;
			var list = _n0.c;
			return A2(
				elm$core$List$map,
				function (_n1) {
					var pl = _n1.a;
					var de = _n1.b;
					return _Utils_Tuple2(
						pl,
						A2(
							elm$core$List$map,
							function (item) {
								return item + (' ' + (word + (' ' + case_)));
							},
							de));
				},
				list);
		},
		author$project$Rektion$rektion));
var author$project$Rektion$lessons = _List_fromArray(
	[author$project$Rektion$rektionLesson]);
var author$project$WoSichInvestorenAmWohlstenFuhlen$deutsch = '\nWo sich Investoren am wohlsten fühlen.\n\nUnternehmen treffen einer Weltbank-Studie zufolge nirgendwo sonst auf bessere Bedingungen als in Singapur und Hongkong. Deutschland hat sich im Ranking weiter vorgearbeitet und liegt jetzt vor Japan.\n\nEs ist der jährliche Weltbank-Report "Doing Business", aus dem hervorgeht, dass Deutschland nun unter die Top 20 beim Geschäftsklima vorgerückt ist. Die Experten der Weltbank haben insgesamt 183 Staaten auf Reformen "abgeklopft". Kurzum: Es ging darum, herauszufinden, wie schnell und mit welchen Kosten ein Unternehmen gegründet und betrieben werden kann.\n\nDie Exportnation Deutschland hat sich weiter verbessert, das Land nimmt nun Platz 19 ein. Damit liegt es zwar hinter Großbritannien (Platz sieben), aber weit vor Staaten wie Frankreich (29), Spanien (44) und Italien (83). Gleich nach Deutschland folgen Lettland, Estland und Litauen. Bester EU-Staat im Ranking ist Dänemark auf Platz 5. Von den großen Schwellenländern liegt China mit Platz 91 an der Spitze. Russland belegt Rang 120. Die größten Fortschritte erzielten dem Report zufolge Marokko, Moldawien und Mazedonien.\n\nEinige afrikanische Länder haben sich verbessert.\n\nBürokratische Hürden sind in vielen Ländern nach wie vor ein Hindernis für ausländische Unternehmen: Von der Anmeldung ihres Geschäfts angefangen, über das Ergattern einer Baugenehmigung, den Zugang zu Krediten, die Abwicklung der Steuererklärung bis hin zu den Kosten für den Stromanschluss. In diesem Bereich haben sich auch die afrikanischen Länder südlich der Sahara verbessert. Dazu gehören die Kapverdischen Inseln, die sich schon in den vergangenen Jahren einen Ruf als reformeifriger Staat erworben haben. Auch Sierra Leone und Burundi zählen dazu. Allerdings starten die afrikanischen Staaten von einem niedrigen Niveau. Burundi liegt zum Beispiel auf Platz 169 der Weltbank-Rangliste.\n\nBürokratie ist in vielen Ländern ein Hindernis.\n\nJe ärmer ein Land ist, desto größer sind auch die Hindernisse durch den "Amtsschimmel", der Unternehmer zur Verzweiflung treibt. In vielen Ländern Afrikas und auch des Nahen Ostens, so geht aus dem Weltbank-Report hervor, wird der Unternehmergeist durch zähe Bürokratie erstickt. Einfache Auskünfte über Gebührentabellen für Firmengründungen oder Baugenehmigungen seien vielfach nur zu erhalten in einem persönlichen Treffen mit dem zuständigen Beamten.\n\nDer südostasiatische Stadtstaat Singapur konnte seine Spitzenposition nunmehr das sechste Jahr in Folge halten – vor Hongkong und Neuseeland. Diese Staaten, so Jörg Hinze vom HWWI, hätten auch noch eine höhere Dynamik, was das Wirtschaftswachstum anbelange. Sie sind teilweise, jedenfalls was den Arbeitsmarkt betrifft, weniger reguliert als Deutschland.\n\nDeutschland habe zwar auch in Sachen Arbeitsmarkt in den letzten Jahren erhebliche Fortschritte gemacht, was die Deregulierung angehe, aber, so Jörg Hinze. Die südostasiatischen Länder sind noch weniger reguliert, was natürlich unter sozialen Gesichtspunkten nicht unbedingt vorteilhaft sein mag.\n';
var author$project$WoSichInvestorenAmWohlstenFuhlen$polnish = '\nGdzie inwestorzy czują się najbardziej komfortowo.\n\nWedług badań przeprowadzonych przez Bank Światowy firmy nie mają lepszych warunków do spotkań niż w Singapurze i Hong Kongu. Niemcy awansowały w rankingu i wyprzedzają Japonię.\n\nJest to roczny raport Banku Światowego "Doing Business", który pokazuje, że Niemcy znalazły się w pierwszej dwudziestce w klimacie biznesowym. Eksperci z Banku Światowego "zapuścili" w sumie 183 państwa na reformy. Krótko mówiąc, chodziło o to, aby dowiedzieć się, jak szybko i po jakim koszcie firma może być założona i obsługiwana.\n\nEksport narodu Niemcy nadal się poprawia, kraj zajmuje teraz 19 miejsce. Tak, to jest rzeczywiście za Zjednoczonego Królestwa (siódme miejsce), ale również przed takimi krajami jak Francja (29) Hiszpania (44) i we Włoszech (83). Łotwie, Estonii i Litwie towarzyszą Niemcy. Dania zajmuje 5 miejsce w rankingu czołowych krajów UE. Spośród gospodarek wschodzących Chiny znajdują się na 91 miejscu. Rosja zajmuje 120 pozycję. Największy postęp odnotowano w Maroku, Mołdawii i Macedonii.\n\nNiektóre kraje afrykańskie uległy poprawie.\n\nBiurokratyczne przeszkody w wielu krajach nadal jest przeszkodą dla zagranicznych firm: począwszy od rejestracji swojej działalności, o dotarcie do pozwolenia na budowę, dostęp do kredytów, przetwarzania deklaracji podatkowych do kosztów energii elektrycznej. W tym obszarze poprawiły się również kraje Afryki Subsaharyjskiej. Należą do nich Wyspy Zielonego Przylądka, które w ostatnich latach zyskały reputację państwa reformującego. Wśród nich są także Sierra Leone i Burundi. Jednak kraje afrykańskie zaczynają od niskiego poziomu. Na przykład Burundi zajmuje 169 miejsce w rankingu Banku Światowego.\n\nBiurokracja jest przeszkodą w wielu krajach.\n\nIm biedniejszy kraj, tym większe są przeszkody spowodowane przez "oficjalną formę", która prowadzi przedsiębiorców do rozpaczy. W wielu krajach w Afryce i na Bliskim Wschodzie, jak pokazuje raport Banku Światowego, przedsiębiorczość jest stłumiona przez twardą biurokrację. Proste informacje na temat tabel opłat za start-upy lub pozwolenia na budowę można często uzyskać tylko na osobistym spotkaniu z odpowiedzialnym urzędnikiem.\n\nPołudniowo-azjatyckie miasto-państwo w Singapurze utrzymało najwyższą pozycję po raz szósty z rzędu - wyprzedzając Hongkong i Nową Zelandię. Te stany, mówi Jörg Hinze z HWWI, by również mieć bardziej dynamiczny, który, jeśli chodzi o wzrost gospodarczy. Oni są częściowo, przynajmniej jeśli chodzi o rynek pracy, mniej regulowany niż w Niemczech.\n\nNiemcy rzeczywiście wykonane również z punktu widzenia rynku pracy w ostatnich latach znaczny postęp w zakresie deregulacji, ale mówi Jörg Hinze. Kraje Azji Południowo-Wschodniej są nawet mniej regulowany, co oczywiście nie zawsze może być korzystne pod względem społecznym.\n';
var author$project$WoSichInvestorenAmWohlstenFuhlen$translations = function () {
	var pl = A2(elm$core$String$split, '.', author$project$WoSichInvestorenAmWohlstenFuhlen$polnish);
	var lengthPl = A2(
		elm$core$Debug$log,
		'Length pl',
		elm$core$List$length(pl));
	var de = A2(elm$core$String$split, '.', author$project$WoSichInvestorenAmWohlstenFuhlen$deutsch);
	var lengthDe = A2(
		elm$core$Debug$log,
		'Length de',
		elm$core$List$length(de));
	return A3(
		elm$core$List$map2,
		F2(
			function (plSentence, deSentence) {
				return _Utils_Tuple2(
					plSentence,
					_List_fromArray(
						[deSentence]));
			}),
		pl,
		de);
}();
var author$project$WoSichInvestorenAmWohlstenFuhlen$lesson = _Utils_Tuple2('Wo sich Investoren am wohlsten fühlen', author$project$WoSichInvestorenAmWohlstenFuhlen$translations);
var author$project$Model$lessons = _List_fromArray(
	[
		_List_Nil,
		author$project$Rektion$lessons,
		_Utils_ap(
		author$project$Jahr2Semester1$lessons,
		_List_fromArray(
			[author$project$PolensTurismus$lesson, author$project$LieblingslandDeutschen$lesson, author$project$WoSichInvestorenAmWohlstenFuhlen$lesson, author$project$Anfrage$lesson])),
		_List_Nil
	]);
var author$project$ChangeLessonView$changeLessonView = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('container change-lesson')
			]),
		A2(elm$core$List$indexedMap, author$project$ChangeLessonView$createGroup, author$project$Model$lessons));
};
var author$project$Css$css = function (model) {
	return '\n    header, \n    footer, \n    footer table {\n        margin-top: 2em;\n        margin-bottom: 1em;\n    }\n    footer .btn {\n        color: darkgrey;\n    }\n    footer a:hover {\n        color: grey;\n    }\n    .change-lesson .btn {\n        margin-left: 5px;\n        margin-bottom: 5px;\n    }\n    .show-history .fa-check {\n        margin-left: 5px;\n    }\n    .change-lesson .badge-pill {\n        margin-left: 10px;\n    }\n    .change-lesson .year-header {\n        margin-bottom: 5px;\n    }\n    .change-lesson .year-list {\n        margin-bottom: 20px;\n    }\n    ';
};
var elm$html$Html$i = _VirtualDom_node('i');
var elm$html$Html$li = _VirtualDom_node('li');
var elm$html$Html$ul = _VirtualDom_node('ul');
var author$project$HistoryView$historyView = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('container show-history')
			]),
		_List_fromArray(
			[
				function () {
				var _n0 = model.state.history;
				if (!_n0.b) {
					return A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('alert alert-warning')
							]),
						_List_fromArray(
							[
								elm$html$Html$text('No history yet')
							]));
				} else {
					var list = _n0;
					return A2(
						elm$html$Html$ul,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('list-group-flush')
							]),
						A2(
							elm$core$List$map,
							function (item) {
								return A2(
									elm$html$Html$li,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('list-group-item')
										]),
									_List_fromArray(
										[
											elm$html$Html$text(item.lesson),
											A2(
											elm$html$Html$i,
											_List_fromArray(
												[
													elm$html$Html$Attributes$class('fas fa-check')
												]),
											_List_Nil)
										]));
							},
							list));
				}
			}()
			]));
};
var elm$json$Json$Decode$field = _Json_decodeField;
var elm$json$Json$Decode$int = _Json_decodeInt;
var elm$html$Html$Events$keyCode = A2(elm$json$Json$Decode$field, 'keyCode', elm$json$Json$Decode$int);
var author$project$LessonView$onKeyUp = function (tagger) {
	return A2(
		elm$html$Html$Events$on,
		'keyup',
		A2(elm$json$Json$Decode$map, tagger, elm$html$Html$Events$keyCode));
};
var elm$core$Debug$toString = _Debug_toString;
var author$project$LessonView$resultsDescription = function (result) {
	return A2(
		elm$core$Maybe$withDefault,
		elm$core$Debug$toString(result),
		A2(
			elm$core$Maybe$map,
			function (_n0) {
				var match = _n0.a;
				var list = _n0.b;
				if (!list.b) {
					return '[no translations found]';
				} else {
					if (!list.b.b) {
						var _n2 = list.a;
						var word = _n2.a;
						return word;
					} else {
						var h = list.a;
						var t = list.b;
						return A2(
							elm$core$String$join,
							' / ',
							A2(
								elm$core$List$map,
								function (_n3) {
									var w = _n3.a;
									return w;
								},
								list));
					}
				}
			},
			result));
};
var author$project$Model$ChangeInput = function (a) {
	return {$: 'ChangeInput', a: a};
};
var author$project$Model$Check = {$: 'Check'};
var author$project$Model$KeyPressed = function (a) {
	return {$: 'KeyPressed', a: a};
};
var author$project$Model$Next = {$: 'Next'};
var elm$html$Html$button = _VirtualDom_node('button');
var elm$html$Html$input = _VirtualDom_node('input');
var elm$html$Html$label = _VirtualDom_node('label');
var elm$html$Html$Attributes$id = elm$html$Html$Attributes$stringProperty('id');
var elm$html$Html$Attributes$type_ = elm$html$Html$Attributes$stringProperty('type');
var elm$html$Html$Attributes$value = elm$html$Html$Attributes$stringProperty('value');
var elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3(elm$core$List$foldr, elm$json$Json$Decode$field, decoder, fields);
	});
var elm$json$Json$Decode$string = _Json_decodeString;
var elm$html$Html$Events$targetValue = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	elm$json$Json$Decode$string);
var elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			elm$json$Json$Decode$map,
			elm$html$Html$Events$alwaysStop,
			A2(elm$json$Json$Decode$map, tagger, elm$html$Html$Events$targetValue)));
};
var author$project$LessonView$lessonView = function (model) {
	return function (i) {
		if (i.$ === 'Just') {
			var _n1 = i.a;
			var pl = _n1.a;
			var de = _n1.b;
			return A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('container'),
						elm$html$Html$Attributes$id('translation-widget')
					]),
				_List_fromArray(
					[
						function () {
						var _n2 = model.result;
						if (_n2.$ === 'Just') {
							if (_n2.a.a) {
								var _n3 = _n2.a;
								var distances = _n3.b;
								var foundMatch = !elm$core$List$isEmpty(
									A2(
										elm$core$List$filter,
										function (_n4) {
											var word = _n4.a;
											var dist = _n4.b;
											var allowed = _n4.c;
											return dist <= 1.0e-3;
										},
										distances));
								return foundMatch ? A2(
									elm$html$Html$div,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('alert alert-success')
										]),
									_List_fromArray(
										[
											elm$html$Html$text(model.input)
										])) : A2(
									elm$html$Html$div,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('alert alert-warning')
										]),
									_List_fromArray(
										[
											elm$html$Html$text(
											author$project$LessonView$resultsDescription(model.result))
										]));
							} else {
								var _n5 = _n2.a;
								return A2(
									elm$html$Html$div,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('alert alert-danger')
										]),
									_List_fromArray(
										[
											elm$html$Html$text(
											author$project$LessonView$resultsDescription(model.result))
										]));
							}
						} else {
							return A2(
								elm$html$Html$div,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('alert alert-primary')
									]),
								_List_fromArray(
									[
										elm$html$Html$text(
										elm$core$String$fromInt(model.correct) + (' / ' + elm$core$String$fromInt(model.correct + model.incorrect)))
									]));
						}
					}(),
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('form-group')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$label,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('h4')
									]),
								_List_fromArray(
									[
										elm$html$Html$text(pl)
									])),
								A2(
								elm$html$Html$input,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('form-control'),
										elm$html$Html$Attributes$value(model.input),
										elm$html$Html$Events$onInput(author$project$Model$ChangeInput),
										author$project$LessonView$onKeyUp(author$project$Model$KeyPressed)
									]),
								_List_Nil)
							])),
						function () {
						var _n6 = model.result;
						if (_n6.$ === 'Just') {
							var v = _n6.a;
							return A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$type_('button'),
										elm$html$Html$Attributes$class('btn btn-default'),
										elm$html$Html$Events$onClick(author$project$Model$Next)
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Next')
									]));
						} else {
							return A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$type_('button'),
										elm$html$Html$Attributes$class('btn btn-primary'),
										elm$html$Html$Events$onClick(author$project$Model$Check)
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Check')
									]));
						}
					}()
					]));
		} else {
			return A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('container')
					]),
				_List_fromArray(
					[
						elm$html$Html$text('error')
					]));
		}
	}(
		A2(elm$core$Maybe$andThen, elm$core$List$head, model.shuffled));
};
var author$project$MainView$footerButton = F2(
	function (msg, string) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('btn btn-link'),
					elm$html$Html$Events$onClick(msg)
				]),
			_List_fromArray(
				[
					elm$html$Html$text(string)
				]));
	});
var author$project$MainView$textDiv = function (string) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				elm$html$Html$text(string)
			]));
};
var author$project$Model$ChangeLesson = {$: 'ChangeLesson'};
var author$project$Model$ShowAll = {$: 'ShowAll'};
var author$project$Model$ShowHistory = {$: 'ShowHistory'};
var author$project$Model$ShowLesson = {$: 'ShowLesson'};
var author$project$MainView$footerButtons = function (model) {
	return _List_fromArray(
		[
			function () {
			var _n0 = model.view;
			if (_n0.$ === 'LessonView') {
				return A2(
					author$project$MainView$footerButton,
					author$project$Model$ShowAll,
					model.showAll ? 'Hide' : 'Show all');
			} else {
				return A2(elm$html$Html$div, _List_Nil, _List_Nil);
			}
		}(),
			function () {
			var _n1 = model.view;
			if (_n1.$ === 'LessonView') {
				return A2(author$project$MainView$footerButton, author$project$Model$ChangeLesson, 'Change lesson');
			} else {
				return author$project$MainView$textDiv('');
			}
		}(),
			function () {
			var _n2 = model.view;
			if (_n2.$ === 'HistoryView') {
				return A2(author$project$MainView$footerButton, author$project$Model$ShowLesson, 'Back to lesson');
			} else {
				return A2(author$project$MainView$footerButton, author$project$Model$ShowHistory, 'History');
			}
		}()
		]);
};
var elm$html$Html$td = _VirtualDom_node('td');
var elm$html$Html$tr = _VirtualDom_node('tr');
var author$project$MainView$textTwoCol = F2(
	function (one, two) {
		return A2(
			elm$html$Html$tr,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					elm$html$Html$td,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(one)
						])),
					A2(
					elm$html$Html$td,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(two)
						]))
				]));
	});
var elm$html$Html$table = _VirtualDom_node('table');
var elm$html$Html$tbody = _VirtualDom_node('tbody');
var elm$html$Html$th = _VirtualDom_node('th');
var elm$html$Html$thead = _VirtualDom_node('thead');
var author$project$MainView$showAll = function (model) {
	var _n0 = model.showAll;
	if (_n0) {
		return A2(
			elm$html$Html$table,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('table')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$thead,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							elm$html$Html$th,
							_List_Nil,
							_List_fromArray(
								[
									elm$html$Html$text('polski')
								])),
							A2(
							elm$html$Html$th,
							_List_Nil,
							_List_fromArray(
								[
									elm$html$Html$text('niemiecki')
								]))
						])),
					A2(
					elm$html$Html$tbody,
					_List_Nil,
					A2(
						elm$core$List$concatMap,
						function (_n1) {
							var pl = _n1.a;
							var de = _n1.b;
							if (!de.b) {
								return _List_fromArray(
									[
										A2(author$project$MainView$textTwoCol, pl, '')
									]);
							} else {
								if (!de.b.b) {
									var h = de.a;
									return _List_fromArray(
										[
											A2(author$project$MainView$textTwoCol, pl, h)
										]);
								} else {
									var h = de.a;
									var t = de.b;
									return A2(
										elm$core$List$cons,
										A2(author$project$MainView$textTwoCol, pl, h),
										A2(
											elm$core$List$map,
											function (s) {
												return A2(author$project$MainView$textTwoCol, '', s);
											},
											t));
								}
							}
						},
						model.lesson.b))
				]));
	} else {
		return author$project$MainView$textDiv('');
	}
};
var elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var elm$html$Html$node = elm$virtual_dom$VirtualDom$node;
var elm$html$Html$Attributes$href = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var elm$html$Html$Attributes$rel = _VirtualDom_attribute('rel');
var author$project$MainView$stylesheet = function (url) {
	return A3(
		elm$html$Html$node,
		'link',
		_List_fromArray(
			[
				elm$html$Html$Attributes$rel('stylesheet'),
				elm$html$Html$Attributes$href(url)
			]),
		_List_Nil);
};
var elm$html$Html$footer = _VirtualDom_node('footer');
var elm$html$Html$h1 = _VirtualDom_node('h1');
var elm$html$Html$header = _VirtualDom_node('header');
var author$project$MainView$view = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$id('main-view')
			]),
		_List_fromArray(
			[
				author$project$MainView$stylesheet('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'),
				author$project$MainView$stylesheet('https://use.fontawesome.com/releases/v5.4.2/css/all.css'),
				A3(
				elm$html$Html$node,
				'style',
				_List_Nil,
				_List_fromArray(
					[
						elm$html$Html$text(
						author$project$Css$css(model))
					])),
				A2(
				elm$html$Html$header,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('container')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$h1,
						_List_Nil,
						_List_fromArray(
							[
								elm$html$Html$text('Sgh Deutsch')
							]))
					])),
				function () {
				var _n0 = model.view;
				switch (_n0.$) {
					case 'LessonView':
						return author$project$LessonView$lessonView(model);
					case 'ChangeLessonView':
						return author$project$ChangeLessonView$changeLessonView(model);
					default:
						return author$project$HistoryView$historyView(model);
				}
			}(),
				A2(
				elm$html$Html$footer,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('container text-muted')
					]),
				_Utils_ap(
					author$project$MainView$footerButtons(model),
					_List_fromArray(
						[
							author$project$MainView$showAll(model)
						])))
			]));
};
var author$project$Model$Resize = F2(
	function (a, b) {
		return {$: 'Resize', a: a, b: b};
	});
var author$project$Model$State = function (history) {
	return {history: history};
};
var author$project$Model$HistoryEntry = F4(
	function (time, correct, incorrect, lesson) {
		return {correct: correct, incorrect: incorrect, lesson: lesson, time: time};
	});
var elm$json$Json$Decode$map4 = _Json_map4;
var author$project$Model$historyEntryDecoder = A5(
	elm$json$Json$Decode$map4,
	author$project$Model$HistoryEntry,
	A2(elm$json$Json$Decode$field, 'time', elm$json$Json$Decode$int),
	A2(elm$json$Json$Decode$field, 'correct', elm$json$Json$Decode$int),
	A2(elm$json$Json$Decode$field, 'incorrect', elm$json$Json$Decode$int),
	A2(elm$json$Json$Decode$field, 'lesson', elm$json$Json$Decode$string));
var elm$json$Json$Decode$list = _Json_decodeList;
var author$project$Model$stateDecoder = A2(
	elm$json$Json$Decode$map,
	author$project$Model$State,
	elm$json$Json$Decode$list(author$project$Model$historyEntryDecoder));
var elm$json$Json$Decode$decodeString = _Json_runOnString;
var author$project$Model$decodeState = function (string) {
	return A2(elm$json$Json$Decode$decodeString, author$project$Model$stateDecoder, string);
};
var author$project$Model$defaultLesson = A2(
	elm$core$Maybe$withDefault,
	_Utils_Tuple2('No lessons available', _List_Nil),
	elm$core$List$head(
		elm$core$List$concat(author$project$Model$lessons)));
var author$project$Model$initState = {history: _List_Nil};
var elm$core$Result$withDefault = F2(
	function (def, result) {
		if (result.$ === 'Ok') {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var author$project$Model$initialModel = function (state) {
	return {
		correct: 0,
		incorrect: 0,
		input: '',
		lesson: author$project$Model$defaultLesson,
		result: elm$core$Maybe$Nothing,
		seed: elm$core$Maybe$Nothing,
		showAll: false,
		shuffled: elm$core$Maybe$Nothing,
		state: function () {
			if (state.$ === 'Just') {
				var text = state.a;
				return A2(
					elm$core$Result$withDefault,
					author$project$Model$initState,
					author$project$Model$decodeState(
						A2(elm$core$Debug$log, 'state', text)));
			} else {
				return author$project$Model$initState;
			}
		}(),
		view: author$project$Model$ChangeLessonView,
		viewportSize: elm$core$Maybe$Nothing
	};
};
var author$project$Model$GetSeed = function (a) {
	return {$: 'GetSeed', a: a};
};
var author$project$Model$GetViewport = function (a) {
	return {$: 'GetViewport', a: a};
};
var elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0.a;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$String$slice = _String_slice;
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$startsWith = _String_startsWith;
var elm$url$Url$Http = {$: 'Http'};
var elm$url$Url$Https = {$: 'Https'};
var elm$core$String$indexes = _String_indexes;
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var elm$core$String$contains = _String_contains;
var elm$core$String$toInt = _String_toInt;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 'Nothing') {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Http,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Https,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$Dom$getViewport = _Browser_withWindow(_Browser_getViewport);
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var elm$core$Task$onError = _Scheduler_onError;
var elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return elm$core$Task$command(
			elm$core$Task$Perform(
				A2(
					elm$core$Task$onError,
					A2(
						elm$core$Basics$composeL,
						A2(elm$core$Basics$composeL, elm$core$Task$succeed, resultToMessage),
						elm$core$Result$Err),
					A2(
						elm$core$Task$andThen,
						A2(
							elm$core$Basics$composeL,
							A2(elm$core$Basics$composeL, elm$core$Task$succeed, resultToMessage),
							elm$core$Result$Ok),
						task))));
	});
var elm$random$Random$Generate = function (a) {
	return {$: 'Generate', a: a};
};
var elm$random$Random$initialSeed = function (x) {
	var _n0 = elm$random$Random$next(
		A2(elm$random$Random$Seed, 0, 1013904223));
	var state1 = _n0.a;
	var incr = _n0.b;
	var state2 = (state1 + x) >>> 0;
	return elm$random$Random$next(
		A2(elm$random$Random$Seed, state2, incr));
};
var elm$random$Random$init = A2(
	elm$core$Task$andThen,
	function (time) {
		return elm$core$Task$succeed(
			elm$random$Random$initialSeed(
				elm$time$Time$posixToMillis(time)));
	},
	elm$time$Time$now);
var elm$random$Random$onEffects = F3(
	function (router, commands, seed) {
		if (!commands.b) {
			return elm$core$Task$succeed(seed);
		} else {
			var generator = commands.a.a;
			var rest = commands.b;
			var _n1 = A2(elm$random$Random$step, generator, seed);
			var value = _n1.a;
			var newSeed = _n1.b;
			return A2(
				elm$core$Task$andThen,
				function (_n2) {
					return A3(elm$random$Random$onEffects, router, rest, newSeed);
				},
				A2(elm$core$Platform$sendToApp, router, value));
		}
	});
var elm$random$Random$onSelfMsg = F3(
	function (_n0, _n1, seed) {
		return elm$core$Task$succeed(seed);
	});
var elm$random$Random$cmdMap = F2(
	function (func, _n0) {
		var generator = _n0.a;
		return elm$random$Random$Generate(
			A2(elm$random$Random$map, func, generator));
	});
_Platform_effectManagers['Random'] = _Platform_createManager(elm$random$Random$init, elm$random$Random$onEffects, elm$random$Random$onSelfMsg, elm$random$Random$cmdMap);
var elm$random$Random$command = _Platform_leaf('Random');
var elm$random$Random$generate = F2(
	function (tagger, generator) {
		return elm$random$Random$command(
			elm$random$Random$Generate(
				A2(elm$random$Random$map, tagger, generator)));
	});
var elm$core$Bitwise$or = _Bitwise_or;
var elm$random$Random$map3 = F4(
	function (func, _n0, _n1, _n2) {
		var genA = _n0.a;
		var genB = _n1.a;
		var genC = _n2.a;
		return elm$random$Random$Generator(
			function (seed0) {
				var _n3 = genA(seed0);
				var a = _n3.a;
				var seed1 = _n3.b;
				var _n4 = genB(seed1);
				var b = _n4.a;
				var seed2 = _n4.b;
				var _n5 = genC(seed2);
				var c = _n5.a;
				var seed3 = _n5.b;
				return _Utils_Tuple2(
					A3(func, a, b, c),
					seed3);
			});
	});
var elm$random$Random$independentSeed = elm$random$Random$Generator(
	function (seed0) {
		var makeIndependentSeed = F3(
			function (state, b, c) {
				return elm$random$Random$next(
					A2(elm$random$Random$Seed, state, (1 | (b ^ c)) >>> 0));
			});
		var gen = A2(elm$random$Random$int, 0, 4294967295);
		return A2(
			elm$random$Random$step,
			A4(elm$random$Random$map3, makeIndependentSeed, gen, gen, gen),
			seed0);
	});
var author$project$Model$initialMsg = elm$core$Platform$Cmd$batch(
	_List_fromArray(
		[
			A2(elm$core$Task$attempt, author$project$Model$GetViewport, elm$browser$Browser$Dom$getViewport),
			A2(elm$random$Random$generate, author$project$Model$GetSeed, elm$random$Random$independentSeed)
		]));
var elm$browser$Browser$Document = F2(
	function (title, body) {
		return {body: body, title: title};
	});
var elm$browser$Browser$document = _Browser_document;
var elm$browser$Browser$Events$Window = {$: 'Window'};
var elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var elm$browser$Browser$Events$init = elm$core$Task$succeed(
	A2(elm$browser$Browser$Events$State, _List_Nil, elm$core$Dict$empty));
var elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {event: event, key: key};
	});
var elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var elm$browser$Browser$Events$spawn = F3(
	function (router, key, _n0) {
		var node = _n0.a;
		var name = _n0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						elm$core$Platform$sendToSelf,
						router,
						A2(elm$browser$Browser$Events$Event, key, event));
				}));
	});
var elm$core$Dict$Black = {$: 'Black'};
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$Red = {$: 'Red'};
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1.$) {
				case 'LT':
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$fromList = function (assocs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, dict) {
				var key = _n0.a;
				var value = _n0.b;
				return A3(elm$core$Dict$insert, key, value, dict);
			}),
		elm$core$Dict$empty,
		assocs);
};
var elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _n0) {
				stepState:
				while (true) {
					var list = _n0.a;
					var result = _n0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _n2 = list.a;
						var lKey = _n2.a;
						var lValue = _n2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_n0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_n0 = $temp$_n0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _n3 = A3(
			elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _n3.a;
		var intermediateResult = _n3.b;
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n4, result) {
					var k = _n4.a;
					var v = _n4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3(elm$core$Dict$foldl, elm$core$Dict$insert, t2, t1);
	});
var elm$core$Process$kill = _Scheduler_kill;
var elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _n6) {
				var deads = _n6.a;
				var lives = _n6.b;
				var news = _n6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						elm$core$List$cons,
						A3(elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_n4, pid, _n5) {
				var deads = _n5.a;
				var lives = _n5.b;
				var news = _n5.c;
				return _Utils_Tuple3(
					A2(elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _n2, _n3) {
				var deads = _n3.a;
				var lives = _n3.b;
				var news = _n3.c;
				return _Utils_Tuple3(
					deads,
					A3(elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2(elm$core$List$map, elm$browser$Browser$Events$addKey, subs);
		var _n0 = A6(
			elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, elm$core$Dict$empty, _List_Nil));
		var deadPids = _n0.a;
		var livePids = _n0.b;
		var makeNewPids = _n0.c;
		return A2(
			elm$core$Task$andThen,
			function (pids) {
				return elm$core$Task$succeed(
					A2(
						elm$browser$Browser$Events$State,
						newSubs,
						A2(
							elm$core$Dict$union,
							livePids,
							elm$core$Dict$fromList(pids))));
			},
			A2(
				elm$core$Task$andThen,
				function (_n1) {
					return elm$core$Task$sequence(makeNewPids);
				},
				elm$core$Task$sequence(
					A2(elm$core$List$map, elm$core$Process$kill, deadPids))));
	});
var elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _n0 = f(mx);
		if (_n0.$ === 'Just') {
			var x = _n0.a;
			return A2(elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _n0, state) {
		var key = _n0.key;
		var event = _n0.event;
		var toMessage = function (_n2) {
			var subKey = _n2.a;
			var _n3 = _n2.b;
			var node = _n3.a;
			var name = _n3.b;
			var decoder = _n3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : elm$core$Maybe$Nothing;
		};
		var messages = A2(elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			elm$core$Task$andThen,
			function (_n1) {
				return elm$core$Task$succeed(state);
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Platform$sendToApp(router),
					messages)));
	});
var elm$browser$Browser$Events$subMap = F2(
	function (func, _n0) {
		var node = _n0.a;
		var name = _n0.b;
		var decoder = _n0.c;
		return A3(
			elm$browser$Browser$Events$MySub,
			node,
			name,
			A2(elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager(elm$browser$Browser$Events$init, elm$browser$Browser$Events$onEffects, elm$browser$Browser$Events$onSelfMsg, 0, elm$browser$Browser$Events$subMap);
var elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return elm$browser$Browser$Events$subscription(
			A3(elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var elm$browser$Browser$Events$onResize = function (func) {
	return A3(
		elm$browser$Browser$Events$on,
		elm$browser$Browser$Events$Window,
		'resize',
		A2(
			elm$json$Json$Decode$field,
			'target',
			A3(
				elm$json$Json$Decode$map2,
				func,
				A2(elm$json$Json$Decode$field, 'innerWidth', elm$json$Json$Decode$int),
				A2(elm$json$Json$Decode$field, 'innerHeight', elm$json$Json$Decode$int))));
};
var elm$json$Json$Decode$null = _Json_decodeNull;
var elm$json$Json$Decode$oneOf = _Json_oneOf;
var author$project$MainWithStorage$main = elm$browser$Browser$document(
	{
		init: function (state) {
			return _Utils_Tuple2(
				author$project$Model$initialModel(state),
				author$project$Model$initialMsg);
		},
		subscriptions: function (_n0) {
			return elm$browser$Browser$Events$onResize(author$project$Model$Resize);
		},
		update: author$project$LearnApp$update,
		view: function (model) {
			return A2(
				elm$browser$Browser$Document,
				'Sgh Deutsch',
				_List_fromArray(
					[
						author$project$MainView$view(model)
					]));
		}
	});
_Platform_export({'MainWithStorage':{'init':author$project$MainWithStorage$main(
	elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				elm$json$Json$Decode$null(elm$core$Maybe$Nothing),
				A2(elm$json$Json$Decode$map, elm$core$Maybe$Just, elm$json$Json$Decode$string)
			])))(0)}});}(this));