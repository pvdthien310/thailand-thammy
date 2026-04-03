import duongQuynhNga from "@/assets/random/duong_quynh_nga.webp";
import hoangHoa from "@/assets/random/hoang_hoa.webp";
import hoangMinhMinh from "@/assets/random/hoang_minh_minh.webp";
import hongPhuong from "@/assets/random/hong_phuong.webp";
import kimLan from "@/assets/random/kim_lan.webp";
import linhChi from "@/assets/random/linh_chi.webp";
import linhNguyen from "@/assets/random/linh_nguyen.webp";
import minhHa from "@/assets/random/minh_ha.webp";
import admin from "@/assets/logo/1.png";
import chanmaynam from "@/assets/may_nam/1.png";

export const RANDOM_BOOKING = [
  {
    id: 1,
    name: "Dương Quỳnh Nga",
    service: "Nốt Ruồi Nhân Tướng",
    time: "2 phút trước",
    avatar: duongQuynhNga,
  },
  {
    id: 2,
    name: "Hoàng Hoa",
    service: "Phun Môi Cân Bằng Năng Lượng",
    time: "5 phút trước",
    avatar: hoangHoa,
  },
  {
    id: 3,
    name: "Hoàng Minh Minh",
    service: "Chân Mày Minh Tướng",
    time: "8 phút trước",
    avatar: hoangMinhMinh,
  },
  {
    id: 4,
    name: "Hồng Phượng",
    service: "Chân Mày Trăng Non",
    time: "3 phút trước",
    avatar: hongPhuong,
  },
  {
    id: 5,
    name: "Kim Lan",
    service: "Nốt Ruồi Nhân Tướng",
    time: "7 phút trước",
    avatar: kimLan,
  },
  {
    id: 6,
    name: "Linh Chi",
    service: "Phun Môi Cân Bằng Năng Lượng",
    time: "1 phút trước",
    avatar: linhChi,
  },
  {
    id: 7,
    name: "Linh Nguyễn",
    service: "Chân Mày Minh Tướng",
    time: "9 phút trước",
    avatar: linhNguyen,
  },
  {
    id: 8,
    name: "Minh Hà",
    service: "Chân Mày Trăng Non",
    time: "4 phút trước",
    avatar: minhHa,
  },
];

export const TESTIMONIAL_DATA = [
  {
    id: 1,
    avatar: linhNguyen,
    name: "Linh Nguyễn",
    comment:
      "Dịch vụ phun mày Trăng Non tại Sương Mai thật sự đã thay đổi diện mạo của tôi. Không chỉ đẹp về mặt thẩm mỹ mà còn giúp tôi cảm thấy tự tin hơn rất nhiều. Cách tư vấn theo nhân tướng học rất độc đáo và hiệu quả!",
    time: "10 phút trước",
    likes: 12,
    replies: [
      {
        id: 101,
        avatar: admin,
        name: "Chân mày Sương Mai",
        comment:
          "Cảm ơn chị đã tin tưởng và sử dụng dịch vụ của chúng tôi. Rất vui khi biết chị hài lòng với kết quả!",
        time: "10 phút trước",
        likes: 3,
      },
    ],
  },
  {
    id: 2,
    avatar: hoangHoa,
    name: "Hoàng Hoa",
    comment:
      "Phun môi cân bằng năng lượng là một trải nghiệm tuyệt vời. Màu môi được chọn rất hợp với tông da và khí chất của tôi. Sau 3 tháng, môi vẫn giữ màu đẹp tự nhiên và tôi nhận được rất nhiều lời khen.",
    time: "15 phút trước",
    likes: 8,
    replies: [],
  },
  {
    id: 3,
    avatar: chanmaynam,
    name: "Hoàng Văn Minh",
    comment:
      "Là nam giới, tôi rất hài lòng với dịch vụ Chân Mày Minh Tướng. Dáng mày được thiết kế vừa nam tính vừa phù hợp với khuôn mặt. Đặc biệt ấn tượng với cách tư vấn chuyên nghiệp dựa trên nhân tướng học.",
    time: "1 ngày trước",
    likes: 15,
    replies: [
      {
        id: 301,
        avatar: admin,
        name: "Chân mày Sương Mai",
        comment:
          "Cảm ơn anh đã tin tưởng và sử dụng dịch vụ của chúng tôi. Rất vui khi được phục vụ khách hàng nam giới!",
        time: "1 ngày trước",
        likes: 2,
      },
    ],
  },
];

export const CUSTOMER_VOICES_DATA = [
  {
    id: 1,
    avatar: duongQuynhNga,
    name: "Dương Quỳnh Nga",
    comment:
      "Mình chọn dịch vụ nốt ruồi nhân tướng vì muốn gương mặt hài hòa và có điểm nhấn tinh tế hơn. Các bạn tư vấn rất kỹ, làm nhẹ tay và đặc biệt giải thích rõ vị trí nào phù hợp với thần thái của mình.",
    time: "2 giờ trước",
    likes: 21,
    replies: [
      {
        id: 101,
        avatar: admin,
        name: "Chân mày Sương Mai",
        comment:
          "Cảm ơn chị Nga đã chia sẻ. Đội ngũ rất vui khi chị hài lòng với kết quả và trải nghiệm tại salon.",
        time: "1 giờ trước",
        likes: 4,
      },
    ],
  },
  {
    id: 2,
    avatar: hongPhuong,
    name: "Hồng Phượng",
    comment:
      "Sau khi làm chân mày Trăng Non, gương mặt mình sáng và mềm hơn hẳn. Form mày lên rất tự nhiên, không bị cứng, đi làm hay đi tiệc đều thấy phù hợp nên mình cực kỳ ưng ý.",
    time: "5 giờ trước",
    likes: 17,
    replies: [],
  },
  {
    id: 3,
    avatar: kimLan,
    name: "Kim Lan",
    comment:
      "Môi mình trước đó khá nhợt màu, nhưng sau khi phun môi cân bằng năng lượng thì nhìn tươi tắn hơn nhiều. Màu lên đúng như tư vấn, nhẹ nhàng và rất sang, càng nhìn càng thích.",
    time: "Hôm qua",
    likes: 14,
    replies: [
      {
        id: 301,
        avatar: admin,
        name: "Chân mày Sương Mai",
        comment:
          "Cảm ơn chị Lan đã tin tưởng. Bên em luôn ưu tiên chọn màu môi phù hợp để giữ vẻ đẹp tự nhiên và lâu bền.",
        time: "Hôm qua",
        likes: 3,
      },
    ],
  },
  {
    id: 4,
    avatar: minhHa,
    name: "Minh Hà",
    comment:
      "Điều mình thích nhất là các bạn không làm theo một kiểu cố định mà đo vẽ rất kỹ theo từng đường nét khuôn mặt. Thành phẩm đẹp, hài hòa và giúp mình tự tin hơn rất nhiều khi để mặt mộc.",
    time: "2 ngày trước",
    likes: 19,
    replies: [],
  },
];
