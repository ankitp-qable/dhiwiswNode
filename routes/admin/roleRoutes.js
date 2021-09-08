const express = require('express');
const router = express.Router();
const roleController = require('../../controller/admin/roleController');
const auth = require('../../middleware/auth');
router.route('/admin/role/create').post(auth(...[ 'createByUserInAdminPlatform', 'createByAdminInAdminPlatform' ]),roleController.addRole);
router.route('/admin/role/addBulk').post(auth(...[ 'addBulkByUserInAdminPlatform', 'addBulkByAdminInAdminPlatform' ]),roleController.bulkInsertRole);
router.route('/admin/role/list').post(auth(...[ 'getAllByUserInAdminPlatform', 'getAllByAdminInAdminPlatform' ]),roleController.findAllRole);
router.route('/admin/role/:id').get(auth(...[ 'getByUserInAdminPlatform', 'getByAdminInAdminPlatform' ]),roleController.getRole);
router.route('/admin/role/partial-update/:id').put(auth(...[
  'partialUpdateByUserInAdminPlatform',
  'partialUpdateByAdminInAdminPlatform'
]),roleController.partialUpdateRole);
router.route('/admin/role/softDelete/:id').put(auth(...[
  'softDeleteByUserInAdminPlatform',
  'softDeleteByAdminInAdminPlatform'
]),roleController.softDeleteRole);
router.route('/admin/role/update/:id').put(auth(...[ 'updateByUserInAdminPlatform', 'updateByAdminInAdminPlatform' ]),roleController.updateRole);    
router.route('/admin/role/aggregate').post(auth(...[ 'aggregateByUserInAdminPlatform', 'aggregateByAdminInAdminPlatform' ]),roleController.getRoleByAggregate);
router.route('/admin/role/count').post(auth(...[ 'getCountByUserInAdminPlatform', 'getCountByAdminInAdminPlatform' ]),roleController.getRoleCount);
router.route('/admin/role/upsert').post(auth(...[ 'upsertByUserInAdminPlatform', 'upsertByAdminInAdminPlatform' ]),roleController.upsert);

module.exports = router;
