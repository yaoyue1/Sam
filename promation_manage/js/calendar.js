$(function(){
	//日历	
	var date;
	function pickedFunc()
	{
		date = (new Date($(".first-time").val())).getTime();
		return date;
	}
	$(".continue-days a").click(function(){
		var txt = parseInt($(this).find("em").text());
		var addTime = txt*24*60*60*1000;
		if($(".first-time").val()==''){
			alert("请选择开始时间");
			return false;
		}
		var lastTime =date+addTime;
		var format = function(time, format){
			var t = new Date(time);
			var tf = function(i){return (i < 10 ? '0' : '') + i};
			return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
				switch(a){
					case 'yyyy':
					return tf(t.getFullYear());
					break;
					case 'MM':
					return tf(t.getMonth() + 1);
					break;
					case 'mm':
					return tf(t.getMinutes());
					break;
					case 'dd':
					return tf(t.getDate());
					break;
					case 'HH':
					return tf(t.getHours());
					break;
					case 'ss':
					return tf(t.getSeconds());
					break;
				}
			})
		}
		$(".last-time").val(format(lastTime, 'yyyy-MM-dd HH:mm:ss'));
	});	
})