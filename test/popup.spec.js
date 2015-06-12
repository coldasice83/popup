describe('팝업 테스트', function() {
	var popup;
	beforeEach(function() {
		jasmine.getFixtures().fixturesPath = 'base/';
      	loadFixtures('test/fixture/index.html');
		popup = new Popup();
	});

	it('생성', function() {
		expect(popup).toBeDefined();
	});

	it('여러개 생성', function () {
		popup.add('event', 'bg.png');
		popup.add('info', 'bg2.png');
		expect(popup.items.length).toBe(2);
	});

	it('첫번째 팝업 닫은후 0번째 팝업 확인 ', function() {
		popup.add('event', 'bg.png');
		popup.add('info', 'bg2.png');
		popup.open(0);
		popup.close(0);
		expect(popup.items[0].isOpen).toBe(false);
	});

	it('일부 닫힘 여부 확인', function() {
		popup.add('event', 'bg.png');
		popup.add('info', 'bg2.png');
		popup.open(0);
		popup.open(1);
		popup.close(0);
		expect(popup.checkAllClose()).toBe(false);
	});

	it('전체 닫힘 여부 확인', function() {
		popup.add('event', 'bg.png');
		popup.add('info', 'bg2.png');
		popup.open(0);
		popup.open(1);
		popup.close(0);
		popup.close(1);
		expect(popup.checkAllClose()).toBe(true);
	});

	it('팝업 중앙(기본)에 열기', function() {
		popup.add('event', 'bg.png');
		popup.open(0);
	});

	it('팝업 지정 위치에 열기', function() {
		popup.add2({
			id: 'event',
			loadImg: 'bg.png'
		});
		//popup.open(0);
	});

	it('팝업 딤드 배경 옵션 지정', function() {

	});

	it('', function() {

	});

});
