// Câu 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau
const products = [
    new Product(1, "iPhone 15 Pro Max", 35000000, 10, "Phone", true),
    new Product(2, "Samsung Galaxy S24 Ultra", 32000000, 5, "Phone", true),
    new Product(3, "MacBook Pro M3", 45000000, 0, "Laptop", true), // Hết hàng
    new Product(4, "AirPods Pro 2", 5500000, 20, "Accessories", true),
    new Product(5, "Logitech MX Master 3S", 2500000, 15, "Accessories", true),
    new Product(6, "Dell XPS 15", 40000000, 3, "Laptop", false) // Ngừng kinh doanh
];

console.log(products);

// Câu 3: Tạo mảng mới chỉ chứa: name, price của mỗi sản phẩm
const nameAndPrice = products.map(p => ({ name: p.name, price: p.price }));
console.log(nameAndPrice);

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
const availableProducts = products.filter(p => p.quantity > 0);
console.log(availableProducts);

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log(hasExpensiveProduct ? "Có" : "Không");

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
const accessories = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable = accessories.every(p => p.isAvailable === true);
console.log(allAccessoriesAvailable ? "Đúng" : "Sai");

// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price x quantity
const totalInventoryValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
console.log(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalInventoryValue));

// Câu 8: Dùng for... of Duyệt mảng products và in ra: Tên sản phẩm, Danh mục, Trạng thái
for (const p of products) {
    console.log(`Tên: ${p.name}, Danh mục: ${p.category}, Trạng thái: ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}

// Câu 9: Dùng for... in để in ra tên thuộc tính và giá trị tương ứng (Dùng cho sản phẩm đầu tiên làm ví dụ)
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`${key}: ${firstProduct[key]}`);
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán (isAvailable = true) và còn hàng (quantity > 0)
const sellableAndInStockNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
console.log(sellableAndInStockNames);
