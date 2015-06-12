_.mixin({
  merge: function(defaults, options) {
    var results = {};
    for (var attrname in defaults) { results[attrname] = defaults[attrname]; }
    for (var attrname in options) { results[attrname] = options[attrname]; }
    return results;
  },
  dimmed: function(alpha, color){
  	return {
		'width': '100%',
		'height': '100%',
		'backgroundColor': color || '#000',
		'zoom': 1,
		'filter': 'alpha(opacity='+(alpha*100)+')',
		'opacity': alpha
	};
  }
});
