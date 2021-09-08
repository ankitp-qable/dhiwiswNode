const express = require('express');
const router = express.Router();
const projectRouteController = require('../../controller/admin/projectRouteController');
const auth = require('../../middleware/auth');
router.route('/admin/projectRoute/create').post(auth(...[ 'createByUserInAdminPlatform', 'createByAdminInAdminPlatform' ]),projectRouteController.addProjectRoute);
router.route('/admin/projectRoute/addBulk').post(auth(...[ 'addBulkByUserInAdminPlatform', 'addBulkByAdminInAdminPlatform' ]),projectRouteController.bulkInsertProjectRoute);
router.route('/admin/projectRoute/list').post(auth(...[ 'getAllByUserInAdminPlatform', 'getAllByAdminInAdminPlatform' ]),projectRouteController.findAllProjectRoute);
router.route('/admin/projectRoute/:id').get(auth(...[ 'getByUserInAdminPlatform', 'getByAdminInAdminPlatform' ]),projectRouteController.getProjectRoute);
router.route('/admin/projectRoute/partial-update/:id').put(auth(...[
  'partialUpdateByUserInAdminPlatform',
  'partialUpdateByAdminInAdminPlatform'
]),projectRouteController.partialUpdateProjectRoute);
router.route('/admin/projectRoute/softDelete/:id').put(auth(...[
  'softDeleteByUserInAdminPlatform',
  'softDeleteByAdminInAdminPlatform'
]),projectRouteController.softDeleteProjectRoute);
router.route('/admin/projectRoute/update/:id').put(auth(...[ 'updateByUserInAdminPlatform', 'updateByAdminInAdminPlatform' ]),projectRouteController.updateProjectRoute);    
router.route('/admin/projectRoute/aggregate').post(auth(...[ 'aggregateByUserInAdminPlatform', 'aggregateByAdminInAdminPlatform' ]),projectRouteController.getProjectRouteByAggregate);
router.route('/admin/projectRoute/count').post(auth(...[ 'getCountByUserInAdminPlatform', 'getCountByAdminInAdminPlatform' ]),projectRouteController.getProjectRouteCount);
router.route('/admin/projectRoute/upsert').post(auth(...[ 'upsertByUserInAdminPlatform', 'upsertByAdminInAdminPlatform' ]),projectRouteController.upsert);

module.exports = router;
