// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { GUEST } = initSchema(schema);

export {
  GUEST
};