---
slug: introduce-graph
title: Giới thiệu về đồ thị
author: Quang Kiên
tags: [đồ thị, các loại đồ thị]
---

Sau đây là năm loại đồ thị bạn cần nắm để vận dùng vào tùy bài toán!

<!-- truncate-->

## 1. Đơn đồ thị vô hướng

- Một đơn đồ thị G = (V, E) với V là một tập không rỗng mà phần tử của nó gọi là các đỉnh
- E là một tập với các phần tử của nó là các cạnh, đó là các cặp không sắp thứ tự của các đỉnh phân biệt

<div align='center'>
    <img alt='Đơn đồ thị' src='https://res.cloudinary.com/ddsypxjol/image/upload/v1662546292/To%C3%A1n%20r%E1%BB%9Di%20r%E1%BA%A1c/Gi%E1%BB%9Bi%20thi%E1%BB%87u%20v%E1%BB%81%20%C4%91%E1%BB%93%20th%E1%BB%8B/DonDoThi_v6guju.png' />
</div>
VD: Đồ thị quen biết:

<div align='center'>
    <img alt='Đồ thị quen biết' src='https://res.cloudinary.com/ddsypxjol/image/upload/v1662546307/To%C3%A1n%20r%E1%BB%9Di%20r%E1%BA%A1c/Gi%E1%BB%9Bi%20thi%E1%BB%87u%20v%E1%BB%81%20%C4%91%E1%BB%93%20th%E1%BB%8B/DoThiQuenBiet_tcug4a.jpg' />
</div>

## 2. Đa đồ thị

- Một đa đồ thị G = (V, E) gồm tập đỉnh V, một tập cạnh E
- Đa đồ thị nghĩa tồn tại ít nhất 1 cặp đỉnh sao cho có số đường nối giữa 2 đỉnh > 1

<div align='center'>
    <img alt='Đa đồ thị' src='https://res.cloudinary.com/ddsypxjol/image/upload/v1662546286/To%C3%A1n%20r%E1%BB%9Di%20r%E1%BA%A1c/Gi%E1%BB%9Bi%20thi%E1%BB%87u%20v%E1%BB%81%20%C4%91%E1%BB%93%20th%E1%BB%8B/DaDoThi_mczfbe.png' />
</div>

## 3. Giả đồ thị

- Một giả đồ thị G = (V, E) gồm tập đỉnh V, một tập cạnh E
- Giả đồ thị là một đa đồ thị và tồn tại ít nhất 1 cạnh khuyên
- Cạnh khuyên là cạnh mà đi từ 1 đỉnh đến chính nó

<div align='center'>
    <img alt='Giả đồ thị' src='https://res.cloudinary.com/ddsypxjol/image/upload/v1662546313/To%C3%A1n%20r%E1%BB%9Di%20r%E1%BA%A1c/Gi%E1%BB%9Bi%20thi%E1%BB%87u%20v%E1%BB%81%20%C4%91%E1%BB%93%20th%E1%BB%8B/GiaDoThi_ruajbc.jpg' />
</div>

## 4. Đồ thị có hướng

- Một đồ thị có hướng G = (V, E) gồm một tập đỉnh V, một tập cạnh E là các cặp có thứ tự của các phần tử thuộc V

<div align='center'>
    <img alt='Đồ thị có hướng' src='https://res.cloudinary.com/ddsypxjol/image/upload/v1662546301/To%C3%A1n%20r%E1%BB%9Di%20r%E1%BA%A1c/Gi%E1%BB%9Bi%20thi%E1%BB%87u%20v%E1%BB%81%20%C4%91%E1%BB%93%20th%E1%BB%8B/DoThiCoHuong_ytr70c.jpg' />
</div>

VD: Đồ thị yêu mến:

<div align='center'>
    <img alt='Đồ thị yêu mến' src='https://res.cloudinary.com/ddsypxjol/image/upload/v1662546309/To%C3%A1n%20r%E1%BB%9Di%20r%E1%BA%A1c/Gi%E1%BB%9Bi%20thi%E1%BB%87u%20v%E1%BB%81%20%C4%91%E1%BB%93%20th%E1%BB%8B/DoThiQuyMen_eegyv1.jpg' />
</div>

## 5. Đa đồ thị có hướng

- Một đa đồ thị có hướng G = (V, E) gồm một tập đỉnh V, một tập cạnh E
- Tồn tại 2 đỉnh sao cho có nhiều hơn 1 đường đi giữa đỉnh (yêu cầu là đường đi có hướng)

<div align='center'>
    <img alt='Đa đồ thị có hướng' src='https://res.cloudinary.com/ddsypxjol/image/upload/v1662546288/To%C3%A1n%20r%E1%BB%9Di%20r%E1%BA%A1c/Gi%E1%BB%9Bi%20thi%E1%BB%87u%20v%E1%BB%81%20%C4%91%E1%BB%93%20th%E1%BB%8B/DaDoThiCoHuong_s3qfpe.jpg' />
</div>

VD: Đồ thị mô tả cuộc gọi:

