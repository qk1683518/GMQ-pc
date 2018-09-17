<template>
    <div class="">
        <div id="Index">
            <div class="tab clearfix">
                <div class="tab-but">
                    <span class="tab-active">我要购买</span>
                    <span class="">我要出售</span>
                </div>
                <div class="tab-right">
                    <a href="javascript:;">发布广告</a>
                    <span>
                        <i class="iconfont icon-xiaoxitongzhi"></i>
                        <em>4</em>
                    </span>
                </div>
            </div>
            <div class="index">
                <div class="index-conts clearfix" style="transform: translateX(0px);">
                    <div class="index-tab-list">
                        <div class="price">
                            <div class="price-cont clearfix">
                                <span>我要购买</span>
                                <ul class="clearfix">
                                    <li>BTC(参考价:
                                        <em class="index-red">44586.44</em>)
                                    </li>
                                    <li>ETH(参考价:
                                        <em class="index-green">1510.37</em>)
                                    </li>
                                    <li>USDT(参考价:
                                        <em class="index-red">6.87</em>)
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="index-table">
                            <table border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <th>用户昵称</th>
                                    <th>
                                        <span>成交单数</span>
                                    </th>
                                    <th>数量</th>
                                    <th class="tab-th">
                                        <span>支付宝</span>
                                        <i class="iconfont icon-xialasanjiao"></i>
                                        <div class="tab-list">
                                            <ul>
                                                <li>全部</li>
                                                <li>银行卡</li>
                                                <li>支付宝</li>
                                                <li>微信</li>
                                            </ul>
                                        </div>
                                    </th>
                                    <th>币种</th>
                                    <th>限额</th>
                                    <th>
                                        <span>单价</span>
                                    </th>
                                    <th class="tab-th">
                                        <span>货币类型</span>
                                        <i class="iconfont icon-xialasanjiao"></i>
                                        <div class="tab-list">
                                            <ul>
                                                <li>全部</li>
                                                <li>CNY</li>
                                            </ul>
                                        </div>
                                    </th>
                                    <th>操作</th>
                                </tr>
                                <tr>
                                    <td>
                                        <em class="td-portrait">招
                                            <i class="not-online"></i>
                                        </em>
                                        <span class="td-name">招财猫
                                            <b>
                                                <time>大约2天前离线</time>
                                            </b>
                                        </span>
                                    </td>
                                    <td>
                                        <span>98</span>
                                    </td>
                                    <td>
                                        <span>6693.348465</span>
                                    </td>
                                    <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVBJREFUeNpi/P//PwM9ABMDnQALG6cAn1304okictYWP7584AOKMQIxRd5kZGQCeeD3n18fjt89uyTv2qGelyzWYYtXadr6ur999IOBW4CPOs4HRQcTMwMXr4IsAwOrJFDEjkVaw8f91f3PQPY/Boa/P6kaXB9/MDDwiqhag4Pu//+/QMtZgN5lpGk6YPn57e1BIM1Dabzgii4g/srAIM7A8ubJaQfapzkfBpaPzy8x0MUiGS3/vUAWN22DjsGZhV9c24kuGfb3j4+gtM1LQzuA5vPTrwgatWgIWMTIyMzEQLPK7z+symBgYmHj4v5PI4/9/8cIrPC4ucD56PXDY6dUzW3M3j75Ac7HjFTxB8iS/wxC0pwMT2/cuMfAoMHAyMknLe0Qt2wmr7C24Z9fP5nBKigueBgZWdg4/n37dPfGoaUJeR9fXrvCSK/GCUCAAQBma2iT/lF+HgAAAABJRU5ErkJggg=="> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAXCAYAAADk3wSdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABRNJREFUeNqsVWtoFFcU/u7M7OxOsrvZTTaxJppERKVSBGvwFVHwQUBtUWlLbEtr/vVBVUr7yz7+FKkIFQq2aqkPKigVmj60WptgxBIpLT7aIjE+0jw2yea52ec87r3TM7vRQvtLcODs7tw9fPOdc77vDHNdF4/70ryPj2+0fHpzvO2FkBESzFVcl7lwYUHSAxlToVAac1XKpHMG+v0vgGSSpcxJtbHq2a93PnV4p3emxpon9p0dOPJ2LDwzyGGHkiIeTvOhsC1YGDDCpkiH0+5A2FKnwooaCLtQw4JxClkIyRDSdDX462jbMimdksUV69rY9va6PAuIAOc52MJEnX8V6o0mVJcsg9+tgOlMoN/8DX38R8SdDujMQIlaQ1Xwh2wZY8jLJHRRZp5Yc9vQDDeSSOJeXdCtxjMVB7CsdiNmRoC+BJDJAYofaKhfifjILlwbasV1sQdp9KKU1cJ1RQHUa5bPVwrV9CW8e8VmlkxnM2gqP4qmORvRfX8Cx1vbMWVbsFSBSe7g9NmLuNMzhCXhrViltUKzK5HnYxDCpZDFcKTHWRZAU2YfFvlfwvxQI6wQ8MPZY3hr23rcvdeFubUqxhIJvPdqE36+cAQWVRC0FqDS3o6kMwoBG554pJQPowDqSgXzyppBQ8XAiMTixWvQ8u5eRKI16B+W0PVS7Nh9AHXz1+HP+zmM2y6q3PXwO0EMJHsxYQ5CYQoBCriyKAstoEThV6oxlQfSKQtPLmrAytUNGE4I9PbTIQ1mzfO7Ia0s5ldZqK9UYGhr8aJ1C7eSl/BV937cnfwLsyM1BDqtU5tnYdp5cDrgXGBkPEfB4DgClkPsxzKYOyOFzUvKEDJKMT0ZVIRmY07sFayYtQUfXGnGjfR51GqhYvk5ZxJ9mQ4IUkjWJLY5jmQ6j8mMg96EiYBiYWuDB+hH2+Vf0HX7DslJIh4fxLnzP6Gc5PzR8u9R4dZg0o4XQQNqDL8n96JnqhuKCGIql6OQSGUERR4rFhgI+PweOZw4+iWuXr0KRVHQ09ODzz87iK6+OCIhDZvq9iBjpovl+2QI49ooOiZasLzkGDQ2j9rAkDNTKA0oqIuVUBqnMwVfHD4ERVXhDXnF8kacOt2KNOcYGgVqg0tRosSKTD2NlSJCjunEGP8DPgIcT90kcB2KEwXPB7y0wmQDAT90nwbTkshYgPCpSOdFoXXJ3Djy9jRTQY/1LBpRZyBvTuGKtQMJfIOoWIqRJMeM3ma8Pus1cMclyzqwKJ++YBKQRYS4rcFHeuyMn4ItrQegpC+ukYh9uOa8AaHb8Gs+JHg70uXA0e7LaKzdgEWz52JwXEGWyvXM46nDcVSEfDra7l9AR+I4qgMVxfIl+VfSPuNuGiqV40cYzA5Bl1FUahUgUnjn8mqcuf4dNKmiTKGF4howWBBPGAZuDnXhUPdm6NQlVQaKTD0n0E5EcVnrhSmTowt/Cu4iVhLFcG4Q73duwdqal7GwnNykRDCU+Zu0nYbmRmH4aeuoOWrjdPnckUxRXZpoEe6/lzfpmB4G1010jJ7EpeGToIJAu6RgmGojSgu1ClnRD4c7rACal/mqbM5EVNeK3mX/fz0U3edDzE85dOcFI0UwqMi7k7SlskiRCoKKU1UA3bKw5cKH7Qe31ZdnaEAE8IivLIVITDg2BqaA/Rt2fltY2tRL9knnrjMXe849bejUGqY9EqiQnHYEw6Z52669uXTfcw9AH/vb9B8BBgDNhYc5emtkaQAAAABJRU5ErkJggg=="> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9ZJREFUeNq0VV+IVFUY/51z5/6ZP3fG2dyNbcNlV7FmIisxDSmKKCx7EMmEgiBIH3wwoYc060mIFgp86K0wgoKoNDNSegjsISJasCRwDcRcbczVbf7cGXfm3rn3nL5zz53d0d2goAbunHPP+c7v/L7v+33fZVJK/Ne/VDJWjlVa7v7JLs5cpzeL/XOErsRtFrBvjYndq7NNgI0wxfTkzJx89IgHpB2gQIBRH3uFH9GfoDVOc4Oefuc47bVprPqYeMzB3nKexaDlE1Vvaoa7yNOmWIJNGGlAxjXIzRFTF7cZbEc0O88U88oUU1Vohj1AyfQjFAuJd+7P4PzmPF4aJ5oNsbAvkzCpSzKAH7K+mNpGn8s0RqGeKtAgxCPLcxhzTdyRJT/bPgGYCywNOsu5Dk/qhkQlgAFwq8twaL0duxkRKT9KYcjWLmwatnF4k4StSMThFXj9rMCpGTrvLM7+/FtNcLw8JXC1HUIQlugIfP14GkNp4PhlH/t/6EAWzJjIStfCRZ+8MeWSkkpcIbKegEkAb5QMBGQrAo77itrsiRET3pouWkm+PrgUolHncTz7k5dalGkmUfENfFVNwUlxZE2Gp3/s0AUCgxS/4UIOB8t2bHrsag1/CLGQsEWg6mpPBVsgyxjO1bqYvh4hoEcpQElG6bFQ5gRq4Uo7wplZWk/zv6kote5FuGeIbn84g9Gck4hPxsL9pRbi/d8ifHNhDgfWp+O9iV9JBar6BrBItxqU9pdlGSafcvFTNcTuk00ixrC2yLGVavCBQRMHi+TyWg0YRBG+nfF1UdRpyWG6tHkvglRR7FDVe3Oj5ZZdji1fzpEB1wZKu2ouQ+wscby74ZZ5Ni3S7+HfO/hsGvi50cXlKl0geFPuGMhrphTsDUXgaIVEHxFIkSfVpeJMk5bEgGPFpqfrbdiS405i/sJ4jh7EzL+odPHR+eBGpnvWWe6Bko3RIw3Um0niEGHl8hQm1mWw7XYH380GeOh4g04xvLjKxJ6Sg7uLdn841cm8Bv207qEl3E+oy2xfYWLyigQdxYglUBqwY8ZvUU98ZTKIAaG03yR3swJPDjt4fiyFZ8fi5PaBflyjvsdc8gO7yg6eGzexOmvgT2oQn18McIIq6ftpCo1j6HIUiThUi2iJWNsPjlrYPMyar96V06BDR6vetTnDnWfAen2TJqHSLo2kjnmV3dz2lF2NNli3KXcO6tb39r22i1k/7uJYRks5rkWdIeMC14BYArD3UyrxSSEKp5co8qfy2mnPfW9K4pq62vgXHyTy3iWMLSs4PtzoUkz5CPs/Pnx/CTAAuASESDiOu3EAAAAASUVORK5CYII="></td>
                                    <td>
                                        <span class="td-currency  USDT">USDT</span>
                                    </td>
                                    <td>500.00-47188.11CNY
                                    </td>
                                    <td>7.05</td>
                                    <td>CNY</td>
                                    <td>
                                        <!---->
                                        <!----><input type="button" value="购买">
                                        <!---->
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <!-- 翻页 -->
                        <div id="page" style="">
                            <ul class="pagination">
                                <li class="disabled">
                                    <a href="javascript:;" class="iconfont icon-arrow-copy"></a>
                                </li>
                                <li class="active">
                                    <a href="javascript:;"> 1 </a>
                                </li>
                                <li class="">
                                    <a href="javascript:;"> 2 </a>
                                </li>
                                <li class="">
                                    <a href="javascript:;" class="iconfont icon-arrow"></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="index-tab-list">
                        <div class="quick-list clearfix quick-cen"> </div>
                    </div>
                </div>
            </div>
            <!---->
            <!---->
        </div>

        <!-- 下单弹出页面 -->
        <div id="IndexPop">
            <div class="index-pop">
                <div class="pop-cont">
                    <div class="pop-head">
                        <span>购买 USDT</span>
                        <em>请在45秒内确定，确保以当前价格下单</em>
                        <i class="iconfont icon-iconfontguanbi"></i>
                    </div>
                    <div class="pop-content">
                        <ul>
                            <li>
                                <span>委托人: </span>
                                <em>招财猫</em>
                            </li>
                            <li>
                                <span>可支付方式：</span> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9ZJREFUeNq0VV+IVFUY/51z5/6ZP3fG2dyNbcNlV7FmIisxDSmKKCx7EMmEgiBIH3wwoYc060mIFgp86K0wgoKoNDNSegjsISJasCRwDcRcbczVbf7cGXfm3rn3nL5zz53d0d2goAbunHPP+c7v/L7v+33fZVJK/Ne/VDJWjlVa7v7JLs5cpzeL/XOErsRtFrBvjYndq7NNgI0wxfTkzJx89IgHpB2gQIBRH3uFH9GfoDVOc4Oefuc47bVprPqYeMzB3nKexaDlE1Vvaoa7yNOmWIJNGGlAxjXIzRFTF7cZbEc0O88U88oUU1Vohj1AyfQjFAuJd+7P4PzmPF4aJ5oNsbAvkzCpSzKAH7K+mNpGn8s0RqGeKtAgxCPLcxhzTdyRJT/bPgGYCywNOsu5Dk/qhkQlgAFwq8twaL0duxkRKT9KYcjWLmwatnF4k4StSMThFXj9rMCpGTrvLM7+/FtNcLw8JXC1HUIQlugIfP14GkNp4PhlH/t/6EAWzJjIStfCRZ+8MeWSkkpcIbKegEkAb5QMBGQrAo77itrsiRET3pouWkm+PrgUolHncTz7k5dalGkmUfENfFVNwUlxZE2Gp3/s0AUCgxS/4UIOB8t2bHrsag1/CLGQsEWg6mpPBVsgyxjO1bqYvh4hoEcpQElG6bFQ5gRq4Uo7wplZWk/zv6kote5FuGeIbn84g9Gck4hPxsL9pRbi/d8ifHNhDgfWp+O9iV9JBar6BrBItxqU9pdlGSafcvFTNcTuk00ixrC2yLGVavCBQRMHi+TyWg0YRBG+nfF1UdRpyWG6tHkvglRR7FDVe3Oj5ZZdji1fzpEB1wZKu2ouQ+wscby74ZZ5Ni3S7+HfO/hsGvi50cXlKl0geFPuGMhrphTsDUXgaIVEHxFIkSfVpeJMk5bEgGPFpqfrbdiS405i/sJ4jh7EzL+odPHR+eBGpnvWWe6Bko3RIw3Um0niEGHl8hQm1mWw7XYH380GeOh4g04xvLjKxJ6Sg7uLdn841cm8Bv207qEl3E+oy2xfYWLyigQdxYglUBqwY8ZvUU98ZTKIAaG03yR3swJPDjt4fiyFZ8fi5PaBflyjvsdc8gO7yg6eGzexOmvgT2oQn18McIIq6ftpCo1j6HIUiThUi2iJWNsPjlrYPMyar96V06BDR6vetTnDnWfAen2TJqHSLo2kjnmV3dz2lF2NNli3KXcO6tb39r22i1k/7uJYRks5rkWdIeMC14BYArD3UyrxSSEKp5co8qfy2mnPfW9K4pq62vgXHyTy3iWMLSs4PtzoUkz5CPs/Pnx/CTAAuASESDiOu3EAAAAASUVORK5CYII="> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAXCAYAAADk3wSdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABRNJREFUeNqsVWtoFFcU/u7M7OxOsrvZTTaxJppERKVSBGvwFVHwQUBtUWlLbEtr/vVBVUr7yz7+FKkIFQq2aqkPKigVmj60WptgxBIpLT7aIjE+0jw2yea52ec87r3TM7vRQvtLcODs7tw9fPOdc77vDHNdF4/70ryPj2+0fHpzvO2FkBESzFVcl7lwYUHSAxlToVAac1XKpHMG+v0vgGSSpcxJtbHq2a93PnV4p3emxpon9p0dOPJ2LDwzyGGHkiIeTvOhsC1YGDDCpkiH0+5A2FKnwooaCLtQw4JxClkIyRDSdDX462jbMimdksUV69rY9va6PAuIAOc52MJEnX8V6o0mVJcsg9+tgOlMoN/8DX38R8SdDujMQIlaQ1Xwh2wZY8jLJHRRZp5Yc9vQDDeSSOJeXdCtxjMVB7CsdiNmRoC+BJDJAYofaKhfifjILlwbasV1sQdp9KKU1cJ1RQHUa5bPVwrV9CW8e8VmlkxnM2gqP4qmORvRfX8Cx1vbMWVbsFSBSe7g9NmLuNMzhCXhrViltUKzK5HnYxDCpZDFcKTHWRZAU2YfFvlfwvxQI6wQ8MPZY3hr23rcvdeFubUqxhIJvPdqE36+cAQWVRC0FqDS3o6kMwoBG554pJQPowDqSgXzyppBQ8XAiMTixWvQ8u5eRKI16B+W0PVS7Nh9AHXz1+HP+zmM2y6q3PXwO0EMJHsxYQ5CYQoBCriyKAstoEThV6oxlQfSKQtPLmrAytUNGE4I9PbTIQ1mzfO7Ia0s5ldZqK9UYGhr8aJ1C7eSl/BV937cnfwLsyM1BDqtU5tnYdp5cDrgXGBkPEfB4DgClkPsxzKYOyOFzUvKEDJKMT0ZVIRmY07sFayYtQUfXGnGjfR51GqhYvk5ZxJ9mQ4IUkjWJLY5jmQ6j8mMg96EiYBiYWuDB+hH2+Vf0HX7DslJIh4fxLnzP6Gc5PzR8u9R4dZg0o4XQQNqDL8n96JnqhuKCGIql6OQSGUERR4rFhgI+PweOZw4+iWuXr0KRVHQ09ODzz87iK6+OCIhDZvq9iBjpovl+2QI49ooOiZasLzkGDQ2j9rAkDNTKA0oqIuVUBqnMwVfHD4ERVXhDXnF8kacOt2KNOcYGgVqg0tRosSKTD2NlSJCjunEGP8DPgIcT90kcB2KEwXPB7y0wmQDAT90nwbTkshYgPCpSOdFoXXJ3Djy9jRTQY/1LBpRZyBvTuGKtQMJfIOoWIqRJMeM3ma8Pus1cMclyzqwKJ++YBKQRYS4rcFHeuyMn4ItrQegpC+ukYh9uOa8AaHb8Gs+JHg70uXA0e7LaKzdgEWz52JwXEGWyvXM46nDcVSEfDra7l9AR+I4qgMVxfIl+VfSPuNuGiqV40cYzA5Bl1FUahUgUnjn8mqcuf4dNKmiTKGF4howWBBPGAZuDnXhUPdm6NQlVQaKTD0n0E5EcVnrhSmTowt/Cu4iVhLFcG4Q73duwdqal7GwnNykRDCU+Zu0nYbmRmH4aeuoOWrjdPnckUxRXZpoEe6/lzfpmB4G1010jJ7EpeGToIJAu6RgmGojSgu1ClnRD4c7rACal/mqbM5EVNeK3mX/fz0U3edDzE85dOcFI0UwqMi7k7SlskiRCoKKU1UA3bKw5cKH7Qe31ZdnaEAE8IivLIVITDg2BqaA/Rt2fltY2tRL9knnrjMXe849bejUGqY9EqiQnHYEw6Z52669uXTfcw9AH/vb9B8BBgDNhYc5emtkaQAAAABJRU5ErkJggg=="> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVBJREFUeNpi/P//PwM9ABMDnQALG6cAn1304okictYWP7584AOKMQIxRd5kZGQCeeD3n18fjt89uyTv2qGelyzWYYtXadr6ur999IOBW4CPOs4HRQcTMwMXr4IsAwOrJFDEjkVaw8f91f3PQPY/Boa/P6kaXB9/MDDwiqhag4Pu//+/QMtZgN5lpGk6YPn57e1BIM1Dabzgii4g/srAIM7A8ubJaQfapzkfBpaPzy8x0MUiGS3/vUAWN22DjsGZhV9c24kuGfb3j4+gtM1LQzuA5vPTrwgatWgIWMTIyMzEQLPK7z+symBgYmHj4v5PI4/9/8cIrPC4ucD56PXDY6dUzW3M3j75Ac7HjFTxB8iS/wxC0pwMT2/cuMfAoMHAyMknLe0Qt2wmr7C24Z9fP5nBKigueBgZWdg4/n37dPfGoaUJeR9fXrvCSK/GCUCAAQBma2iT/lF+HgAAAABJRU5ErkJggg=="></li>
                            <li>
                                <div class="pop-back">
                                    <span>限额（CNY）</span>
                                    <em>500.00 - 47188.11</em>
                                </div>
                            </li>
                            <li>
                                <div class="pop-back">
                                    <span>价格（CNY）</span>
                                    <em>7.05</em>
                                </div>
                            </li>
                            <li>
                                <span>数量（USDT）</span> <input type="number" step="any" min="0" placeholder="请输入数量"></li>
                            <li>
                                <span>金额（CNY）</span> <input type="number" step="any" min="0" placeholder="请输入金额"></li>
                            <!---->
                        </ul>
                        <div class="pop-but">
                            <button>(
                                <i>40</i>S)自动取消</button>
                            <button class="confirm">确认</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 未读消息 -->
        <div class="news-prpmpt news-trans">
            <div class="news-header">
                <span>全部系统通知</span>
                <i class="iconfont icon-iconfontguanbi"></i>
            </div>
            <div class="news-content">
                <ul>
                    <li>
                        <a>
                            <i class="news-act"></i>
                            <!---->
                            <span>您有一笔交易订单因为逾时未处理，由系统取消交易</span>
                            <time>2018-09-17 10:06</time>
                        </a>
                    </li>
                    <li>
                        <a>
                            <i class="news-act"></i>
                            <!---->
                            <span>您有一笔订单尚未标记付款完成，订单将在 5 分钟后过期自动取消</span>
                            <time>2018-09-17 09:56</time>
                        </a>
                    </li>
                </ul>
                <p class="nothings">暂无未读消息</p>
            </div>
            <div class="news-footer">
                <span>全部标记已读</span>
            </div>
        </div>
    </div>
