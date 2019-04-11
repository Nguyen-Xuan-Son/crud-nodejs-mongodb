## Crud nodejs mongodb and Ngrx

###1. NoSQL là gì?
+ NoSQL có nghĩa là Non-Relational
+ NoSQL là Not Only SQL
+ Không sử dụng mô hình dữ liệu quan hệ (RDBMs)
+ Mô hình lưu trữ dạng Dson (Json)
+ Hệ thống lưu trữ phân tán
+ NoSQL là hệ cơ sở dữ liệu không ràng buộc, phân tán mã nguồn mở, khả năng mở rộng theo chiều ngang, có thể chứa hàng petabytes, độ chịu tải và chịu lỗi cao, yêu cầu về tài nguyên thấp.

###2. Lịch sử phát triển.
+ Giới thiệu đầu năm 1998.
+ Lightweight open source relational database.
+ Năm 2009, Eric Evans, nhân viên của Rackspace.
+ NoSQL là phân tán và không ràng buộc.
+ NoSQL storage đặc biệt thông dụng với MXH như facebook, twitter, ...

###3. Một số thuật ngữ liên quan.

+ Ràng buột - Relational.
+ Không ràng buộc - Non-relational.
+ Khả năng mở rộng - High Scalability.
+ Khả năng mở rộng theo chiều dọc - Vertical scalable.
+ Khả năng mở rộng theo chiều ngang - Horizontal scalable.
  ![](file:///C:/Users/Admin/Documents/Lightshot/Screenshot_86.png) 
+ Phân tán dữ liệu - Distributed Data.
+ Triển khai linh hoạt - Deployment Flexibility.
+ Tính sẵn sàng - High Availability.
+ Nhất quán cuối - Eventual consistency
+ Lưu trữ tốt - Durability

### 4.So sánh NoSQL và SQL

| Tính năng                       | SQL                                                          | NoSQL                                                        |
| ------------------------------- | :----------------------------------------------------------- | ------------------------------------------------------------ |
| Hiệu xuất                       | Kém hơn NoSQL vì truy vấn phải tính toán, kiểm tra và xử lí các mối quan hệ trong bảng | Tốt hơn SQL vì nó bỏ qua các ràng buộc                       |
| Mở rộng theo chiều ngang        | Có thể mở rộng được nhưng sẽ rất phức tạp nếu đã tồn tại dữ liệu trong database | Mở rộng dễ dàng                                              |
| Tốc độ read/write               | Kém hơn NoSQL vì phải đảm bảo tính ràng buộc dữ liệu giữa các bảng. Nếu sử dụng các server thì phải đảm bảo tính nhất quán giữa các server với nhau | Tốc độ nhanh hơn SQL do không có cơ chế ràng buộc bảng. Và vì dữ liệu được lưu trên ram sau đó mới đẩy xuống ổ cứng và có tính nhất quán cuối. |
| Phần cứng                       | Đòi hỏi phần cứng cao                                        | Không đòi hỏi quá cao về phần cứng                           |
| Thay đổi số node trong hệ thống | Vì tính nhất quán về dữ liệu nên khi thêm hay xóa 1 node cần phải shutdown hệ thống trong 1 khoảng thời gian | Vì có tính nhất quán cuối nên không cần phải shutdown hệ thống |
| Truy vấn và báo cáo             | Dễ dàng sử dụng ngôn ngữ SQL để query trực tiếp dữ liệu từ DB hoặc dùng công cụ hỗ trợ để lấy report | Việc lấy report chưa được hỗ trợ tốt, thực hiện chủ yếu thông qua giao diện ứng dụng. |
| Mở rộng dữ liệu                 | Khi muốn mở rộng một cột cho bảng ta phải khai báo trước     | Không cần khai báo trước                                     |
| Ứng dụng                        | Sử dụng để xây những ứng dụng có tính chặt chẽ cao như: Tài chính, ngân hàng, chứng khoán, ... | Sử dụng xây dựng những hệ thống thông tin lớn, không quá quan trong về tính đồng nhất dữ kiệu trong khoảng thời gian nhất định như: Báo trí, mạng xã hội, diễn đàn, ... |

###5. Các kiểu NoSQL.
+ Có 4 loại:
    + Key-values (sử dụng hàm băm)
    + Column family store (Cột trong cột)
    + Document.
    + Graph Databases.
    
6. Quản lí DB và Document
+ show dbs => show tất cả dbs
+ db => Xem đang sử dụng db nào
+ use nameDb => chuyển sang db muốn đến
+ db.createCollection("Name Collection") => tạo collection
+ show collections => Show tất cả collection.
+ db.dropDatabase() => Xóa db hiện tại
+ db.nameCollection.drop() => Xóa collection trong db, chú ý đến nameCollection
+ db.collection.insert(json) => chú ý đến tên collection và json bên trong.
+ db.collection.find().pretty() => Xem json bên trong collection dễ dàng hơn
+ Có thể đặt biến bên trong luôn xem thêm hình ảnh:
![](file:///C:/Users/Admin/Documents/Lightshot/Screenshot_87.png)
+ Có thể làm 1 số hành động khác với mongoDB:
    + mongoexport --db nameDb --collection nameCollection --out nameFile.json => Trong đó chú ý đến Name DB, Name collection, Name file xuất ra
        + Ngoài ra có thể viết gọn: mongoexport -d nameDb -c nameCollection -o [pathFile].json => path file là đường dẫn đến nơi muốn lưu
    + mongoimport -d nameDb -c nameCollection --file [pathFile].json => Đây là cách import lại vào db trong trường hợp đã xóa collection đi rồi và muốn import lại.
    + (Có thể import và export ở dạng file .csv,...)
        + mongoexport -d nameDb -c nameCollection --type=csv -o [pathFile].csv -f id,username,... => Chú ý đến đuôi file là csv và phải khai các header vì đây là file csv.(Chú ý đến tham số -f).
        + mongoimport -d nameDb -c nameCollection --type=csv --file [pathFile].csv --headerline => Chú ý headerline nó sẽ lấy các header xuống
    + mongodump -d nameDb -o [pathFolder] => Đây là cách export tất cả các collection trong db, và các collection này sẽ được lưu vào folder có path folder
    + mongodump -d nameDb -o [pathFolder] --gzip => Chú ý đến gzip nó sẽ zip các file json export.
    + mongodump -d nameDb --gzip --archive=[nameFolder] => Chú ý nếu chỉ có name folder thì nó sẽ được lưu vào chính nơi mở của sổ CLI
    + mongodump -d nameDb --gzip --archive=[pathNameFolder] => Như vậy thì nó sẽ được lưu vào nơi có path như vậy.
    + mongorestore -d nameDb [pathFolder] => Đây là cách để restore lại db, với folder bên trong là các file có định dạng là json
    + mongorestore -d nameDb [pathFolder] --gzip => Đây là các restore lại db, với các file trong folder đã bị nén lại.
    + mongorestore -d nameDb --gzip --archive=[pathFolder] => Đây là cách restore db với pathFolder là file này đã bị nén.
+ load([pathFile]) => Chú ý đến dấu gạch chéo, và pathFile ở đây là file js, với kịch bản được viết như khi insert 1 document vậy, nên có thể insert 1 document hoặc nhiều document
+ `db.user.update(
      {username: 'Nguyean thi hoa'},
      {$set: {email: 'aaaaaa@gmasil.com'}},
      {
          upsert: true,
          multi: false
      }
  )` => Đây là cách để update 1 document trong collection, chú ý đến tham số query, tham số muốn update và các tham số như upsert. Nếu true thì nếu không có sẽ create, nếu false thì không có sẽ không update, tham số multi nếu là true thì sẽ update trên nhiều dòng, nếu là false thì sẽ chỉ update trên 1 document thôi.
![](file:///C:/Users/Admin/Documents/Lightshot/Screenshot_88.png)
+ `db.user.update(
   	{skill: {$exists: false}},
   	{$set: {skill: '1111111111'}},
   	{
   	    upsert: false,
   	    multi: true
   	}
   )` => Câu truy vấn này có nghĩa là sẽ update những trường trong document mà không tồn tại thành 1 giá trị mới.
+ `db.user.update(
   	{},
   	{$unset: {passworda: ''}},
   	{
   	    upsert: false,
   	    multi: true
   	}
   )` => Câu này có nghĩa là xóa field, chú ý là ta cũng có thể xóa nhiều field.
+ `db.user.remove(
   	{_id: ObjectId("5caf5a66bf91623349f4768e")},
   	{justOne: true}
   )` => Câu này có nghĩa là xóa document, có _id như vậy, justOne để chỉ nhiều giá trị với false, hoặc chỉ một giá trị với true.
+ `db.user.remove(
   	{age: {$eq: 100}},
   	{justOne: true}
   )` => Chú ý có 1 số dạng toán tử như $eq, $gt, $gte, $It, $in, $lte, $ne, $nin. (hãy search nếu cần).
+ `db.user.remove(
   	{age: {$eq: 100}, age: {$lt: 100}},
   	{justOne: true}
   )`=> Ở đây là nó kết hợp điều kiện giữa hai toán tử.
+ `db.user.remove(
   	{skill: {$in: ["JS"]}},
   	{justOne: true}
   )` => Cách xóa phần tử trong mảng với toán tử $in
+ `db.getCollection('user').count()` => Đây là cách đếm các record document trong collection
+ `db.getCollection('user').find(
   	{
   	    _id: ObjectId("5cae07cd5524b84eb9c7d86c")
   	}
   )` => Câu truy vấn này có nghĩa là sẽ tìm document _id có giá trị như trên
+ `db.getCollection('user').find(
   	{},
   	{
   	    "_id": 0,
   	    "username": 1,
   	    email: 1
   	}
   )` => Câu truy vấn này có nghĩa là show ra toàn bộ collection với 2 filed là username, email (chú ý số 1, có thể là số khác lớn hơn 0 cũng được), và bỏ đi field mặc định là _id (Chú ý số 0), Chú ý thêm ta có thể bỏ dấu nháy đôi vào tên field để truy vấn, và không có cũng không sao.
+ `db.user.find(
   	{},
   	{
   	    "_id": 0,
   	    "username": 2,
   	    email: 1
   	}
   ).limit(2).skip(2)` => Chú ý đến limit(), skip() => phần này sau này sẽ được ứng dụng để làm phân trang
+ `db.user.find(
   	{
   	    "_id": {$in: [ObjectId("5cae07cd5524b84eb9c7d86c"), ObjectId("5cae0c4a5524b84eb9c7d86e")]}
   	}
   )` => Đây là cách find theo nhiều ObjectId (Chú ý đến toán tử $in) 
+ `db.user.find(
   	{
   	    "age": {$gt: 30, $lt: 40}
   	}
   )` => Đây là cách lấy tuổi trong khoảng (30, 40).
+ `db.user.find(
   	{
   	    "speaking.chinese": 0
   	}
   )` => Câu này có thể truy vấn đến những thằng có kiểu object với key là speaking với chinese là những cái key bên trong đó.
+ `db.user.find(
   	{$or: [
   	    	{"speaking.chinese": {$gt: 5}},
   	    	{"speaking.english": {$gt: 8}}
   	    ]
   	}
)` => Chú ý đến toán tử $or nó sẽ có nghĩa là hoặc cái này trong mảng hoặc cái kia trong mảng', $gt có nghĩa là lơn hơn một cái gì đó   
+ `db.user.find(
   	{$or: [
   	    	{"speaking.chinese": {$gt: 5}},
   	    	{"speaking.english": {$gt: 8}}
   	    ]
   	}
)` => Chú ý những điều kiện trong mảng là những điều kiện, ví dự ở đây là toán tử $and. (Là cái này và cái này)
+ `db.user.find(
    {"speaking.chinese": {$not: {$gt: 5} } },
)` => Chú ý toán tử $not nó nghĩa là phủ định, nó giống SQl thôi. :D.
+ `db.user.find({}).sort({age: 1})` => Trong hàm sort có field nó có giá trị là 1 hoặc là -1 và tùy vào đó mà nó sẽ có thể là sắp xếp theo chiều tằng dần và giảm đân, ta cũng có thể kết hợp hai điều kiện lại với nhau để sort nhưng nó sẽ ưu tiên sort theo điều kiện đầu tiên.

###5.Index
+ 


   
   
        