<div align='center'>
    <img alt='Đồ thị mô tả cuộc gọi' src='https://res.cloudinary.com/ddsypxjol/image/upload/v1662546302/To%C3%A1n%20r%E1%BB%9Di%20r%E1%BA%A1c/Gi%E1%BB%9Bi%20thi%E1%BB%87u%20v%E1%BB%81%20%C4%91%E1%BB%93%20th%E1%BB%8B/DoThiCuocGoi_ntbc0a.jpg' />
</div>

## 6. Các thuật ngữ về đồ thị

### Một số thuật ngữ cơ sở

- **Đỉnh liền kề và cạnh liên thuộc:**

  - 2 đỉnh u và v được gọi là liền kề trong đồ thị vô hướng G nếu {u, v} là 1 cạnh của G.
  - Nếu e = {u, v} thì e được gọi là cạnh liên thuộc với đỉnh u và đỉnh v. Cạnh e cũng gọi là cạnh nối các đỉnh u và v.

<div align='center'>
    <img alt='Đỉnh liền kề' src='https://res.cloudinary.com/ddsypxjol/image/upload/v1662546290/To%C3%A1n%20r%E1%BB%9Di%20r%E1%BA%A1c/Gi%E1%BB%9Bi%20thi%E1%BB%87u%20v%E1%BB%81%20%C4%91%E1%BB%93%20th%E1%BB%8B/DinhLienKe_z7xrc2.jpg' />
</div>

<p align='center'>b và c được gọi là 2 đỉnh liền kề trong đồ thị</p>
<p align='center'>cạnh (b, c) được gọi là cạnh liên thuộc trong đồ thị</p>

- **Bậc:**

  - Bậc của một đỉnh trong đồ thị vô hướng là số cạnh liên thuộc với nó. Riêng khuyên tại 1 đỉnh được tính là 2 lần cho bậc của nó.
  - Người ta kí hiệu bậc của đỉnh v là deg(v)

<div align='center'>
    <img alt='Bậc' src='https://res.cloudinary.com/ddsypxjol/image/upload/v1662546283/To%C3%A1n%20r%E1%BB%9Di%20r%E1%BA%A1c/Gi%E1%BB%9Bi%20thi%E1%BB%87u%20v%E1%BB%81%20%C4%91%E1%BB%93%20th%E1%BB%8B/Bac_p0zsgj.jpg' />
</div>
<p align='center'>Ví dụ: deg(b) = 6 (Vì b có 4 cạnh liên thuộc và 1 khuyên)</p>

- **Định lý (Bắt tay):**

<p align="center">- Cho G = (V, E) là một đồ thị vô hướng có e cạnh. Khi đó</p>
<p align="center">2e = &#8721;deg(v) (v &#8712; V)</p>

- **Đỉnh đầu, đỉnh cuối**:

  - Khi (u, v) là cạnh của đồ thị có hướng G, thì u gọi là nối tới v, và v được gọi là được nối từ u.
  - Đỉnh u gọi là đỉnh đầu, đỉnh v được gọi là đỉnh cuối của cạnh (u, v). Đỉnh đầu và đỉnh cuối của khuyên trùng nhau

<div align='center'>
    <img alt='Đỉnh đầu và đỉnh cuối' src='https://res.cloudinary.com/ddsypxjol/image/upload/v1662546289/To%C3%A1n%20r%E1%BB%9Di%20r%E1%BA%A1c/Gi%E1%BB%9Bi%20thi%E1%BB%87u%20v%E1%BB%81%20%C4%91%E1%BB%93%20th%E1%BB%8B/DinhDauVaDinhCuoi_iabui0.jpg' />
</div>
<p align='center'>Trong cạnh (a, b) thì a được gọi là đỉnh đầu và b được gọi là đỉnh cuối</p>

- **Bậc vào, ra:**

  - Trong đồ thị có hướng, bậc vào của đỉnh v là số đỉnh nối tới v. Bậc ra của đỉnh v là số các đỉnh nối từ v. Khuyên được tính là 1 bậc vào và 1 bậc ra.
  - Bậc vào kí hiệu là deg<sup>-</sup>(v), bậc ra kí hiệu là deg<sup>+</sup>(v)

<div align='center'>
    <img alt='Bậc vào ra' src='https://res.cloudinary.com/ddsypxjol/image/upload/v1662546284/To%C3%A1n%20r%E1%BB%9Di%20r%E1%BA%A1c/Gi%E1%BB%9Bi%20thi%E1%BB%87u%20v%E1%BB%81%20%C4%91%E1%BB%93%20th%E1%BB%8B/BacVaoRa_olxyi2.jpg' />
</div>

<p align='center'>deg<sup>-</sup>(a) = 2 (1 khuyên và 1 cạnh nối tới a là cạnh (e, a) )</p>
<p align='center'>deg<sup>+</sup>(a) = 4 (1 khuyên và 3 cạnh nối từ a là (a, c), (a, b), (a, e) )</p>

- **Định lý:**
<p align="center">Gọi G = (V, E) là một đồ thị có hướng. Khi đó</p>
<p align="center">&#8721;deg<sup>-</sup>(v) = &#8721;deg<sup>+</sup>(v) = e (Với e là số cạnh và v &#8712; V)</p>

