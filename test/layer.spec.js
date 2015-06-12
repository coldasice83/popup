describe('레이어 테스트', function () {
  var layer;

  beforeEach(function () {

  });

  it('생성', function () {
    layer = new Layer();
    expect(layer).toBeDefined();
  });

  it('설정한 위치에 생성', function () {
    layer = new Layer({
      x: 10,
      y: 10
    });
    expect(layer.getOption().x).toBe(10);
    expect(layer.getOption().y).toBe(10);
  });

  it('설정한 크기로 생성', function () {
    layer = new Layer({
      width: 10,
      height: 10
    });
    expect(layer.getOption().width).toBe(10);
    expect(layer.getOption().height).toBe(10);
  });

  it('position type 지정', function () {
    layer = new Layer({
      positionType: 'absolute'
    });
    expect(layer.getOption().positionType).toBe('absolute');
  });
});
