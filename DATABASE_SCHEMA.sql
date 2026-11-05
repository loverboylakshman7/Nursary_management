-- Suggested relational schema based on the project documentation.
-- This schema is a starting point for a future MySQL backend; the included demo uses browser localStorage.

CREATE TABLE Category (
  category_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(80) NOT NULL UNIQUE
);

CREATE TABLE Supplier (
  supplier_id INT AUTO_INCREMENT PRIMARY KEY,
  business_name VARCHAR(150) NOT NULL,
  contact_person VARCHAR(120),
  phone VARCHAR(30),
  email VARCHAR(150),
  address TEXT
);

CREATE TABLE Customer (
  customer_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  phone VARCHAR(30),
  email VARCHAR(150),
  address TEXT
);

CREATE TABLE Product (
  product_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  botanical_name VARCHAR(150),
  category_id INT,
  plant_type VARCHAR(60),
  pot_size VARCHAR(60),
  selling_price DECIMAL(10,2) NOT NULL,
  qty INT NOT NULL DEFAULT 0,
  reorder_level INT NOT NULL DEFAULT 0,
  supplier_id INT,
  care_notes TEXT,
  FOREIGN KEY (category_id) REFERENCES Category(category_id),
  FOREIGN KEY (supplier_id) REFERENCES Supplier(supplier_id),
  CHECK (qty >= 0),
  CHECK (selling_price >= 0)
);

CREATE TABLE Purchase (
  purchase_id INT AUTO_INCREMENT PRIMARY KEY,
  supplier_id INT NOT NULL,
  purchase_date DATE NOT NULL,
  status VARCHAR(30) NOT NULL DEFAULT 'Received',
  FOREIGN KEY (supplier_id) REFERENCES Supplier(supplier_id)
);

CREATE TABLE PurchaseItem (
  purchase_item_id INT AUTO_INCREMENT PRIMARY KEY,
  purchase_id INT NOT NULL,
  product_id INT NOT NULL,
  qty INT NOT NULL,
  cost DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (purchase_id) REFERENCES Purchase(purchase_id),
  FOREIGN KEY (product_id) REFERENCES Product(product_id),
  CHECK (qty > 0)
);

CREATE TABLE Sale (
  sale_id INT AUTO_INCREMENT PRIMARY KEY,
  invoice_no VARCHAR(40) NOT NULL UNIQUE,
  customer_id INT NULL,
  sale_date DATETIME NOT NULL,
  payment_method VARCHAR(30),
  discount DECIMAL(10,2) NOT NULL DEFAULT 0,
  grand_total DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);

CREATE TABLE SaleItem (
  sale_item_id INT AUTO_INCREMENT PRIMARY KEY,
  sale_id INT NOT NULL,
  product_id INT NOT NULL,
  qty INT NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (sale_id) REFERENCES Sale(sale_id),
  FOREIGN KEY (product_id) REFERENCES Product(product_id),
  CHECK (qty > 0)
);

CREATE TABLE CareTask (
  task_id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  due_date DATE NOT NULL,
  task_type VARCHAR(80) NOT NULL,
  assigned_to VARCHAR(120),
  status VARCHAR(30) NOT NULL DEFAULT 'Pending',
  completion_notes TEXT,
  FOREIGN KEY (product_id) REFERENCES Product(product_id)
);

CREATE TABLE StockMovement (
  movement_id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  movement_type VARCHAR(30) NOT NULL,
  qty INT NOT NULL,
  reason VARCHAR(255),
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES Product(product_id)
);
