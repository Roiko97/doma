# 文档模块接口文档

## 根据用户id查询文档信息

- 描述：根据用户id查询文档信息，查询结果将会被分页，需要传入**当前页面的页码**与**每页的查询结果数量**，例如```pageNum=2```，```pageSize=5```，则会将返回查询结果的第2页的5跳记录。

- 地址：http://localhost:8080//getYourDocInfo

- 请求方式：POST / GET

- 参数：

  | 字段           | 类型    | 说明                          | 必需 |
  | -------------- | ------- | ----------------------------- | ---- |
  | ```userId```   | String  | 用户ID                        | 是   |
  | ```pageNum```  | Integer | 欲获得的页数，默认查出第1页   | 否   |
  | ```pageSize``` | Integer | 每一页的记录数，默认为4条记录 | 否   |

- 返回值：

  | 字段                    | 类型          | 说明                                                         |
  | ----------------------- | ------------- | ------------------------------------------------------------ |
  | ```endRow```            | Integer       | 当前页码结束在查询结果的行数(比如每一页设为4个记录，则第1页的```endrow==4```，第2页的```endrow==9```，以此类推) |
  | ```hasNextPage```       | Boolean       | 是否有下一页                                                 |
  | ```hasPreviousPage```   | Boolean       | 是否有前一页                                                 |
  | ```isFirstPage```       | Boolean       | 是否为第一页                                                 |
  | ```list```              | List<DocInfo> | 查询结果列表                                                 |
  | ```address```           | String        | 下载地址                                                     |
  | ```docId```             | String        | 文档ID                                                       |
  | ```docName```           | String        | 文档名                                                       |
  | ```existAnn```          | Integer       | 是否有注解                                                   |
  | ```pubTime```           | Date          | 发布日期                                                     |
  | ```recommend```         | Integer       | 是否推荐                                                     |
  | ```style```             | String        | 分类                                                         |
  | ```userId```            | String        | 用户ID                                                       |
  | ```navigateFirstPage``` | Integer       | 首页页码                                                     |
  | ```nextPage```          |               | 下一页页码                                                   |
  | ```pageNum```           |               | 当前定位页码                                                 |
  | ```pageSize```          |               | 页面大小(即每页记录数)                                       |
  | ```pages```             |               | 总页数                                                       |
  | ```prePage```           |               | 上一页页码                                                   |
  | ```size```              |               | 未知                                                         |
  | ```startRow```          |               | 当前页面第一条记录对应于查询结果的行数                       |
  | ```total```             |               | 查询结果总数                                                 |
  |                         |               |                                                              |
  |                         |               |                                                              |

  

- 示例：

  ```json
  //请求：http://localhost:8080//getYourDocInfo?userId=1&pageNum=1&pageSize=4
  
  //返回结果json：
  {
  	"pageInfo":{
  		"endRow":4,
  		"hasNextPage":true,
  		"hasPreviousPage":false,
  		"isFirstPage":true,
  		"isLastPage":false,
  		"list":[
  			{
  				"address":null,
  				"docId":"1",
  				"docName":"t1",
  				"existAnn":null,
  				"pubTime":null,
  				"recommend":null,
  				"style":null,
  				"userId":"1"
  			},
  			{
  				"address":null,
  				"docId":"2",
  				"docName":"t2",
  				"existAnn":null,
  				"pubTime":null,
  				"recommend":null,
  				"style":null,
  				"userId":"1"
  			},
  			{
  				"address":null,
  				"docId":"3",
  				"docName":"t3",
  				"existAnn":null,
  				"pubTime":null,
  				"recommend":null,
  				"style":null,
  				"userId":"1"
  			},
  			{
  				"address":null,
  				"docId":"4",
  				"docName":"t4",
  				"existAnn":null,
  				"pubTime":null,
  				"recommend":null,
  				"style":null,
  				"userId":"1"
  			}
  		],
  		"navigateFirstPage":1,
  		"navigateLastPage":3,
  		"navigatePages":8,
  		"navigatepageNums":[1,2,3],
  		"nextPage":2,
  		"pageNum":1,
  		"pageSize":4,
  		"pages":3,
  		"prePage":0,
  		"size":4,
  		"startRow":1,
  		"total":9
  	}
  }
  
  ```

  ---------------

  

