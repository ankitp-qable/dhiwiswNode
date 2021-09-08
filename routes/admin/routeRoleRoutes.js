const express = require('express');
const router = express.Router();
const routeRoleController = require('../../controller/admin/routeRoleController');
const auth = require('../../middleware/auth');
router.route('/admin/routeRole/create').post(auth(...[ 'createByUserInAdminPlatform', 'createByAdminInAdminPlatform' ]),routeRoleController.addRouteRole);
router.route('/admin/routeRole/addBulk').post(auth(...[ 'addBulkByUserInAdminPlatform', 'addBulkByAdminInAdminPlatform' ]),routeRoleController.bulkInsertRouteRole);
router.route('/admin/routeRole/list').post(auth(...[ 'getAllByUserInAdminPlatform', 'getAllByAdminInAdminPlatform' ]),routeRoleController.findAllRouteRole);
router.route('/admin/routeRole/:id').get(auth(...[ 'getByUserInAdminPlatform', 'getByAdminInAdminPlatform' ]),routeRoleController.getRouteRole);
router.route('/admin/routeRole/partial-update/:id').put(auth(...[
  'partialUpdateByUserInAdminPlatform',
  'partialUpdateByAdminInAdminPlatform'
]),routeRoleController.partialUpdateRouteRole);
router.route('/admin/routeRole/update/:id').put(auth(...[ 'updateByUserInAdminPlatform', 'updateByAdminInAdminPlatform' ]),routeRoleController.updateRouteRole);    
router.route('/admin/routeRole/softDelete/:id').put(auth(...[
  'softDeleteByUserInAdminPlatform',
  'softDeleteByAdminInAdminPlatform'
]),routeRoleController.softDeleteRouteRole);
router.route('/admin/routeRole/aggregate').post(auth(...[ 'aggregateByUserInAdminPlatform', 'aggregateByAdminInAdminPlatform' ]),routeRoleController.getRouteRoleByAggregate);
router.route('/admin/routeRole/count').post(auth(...[ 'getCountByUserInAdminPlatform', 'getCountByAdminInAdminPlatform' ]),routeRoleController.getRouteRoleCount);
router.route('/admin/routeRole/upsert').post(auth(...[ 'upsertByUserInAdminPlatform', 'upsertByAdminInAdminPlatform' ]),routeRoleController.upsert);

module.exports = router;
