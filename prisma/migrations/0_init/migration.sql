-- CreateTable
CREATE TABLE "beer_styles" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "appearance_description" TEXT NOT NULL,
    "aroma_description" TEXT NOT NULL,
    "flavor_description" TEXT NOT NULL,
    "mouthfeel_description" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "history" TEXT NOT NULL,
    "ibu_minimum" INTEGER NOT NULL,
    "ibu_maximum" INTEGER NOT NULL,
    "srm_minimum" INTEGER NOT NULL,
    "srm_maximum" INTEGER NOT NULL,
    "original_gravity_minimum" REAL NOT NULL,
    "original_gravity_maximum" REAL NOT NULL,
    "final_gravity_minimum" REAL NOT NULL,
    "final_gravity_maximum" REAL NOT NULL,
    "abv_minimum" REAL NOT NULL,
    "abv_maximum" REAL NOT NULL,
    "fermentation" INTEGER NOT NULL,
    "bjcp_code" TEXT NOT NULL DEFAULT '',
    "overall_impression" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "pk_beer_styles" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grains" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "lovibond" REAL NOT NULL,
    "fine_grind_dry_basis_percentage" REAL NOT NULL,
    "suggested_maximum_usage" INTEGER NOT NULL DEFAULT 0,
    "suggested_minimum_usage" INTEGER NOT NULL DEFAULT 0,
    "maltster" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "pk_grains" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hops" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "for_aroma" BOOLEAN NOT NULL DEFAULT false,
    "for_bittering" BOOLEAN NOT NULL DEFAULT false,
    "for_dry_hopping" BOOLEAN NOT NULL DEFAULT false,
    "for_flavor" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "pk_hops" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe_grains" (
    "id" INTEGER NOT NULL,
    "recipe_id" INTEGER NOT NULL,
    "grain_id" INTEGER NOT NULL,
    "weight_in_pounds" REAL NOT NULL DEFAULT 0,

    CONSTRAINT "pk_recipe_grains" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe_hops" (
    "id" INTEGER NOT NULL,
    "recipe_id" INTEGER NOT NULL,
    "hop_id" INTEGER NOT NULL,
    "alpha_acid_percent" REAL NOT NULL DEFAULT 0,
    "boil_time_minutes" INTEGER NOT NULL DEFAULT 0,
    "weight_in_ounces" REAL NOT NULL DEFAULT 0,

    CONSTRAINT "pk_recipe_hops" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipes" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "pk_recipes" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "category" INTEGER NOT NULL,

    CONSTRAINT "pk_tags" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "apple_id" TEXT NOT NULL,

    CONSTRAINT "pk_users" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "water_profiles" (
    "id" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "minimum_calcium" INTEGER NOT NULL,
    "maximum_calcium" INTEGER NOT NULL,
    "minimum_magnesium" INTEGER NOT NULL,
    "maximum_magnesium" INTEGER NOT NULL,
    "minimum_sodium" INTEGER NOT NULL,
    "maximum_sodium" INTEGER NOT NULL,
    "minimum_carbonate" INTEGER NOT NULL,
    "maximum_carbonate" INTEGER NOT NULL,
    "minimum_sulfate" INTEGER NOT NULL,
    "maximum_sulfate" INTEGER NOT NULL,
    "minimum_chloride" INTEGER NOT NULL,
    "maximum_chloride" INTEGER NOT NULL,

    CONSTRAINT "pk_water_profiles" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "yeasts" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "fermentation" INTEGER NOT NULL DEFAULT 0,
    "maximum_temperature" INTEGER NOT NULL DEFAULT 0,
    "minimum_temperature" INTEGER NOT NULL DEFAULT 0,
    "attenuation" REAL NOT NULL DEFAULT 0,

    CONSTRAINT "pk_yeasts" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ix_recipe_grains_grain_id" ON "recipe_grains"("grain_id");

-- CreateIndex
CREATE INDEX "ix_recipe_grains_recipe_id" ON "recipe_grains"("recipe_id");

-- CreateIndex
CREATE INDEX "ix_recipe_hops_hop_id" ON "recipe_hops"("hop_id");

-- CreateIndex
CREATE INDEX "ix_recipe_hops_recipe_id" ON "recipe_hops"("recipe_id");

-- AddForeignKey
ALTER TABLE "recipe_grains" ADD CONSTRAINT "fk_recipe_grains_grains_grain_id" FOREIGN KEY ("grain_id") REFERENCES "grains"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recipe_grains" ADD CONSTRAINT "fk_recipe_grains_recipes_recipe_id" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recipe_hops" ADD CONSTRAINT "fk_recipe_hops_hops_hop_id" FOREIGN KEY ("hop_id") REFERENCES "hops"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recipe_hops" ADD CONSTRAINT "fk_recipe_hops_recipes_recipe_id" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

