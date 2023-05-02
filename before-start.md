# 🧭 开始之前

这是一些我想说的话。如果你有时间的话，可以阅读它来了解此扩展程序的前世今生。如果你很急，可以转至 [快速开始](/quick-start)。

## 立项动机与发展

起初，它只是一个到点提醒老师按时下课的小插件，名为「课堂防沉迷」。因为本班老师很喜欢拖课，让本就不充裕的 7 分钟课间时间雪上加霜。它并没有什么技术含量——虽然现在也没有。

在此之后，我将由 [uBlock Origin](https://github.com/gorhill/uBlock) 承担的随机点名元素屏蔽任务也在此扩展程序做了实现——当然，它只是检测随机点名元素是否存在，然后进行 DOM 操作移除该元素，这并没有对服务端下发的指令进行屏蔽，所以理论来说可以通过优师端下发指令完成随机点名（后面迟早把这条路堵死）。

在此期间，受老师要求，本班教师均加入了白名单列表。于是本班课余时间大幅度减少。[了解我为什么认为课间是很有必要的](/before-start#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%91%E8%AE%A4%E4%B8%BA%E8%AF%BE%E9%97%B4%E6%98%AF%E5%BE%88%E6%9C%89%E5%BF%85%E8%A6%81%E7%9A%84)

由于合川中学周末上课（可以参考功能示例图片中的周末课程表），而十六进制会在周六日显示周一课表，我便萌生了尝试修复的想法，并在一个周日的下午完成了功能开发。值得注意的问题是，它并不会真正接管十六进制 JS 在此方面的逻辑，只是在生成后对页面的 DOM 内容进行操作罢了。

------

除此之外，它也上架到了 [Microsoft Edge 外接组件商店](https://microsoftedge.microsoft.com/addons/detail/ejlpgfdcoaofgnhkjbpemhnpoihaimck)，Microsoft Edge 浏览器可以便捷地安装本扩展程序。

它同时是一个开源项目，欢迎在它的 [GitHub 仓库](https://github.com/LiCaoZ/HexFutureEnhancement) 参与开发或者给个 star！

## 为什么我认为课间是很有必要的

1. 在紧张高强度的 40 分钟脑力活动后，课间可以解决自己的生理需求

这是最简单的理由——你可以在课间喝水上厕所，而无需担心错过重要的知识点。

2. 课间的适度放松有助于下一节课更好地专注，拖课讲完的题目可能并没有好效果

[科学研究](https://cn.bing.com/search?q=%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%97%B6%E9%97%B4+%E6%9B%B2%E7%BA%BF) 表明，学生在一节课中的专注程度与课堂进度先呈正相关，再呈反相关；这意味着学生并不能整节课都保持高度专注。课间适当的休息可以放松紧张的神经，使学生下一节课更好地听讲。同理，老师们拖课在课堂时间结束后进行的知识讲解可能并不能得到很好的效果。

## 联系

[问题追踪器](https://github.com/LiCaoZ/HexFutureEnhancement/issues) | [QQ 群组](https://qm.qq.com/cgi-bin/qm/qr?k=lTqBRzHBaJn0ErRt9aUPifSphWgVTupE&jump_from=webapi&authKey=JDtGLIcmPx92crGnmiSBJWK8xlqBXZETJXhlbfCeBcMNAVpFdSQjImI6wk5fC5r0) | [电子邮箱](mailto:admin@licaoz.com)

最好的祝福，来自重庆，中国。
