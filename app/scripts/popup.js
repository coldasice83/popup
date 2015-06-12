function Popup() {
	var that = this;
	this.items = [];
	this.dimmed = $('<div id="dimmed"></div>');
} 

Popup.prototype.add = function(id, bgImgUrl, width, height) {
	var layer = new Layer(id, bgImgUrl, width, height);
	this.items.push(layer);
}

Popup.prototype.add2 = function(option) {
	console.log('add2: '+option.id);
}

Popup.prototype.open = function(index) {
	this.items[index].open();

	//dimmed
	this.dimmed.css(_.dimmed(0.7, '#000'));
}

Popup.prototype.close = function(index) {
	this.items[index].close();
}

Popup.prototype.checkAllClose = function() {
	return (_.find(this.items, function(layer){ return layer.isOpen === true; })) ? false : true;
}
