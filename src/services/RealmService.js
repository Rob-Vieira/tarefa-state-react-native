import Realm from "realm";

const UserSchema = {
    name: 'User',
    properties: {
        _id: { type: 'int', indexed: true },
        name: 'string',
        email: 'string',
        password: 'string'
    },
    primaryKey: '_id'
};

const realmConfig = {
    schema: [UserSchema],
    schemaVersion: 1,
    migration: (oldRealm, newRealm) => {
      if (oldRealm.schemaVersion < 1) {
        const oldObjects = oldRealm.objects('User');
        const newObjects = newRealm.objects('User');
  
        for (let i = 0; i < oldObjects.length; i++) {
          const oldObject = oldObjects[i];
  
          newObjects.create({
            _id: oldObject.id,
            name: oldObject.name,
            email: oldObject.email,
            password: oldObject.password,
          });
        }
      }
    },
  };

const realm = new Realm(realmConfig);

export default realm;