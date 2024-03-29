/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
let baseUrl = '//localhost:8080/em';
let routerMode = 'hash';
let baseImgPath = '//elm.cangdu.org/img/';

/*if (process.env.NODE_ENV == 'development') {
	baseUrl = '';
    baseImgPath = '/img/';
}else{
	// baseUrl = '//elm.cangdu.org';
    baseUrl = '//localhost:8080'
    baseImgPath = '//elm.cangdu.org/img/';
}*/

export {
	baseUrl,
	routerMode,
	baseImgPath
}
