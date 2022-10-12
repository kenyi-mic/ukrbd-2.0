// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import category from "./category";
import products from "./products";
import product from "./product";
import photo from "./photo";
import featured from "./featured";
import productRow from "./productRow";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    products,
    product,
    photo,
    featured,
    productRow,
    category,
  ]),
});
