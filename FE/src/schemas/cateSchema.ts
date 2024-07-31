import { z } from "zod";

const cateSchema = z.object({

	name: z.string(),
	slug: z.string(),
});

export default cateSchema;