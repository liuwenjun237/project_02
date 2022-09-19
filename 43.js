$(function () {
  function getData() {
    $.get("http://api-hookuprent-web.itheima.net/area/hot", function (res) {
      if (res.status != 200) {
        return alert("获取数据失败");
      }
      console.log(res.body);
      var htmlstr = template("citys", res);
      $(".table").append(htmlstr);
    });
  }
  getData();
});
