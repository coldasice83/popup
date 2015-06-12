/* jshint devel:true */
var config = {
	img: 'images/'
};

var popup = new Popup();
popup.add('event_popup_wrap', config.img + 'main.jpg', 300, 200);
popup.open(0);


/**
 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
 * @param obj1
 * @param obj2
 * @returns obj3 a new object based on obj1 and obj2
 */
function merge_options(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}

/**
 * merge object by jquery	
 * @param  {Object} defaults 
 * @param  {Object} options  
 * @return {Object}          
 */
function merge_opt(defaults, options){
	/* merge defaults and options, without modifying defaults */
	var settings = $.extend({}, defaults, options);
	return settings;
}

// demo
var defaults = { validate: false, limit: 5, name: "foo" };
var options = { validate: true, name: "bar" };
console.log(merge_options(defaults, options));
console.log(merge_opt(defaults, options));
console.log(_.merge(defaults, options));