# TikTok

hostname = *.tiktokv.com, *.byteoversea.com, *.tik-tokapi.com

(?<=_region=)CN(?=&) url 307 JP
(?<=&mcc_mnc=)4 url 307 2
^(https?:\/\/(tnc|dm)[\w-]+\.\w+\.com\/.+)(\?)(.+) url 302  $1$3
(?<=\d\/\?\w{7}_\w{4}=)1[6-9]..(?=.?.?&) url 307 17
