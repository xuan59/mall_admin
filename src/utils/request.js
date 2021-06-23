
/**
 * @author lx
 * @date 2021-04-17
 * 
 * 公共请求方法
 */

/**
 * 请求码
200 - 确定。客户端请求已成功
201 - 已创建
202 - 已接受
203 - 非权威性信息
204 - 无内容
205 - 重置内容
206 - 部分内容

302 - 对象已移动。 
304 - 未修改。 
307 - 临时重定向。

400 - 错误的请求
401 - 访问被拒绝
403 - 禁止访问
404 - 未找到该请求地址
405 - 用来访问本页面的 HTTP 谓词不被允许（方法不被允许） 
406 - 客户端浏览器不接受所请求页面的 MIME 类型
407 - 要求进行代理身份验证
412 - 前提条件失败
413 – 请求实体太大
414 - 请求 URI 太长
415 – 不支持的媒体类型
416 – 所请求的范围无法满足
417 – 执行失败
423 – 锁定的错误

500 - 内部服务器错误
501 - 页眉值指定了未实现的配置
502 - Web 服务器用作网关或代理服务器时收到了无效响应。502.1 - CGI 应用程序超时
502.2 - CGI 应用程序出错。application
503 - 服务不可用。这个错误代码为 IIS 6.0 所专用
504 - 网关超时
505 - HTTP 版本不受支持
 * 
 * 
 */

import axios from 'axios'
import { Message } from 'element-ui'
 export default{
    post (api, param){
        if(api == undefined || api == null || api == ''){
            this.$message({
                showClose: true,
                message: '请求地址不能为空',
                type: 'error',
                center: true
            });
        }
        const params = {
            "RequestBody":{
                ...param,  
            },
            "RequestHeader": {
                systemNo: '10002',
                userNo: "",
                userName: ""
            }
        }
        return new Promise((resolve, reject) => {
             axios.post(api, params).then(response => {
                if(response.data.status != 'SUCCESS'){
                    Message({
                        showClose: true,
                        message: response.data.resMsg,
                        type: 'error',
                        center: true
                    });
                    resolve(response.data.resMsg)
                }else{
                    resolve(response.data);
                }
            })
        })
    }
}