</template>

<script type="">
export default {
    name: "c2c",
    data() {
        return {};
    },
    components: {}
};
</script>

<style scoped lang="less">
#Index {
    width: 1200px;
    margin: 0 auto;
    padding: 60px 0;
    // 我要购买出售
    .tab {
        height: 70px;
        border-bottom: 1px solid #c9c9c9;
        margin-bottom: 40px;
        .tab-but {
            padding-left: 30px;
            width: 50%;
            float: left;
            box-sizing: border-box;
            > span {
                width: 158px;
                height: 44px;
                border-radius: 4px;
                line-height: 44px;
                background: #fff;
                display: inline-block;
                cursor: pointer;
                border: 1px solid #e8e8e8;
                margin-right: 22px;
                text-align: center;
            }
            .tab-active {
                background: #4895ea !important;
                border: 1px solid #4895ea !important;
                color: #fff;
            }
            span[data-v-c425e676]:last-child {
                margin-right: 0;
            }
        }
        .tab-right {
            float: left;
            width: 50%;
            padding-right: 30px;
            box-sizing: border-box;
            text-align: right;
            > a {
                width: 100px;
                height: 44px;
                border-radius: 4px;
                line-height: 44px;
                display: inline-block;
                text-align: center;
                color: #fff;
                margin-right: 20px;
                font-size: 17px;
                background: #4895ea;
                vertical-align: bottom;
            }
            > span {
                width: 60px;
                height: 44px;
                border-radius: 4px;
                line-height: 44px;
                background: #4895ea;
                display: inline-block;
                text-align: center;
                color: #fff;
                cursor: pointer;
                position: relative;
                > i {
                    font-size: 22px;
                }
                > em {
                    position: absolute;
                    top: 5px;
                    right: 10px;
                    background: #ff263e;
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    line-height: 16px;
                    font-size: 12px;
                }
            }
        }
    }
    .index {
        width: 1200px;
        overflow: hidden;
        padding-top: 18px;
        .index-conts {
            width: 2400px;
            transition-duration: 0.2s;
            .index-tab-list {
                width: 50%;
                float: left;
                //行情
                .price {
                    border-top: 1px solid #c9c9c9;
                    height: 50px;
                    .price-cont {
                        margin-top: -15px;
                        > span {
                            width: 92px;
                            height: 28px;
                            border: 1px solid #8faed0;
                            display: inline-block;
                            text-align: center;
                            color: #fff;
                            background: #4895ea;
                            border-radius: 5px;
                            line-height: 28px;
                            font-size: 16px;
                            float: left;
                            margin: 0 60px 0 30px;
                        }
                        > ul {
                            float: left;
                            > li {
                                float: left;
                                height: 28px;
                                border: 1px solid #d9d9d9;
                                line-height: 28px;
                                background: #fff;
                                border-radius: 5px;
                                padding: 0 10px;
                                margin-right: 68px;
                                font-size: 13px;
                                cursor: pointer;
                                .index-green {
                                    color: #00cc5b;
                                }
                                .index-red {
                                    color: #ff0125;
                                }
                            }
                        }
                    }
                }
                // 交易列表
                .index-table {
                    background: #fff;
                    min-height: 480px;
                    > table {
                        width: 100%;
                        border-top: 1px solid #eee;
                        border-left: 1px solid #eee;
                        border-right: 1px solid #eee;
                        th {
                            font-size: 16px;
                            height: 66px;
                            line-height: 66px;
                            border-bottom: 1px solid #eee;
                            position: relative;
                            > i {
                                color: #69a4ed;
                            }
                            .tab-list {
                                box-shadow: 0 3px 9px 0 rgba(69, 112, 128, 0.14);
                                width: 110px;
                                position: absolute;
                                top: 55px;
                                left: 50%;
                                background: #fff;
                                border-radius: 4px;
                                margin-left: -55px;
                                overflow: hidden;
                                display: none;
                                z-index: 1;
                                li {
                                    font-size: 13px;
                                    cursor: pointer;
                                    line-height: 35px;
                                }
                            }
                        }
                        .tab-th:hover .tab-list {
                            display: block;
                        }
                        td {
                            height: 76px;
                            line-height: 76px;
                            text-align: center;
                            vertical-align: bottom;
                            border-bottom: 1px solid #eee;
                            position: relative;
                            .td-portrait {
                                width: 40px;
                                height: 40px;
                                color: #fff;
                                border-radius: 50%;
                                background: #4895ea;
                                display: inline-block;
                                line-height: 40px;
                                text-align: center;
                                margin-right: 5px;
                                font-size: 18px;
                                position: relative;
                                > i {
                                    position: absolute;
                                    bottom: 2px;
                                    right: 3px;
                                    display: inline-block;
                                    width: 8px;
                                    height: 8px;
                                    border-radius: 50%;
                                }
                                .on-line {
                                    background: #5dda07;
                                }
                            }
                            > span {
                                font-size: 14px;
                                padding: 0 5px;
                            }
                            .td-name {
                                font-size: 16px;
                                font-weight: bolder;
                                position: relative;
                                width: 140px;
                                display: inline-block;
                                text-align: left !important;
                            }
                            b {
                                position: absolute;
                                top: 15px;
                                left: 5px;
                                z-index: 1;
                                font-size: 12px;
                                color: #999;
                            }
                            > img {
                                width: 20px;
                                height: 20px;
                                margin: 0 5px;
                                vertical-align: -4px;
                            }
                            .USDT {
                                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFW…mTzi6Y/fZruEjEsNCOp4DNeJEwNyRNQtaVSJrrSuRk/AgwAGA9790PxulxAAAAAElFTkSuQmCC);
                                background-size: 20px 20px;
                            }
                            .BTC {
                                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAAAGXRFW…ciYajnrGTXVL9CoY/AlRZ67Uj/6pd+DQl6NomoCQACDAD1JeojwelYIAAAAABJRU5ErkJggg==);
                                background-size: 20px 20px;
                            }
                            .ETH {
                                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAAAGXRFW…tOFNl4FuM2ybKZ/gC2aY274/+x3+v7kLjOT6K/FX8EGADHc/iZW7KfYwAAAABJRU5ErkJggg==);
                                background-size: 20px 20px;
                            }
                            .td-currency {
                                padding-left: 25px !important;
                                display: inline-block;
                            }
                            > input {
                                width: 80px;
                                height: 30px;
                                border-radius: 4px;
                                outline: none;
                                cursor: pointer;
                                background: #4895ea;
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }
    }
}
// 翻页
#page {
    text-align: center;
    .pagination {
        display: inline-block;
        padding-top: 30px;
        > li {
            float: left;
            width: 32px;
            height: 32px;
            border: 1px solid #eee;
            background: #fff;
            text-align: center;
            font-size: 14px;
            line-height: 32px;
            margin-left: 10px;
            border-radius: 4px;
            a {
                color: #555;
                display: inline-block;
                width: 100%;
                height: 100%;
            }
        }
        .disabled a {
            color: #eee !important;
        }
        .active a {
            color: #15b3f0 !important;
        }
    }
}
// 下单弹出
#IndexPop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 10;
    display: none;
    .index-pop {
        width: 474px;
        margin: 0 auto;
        padding-top: 100px;
        .pop-cont {
            background: #fff;
            box-shadow: 0 3px 9px 0 rgba(69, 112, 128, 0.14);
            padding: 20px;
            border-radius: 6px;
            .pop-head {
                font-size: 17px;
                position: relative;
                padding-bottom: 12px;
                > i {
                    position: absolute;
                    top: 0;
                    right: 0;
                    z-index: 1;
                    cursor: pointer;
                }
                > em {
                    font-size: 12px;
                    padding-left: 5px;
                    color: #24cf69;
                }
            }
            .pop-content {
                li {
                    font-size: 14px;
                    height: 50px;
                    line-height: 50px;

                    span {
                        padding: 0 30px;
                    }
                    img {
                        vertical-align: -6px;
                        padding: 0 5px;
                    }
                    .pop-back {
                        background: #ebebeb;
                        height: 38px;
                        line-height: 38px;
                        border-radius: 6px;
                    }
                    input {
                        background: #fff;
                        height: 24px;
                        width: 220px;
                        outline: none;
                    }
                }
                li:first-child > span {
                    padding-left: 0;
                }
                li:nth-child(2) > span {
                    padding-left: 0;
                }
                .pop-but {
                    text-align: center;
                    padding: 25px 0 10px;
                    > button {
                        width: 172px;
                        height: 46px;
                        outline: none;
                        margin: 0 15px;
                        border: 1px solid silver;
                        cursor: pointer;
                        border-radius: 6px;
                        background: #fff;
                        font-size: 16px;
                    }
                    .confirm {
                        background: #4895ea !important;
                        color: #fff;
                        border: 1px solid #4895ea !important;
                    }
                }
            }
        }
    }
}
// 消息
.news-prpmpt {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 6;
    width: 400px;
    height: 100%;
    background: #fff;
    transition-duration: 0.2s;
    box-shadow: 0 3px 9px 0 rgba(69, 112, 128, 0.14);
    transform: translateX(110%);
    .news-header {
        height: 40px;
        background: #f8f8f8;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        position: relative;
        > span {
            font-weight: bolder;
        }
        > i {
            position: absolute;
            top: 0;
            right: 20px;
            font-size: 18px;
            cursor: pointer;
        }
    }
    .news-content {
        height: calc(100% - 80px);
        overflow: auto;
        > ul {
            padding: 10px 20px;
            > li {
                font-size: 12px;
                position: relative;
                padding: 5px 0;
                i {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #999;
                    float: left;
                    position: absolute;
                    top: 10px;
                    left: 0;
                }
                .news-act {
                    background: #ff3838 !important;
                }
                span {
                    width: 96%;
                    display: inline-block;
                    float: left;
                    padding-left: 4%;
                    color: #323232;
                    line-height: 20px;
                    cursor: pointer;
                }
                time {
                    width: 100%;
                    text-align: right;
                    display: inline-block;
                    float: left;
                    color: #999;
                }
            }
            > li:after {
                content: "";
                clear: both;
                display: block;
            }
        }
        .nothings {
            color: #9b9b9b;
            font-size: 12px;
            padding-top: 80px;
            text-align: center;
            display: none;
        }
    }
    .news-footer {
        font-size: 14px;
        text-indent: 20px;
        line-height: 40px;
        cursor: pointer;
        color: #777;
        background: #f8f8f8;
        height: 40px;
    }
}
.news-trans {
    transform: translateX(0);
}
</style>
