/* eslint-disable */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* eslint-enable */

// import document schemas
import blog from './documents/blog';
import author from './documents/author';

// import object
import customImage from './objects/customImage';
import bodyText from './objects/bodyText';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([blog, author, customImage, bodyText]),
});
