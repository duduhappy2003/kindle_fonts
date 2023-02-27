#!name=Kindle Fonts Customize CN
#!desc=自定义 Kindel 字体


[URL Rewrite]
# > 黑体 -> 仓耳今楷05-W02
# ^https://s3.cn-north-1.amazonaws.com.cn/maes-appexpan-protected-prod/STFontSC/STHeitiSC.ttf.+ https://github.com/yujixia/kindle_fonts/raw/main/STHeitiSC/CangErJinKai05-W02/STHeiti.ttf 302

# > 楷体 -> 霞鹜文楷 GB
^https://s3.cn-north-1.amazonaws.com.cn/maes-appexpan-protected-prod/STFontSC/STKaitiSC.ttf.+ https://github.com/yujixia/kindle_fonts/raw/main/STKaiti/LXGWWenKaiGB-Regular/STKaiti.ttf 302

# > 宋体 -> 方正宋三
^https://s3.cn-north-1.amazonaws.com.cn/maes-appexpan-protected-prod/STFontSC/STSongSC.ttf.+ https://github.com/duduhappy2003/kindle_fonts/raw/main/FZS3/STSongSC.ttf 302

# > 圆体 -> 暂缺
# ^https://s3.cn-north-1.amazonaws.com.cn/maes-appexpan-protected-prod/STFontSC/STYuanMedium-2018-02-16.ttf.+


[MITM]

hostname = %APPEND% s3.cn-north-1.amazonaws.com.cn
