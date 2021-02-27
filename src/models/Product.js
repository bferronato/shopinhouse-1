export default class Product {
  constructor(id, name, description, imageUrl, price, categoryList) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
    this.categoryList = categoryList;
  }

  static mapToProduct(map) {
    return new Product(
      map.sku,
      map.name,
      map.description,
      map.image,
      map.price,
      map.category,
    );
  }
}
