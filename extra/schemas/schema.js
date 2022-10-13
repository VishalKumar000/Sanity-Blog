/* eslint-disable */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* eslint-enable */

// import document schemas
import blog from './documents/blog';
import author from './documents/author';
import category from './documents/category';
import featured from './documents/featured';

// import custom object
import customImage from './objects/customImage';
import richText from './objects/richText';
import customCode from './objects/customCode';
import normalText from './objects/normalText';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // main schema
    blog,
    author,
    category,
    featured,

    // custom objects
    customImage,
    richText,
    customCode,
    normalText,
  ]),
});
