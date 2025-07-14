class ImageEntity {
  constructor({ id, url, width, height, breeds = [], categories = [] }) {
    this.id = id;
    this.url = url;
    this.width = width;
    this.height = height;
    this.breeds = breeds;
    this.categories = categories;
  }
}

module.exports = ImageEntity; 