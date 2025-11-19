document.addEventListener('DOMContentLoaded', function() {
    // 1. Lấy ngày Dương Lịch hiện tại
    const today = new Date();
    
    // 2. Định dạng hiển thị Dương Lịch
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const duongLichString = today.toLocaleDateString('vi-VN', options);

    // Hiển thị Dương Lịch lên giao diện
    document.getElementById('duongLichDate').textContent = duongLichString;

    // 3. Chuyển đổi sang Âm Lịch bằng thư viện
    // Thư viện VietnameseLunarCalendar.js đã được tải ở tệp HTML
    const lunar = new VietnameseLunarCalendar();
    
    // Sử dụng hàm convertSolar2Lunar() của thư viện
    // Hàm này trả về một đối tượng chứa ngày, tháng, năm âm lịch
    const lunarDate = lunar.convertSolar2Lunar({
        day: today.getDate(),
        month: today.getMonth() + 1, // JavaScript month từ 0-11, nên phải +1
        year: today.getFullYear(),
        timeZone: 7 // Múi giờ Việt Nam
    });

    // 4. Tạo chuỗi hiển thị Âm Lịch
    const amLichString = 
        `Ngày ${lunarDate.day} - Tháng ${lunarDate.month} - Năm ${lunarDate.year} 
        (${lunarDate.isLeap ? 'Nhuận' : 'Thường'})`;
        
    // 5. Hiển thị Âm Lịch lên giao diện
    document.getElementById('amLichDate').textContent = amLichString;
});