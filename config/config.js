const BASE_CONFIG = {
	backServer: 'http://127.0.0.1:8092'
}

const BASE_CONFIG_BACK_URL = {
    "login": {"url": "/WxLogin/Wx"}, //登录
	"queryNoteList": {"url": "/Note/selectnote"} //查询notes列表
	
}

module.exports = {
	BASE_CONFIG,
	BASE_CONFIG_BACK_URL
}
