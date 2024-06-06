-- AlterTable
ALTER TABLE "recipe_grains" ALTER COLUMN "weight_in_pounds" DROP DEFAULT;

-- AlterTable
ALTER TABLE "recipe_hops" ALTER COLUMN "alpha_acid_percent" DROP DEFAULT,
ALTER COLUMN "boil_time_minutes" DROP DEFAULT,
ALTER COLUMN "weight_in_ounces" DROP DEFAULT;