### Một số đơn đồ thị đặc biệt

- **Đồ thị đầy đủ:**

  - Đồ thị đầy đủ gồm n đỉnh, ký hiệu là K<sub>n</sub> là đơn đồ thị có đúng một cạnh nối mỗi cặp đỉnh phân biệt
  - Đồ thị đầy đủ gồm n đỉnh và **n\*(n - 1) / 2** cạnh

<div align='center'>
    <img alt='Đồ thị đầy đủ' src='https://res.cloudinary.com/ddsypxjol/image/upload/v1662546305/To%C3%A1n%20r%E1%BB%9Di%20r%E1%BA%A1c/Gi%E1%BB%9Bi%20thi%E1%BB%87u%20v%E1%BB%81%20%C4%91%E1%BB%93%20th%E1%BB%8B/DoThiDayDu_eyelft.jpg' />
</div>
- **Đồ thị vòng:**

- Đồ thị vòng C<sub>n</sub>, với n >= 3 là một đồ thị có n đỉnh và n cạnh. Và các đỉnh được nối với nhau thành 1 vòng

<div align='center'>
    <img alt='Đồ thị vòng' src='https://res.cloudinary.com/ddsypxjol/image/upload/v1662546312/To%C3%A1n%20r%E1%BB%9Di%20r%E1%BA%A1c/Gi%E1%BB%9Bi%20thi%E1%BB%87u%20v%E1%BB%81%20%C4%91%E1%BB%93%20th%E1%BB%8B/DoThiVong_bayph8.jpg' />
</div>

- **Đồ thị bánh xe:**

  - Khi thêm một đỉnh vào vòng C<sub>n</sub> với n >= 3 và nối đỉnh này với mỗi đỉnh trong C<sub>n</sub> bằng một cạnh mới ta nhận được đồ thị bánh xe W<sub>n</sub>
  - Đồ thị bánh xe W<sub>n</sub> có n đỉnh và 2 \* n cạnh

<div align='center'>
    <img alt='Đồ thị bánh xe' src='https://res.cloudinary.com/ddsypxjol/image/upload/v1662546300/To%C3%A1n%20r%E1%BB%9Di%20r%E1%BA%A1c/Gi%E1%BB%9Bi%20thi%E1%BB%87u%20v%E1%BB%81%20%C4%91%E1%BB%93%20th%E1%BB%8B/DoThiBanhXe_kmgfcp.jpg' />
</div>

- **Các khối n chiều**

  - Các khối n chiều, ký hiệu là Q<sub>n</sub> là các đồ thị có 2<sup>n</sup> đỉnh và 2 \* 2<sup>n - 1</sup> cạnh

<div align='center'>
    <img alt='Các khối n chiều' src='https://res.cloudinary.com/ddsypxjol/image/upload/v1662546285/To%C3%A1n%20r%E1%BB%9Di%20r%E1%BA%A1c/Gi%E1%BB%9Bi%20thi%E1%BB%87u%20v%E1%BB%81%20%C4%91%E1%BB%93%20th%E1%BB%8B/CacKhoiNChieu_jsofij.jpg' />
</div>
- **Đồ thị hai phần:**

- Một đồ thị được gọi là 2 phần nếu tập đỉnh V có thể phần hoạch thành 2 tập V1 và V2 sao cho mỗi cạnh của đồ thị nối 1 đỉnh của V1 tới một đỉnh của V2. (Các phần tử trong cùng một tập thì không nối với nhau)

<div align='center'>
    <img alt='Đồ thị 2 phần' src='https://res.cloudinary.com/ddsypxjol/image/upload/v1662546295/To%C3%A1n%20r%E1%BB%9Di%20r%E1%BA%A1c/Gi%E1%BB%9Bi%20thi%E1%BB%87u%20v%E1%BB%81%20%C4%91%E1%BB%93%20th%E1%BB%8B/DoThi2Phan_q5hl3m.jpg' />
</div>

- **Đồ thị 2 phần đầy đủ:**
  - Đồ thị phân đôi đầy đủ K<sub>m<sub>,</sub></sub><sub>n</sub> là đồ thị có tập đỉnh được phân hoạch thành hai tập con tướng ứng có m đỉnh và n đỉnh. Và mỗi đỉnh thuộc 1 tập sẽ nối tới tất cả các đỉnh thuộc tập kia.
  - Đồ thị phân đôi đầy đủ có m + n đỉnh và m \* n cạnh.

<div align='center'>
    <img alt='Đồ thị 2 phần đầy đủ' src='https://res.cloudinary.com/ddsypxjol/image/upload/v1662546298/To%C3%A1n%20r%E1%BB%9Di%20r%E1%BA%A1c/Gi%E1%BB%9Bi%20thi%E1%BB%87u%20v%E1%BB%81%20%C4%91%E1%BB%93%20th%E1%BB%8B/DoThi2PhanDayDu_fxvelz.jpg' />
</div>

3 điều kiện cần để 2 đồ thị đẳng cấu:

- Số đỉnh phải bằng nhau
- Số cạnh phải bằng nhau
- Số bậc của các đỉnh phải như nhau
- Có cùng độ dài chu trình
