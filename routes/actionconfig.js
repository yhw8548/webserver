var userAction = require('../action/useraction');

/**
 * url访问配置
 *
 * @type {{}}
 */


 /**
 获取产品列表
 */


function queryProducts(req, res) {
    productAction.queryProducts(req, res);
}

 /**
 获取产品详细信息
 */
function queryProduct(req, res) {
    productAction.queryProduct(productId,req, res);
}

function queryUsers(req,res){

     userAction.queryUsers(req,res);

}


var actionMapping={
  post:{
   

  },
  get:{
    '/harvey/v1/product/list':queryProducts,
    '/harvey/v1/product/query':queryProduct,
    '/hello':function(req, res){res.send('hello word')},
     '/':function(req, res){res.send('hello ////')},
     '/user':queryUsers,
  }



}


exports.actionMapping=actionMapping;