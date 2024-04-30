// Libraries
import axios from "axios";
import { fetchProducts, fetchCategories } from "../product-service";

jest.mock("axios");

describe("Product Service", () => {
  describe("fetchProducts", () => {
    it("fetches products from the API", async () => {
      const mockProducts = [
        {
          id: 1,
          title: "Product 1",
          price: 10,
          description: "Description 1",
          category: "Category 1",
          image: "image1.jpg",
          rating: 4.5,
        },
        {
          id: 2,
          title: "Product 2",
          price: 20,
          description: "Description 2",
          category: "Category 2",
          image: "image2.jpg",
          rating: 3.5,
        },
      ];

      axios.get.mockResolvedValueOnce({ data: mockProducts });

      const products = await fetchProducts();

      expect(axios.get).toHaveBeenCalledWith(
        "https://fakestoreapi.com/products"
      );

      expect(products).toEqual([
        {
          id: 1,
          title: "Product 1",
          price: 10,
          description: "Description 1",
          category: "Category 1",
          imageUrl: "image1.jpg",
          rating: 4.5,
        },
        {
          id: 2,
          title: "Product 2",
          price: 20,
          description: "Description 2",
          category: "Category 2",
          imageUrl: "image2.jpg",
          rating: 3.5,
        },
      ]);
    });
  });

  describe("fetchCategories", () => {
    it("fetches categories from the API", async () => {
      const mockCategories = ["Category 1", "Category 2", "Category 3"];

      axios.get.mockResolvedValueOnce({ data: mockCategories });

      const categories = await fetchCategories();

      expect(axios.get).toHaveBeenCalledWith(
        "https://fakestoreapi.com/products/categories"
      );

      expect(categories).toEqual(["Category 1", "Category 2", "Category 3"]);
    });
  });
});
