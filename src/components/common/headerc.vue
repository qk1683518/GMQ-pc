<template>
        <div id="Header">
            <div class="header clear">
                <div class="logo">
                    <a href="#"><img src="../../../static/imgs/logo.png"></a>
                </div>
                <div class="nav">
                    <ul class="clear">
                        <li>
                            <a href="#/index" class="router-link-exact-active router-link-active">
                                <span>C2C交易</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>币币交易</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>合约交易</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="core">
                    <ul class="clear">
                        <li>
                            <a href="#/newassets" class="">
                                <span>资产</span>
                                <i class="iconfont icon-xialasanjiao1"></i>
                            </a>
                        </li>
                        <li class="order-font">
                            <a href="javascript:void(0)">
                                <span>订单</span>
                                <i class="iconfont icon-xialasanjiao1"></i>
                                <div class="order-ul">
                                    <ul>
                                        <li>
                                            <a href="#/order" class="">普通订单</a>
                                        </li>
                                    </ul>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#/advert" class="">
                                <span>广告</span>
                                <i class="iconfont icon-xialasanjiao1"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#/personal" class="clear">
                                <i class="iconfont icon-geren5 portrait"></i>
                                <span>个人中心</span>
                            </a>
                        </li>
                        <!---->
                        <li>
                            <a href="#" class="register">退出</a>
                        </li>
                        <li class="font">
                            <a href="#">
                                <span>简体中文</span>
                                <i class="iconfont icon-xialasanjiao1"></i>
                                <div class="font-ul">
                                    <ul>
                                        <li>简体中文</li>
                                        <li>繁體中文</li>
                                        <li>English</li>
                                    </ul>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script type="">
export default {
    name: "headerc",
    data() {
        return {};
    },
    components: {}
};
</script>

<style scoped lang="less">
#Header{
    height: 118px;
    background: #201a40;
    .header{
        width: 1200px;
        margin: 0 auto;
        padding-top: 28px;
        .logo{
            float: left;
            width: 182px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    // 交易
    .nav{
        float: left;
        height: 60px;
        line-height: 60px;
        padding-left: 40px;
        font-size: 15px;
        li{
            float: left;
            padding: 0 30px;
            > a{
                color: #fff;
            }
        }
    }
    // 订单资产啥玩意的
    .core{
        float: right;
        height: 60px;
        line-height: 60px;
        > ul > li{
            float: left;
            padding: 0 12px;
            font-size: 13px;
            cursor: pointer;
            > a{
                color: #fff;
                display: inline-block;
                position: relative;
                i{
                    font-size: 12px;
                }
            }
        }
        .order-ul{
            left: -15px;
            overflow: hidden;
        }

        .font .font-ul,
        .order-ul{
            position: absolute;
            background: #fff;
            box-shadow: 0 3px 9px 0 rgba(69, 112, 128, 0.14);
            top: 50px;
            width: 70px;
            border-radius: 4px;
            display: none;
        }
        .order-ul > ul > li{
            text-align: center;
            line-height: 34px;
            a{
                color: #404040;
            }
            .portrait{
                font-size: 20px;
                float: left;
                padding-right: 5px;
            }
            
        }
        .register{
                background: #484362;
                display: inline-block;
                padding: 0 20px;
                height: 25px;
                line-height: 23px;
                margin-left: 5px;
                border-radius: 20px;
            }
    }
}
</style>
