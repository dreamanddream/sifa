$(function () {
    new Vue({
        el: '#fd-app',
        data: {
            anliList:[],
            libList:[]
        },
        methods: {
            // 获取数据
            init:function () {
                var _this = this;
                $.ajax({
                    type: "get",
                    url:"./json/list.json",
                    data:"",
                    dataType:"json",
                    success:function (res) {
                        if(res.success){
                            console.log(res.data.anliList);
                            _this.anliList = res.data.anliList;
                            _this.libList = res.data.libList;
                            console.log(res.data.libList)
                        }

                    },
                    error:function (res) {
                        console.log(res.data.message);
                    }
                })
            }
        },
        mounted:function () {
            this.$nextTick(function () {
                this.init();
            })
        }
    })
})