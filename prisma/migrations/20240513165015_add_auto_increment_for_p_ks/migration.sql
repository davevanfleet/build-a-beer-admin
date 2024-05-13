-- AlterTable
CREATE SEQUENCE beer_styles_id_seq;
ALTER TABLE "beer_styles" ALTER COLUMN "id" SET DEFAULT nextval('beer_styles_id_seq');
ALTER SEQUENCE beer_styles_id_seq OWNED BY "beer_styles"."id";

-- AlterTable
CREATE SEQUENCE grains_id_seq;
ALTER TABLE "grains" ALTER COLUMN "id" SET DEFAULT nextval('grains_id_seq');
ALTER SEQUENCE grains_id_seq OWNED BY "grains"."id";

-- AlterTable
CREATE SEQUENCE hops_id_seq;
ALTER TABLE "hops" ALTER COLUMN "id" SET DEFAULT nextval('hops_id_seq');
ALTER SEQUENCE hops_id_seq OWNED BY "hops"."id";

-- AlterTable
CREATE SEQUENCE recipe_grains_id_seq;
ALTER TABLE "recipe_grains" ALTER COLUMN "id" SET DEFAULT nextval('recipe_grains_id_seq');
ALTER SEQUENCE recipe_grains_id_seq OWNED BY "recipe_grains"."id";

-- AlterTable
CREATE SEQUENCE recipe_hops_id_seq;
ALTER TABLE "recipe_hops" ALTER COLUMN "id" SET DEFAULT nextval('recipe_hops_id_seq');
ALTER SEQUENCE recipe_hops_id_seq OWNED BY "recipe_hops"."id";

-- AlterTable
CREATE SEQUENCE recipes_id_seq;
ALTER TABLE "recipes" ALTER COLUMN "id" SET DEFAULT nextval('recipes_id_seq');
ALTER SEQUENCE recipes_id_seq OWNED BY "recipes"."id";

-- AlterTable
CREATE SEQUENCE users_id_seq;
ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT nextval('users_id_seq');
ALTER SEQUENCE users_id_seq OWNED BY "users"."id";

-- AlterTable
CREATE SEQUENCE water_profiles_id_seq;
ALTER TABLE "water_profiles" ALTER COLUMN "id" SET DEFAULT nextval('water_profiles_id_seq');
ALTER SEQUENCE water_profiles_id_seq OWNED BY "water_profiles"."id";

-- AlterTable
CREATE SEQUENCE yeasts_id_seq;
ALTER TABLE "yeasts" ALTER COLUMN "id" SET DEFAULT nextval('yeasts_id_seq');
ALTER SEQUENCE yeasts_id_seq OWNED BY "yeasts"."id";
