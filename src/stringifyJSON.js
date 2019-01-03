// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var output = '';

  if ( typeof obj === 'string' ) {
    return '"' + obj + '"';
  }

  if ( typeof obj === 'function' ) {
    return undefined;
  }
  
  if ( Array.isArray( obj ) ) {
    output += '[';
    for (var i = 0; i < obj.length; i++) {
      output += stringifyJSON( obj[i] );
      if ( i !== obj.length - 1 ) {
        output += ',';
      }
    }
    output += ']';
    return output;
  }

  //if ( typeof obj === 'object' ) {}

  
  //check if object is basic data tyoe (str, num, bool, null, undef)
  //if yes, convert object to str and add to solu
  //check if obj is array
  //if yes -> add [, iterate, add string elements, add ]
  //check if obj literal
  //same as array, except {}, and :.
  return ''+ obj;
};
