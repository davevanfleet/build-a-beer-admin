"use client";
import {
  Admin,
  Resource,
  EditGuesser,
  ListGuesser,
  ShowGuesser,
} from "react-admin";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";
import { LoginPage } from "./LoginPage";
import { BeerStyleCreate } from "./resources/beerStyles/Create";
import { BeerStyleList } from "./resources/beerStyles/List";
import { BeerStyleShow } from "./resources/beerStyles/Show";
import { GrainCreate } from "./resources/grains/Create";
import { GrainList } from "./resources/grains/List";
import { HopCreate } from "./resources/hops/Create";
import { YeastCreate } from "./resources/yeasts/Create";
import { YeastList } from "./resources/yeasts/List";
import { RecipeList } from "./resources/recipes/List";
import { RecipeCreate } from "./resources/recipes/Create";
import { RecipeShow } from "./resources/recipes/Show";
import { MaltExtractList } from "./resources/maltExtracts/List";
import { MaltExtractCreate } from "./resources/maltExtracts/Create";

const AdminApp = () => (
  <>
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={LoginPage}
    >
      <Resource
        name="BeerStyles"
        list={BeerStyleList}
        edit={EditGuesser}
        show={BeerStyleShow}
        create={BeerStyleCreate}
      />
      <Resource
        name="Grains"
        list={GrainList}
        edit={EditGuesser}
        show={ShowGuesser}
        create={GrainCreate}
      />
      <Resource
        name="MaltExtracts"
        list={MaltExtractList}
        edit={EditGuesser}
        show={ShowGuesser}
        create={MaltExtractCreate}
      />
      <Resource
        name="Hops"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
        create={HopCreate}
      />
      <Resource
        name="Yeasts"
        list={YeastList}
        edit={EditGuesser}
        show={ShowGuesser}
        create={YeastCreate}
      />
      <Resource
        name="Recipes"
        list={RecipeList}
        edit={EditGuesser}
        show={RecipeShow}
        create={RecipeCreate}
      />
    </Admin>
  </>
);

export default AdminApp;
