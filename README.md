g3utils
=======

Basic javascript utilities that would be valuable in our projects consisting mainly by functions and sometimes small-sized objects.

This is an ongoing repository and things will be added or removed very often.

Testing is still ongoing not even from this container but also from all other <b>js*</b> projects.

See it at: http://jsfiddle.net/centurianii/3Jy4y/

Design
------
Internally, the whole design exploits a variation of the module pattern and builds on a bigger library as it would be revealed in the forthcoming projects.

A note on my library symbol: 
-------------------------------------
It's the '$$' internally but if you edit it at the last line (window.$$ = window.$$ || {}) you can name it whatever you want and call it like so externally!
Also, see <b>Update</b>.

Some calls:
<pre>
//encode-decode a string
var str1 = 'fhj σρΘΥ \'%^"*&@';
var enc = $$.utils.htmlEntities( str );
//get the initial string back
var str2 = $$.utils.decodeHtmlEntities( enc );
alert(str1 === str2);

//find the type of an identifier
var x = 5;
alert($$.utils.typeOf(x) === 'number');
x = 'Hello!';
alert($$.utils.typeOf(x) === 'string');
x = [1, 2, 3];
alert($$.utils.typeOf(x) === 'array');
x = new Object();
alert($$.utils.typeOf(x) === 'object');
x = function(){}
alert($$.utils.typeOf(x) === 'function');
</pre>

A note on jQuery: 
-----------------------
My library is independent but can become a jQuery plugin with a simple assignment!

Update
------
My namespace moved from <code>$$</code> to <code>g3</code> and so all my projects moved from <code>js&lt;project-name&gt;</code> to <code>g3&lt;project-name&gt;</code> meaning: at global object <code>g3</code> look for member <code>&lt;project-name&gt;</code>, ex.<br />
<ul>
<li><code>g3debug</code> object <code>g3.debug</code></li>
<li><code>g3utils</code> object <code>g3.utils</code></li>
</ul>

Have fun!
