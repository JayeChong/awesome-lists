( 
function(){
    // code here
    /**
     *  API http://api.jisuapi.com/weather/query?appkey=b545980f676142dd&city=广州
     *  不仅可以通过城市名查询天气，也可以根据城市id，城市代号，地理经纬度，ip地址来查询。
     */
    
    app = {
        // 数据
        latitude: 0,
        longitude: 0,
        queryBaseGeolocation: "http://api.jisuapi.com/weather/query?appkey=b545980f676142dd&location=",
        queryBaseCityName: "http://api.jisuapi.com/weather/query?appkey=b545980f676142dd&city=",
        defaultCity: "北京",
        todayWeatherInfo: {},
        CityWeatherInfos: {},
        fackdata: fackData().result,

        // DOM值
        timer : $("#time"),
        cityInputer: $("#cityInputer"),
        topRLocation: $("#topRLocation"),
        todayTemp: $("#todayTemp"),
        todayDate: $("#todayDate"),
        todayWeather: $("#todayWeather"),
        todayWeatherInfo: $("#todayWeatherInfo"),

        nextReportDate: $(".next .next-date"),          //[]
        nextReportWeather: $(".next .next-weather"),    //[]
        nextReportTemp: $(".next .next-temp"),          //[]


        // 状态
        loading: true,
        timeID: null,
    };
    // UI数据（DOM结构）



    /******************************************************************************************/
    //
    // 数据获取操作
    //
    /******************************************************************************************/

    // getGolocationPromise
    app.geolocationWrapper = new Promise(function(resolve , reject){
        var options={
                   enableHighAccuracy:true, 
                   maximumAge:1000
        };
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                function(position){resolve(position);},
                function(error){
                    switch(error.code){
                        case 1:{
                            alert("位置服务被拒绝");
                            reject(1);
                        }
                        break;

                        case 2:{
                            alert("暂时获取不到位置信息");
                            reject(2);
                        }
                        break;

                        case 3:{
                            alert("获取信息超时");
                            reject(3);
                        }
                        break;

                        case 4:{
                            alert("未知错误");
                            reject(4);
                        }
                        break;
                    }

                },options);
        }else {
            aler("你的浏览器不支持定位。");
            reject(0);
        }
    });

    // getWeatherInfoPromise
    app.getWeatherInfo = function(url){
        return new Promise(function(resolve,rejiect){
            $.ajax({
                url:url,
                dataType:'jsonp',
                processData: false, 
                type:'get',
                success:function(data){
                    if(data.msg == "ok"||data.status == "0"){
                        resolve(data.result);
                    }else{
                        alert(data.msg);
                        reject(data.msg);
                    }
                },
                error:function(XMLHttpRequest, textStatus, errorThrown) {
                    console.log(XMLHttpRequest.status);
                    console.log(XMLHttpRequest.readyState);
                    console.log(textStatus);
                    reject(textStatus);
            }});
        });
    };

    app.getWeatherInfoByLocation= function(position){
        var url = app.queryBaseGeolocation+position.coords.latitude+","+position.coords.longitude;
        console.log(url);
        // app.getWeatherInfo(url)
        // .then(
        //     function(data){
        //         if(app.todayWeatherInfo.updatetime != data.updatetime)
        //             app.todayWeatherInfo = data;
        //         app.updateUI();
        //     },
        //     function(error){
        //         console.log(error);
        //     }
        // ).catch(function(error){
        //     console.log(error);
        // });
    };

    app.getWeatherInfoByCityName = function(Cname){
        var url = app.queryBaseCityName+Cname;
        // app.getWeatherInfo(url)
        // .then(
        //     function(data){
        //         app.todayWeatherInfo = data;
        //         app.updateUI();
        //     },
        //     function(error){
        //         console.log(error);
        //     }
        // ).catch(function(error){
        //     console.log(error);
        // });
    };

    /******************************************************************************************/
    //
    // UI更新操作
    //
    /******************************************************************************************/

    // UI更新
    app.updateUI = function(){
        console.log("Time to updata UI!");
        console.log(app.todayWeatherInfo);
        app.loading = false;
    };

     /******************************************************************************************/
    //
    // 时间显示
    //
    /******************************************************************************************/

    app.coutTime = function(){
        app.timeID = setInterval(function(){
            var date = new Date();
            var hour = date.getHours();
            var min = date.getMinutes();
            var sec = date.getSeconds();
            var strTime = (hour > 12) ? ((hour-12)+" : "+(min<10?"0"+min:min)+" pm"):(hour+" : "+(min<10?"0"+min:min)+" am");
            app.timer.text(strTime);
        },1000);
    }


     /******************************************************************************************/
    //
    // 主程序开始
    //
    /******************************************************************************************/

    app.coutTime();

    app.geolocationWrapper
    .then(
        app.getWeatherInfoByLocation,function(error){
            console.log(error);
            app.getWeatherInfoByCityName(app.defaultCity);
        })
    .catch(function(error){
        console.log("Promise 发生了错误！");
        console.log(error);
    });

    console.log(app.fackdata);

}
)();