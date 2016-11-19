require.config({
　　paths: {
      jquery:'YJ/jquery',
　　}
});
requirejs(['jquery'],function   (commonIndex,Ajax) {

	(function() {
		var MO = MO || {};

		MO.checkTime = function (t) {
			if(t < 10){
				t = "0" + t;
			}
			return t;
		}
		MO.time = function time() {
			var oTime = document.getElementById('showtime'),
				now = new Date(),
				year = now.getFullYear(),
				month = now.getMonth() + 1,
				day = now.getDate(),
				weekday = now.getDay(),
				hour = now.getHours(),
				minute = now.getMinutes(),
				timer = null,
				oWeekday = [
					"星期天",
					"星期一",
					"星期二",
					"星期三",
					"星期四",
					"星期五",
					"星期六",
				];

			month = MO.checkTime(month);
			day = MO.checkTime(day);
			hour = MO.checkTime(hour);
			minute = MO.checkTime(minute);

			oTime.innerHTML = year+" 年 "+month+" 月 "+day+" 日"+oWeekday[weekday]+" "+hour+":"+minute;
		}
		MO.time();
	})();
});