TypeScript React "mui-datatables" Issue for Giving Up Demo
===================================

"mui-datatables" 存在一个严重的设计缺陷：

在customBodyRenderer里没有办法拿到该行对应的原始对象，只能拿到转换后的数组，这给定制单元格内容带来极大的不便，
因为我们必须要自己想办法根据单元格中的内容从另一个地方确定它所对应的对象，非常麻烦，甚至不太可能。

具体讨论在这里：
https://github.com/gregnb/mui-datatables/issues/1038

让人难以理解的是，尽量提问者进行了详细的解释，并且大家也给出了各种必要性，但是作者很奇怪就是脑子转不过来弯，答非所问，
最后给出来的理由是这种需求优先级低，自己时间不够，不想支持。看完就想放弃。

```
npm install
npm run demo
```

在该demo里可以看到在自定义单元格中，没有user.id，只能拿到rowIndex，非常不方便。而且如果表格进行了排序，
它还可能存在一个问题，就是rowIndex指的到底是排序前还是排序后的。
