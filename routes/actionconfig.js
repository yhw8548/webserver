var userAction = require('../action/useraction');
var productAction = require('../action/productaction');
var uploadfileAction = require('../action/uploadfileaction');
var dictionaryAction = require('../action/dictionaryaction');
/**
 * url访问配置
 *
 * @type {{}}
 */
/**
 * 用户信息相关
 * 
 * 
 */
//查询用户
function queryUsers(req,res){
     userAction.queryUsers(req,res);
}
//用户注册
function userRegister(req,res){
     userAction.userRegister(req,res);
}
//用户登录
function userLogin(req,res){
     userAction.userLogin(req,res);
}
/**
 * 产品信息相关
 * 
 * 
 */
 //获取产品详细信息
function queryProduct(req, res) {
    productAction.queryProduct(req, res);
}

// 获取产品列表

function queryProducts(req, res) {
    productAction.queryProducts(req, res);
}

// 添加产品
function addProduct(req,res){
    productAction.addProduct(req,res);

}
// 添加产品
function updateProduct(req,res){
    productAction.updateProduct(req,res);

}
// 产品下架
function offProduct(req,res){
    productAction.offProduct(req,res);

}
// 产品上架
function upProduct(req,res){
    productAction.upProduct(req,res);

}
// 添加产品封面图片
function addProductImage(req,res){
    productAction.addProductImage(req,res);
}
// 添加产品详细描述
function addDescription(req,res){
      productAction.addDescription(req,res);
}
function updateDescription(req,res){
      productAction.updateDescription(req,res);
}
//产品详细中图片上传
function uploadImage(req,res){
     uploadfileAction.uploadImage(req,res);
}

/**
 * 字典表相关操作
 * 
 * 
 */
// 省份查询

function queryProvice(req,res){

    dictionaryAction.queryProvice(req,res);

}
// 城市查询

function queryCity(req,res){

 dictionaryAction.queryCity(req,res);

}
// 县级市查询

function queryCounty(req,res){

 dictionaryAction.queryCounty(req,res);

}

function queryCategory(req,res){
  dictionaryAction.queryCategory(req,res);
}
function addCategory(req,res){
  dictionaryAction.addCategory(req,res);
}
function delCategory(req,res){
  dictionaryAction.delCategory(req,res);
}
function querySubclass(req,res){
  dictionaryAction.querySubclass(req,res);
}

function addSubclass(req,res){
  dictionaryAction.addSubclass(req,res);
}

function delSubclass(req,res){
  dictionaryAction.delSubclass(req,res);
}
function getBook(req,res){
    var params=req.query;   
    var linkurl="http://www.zoudupai.com/services/service.php?m=index&a=share&width=100&p="+params.page+"&v=" +Math.random()*99999999;

    http.get(linkurl, (serverFeedback   ) => {
                    var body = "";  
                    serverFeedback.on('data', function (data) { body += data; })  
                          .on('end', function () { res.send(200, body); });  
    })
}



var actionMapping={
  post:{
    //用户相关   
    '/harvey/v1/secret/user/register':userRegister,
    '/harvey/v1/secret/user/login':userLogin,
    // 产品相关
    '/harvey/v1/secret/product/add':addProduct,
    '/harvey/v1/secret/product/initfile':addProductImage,
    '/harvey/v1/secret/product/addDescription':addDescription,
    '/harvey/v1/secret/base/uploadfile':uploadImage,
    '/harvey/v1/secret/product/update':updateProduct,
    '/harvey/v1/secret/product/updateDescription':updateDescription,
    '/harvey/v1/secret/product/off':offProduct,
    '/harvey/v1/secret/product/up':upProduct,
    '/harvey/v1/secret/category/add':addCategory,
    '/harvey/v1/secret/subclass/add':addSubclass,
    '/harvey/v1/secret/category/delete':delCategory,
    '/harvey/v1/secret/subclass/delete':delSubclass

  },
  get:{
    '/harvey/v1/product/list':queryProducts,
    '/harvey/v1/product/query':queryProduct,
    '/harvey/v1/provice':queryProvice,
    '/harvey/v1/city':queryCity,
    '/harvey/v1/county':queryCounty,
    '/harvey/v1/categoryno':queryCategory,
    '/harvey/v1/subclassno':querySubclass,
    '/hello':function(req, res){
        res.send('hello word')
    },
     '/':function(req, res){
         res.send('hello ////')
      },
     '/user':queryUsers,
     '/book':getBook
  }



}


exports.actionMapping=actionMapping;