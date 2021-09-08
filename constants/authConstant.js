/*
 * constants
 */

const JWT = {
  ADMIN_SECRET:'myjwtadminsecret',
  DESKTOP_SECRET:'myjwtdesktopsecret',
  EXPIRES_IN: 10000
};

const USER_ROLE = {
    
  Admin :1,
  User:2,
};

const PLATFORM = {
  ADMIN:1,
  DESKTOP:2,
};

let LOGIN_ACCESS = {
  [USER_ROLE.User]:[PLATFORM.ADMIN,PLATFORM.DESKTOP],        
  [USER_ROLE.Admin]:[PLATFORM.ADMIN,PLATFORM.DESKTOP],        
};

const DEFAULT_ROLE = 1;

const ROLE_RIGHTS = {
    
  [USER_ROLE.User] : [
    'getAllByUserInAdminPlatform',
    'getByUserInAdminPlatform',
    'aggregateByUserInAdminPlatform',
    'getCountByUserInAdminPlatform',
    'createByUserInAdminPlatform',
    'addBulkByUserInAdminPlatform',
    'updateByUserInAdminPlatform',
    'updateBulkByUserInAdminPlatform',
    'partialUpdateByUserInAdminPlatform',
    'deleteByUserInAdminPlatform',
    'softDeleteByUserInAdminPlatform',
    'upsertByUserInAdminPlatform',
    'fileUploadByUserInAdminPlatform',
    'logoutByUserInAdminPlatform',
    'softDeleteManyByUserInAdminPlatform',
    'deleteManyByUserInAdminPlatform',
    'changePasswordByUserInAdminPlatform',
    'updateProfileByUserInAdminPlatform',
    'getAllByUserInDesktopPlatform',
    'getByUserInDesktopPlatform',
    'aggregateByUserInDesktopPlatform',
    'getCountByUserInDesktopPlatform',
    'createByUserInDesktopPlatform',
    'addBulkByUserInDesktopPlatform',
    'updateByUserInDesktopPlatform',
    'updateBulkByUserInDesktopPlatform',
    'partialUpdateByUserInDesktopPlatform',
    'deleteByUserInDesktopPlatform',
    'softDeleteByUserInDesktopPlatform',
    'upsertByUserInDesktopPlatform',
    'fileUploadByUserInDesktopPlatform',
    'logoutByUserInDesktopPlatform',
    'softDeleteManyByUserInDesktopPlatform',
    'deleteManyByUserInDesktopPlatform',
    'changePasswordByUserInDesktopPlatform',
    'updateProfileByUserInDesktopPlatform'
  ],
    
  [USER_ROLE.Admin] : [
    'getAllByAdminInAdminPlatform',
    'getByAdminInAdminPlatform',
    'aggregateByAdminInAdminPlatform',
    'getCountByAdminInAdminPlatform',
    'createByAdminInAdminPlatform',
    'addBulkByAdminInAdminPlatform',
    'updateByAdminInAdminPlatform',
    'updateBulkByAdminInAdminPlatform',
    'partialUpdateByAdminInAdminPlatform',
    'deleteByAdminInAdminPlatform',
    'softDeleteByAdminInAdminPlatform',
    'upsertByAdminInAdminPlatform',
    'fileUploadByAdminInAdminPlatform',
    'logoutByAdminInAdminPlatform',
    'softDeleteManyByAdminInAdminPlatform',
    'deleteManyByAdminInAdminPlatform',
    'changePasswordByAdminInAdminPlatform',
    'updateProfileByAdminInAdminPlatform',
    'getAllByAdminInDesktopPlatform',
    'getByAdminInDesktopPlatform',
    'aggregateByAdminInDesktopPlatform',
    'getCountByAdminInDesktopPlatform',
    'createByAdminInDesktopPlatform',
    'addBulkByAdminInDesktopPlatform',
    'updateByAdminInDesktopPlatform',
    'updateBulkByAdminInDesktopPlatform',
    'partialUpdateByAdminInDesktopPlatform',
    'deleteByAdminInDesktopPlatform',
    'softDeleteByAdminInDesktopPlatform',
    'upsertByAdminInDesktopPlatform',
    'fileUploadByAdminInDesktopPlatform',
    'logoutByAdminInDesktopPlatform',
    'softDeleteManyByAdminInDesktopPlatform',
    'deleteManyByAdminInDesktopPlatform',
    'changePasswordByAdminInDesktopPlatform',
    'updateProfileByAdminInDesktopPlatform'
  ],
    
};
const MAX_LOGIN_RETRY_LIMIT = 3;
const LOGIN_REACTIVE_TIME = 20;   

const FORGOT_PASSWORD_WITH = {
  LINK: {
    email: true,
    sms: false
  },
  EXPIRETIME: 20
};

module.exports = {
  JWT,
  USER_ROLE,
  DEFAULT_ROLE,
  ROLE_RIGHTS,
  PLATFORM,
  MAX_LOGIN_RETRY_LIMIT,
  LOGIN_REACTIVE_TIME,
  FORGOT_PASSWORD_WITH,
  LOGIN_ACCESS,
        
};