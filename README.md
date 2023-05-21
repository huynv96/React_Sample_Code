### Bài toán
Tạo theme dark mode và light mode
### Code
Bước 1: Tạo Context (Ví dụ ThemeContext)
Bước 2: Quyết định xem Context chúng ta vừa tạo sẽ được sử dụng ở đâu bằng cách bọc <[Tên Conext].Provider> (Ví dụ AppContext.Provider) bên ngoài component đó thì tất cả components con của nó đều có thể lấy được dữ liệu từ Context.
Bước 3: Sử dụng dữ liệu từ Context hay còn gọi là Comsumer (Tiêu thụ) 
Có 2 cách để lấy dữ liệu
> useContext
> Sử dụng <[Tên Context].Comsumer> ( Ví dụ AppContext.Commsumer) ( Áp dụng vowisclass component)