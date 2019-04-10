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