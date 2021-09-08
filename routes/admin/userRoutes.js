const express = require('express');
const router = express.Router();
const userController = require('../../controller/admin/userController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/user/create').post(auth(...[ 'createByUserInAdminPlatform', 'createByAdminInAdminPlatform' ]),checkRolePermission,userController.addUser);
router.route('/admin/user/list').post(auth(...[ 'getAllByUserInAdminPlatform', 'getAllByAdminInAdminPlatform' ]),checkRolePermission,userController.findAllUser);
router.route('/admin/user/:id').get(auth(...[ 'getByUserInAdminPlatform', 'getByAdminInAdminPlatform' ]),checkRolePermission,userController.getUser);
router.route('/admin/user/count').post(auth(...[ 'getCountByUserInAdminPlatform', 'getCountByAdminInAdminPlatform' ]),checkRolePermission,userController.getUserCount);
router.route('/admin/user/aggregate').post(auth(...[ 'aggregateByUserInAdminPlatform', 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,userController.getUserByAggregate);
router.route('/admin/user/update/:id').put(auth(...[ 'updateByUserInAdminPlatform', 'updateByAdminInAdminPlatform' ]),checkRolePermission,userController.updateUser);    
router.route('/admin/user/partial-update/:id').put(auth(...[
  'partialUpdateByUserInAdminPlatform',
  'partialUpdateByAdminInAdminPlatform'
]),checkRolePermission,userController.partialUpdateUser);
router.route('/admin/user/softDelete/:id').put(auth(...[
  'softDeleteByUserInAdminPlatform',
  'softDeleteByAdminInAdminPlatform'
]),checkRolePermission,userController.softDeleteUser);
router.route('/admin/user/softDeleteMany').put(auth(...[
  'softDeleteManyByUserInAdminPlatform',
  'softDeleteManyByAdminInAdminPlatform'
]),checkRolePermission,userController.softDeleteManyUser);
router.route('/admin/user/addBulk').post(auth(...[ 'addBulkByUserInAdminPlatform', 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,userController.bulkInsertUser);
router.route('/admin/user/updateBulk').put(auth(...[
  'updateBulkByUserInAdminPlatform',
  'updateBulkByAdminInAdminPlatform'
]),checkRolePermission,userController.bulkUpdateUser);
router.route('/admin/user/change-password').put(auth(...[
  'changePasswordByUserInAdminPlatform',
  'changePasswordByAdminInAdminPlatform'
]),userController.changePassword);
router.route('/admin/user/update-profile').put(auth(...[
  'updateProfileByUserInAdminPlatform',
  'updateProfileByAdminInAdminPlatform'
]),userController.updateProfile);

module.exports = router;
