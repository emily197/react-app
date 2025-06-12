let products = [
    {
      id: "12",
      name: "Vitaminas Erbology1111",
      barcode: "CODE-012",
      slug: "vita666",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      shortDescription: "Complemento alimenticio para la salud diaria.",
      longDescription: "Estas vitaminas ofrecen un apoyo completo al sistema inmunológico y mejoran la energía diaria. Ideal para adultos con una dieta balanceada.",
      categoryId: "FAR",
      brand: "MARCA-1",
      price: 89,
      discountPrice: 0.15,
      cost: 180,
      stock: 4,
      unit: "unit",
      isActive: true
    },
    {
      id: "1",
      name: "zapatillas Urbanas",
      barcode: "CODE-002",
      slug: "prod-2",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      shortDescription: "Zapatillas cómodas para uso diario.",
      longDescription: "Diseñadas para brindar confort durante todo el día. Material transpirable y suela antideslizante para caminar con estilo y seguridad.",
      categoryId: "ZAP",
      subcategoryId: "",
      brand: "MARCA-1",
      price: 230,
      discountPrice: 0,
      cost: 180,
      stock: 7,
      unit: "unit",
      isActive: true
    },
    {
      id: "3",
      name: "Estantes metalicos",
      barcode: "CODE-004",
      slug: "prod-4",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      shortDescription: "Organiza tus espacios con firmeza.",
      longDescription: "Estantes resistentes ideales para hogar o almacén. Fabricados en acero con alta durabilidad y capacidad de carga.",
      categoryId: "HOG",
      subcategoryId: "",
      brand: "MARCA-1",
      price: 320,
      discountPrice: 0.1,
      cost: 180,
      stock: 9,
      unit: "unit",
      isActive: true
    },
    {
      id: "5",
      name: "Zapatillas deportivas",
      barcode: "CODE-006",
      slug: "prod-6",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      shortDescription: "Ideales para correr y entrenar.",
      longDescription: "Proporcionan excelente soporte y amortiguación para actividades deportivas. Diseño ligero con materiales de alta tecnología.",
      categoryId: "ZAP",
      subcategoryId: "",
      brand: "MARCA-1",
      price: 210,
      discountPrice: 0.03,
      cost: 180,
      stock: 8,
      unit: "unit",
      isActive: true
    },
    {
      id: "6",
      name: "Crema corporal",
      barcode: "CODE-007",
      slug: "prod-7",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
      shortDescription: "Hidratación profunda para tu piel.",
      longDescription: "Con ingredientes naturales que nutren la piel seca, dejando una sensación suave y sedosa. Apta para todo tipo de piel.",
      categoryId: "FAR",
      subcategoryId: "",
      brand: "MARCA-1",
      price: 45,
      discountPrice: 0,
      cost: 180,
      stock: 2,
      unit: "unit",
      isActive: true
    },
    {
      id: "7",
      name: "Producto random 2",
      barcode: "CODE-008",
      slug: "prod-8",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
      shortDescription: "Artículo variado para múltiples usos.",
      longDescription: "Producto versátil con múltiples aplicaciones domésticas o personales. Diseño práctico y fácil de usar.",
      categoryId: "HOG",
      subcategoryId: "",
      brand: "MARCA-1",
      price: 99,
      discountPrice: 0,
      cost: 180,
      stock: 5,
      unit: "unit",
      isActive: true
    },
    {
      id: "8",
      name: "Lampara rustica",
      barcode: "CODE-009",
      slug: "prod-9",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
      shortDescription: "Iluminación con estilo vintage.",
      longDescription: "Ideal para ambientar espacios con un toque rústico y acogedor. Compatible con bombillas LED de bajo consumo.",
      categoryId: "HOG",
      subcategoryId: "",
      brand: "MARCA-1",
      price: 250,
      discountPrice: 0.18,
      cost: 180,
      stock: 10,
      unit: "unit",
      isActive: true
    },
    {
      id: "9",
      name: "Locion Tonik",
      barcode: "CODE-010",
      slug: "prod-10",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
      shortDescription: "Loción refrescante para piel sensible.",
      longDescription: "Fórmula hipoalergénica que tonifica y revitaliza la piel. Ideal para uso diario después del baño o afeitado.",
      categoryId: "FAR",
      subcategoryId: "",
      brand: "MARCA-1",
      price: 60,
      discountPrice: 0.02,
      cost: 180,
      stock: 1,
      unit: "unit",
      isActive: true
    },
    {
      id: "10",
      name: "Mando de juego",
      barcode: "CODE-011",
      slug: "prod-11",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
      shortDescription: "Control inalámbrico para videojuegos.",
      longDescription: "Compatible con múltiples plataformas. Diseño ergonómico y respuesta precisa para una experiencia gamer completa.",
      categoryId: "ELE",
      subcategoryId: "",
      brand: "MARCA-1",
      price: 280,
      discountPrice: 0.22,
      cost: 180,
      stock: 3,
      unit: "unit",
      isActive: true
    },
    {
      id: "11",
      name: "Mochila Atelle",
      barcode: "CODE-012",
      slug: "prod-12",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
      shortDescription: "Mochila resistente para uso diario.",
      longDescription: "Espaciosa, con múltiples compartimentos y acolchado para portátiles. Ideal para trabajo, estudio o viajes cortos.",
      categoryId: "ACC",
      subcategoryId: "",
      brand: "MARCA-1",
      price: 175,
      discountPrice: 0,
      cost: 180,
      stock: 6,
      unit: "unit",
      isActive: true
    },
    {
      id: "af87",
      name: "Gigly",
      barcode: "1212",
      slug: "gigly-666",
      image: "https://www.pokeperustore.pe/wp-content/uploads/2024/06/Pokemo-Center-Peluche-Fit-Jigglypuff-Japon-2.jpg",
      shortDescription: "Peluche tierno de Jigglypuff.",
      longDescription: "Coleccionable original de Pokémon Center Japón. Perfecto para fans y coleccionistas. Suave y de excelente calidad.",
      categoryId: "ZAP",
      brand: "CA",
      price: 150,
      discountPrice: 0.3,
      cost: 15,
      stock: 100,
      unit: "kg",
      isActive: true
    }
];

export const getProduct = async () => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 200);
  });
}

export const postProduct = async (product) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      product.id = Date.now().toString();
      products.push(product);
      resolve(product);
    }, 200);
  });
}

