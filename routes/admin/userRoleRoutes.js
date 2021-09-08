const express = require('express');
const router = express.Router();
const userRoleController = require('../../controller/admin/userRoleController');
const auth = require('../../middleware/auth');
router.route('/admin/userRole/create').post(auth(...[ 'createByUserInAdminPlatform', 'createByAdminInAdminPlatform' ]),userRoleController.addUserRole);
router.route('/admin/userRole/addBulk').post(auth(...[ 'addBulkByUserInAdminPlatform', 'addBulkByAdminInAdminPlatform' ]),userRoleController.bulkInsertUserRole);
router.route('/admin/userRole/list').post(auth(...[ 'getAllByUserInAdminPlatform', 'getAllByAdminInAdminPlatform' ]),userRoleController.findAllUserRole);
router.route('/admin/userRole/:id').get(auth(...[ 'getByUserInAdminPlatform', 'getByAdminInAdminPlatform' ]),userRoleController.getUserRole);
router.route('/admin/userRole/partial-update/:id').put(auth(...[
  'partialUpdateByUserInAdminPlatform',
  'partialUpdateByAdminInAdminPlatform'
]),userRoleController.partialUpdateUserRole);
router.route('/admin/userRole/update/:id').put(auth(...[ 'updateByUserInAdminPlatform', 'updateByAdminInAdminPlatform' ]),userRoleController.updateUserRole);    
router.route('/admin/userRole/softDelete/:id').put(auth(...[
  'softDeleteByUserInAdminPlatform',
  'softDeleteByAdminInAdminPlatform'
]),userRoleController.softDeleteUserRole);
router.route('/admin/userRole/aggregate').post(auth(...[ 'aggregateByUserInAdminPlatform', 'aggregateByAdminInAdminPlatform' ]),userRoleController.getUserRoleByAggregate);
router.route('/admin/userRole/count').post(auth(...[ 'getCountByUserInAdminPlatform', 'getCountByAdminInAdminPlatform' ]),userRoleController.getUserRoleCount);
router.route('/admin/userRole/upsert').post(auth(...[ 'upsertByUserInAdminPlatform', 'upsertByAdminInAdminPlatform' ]),userRoleController.upsert);

module.exports = router;
