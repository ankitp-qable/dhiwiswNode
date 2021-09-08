const express = require('express');
const router = express.Router();
const userController = require('../../controller/desktop/userController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/desktop/api/v1/user/create').post(auth(...[ 'createByUserInDesktopPlatform', 'createByAdminInDesktopPlatform' ]),checkRolePermission,userController.addUser);
router.route('/desktop/api/v1/user/list').post(auth(...[ 'getAllByUserInDesktopPlatform', 'getAllByAdminInDesktopPlatform' ]),checkRolePermission,userController.findAllUser);
router.route('/desktop/api/v1/user/:id').get(auth(...[ 'getByUserInDesktopPlatform', 'getByAdminInDesktopPlatform' ]),checkRolePermission,userController.getUser);
router.route('/desktop/api/v1/user/count').post(auth(...[
  'getCountByUserInDesktopPlatform',
  'getCountByAdminInDesktopPlatform'
]),checkRolePermission,userController.getUserCount);
router.route('/desktop/api/v1/user/aggregate').post(auth(...[
  'aggregateByUserInDesktopPlatform',
  'aggregateByAdminInDesktopPlatform'
]),checkRolePermission,userController.getUserByAggregate);
router.route('/desktop/api/v1/user/update/:id').put(auth(...[ 'updateByUserInDesktopPlatform', 'updateByAdminInDesktopPlatform' ]),checkRolePermission,userController.updateUser);    
router.route('/desktop/api/v1/user/partial-update/:id').put(auth(...[
  'partialUpdateByUserInDesktopPlatform',
  'partialUpdateByAdminInDesktopPlatform'
]),checkRolePermission,userController.partialUpdateUser);
router.route('/desktop/api/v1/user/softDelete/:id').put(auth(...[
  'softDeleteByUserInDesktopPlatform',
  'softDeleteByAdminInDesktopPlatform'
]),checkRolePermission,userController.softDeleteUser);
router.route('/desktop/api/v1/user/softDeleteMany').put(auth(...[
  'softDeleteManyByUserInDesktopPlatform',
  'softDeleteManyByAdminInDesktopPlatform'
]),checkRolePermission,userController.softDeleteManyUser);
router.route('/desktop/api/v1/user/addBulk').post(auth(...[ 'addBulkByUserInDesktopPlatform', 'addBulkByAdminInDesktopPlatform' ]),checkRolePermission,userController.bulkInsertUser);
router.route('/desktop/api/v1/user/updateBulk').put(auth(...[
  'updateBulkByUserInDesktopPlatform',
  'updateBulkByAdminInDesktopPlatform'
]),checkRolePermission,userController.bulkUpdateUser);
router.route('/desktop/api/v1/user/change-password').put(auth(...[
  'changePasswordByUserInDesktopPlatform',
  'changePasswordByAdminInDesktopPlatform'
]),userController.changePassword);
router.route('/desktop/api/v1/user/update-profile').put(auth(...[
  'updateProfileByUserInDesktopPlatform',
  'updateProfileByAdminInDesktopPlatform'
]),userController.updateProfile);

module.exports = router;
