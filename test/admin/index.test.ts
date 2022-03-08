import {expect} from 'chai';

import {geofirestore, GeoFirestore} from '../../src/admin';
import {firestore} from './common';

describe('Admin Tests:', () => {
  describe('geofirestore:', () => {
    it('geofirestore() returns new instance of GeoFirestore', () => {
      // @ts-ignore
      expect(geofirestore(firestore)).to.be.instanceOf(GeoFirestore);
    });
  });
});
