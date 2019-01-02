// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //create results array
  const output = [];
  //get all html tags in doc
  const allTags = document.getElementsByTagName('*');
  //iterate through all tags
  //allTags
  //check if tag contains class -> if yes, push to output
  //check if tag has child elements -> if yes, recursively check child elements^
  //output results array
  return output;
};
