let User = require('../model/user');
let Role = require('../model/role');
let ProjectRoute = require('../model/projectRoute');
let RouteRole = require('../model/routeRole');
let UserRole = require('../model/userRole');
let dbService = require('../utils/dbService');

const deleteUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const userFilter0327 = { 'addedBy': { '$in': user } };
      const user3851 = await deleteUser(userFilter0327);
      const userFilter2275 = { 'updatedBy': { '$in': user } };
      const user1786 = await deleteUser(userFilter2275);
      const userRoleFilter6626 = { 'userId': { '$in': user } };
      const userRole6431 = await deleteUserRole(userRoleFilter6626);
      return await User.deleteMany(filter);
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRole = async (filter) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);
      const routeRoleFilter3642 = { 'roleId': { '$in': role } };
      const routeRole6492 = await deleteRouteRole(routeRoleFilter3642);
      const userRoleFilter4132 = { 'roleId': { '$in': role } };
      const userRole6706 = await deleteUserRole(userRoleFilter4132);
      return await Role.deleteMany(filter);
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteProjectRoute = async (filter) =>{
  try {
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);
      const routeRoleFilter2273 = { 'routeId': { '$in': projectroute } };
      const routeRole3308 = await deleteRouteRole(routeRoleFilter2273);
      return await ProjectRoute.deleteMany(filter);
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRouteRole = async (filter) =>{
  try {
    return await RouteRole.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserRole = async (filter) =>{
  try {
    return await UserRole.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const countUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const userFilter6526 = { 'addedBy': { '$in': user } };
      const user5671Cnt = await countUser(userFilter6526);
      const userFilter6034 = { 'updatedBy': { '$in': user } };
      const user2282Cnt = await countUser(userFilter6034);
      const userRoleFilter2628 = { 'userId': { '$in': user } };
      const userRole8324Cnt = await countUserRole(userRoleFilter2628);
      const userCnt =  await User.countDocuments(filter);
      let response = { user : userCnt  };
      response = {
        ...response,
        ...user5671Cnt,
        ...user2282Cnt,
        ...userRole8324Cnt,
      };
      return response;
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countRole = async (filter) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);
      const routeRoleFilter4762 = { 'roleId': { '$in': role } };
      const routeRole2241Cnt = await countRouteRole(routeRoleFilter4762);
      const userRoleFilter5845 = { 'roleId': { '$in': role } };
      const userRole9665Cnt = await countUserRole(userRoleFilter5845);
      const roleCnt =  await Role.countDocuments(filter);
      let response = { role : roleCnt  };
      response = {
        ...response,
        ...routeRole2241Cnt,
        ...userRole9665Cnt,
      };
      return response;
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countProjectRoute = async (filter) =>{
  try {
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);
      const routeRoleFilter9162 = { 'routeId': { '$in': projectroute } };
      const routeRole4729Cnt = await countRouteRole(routeRoleFilter9162);
      const projectRouteCnt =  await ProjectRoute.countDocuments(filter);
      let response = { projectRoute : projectRouteCnt  };
      response = {
        ...response,
        ...routeRole4729Cnt,
      };
      return response;
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countRouteRole = async (filter) =>{
  try {
    const routeRoleCnt =  await RouteRole.countDocuments(filter);
    return { routeRole : routeRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserRole = async (filter) =>{
  try {
    const userRoleCnt =  await UserRole.countDocuments(filter);
    return { userRole : userRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const userFilter9067 = { 'addedBy': { '$in': user } };
      const user2306 = await softDeleteUser(userFilter9067);
      const userFilter3312 = { 'updatedBy': { '$in': user } };
      const user8972 = await softDeleteUser(userFilter3312);
      const userRoleFilter5563 = { 'userId': { '$in': user } };
      const userRole7996 = await softDeleteUserRole(userRoleFilter5563);
      return await User.updateMany(filter, { isDeleted:true });
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRole = async (filter) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);
      const routeRoleFilter4047 = { 'roleId': { '$in': role } };
      const routeRole9903 = await softDeleteRouteRole(routeRoleFilter4047);
      const userRoleFilter0166 = { 'roleId': { '$in': role } };
      const userRole1028 = await softDeleteUserRole(userRoleFilter0166);
      return await Role.updateMany(filter, { isDeleted:true });
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteProjectRoute = async (filter) =>{
  try {
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);
      const routeRoleFilter8018 = { 'routeId': { '$in': projectroute } };
      const routeRole0249 = await softDeleteRouteRole(routeRoleFilter8018);
      return await ProjectRoute.updateMany(filter, { isDeleted:true });
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRouteRole = async (filter) =>{
  try {
    return await RouteRole.updateMany(filter, { isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserRole = async (filter) =>{
  try {
    return await UserRole.updateMany(filter, { isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

module.exports = {
  deleteUser,
  deleteRole,
  deleteProjectRoute,
  deleteRouteRole,
  deleteUserRole,
  countUser,
  countRole,
  countProjectRoute,
  countRouteRole,
  countUserRole,
  softDeleteUser,
  softDeleteRole,
  softDeleteProjectRoute,
  softDeleteRouteRole,
  softDeleteUserRole,
};
