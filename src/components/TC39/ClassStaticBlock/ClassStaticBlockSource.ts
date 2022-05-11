export const randomRectangle = (x) => ({
  width: Math.floor(Math.random() * x) + 1,
  height: Math.floor(Math.random() * x) + 1,
});

export let getRectName;

export class Rect {
  static seed = 10;
  static defaultWidth;
  static defaultHeight;
  #name;
  constructor(name) {
    this.#name = name;
  }
  static {
    const defaultRect = randomRectangle(this.seed);
    this.defaultWidth = defaultRect.width;
    this.defaultHeight = defaultRect.height;
  }
  static {
    getRectName = (rect) => rect.#name;
  }
}
