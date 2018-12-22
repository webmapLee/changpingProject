var rootPath;
//页面的访问地址截断，获得页面起始根路径
if (window.location.href.indexOf("?") != -1) {
	rootPath = window.location.href.substr(0, window.location.href.indexOf("?"));
	rootPath = rootPath.substr(0, rootPath.lastIndexOf("/") + 1);
} else {
	rootPath = window.location.href.substr(0, window.location.href.lastIndexOf("/") + 1);
}
if (window.location.href.lastIndexOf("?token=") != -1) {
	window.location.href = rootPath;
}

//mapconfig配置信息
(function(window) {
	//gis通用方法入口
	mugis = {};

	mapAPI = {};

	//mapconfig配置信息
	mapconfig = {
		//页面起始根路径
		rootPath: rootPath,

		//跨域文件
		proxyUrl: rootPath + "proxy/proxy.ashx",

		//图片资源
		defaultImageUrl: rootPath + "IMG",

		/*地图服务地址(矢量、栅格DEM，影像)*/
		vectorMapServerUrl: "http://39.106.156.190:6080/arcgis/rest/services/cp_parks/MapServer",
		rasterMapServerUrl: "http://map.geoq.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer",
		imgMapServerUrl: "http://map.geoq.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer",
		riverMapUrl: "http://39.106.156.190:6080/arcgis/rest/services/RiverMap/MapServer",
		ajaxUrl: "http://47.94.164.226:8092/project/getProjectCount",
		ajaxUrl_path: "http://47.94.164.226:8092/prospectingPathGps/getProspectingPathGpsList",
		ajaxUrl_project: "http://47.94.164.226:8092/prospectingCheckpoint/getCheckpointById",
		ajaxUrl_project2:"http://47.94.164.226:8092/project/getProjectListInfo",
		startIcon: "",
		endIcon: "",
		jiaoyinIcon: "",
		// projectIcon: "http://127.0.0.1:8848/GISPage/img/points/point.png",
		projectIcon: "http://39.106.156.190/gis/img/points/point.png",

		//几何服务地址
		geometryServer: "http://sampleserver6.arcgisonline.com/arcgis/rest/services/Utilities/Geometry/GeometryServer",
		//打印服务
		mapPrintServerUrl: "http://sampleserver6.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task",

		//地图范围
		extent: {
			"xmin": 488485.1466894255,
			"ymin": 335718.66197623423,
			"xmax": 492472.51385740034,
			"ymax": 338242.192606966
		},

		//地图加载
		baseMap: {
			//地图加载的默认参数layer,zoom level,center...
		},
	
		infoContentConfig : [
			{
				fieldLabel:"项目名称",
				fieldName:"projectName"
			},
			{
				fieldLabel:"所属省",
				fieldName:"projectProvinceName"
			},
			{
				fieldLabel:"所属市",
				fieldName:"projectCityName"
			},
			{
				fieldLabel:"项目描述",
				fieldName:"projectDescribe"
			},
			{
				fieldLabel:"项目启动日期",
				fieldName:"projectRunStart"
			},
			{
				fieldLabel:"项目结束日期",
				fieldName:"projectRunEnd"
			},
			{
				fieldLabel:"项目类型",
				fieldName:"projectTypeName"
			}
		]

	};

	//map地图对象信息
	mapinfo = {
		map: null,
		initExtent: null,
		panStart: null,
		panEnd: null,

	};

	Array.prototype.remove = function(val) {
		var index = this.indexOf(val);
		if (index > -1) {
			this.splice(index, 1);
		}
	};

})(window);
