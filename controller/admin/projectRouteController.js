const ProjectRoute = require('../../model/projectRoute');
const utils = require('../../utils/messages');
const projectRouteSchemaKey = require('../../utils/validation/projectRouteValidation');
const validation = require('../../utils/validateRequest');
const dbService = require('../../utils/dbService');
const deleteDependentService = require('../../utils/deleteDependent');
const addProjectRoute = async (req, res) => {
  try {

    let isValid = validation.validateParamsWithJoi(
      req.body,
      projectRouteSchemaKey.schemaKeys);
    if (isValid.error) {
      return utils.inValidParam(isValid.error, res);
    } 
    let data = new ProjectRoute({ ...req.body, });
    let result = await dbService.createDocument(ProjectRoute,data);
    return  utils.successResponse(result, res);
  } catch (error) {
    if (error.name === 'ValidationError'){
      return utils.validationError(error.message, res);
    }
    if (error.code && error.code == 11000){
      return utils.isDuplicate(error.message, res);
    }
    return utils.failureResponse(error.message,res); 
  }
};

const bulkInsertProjectRoute = async (req,res)=>{
  try {
    let data;   
    if (req.body.data !== undefined && req.body.data.length){
      data = req.body.data;

      let result = await dbService.bulkInsert(ProjectRoute,data);
      return  utils.successResponse(result, res);
    } else {
      return utils.failureResponse('Invalid Data',res);
    }  
  } catch (error){
    if (error.name === 'ValidationError'){
      return utils.validationError(error.message, res);
    }
    if (error.code && error.code == 11000){
      return utils.isDuplicate(error.message, res);
    }
    return utils.failureResponse(error.message,res);
  }
};

const findAllProjectRoute = async (req, res) => {
  try {
    let options = {};
    let query = {};
    let result;
    if (req.body.isCountOnly){
      if (req.body.query !== undefined) {
        query = { ...req.body.query };
      }
      result = await dbService.countDocument(ProjectRoute, query);
      if (result) {
        result = { totalRecords: result };
        return utils.successResponse(result, res);
      } 
      return utils.recordNotFound([], res);
    }
    else {
      if (req.body.options !== undefined) {
        /*
         * if(req.body.options.populate){
         *   delete req.body.options.populate;
         * }
         */
        options = { ...req.body.options };
      }
            
      if (req.body.query !== undefined){
        query = { ...req.body.query };
      }
      result = await dbService.getAllDocuments( ProjectRoute,query,options);
      if (result && result.data && result.data.length){
        return utils.successResponse(result, res);   
      }
      return utils.recordNotFound({},res);
    }
  }
  catch (error){
    return utils.failureResponse(error.message,res);
  }
};

const getProjectRoute = async (req, res) => {
  try {
    let query = {};
    query._id = req.params.id;

    let result = await dbService.getDocumentByQuery(ProjectRoute,query);
    if (result){
      return  utils.successResponse(result, res);
            
    }
    return utils.recordNotFound([],res);
  }
  catch (error){
    return utils.failureResponse(error.message,res);
  }
};

const partialUpdateProjectRoute = async (req, res) => {
  try {
    let data = {
      ...req.body,
      id: req.params.id
    };
    let isValid = validation.validateParamsWithJoi(
      data,
      projectRouteSchemaKey.updateSchemaKeys
    );
    if (isValid.error) {
      return utils.inValidParam(isValid.error, res);
    }

    const query = { _id:req.params.id };
    let result = await dbService.findOneAndUpdateDocument(ProjectRoute, query, data,{ new:true });
    if (!result) {
      return utils.failureResponse('something is wrong', res);
    }
        
    return utils.successResponse(result, res);
        
  }
  catch (error){
    return utils.failureResponse(error.message, res);
  }
};

const softDeleteProjectRoute = async (req, res) => {
  try {
    let query = { _id:req.params.id };
    let result = await deleteDependentService.softDeleteProjectRoute(query);
    if (!result){
      return utils.failureResponse('something went wrong',res);
    }
    return  utils.successResponse(result, res);
  } catch (error){
    return utils.failureResponse(error.message,res); 
  }
};

const updateProjectRoute = async (req, res) => {
  try {
    let data = {
      ...req.body,
      id:req.params.id
    };
    let isValid = validation.validateParamsWithJoi(
      data,
      projectRouteSchemaKey.schemaKeys
    );
    if (isValid.error) {
      return  utils.inValidParam(isValid.error, res);
    }
        
    let query = { _id:req.params.id };
    let result = await dbService.findOneAndUpdateDocument(ProjectRoute,query,data,{ new:true });
    if (!result){
      return utils.failureResponse('something is wrong',res);
    }
        
    return  utils.successResponse(result, res);
  }
  catch (error){
    if (error.name === 'ValidationError'){
      return utils.isDuplicate(error.message, res);
    }
    if (error.code && error.code == 11000){
      return utils.isDuplicate(error.message, res);
    }
    return utils.failureResponse(error.message,res);
  }
};

const getProjectRouteByAggregate = async (req,res)=>{
  try {
    let result = await dbService.getDocumentByAggregation(ProjectRoute,req.body);
    if (result){
      return utils.successResponse(result, res);
    }
    return utils.recordNotFound([],res);
  } catch (error){
    return utils.failureResponse(error.message,res);
  }
};

const getProjectRouteCount = async (req, res) => {
  try {
    let where = {};
    if (req.body.where){
      where = req.body.where;
    }
    let result = await dbService.countDocument(ProjectRoute,where);
    if (result){
      result = { totalRecords:result };
      return utils.successResponse(result, res);
    }
    return utils.recordNotFound({},res);
  }
  catch (error){
    return utils.failureResponse(error.message,res);
  }
};

const upsert = async (req, res) => {
  try {
    let params = req.body;
    let isValid = validation.validateParamsWithJoi(
      params,
      projectRouteSchemaKey.schemaKeys
    );
    if (isValid.error) {
      return utils.inValidParam(isValid.error, res);
    }

    if (params.id) {
      let where = params.id;
      ['id','createdAt','updatedAt'].forEach(e => delete params[e]);
      let result = await dbService.updateDocument(ProjectRoute, where, params);
      if (!result){
        utils.failureResponse('something is wrong',res);
      }

      return utils.successResponse(result, res);
    }
    else {
      let data = new ProjectRoute({ ...params });
      let result = await dbService.createDocument(ProjectRoute, data);
      if (!result){
        return utils.failureResponse('something is wrong',res);
      }
      return  utils.successResponse(result, res);    
    }
  }
  catch (error){
    if (error.name === 'ValidationError'){
      return utils.validationError(error.message, res);
    }
    if (error.code && error.code == 11000){
      return utils.isDuplicate(error.message, res);
    }
    return utils.failureResponse(error.message,res); 
  }
};

module.exports = {
  addProjectRoute,
  bulkInsertProjectRoute,
  findAllProjectRoute,
  getProjectRoute,
  partialUpdateProjectRoute,
  softDeleteProjectRoute,
  updateProjectRoute,
  getProjectRouteByAggregate,
  getProjectRouteCount,
  upsert,
};
