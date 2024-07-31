import { z } from "zod";

const productSchema = z.object({
	title: z.string().min(5, "Title must be at least 5 characters"),
	price: z.number().nonnegative("Price must be a positive number"),
	description: z.string().optional(),
	quantity: z.number().optional(),
	categoryId: z.string().optional(),
	image: z.any().optional(),
});

export default productSchema;