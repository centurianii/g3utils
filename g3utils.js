/**
 * Root namespace.
 * @namespace {g3}
 */
(function(g3, $, window, document, undefined){
   g3.utils = g3.utils || {};
/*****************************Function htmlEntities()***************************
* Converts strings to their HTML character entity equivalents or their character
* encoding values based on the encoding scheme defined by the page.
* It mofifies 'g3.utils.escapeUtf8()' by replacing encoding values with their
* HTML equivalent entities.
* @module {g3.utils}
* @function {g3.utils.htmlEntities}
* @public
* @param {String} 'str' the string to search for and convert.
* @return {String} Returns the encoding equivalent of the passed string with 
* HTML character entities whenever possible.
* Attention: do NOT double encode as you cannot decode!
* @reference http://stackoverflow.com/questions/1354064/how-to-convert-characters-to-html-entities-using-plain-javascript
* http://en.wikipedia.org/wiki/Unicode
* http://www.sitepoint.com/do-you-know-your-character-encodings/
* http://people.w3.org/rishida/tools/conversion/
*******************************************************************************/
   g3.utils.htmlEntities = function(str){
      var entityTable = g3.utils.entityTable.getInstance();
      return str.replace(/[\u00A0-\u2666<>\&'"]/g, function(c){
         return '&' + (entityTable[c.charCodeAt(0)] || '#'+c.charCodeAt(0)) + ';';
      });
   };
   
/**************************Function decodeHtmlEntities()************************
* Converted strings from 'g3.utils.htmlEntities()' are reverted back to their 
* original form based on the encoding scheme defined by the page.
* @module {g3.utils}
* @function {g3.utils.decodeHtmlEntities}
* @public
* @param {String} 'str' the string to search for and revert.
* @return {String} Returns the initial string as it is displayed by the current
* browser.
* @reference http://stackoverflow.com/questions/1354064/how-to-convert-characters-to-html-entities-using-plain-javascript
* http://en.wikipedia.org/wiki/Unicode
* http://www.sitepoint.com/do-you-know-your-character-encodings/
*******************************************************************************/
   g3.utils.decodeHtmlEntities = function(str){
      var node = window.document.createElement('div');
      node.innerHTML = str;
      return node.firstChild.nodeValue;
   };
   
/*******************************Object entityTable******************************
* HTML4 entities as defined here: http://www.w3.org/TR/html4/sgml/entities.html
* added: amp, lt, gt, quot and apos. This object is a singleton with late 
* construction to minimize memory footprint.
* @module {g3.utils.entityTable}
* @constructor
* @reference http://stackoverflow.com/questions/1354064/how-to-convert-characters-to-html-entities-using-plain-javascript
*******************************************************************************/
   g3.utils.entityTable = (function(){
      var entities = null;
      function getEntities(){
         if ( entities === null ) {
            entities = init();
         }
         return entities;
      }
      function init(){
         return {
         34:'quot',38:'amp',39:'apos',60:'lt',62:'gt', 
         160:'nbsp',161:'iexcl',162:'cent',163:'pound',164:'curren',165:'yen', 
         166:'brvbar',167:'sect',168:'uml',169:'copy',170:'ordf',171:'laquo', 
         172:'not',173:'shy',174:'reg',175:'macr',176:'deg',177:'plusmn', 
         178:'sup2',179:'sup3',180:'acute',181:'micro',182:'para',183:'middot', 
         184:'cedil',185:'sup1',186:'ordm',187:'raquo',188:'frac14',189:'frac12', 
         190:'frac34',191:'iquest',192:'Agrave',193:'Aacute',194:'Acirc',
         195:'Atilde',196:'Auml',197:'Aring',198:'AElig',199:'Ccedil',
         200:'Egrave',201:'Eacute',202:'Ecirc',203:'Euml',204:'Igrave',
         205:'Iacute',206:'Icirc',207:'Iuml',208:'ETH',209:'Ntilde',210:'Ograve', 
         211:'Oacute',212:'Ocirc',213:'Otilde',214:'Ouml',215:'times',
         216:'Oslash',217:'Ugrave',218:'Uacute',219:'Ucirc',220:'Uuml',
         221:'Yacute',222:'THORN',223:'szlig',224:'agrave',225:'aacute',
         226:'acirc',227:'atilde',228:'auml',229:'aring',230:'aelig',
         231:'ccedil',232:'egrave',233:'eacute',234:'ecirc',235:'euml',
         236:'igrave',237:'iacute',238:'icirc',239:'iuml',240:'eth',241:'ntilde', 
         242:'ograve',243:'oacute',244:'ocirc',245:'otilde',246:'ouml',
         247:'divide',248:'oslash',249:'ugrave',250:'uacute',251:'ucirc',
         252:'uuml',253:'yacute',254:'thorn',255:'yuml',402:'fnof',913:'Alpha', 
         914:'Beta',915:'Gamma',916:'Delta',917:'Epsilon',918:'Zeta',919:'Eta', 
         920:'Theta',921:'Iota',922:'Kappa',923:'Lambda',924:'Mu',925:'Nu', 
         926:'Xi',927:'Omicron',928:'Pi',929:'Rho',931:'Sigma',932:'Tau',
         933:'Upsilon',934:'Phi',935:'Chi',936:'Psi',937:'Omega',945:'alpha',
         946:'beta',947:'gamma',948:'delta',949:'epsilon',950:'zeta',951:'eta',
         952:'theta',953:'iota',954:'kappa',955:'lambda',956:'mu',957:'nu',
         958:'xi',959:'omicron',960:'pi',961:'rho',962:'sigmaf',963:'sigma',
         964:'tau',965:'upsilon',966:'phi',967:'chi',968:'psi',969:'omega',
         977:'thetasym',978:'upsih',982:'piv',8226:'bull',8230:'hellip',
         8242:'prime',8243:'Prime',8254:'oline',8260:'frasl',8472:'weierp',
         8465:'image',8476:'real',8482:'trade',8501:'alefsym',8592:'larr',
         8593:'uarr',8594:'rarr',8595:'darr',8596:'harr',8629:'crarr',
         8656:'lArr',8657:'uArr',8658:'rArr',8659:'dArr',8660:'hArr',
         8704:'forall',8706:'part',8707:'exist',8709:'empty',8711:'nabla',
         8712:'isin',8713:'notin',8715:'ni',8719:'prod',8721:'sum',8722:'minus',
         8727:'lowast',8730:'radic',8733:'prop',8734:'infin',8736:'ang',
         8743:'and',8744:'or',8745:'cap',8746:'cup',8747:'int',8756:'there4',
         8764:'sim',8773:'cong',8776:'asymp',8800:'ne',8801:'equiv',8804:'le',
         8805:'ge',8834:'sub',8835:'sup',8836:'nsub',8838:'sube',8839:'supe',
         8853:'oplus',8855:'otimes',8869:'perp',8901:'sdot',8968:'lceil',
         8969:'rceil',8970:'lfloor',8971:'rfloor',9001:'lang',9002:'rang',
         9674:'loz',9824:'spades',9827:'clubs',9829:'hearts',9830:'diams',
         338:'OElig',339:'oelig',352:'Scaron',353:'scaron',376:'Yuml',710:'circ',
         732:'tilde',8194:'ensp',8195:'emsp',8201:'thinsp',8204:'zwnj',
         8205:'zwj',8206:'lrm',8207:'rlm',8211:'ndash',8212:'mdash',8216:'lsquo',
         8217:'rsquo',8218:'sbquo',8220:'ldquo',8221:'rdquo',8222:'bdquo',
         8224:'dagger',8225:'Dagger',8240:'permil',8249:'lsaquo',8250:'rsaquo',
         8364:'euro'
         };
      }
      return {
         getInstance: function(){return getEntities();}
      };
   })();
   
/*****************************Function pointCodeAt()****************************
* Returns character codes beyond 65535 which are represented as a 2-byte 
* sequence. It extends 'String.prototype.charCodeAt'.
* @module {g3.utils}
* @function {g3.utils.pointCodeAt}
* @public
* @param {String} 'str' the string to search for and convert.
* @param {Integer} 'pos' the current in-string byte.
* @return {String} Returns the equivalent character code of a character at the 
* specified index in the string.
* @author Steven Levithan <http://slevithan.com/>
* @copyright 2012 MIT license.
* @reference http://stackoverflow.com/questions/784586/convert-special-characters-to-html-in-javascript
*******************************************************************************/
   g3.utils.pointCodeAt = function(str, pos){
      pos = isNaN(pos) ? 0 : pos;
      if(typeof str !== 'string')
         return null;
      var code = str.charCodeAt(pos), next = str.charCodeAt(pos + 1);
      // If a surrogate pair
      if (0xD800 <= code && code <= 0xDBFF && 0xDC00 <= next && next <= 0xDFFF)
         code = ((code - 0xD800) * 0x400) + (next - 0xDC00) + 0x10000;
      return code;
   };

/*****************************Function escapeUtf8()*****************************
* Extends javascript's 'escape()' function to cover UTF-8 characters and not 
* only the range [0x00, 0xFF].
* @module {g3.utils}
* @function {g3.utils.escapeUtf8}
* @public
* @param {String} 'str' the string to convert to.
* @return {String} Returns a string converted to hexadecimal notation.
* @reference http://stackoverflow.com/questions/1354064/how-to-convert-characters-to-html-entities-using-plain-javascript
*******************************************************************************/
   g3.utils.escapeUtf8 = function(str){
      str = str.replace(/[\u00A0-\u2666]/g, function(c) {
         return '&#'+c.charCodeAt(0)+';';
      });
      return str;
   };
   
/*********************************Object color**********************************
* A color object for conversions between hexadecimal and decimal formats.
* It supoorts 'rgb[a](r, g, b[, a])' -> 'hex', 'hex' -> 'rgb(r, g, b)'
* @module {g3.utils.color}
* @public
* @constructor
* @reference http://haacked.com/archive/2009/12/29/convert-rgb-to-hex.aspx/
*******************************************************************************/
   g3.utils.color = (function(){
      function rgbToHex() {
         var r, g, b;
         if(arguments.length === 0)
            return null;
         else if(arguments.length === 1){
            if (arguments[0].substr(0, 1) === '#') {
               return arguments[0];
            }
            var m = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(arguments[0]);
            if(m)
               return '#' + (1 << 24 | m[1] << 16 | m[2] << 8 | m[3]).toString(16).substr(1);
            r = arguments[0];
            g = 0;
            b = 0;
         }else if(arguments.length === 2){
            r = argumens[0];
            g = argumens[1];
            b = 0;
         }else if(arguments.length >= 3){ //ignore the rest arguments
            r = argumens[0];
            g = argumens[1];
            b = argumens[2];
         }
         if(!g3.utils.isNumber(r) || !g3.utils.isNumber(g) || !g3.utils.isNumber(b))
            return null;
         if(r < 0 || r > 255) return null;
         if(g < 0 || g > 255) return null;
         if(b < 0 || b > 255) return null;
         return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1, 7);
      }
      function hexToRgb(hex) {
         var bigint = ((hex.charAt(0)=== "#") ? hex.substring(1) : hex);
         bigint = parseInt(hex, 16);
         if(!g3.utils.isNumber(bigint))
            return null;
         var r = (bigint >> 16) & 255;
         var g = (bigint >> 8) & 255;
         var b = bigint & 255;
         return "rgb(" + r + "," + g + "," + b + ")";
      }
      return {
         rgbToHex: function(){return rgbToHex(arguments);},
         hexToRgb: function(hex){return hexToRgb(hex);}
      };
   })();
   
   
   
/*******************************Function typeOf()*******************************
* Overloads javascript's 'typeof' operator.
* @module {g3.utils}
* @function {g3.utils.typeOf}
* @public
* @param {Type} 'value' an identifier of any javascript's type.
* @return {string} Returns a string for the type of the passed argument.
* @reference http://javascript.crockford.com/remedial.html
* http://stackoverflow.com/questions/767486/how-do-you-check-if-a-variable-is-an-array-in-javascript/767499
*******************************************************************************/
   g3.utils.typeOf = function(value) {
      var s = typeof value;
      if (s === 'object') {
         if (value) {
            if (Object.prototype.toString.call(value) === Object.prototype.toString.call([])) { //'[object Array]'
               s = 'array';
            }
         } else {
            s = 'null';
         }
      }
      return s;
   };
   
/*******************************Function isNumber()*******************************
* Checks an identifier against the number type.
* Anything besides string or javascript numbers is not passed.
* @module {g3.utils}
* @function {g3.utils.isNumber}
* @public
* @param {Number|String} 'n' an identifier to be identified/casted as number.
* @return {Boolean} Returns true if the argument is a javascript number or a 
* string that can be converted to a number.
* @reference http://stackoverflow.com/questions/18082/validate-numbers-in-javascript-isnumeric
*******************************************************************************/
   g3.utils.isNumber = (function(){
      var reg = /^-/;
      return function(n){
         return (Object.prototype.toString.call(n) === '[object Number]' || Object.prototype.toString.call(n) === '[object String]') && !isNaN(parseFloat(n)) && isFinite(n.toString().replace(reg, ''));
      };
   })();

/******************************Function htmlList()******************************
* Returns a string of a html list constructed from the passed arguments.
* @module {g3.utils}
* @function {g3.utils.htmlList}
* @public
* @param {String} 'type' the type of list, 'u' for onordered or 'o' for ordered.
* @param {String|Array} Second and forth should be strings or instead it can 
* be given an array of strings as a second argument.
* @return {string} Returns a string of a html list constructed from the passed 
* arguments starting from the second one or, false if i) there is no second or 
* more arguments or, ii), the first argument is not a string with value 'u' or 
* 'o'.
* @author Scripto JS Editor by Centurian Comet.
* @copyright All rights reserved.
*******************************************************************************/
   g3.utils.htmlList = function(type) {
      if(!type || (g3.utils.typeOf(type) != 'string') || ((type.toLowerCase() != 'u') && 
        (type.toLowerCase() != 'o')) || (arguments.length <= 1))
         return false;
      var result = "<" + type.toLowerCase() + "l><li>";
      var args;
      if(g3.utils.typeOf(arguments[1]) === 'array')
         args = arguments[1];
      else
         args = Array.prototype.slice.call(arguments, 1);
      result += args.join("</li><li>");
      result += "</li></" + type.toLowerCase() + "l>";
      return result;
   };
}(window.g3 = window.g3 || {}, jQuery, window, document));
