function SpriteSegment(frame, position, start, end, region, character, base){
    this.frame = frame;
    this.position = position;
    this.start = start;
    this.end = end;
    this.amount = end - start;
    this.width = this.amount * this.frame.width;
    this.region = region;
    this.height = character.get_height(0.5);
    this.base = base;
}
SpriteSegment.create = function(sprite, position, start, end, region, character, base) {
    var frame = sprite.get_next_frame();
    return new SpriteSegment(frame, position, start, end, region, character, base);
}
$SS = SpriteSegment.create;
