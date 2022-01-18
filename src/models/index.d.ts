import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type GUESTMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class GUEST {
  readonly id: string;
  readonly name?: string;
  readonly email?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<GUEST, GUESTMetaData>);
  static copyOf(source: GUEST, mutator: (draft: MutableModel<GUEST, GUESTMetaData>) => MutableModel<GUEST, GUESTMetaData> | void): GUEST;
}