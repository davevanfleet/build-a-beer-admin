-- AlterTable
ALTER TABLE "beer_styles" ADD COLUMN     "sample_extract_recipe_id" INTEGER;

-- AddForeignKey
ALTER TABLE "beer_styles" ADD CONSTRAINT "fk_beer_styles_recipes_extract_recipe_id" FOREIGN KEY ("sample_extract_recipe_id") REFERENCES "recipes"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
