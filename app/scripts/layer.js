/**
 * [Layer description]
 * @param {String} id       고유값, 영역 id값
 * @param {String} bgImgUrl 팝업 배경이미지 경로
 * @param {Number} w        가로너비
 * @param {Number} h        세로너비
 * @param {Number} x        위치값 : x (지정하지 않을경우 중앙에 위치한다.)
 * @param {Number} y        위치값 : y (지정하지 않을경우 중앙에 위치한다.)
 */
function Layer(option) {
	var that = this;

  this.option = {
    id: 'layer',
    isOpen: false,
    w: 200,
    h: 100,
    x: -1,
    y: -1,
    positionType: 'absolute',
    el: $('#'+this.id) || $("<div id='"+this.id+"'></div>")
  };

  this.option = _.merge(this.option, option);

	/*this.id = id;
	this.isOpen = false;
	this.w = w;
	this.h = h;
	this.x = x;
	this.y = y;
	this.el = $('#'+this.id) || $("<div id='"+this.id+"'></div>");


	if(w !== undefined) {
		this.el.css({
			"width": w+"px",
			"height": h+"px"
		});
	}
	this.el.css({
		"background": "url("+bgImgUrl+")"
	});

	$(window).resize(function() {
		that.update();
	});


	this.update = function() {
		if(this.x !== undefined) {
			this.el.offset({ top: this.SSy, left: this.x });
		} else {
			this.el.center();
		}
	}*/
}

Layer.prototype.open = function() {
	this.isOpen = true;
	this.update();
}

Layer.prototype.close = function() {
	this.isOpen = false;
}

Layer.prototype.getOption = function() {
  return this.option;
}

/*Layer.prototype.update = function() {
	if(this.x !== undefined) {
		this.el.offset({ top: this.y, left: this.x });
	} else {
		this.el.center();
	}
}*/
