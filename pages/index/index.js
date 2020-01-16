//index.js

Component({

    /**
     * 页面的初始数据
     */
    data: {
        index:0
    },

    methods: {

        onLoad: function(){

        },
        onShow: function(){
            this.setData({
                index:0
            })
        },
        pageChange:function(e){
            let index=e.detail.current;
            let title='';
            if(index==0){
                title='班小二习惯打卡';
            }else if(index==1){
                title='班小二习惯打卡';
            }else if(index==2){
                title='班小二班级打卡习惯养成';
            }
            wx.setNavigationBarTitle({
              title: title
            });
            this.setData({
                index:index
            })
        },

        goBxe:function(){
            wx.navigateToMiniProgram({
                appId:"wx75d76636270457e2"
            });
        }

    }
});
