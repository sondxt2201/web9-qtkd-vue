<template>
        <div class="toast-wrapper">
        <div class="toast-success">
            <div class="toast-left flex">
                <div class="mi-icon mi-icon-medium toast-icon mi-toast-icon-success"></div>
                <span class="toast-title">Thành công!</span>
                <span class="toast-content">Công việc đã bị xoá.</span>
            </div>

            <div class="toast-right flex">
                <span class="toast-undo">Hoàn tác</span>
                <div class="mi-icon mi-icon-small mi-toast-icon-quit"></div>
            </div>
        </div>

        <div class="toast-error">
            <div class="toast-left flex">
                <div class="mi-icon mi-icon-medium toast-icon mi-toast-icon-error"></div>
                <span class="toast-title">Lỗi!</span>
                <span class="toast-content">Không thể cập nhật dữ liệu vui lòng kiểm tra lại internet.</span>
            </div>

            <div class="toast-right flex">
                <span class="toast-undo">Xem hướng dẫn</span>
                <div class="mi-icon mi-icon-small mi-toast-icon-quit"></div>
            </div>
        </div>

        <div class="toast-warning">
            <div class="toast-left flex">
                <div class="mi-icon mi-icon-big toast-icon mi-toast-icon-warning"></div>
                <span class="toast-title">Cảnh báo!</span>
                <span class="toast-content">Dữ liệu của bạn đã bị thay đổi bởi người dùng khác.</span>
            </div>

            <div class="toast-right flex">
                <span class="toast-undo"></span>
                <div class="mi-icon mi-icon-small mi-toast-icon-quit"></div>
            </div>
        </div>

        <div class="toast-info">
            <div class="toast-left flex">
                <div class="mi-icon mi-icon-medium toast-icon mi-toast-icon-info"></div>
                <span class="toast-title">Thông tin!</span>
                <span class="toast-content">Bạn nên đọc kỹ nội dung trước khi gửi phê duyệt.</span>
            </div>

            <div class="toast-right flex">
                <span class="toast-undo"></span>
                <div class="mi-icon mi-icon-small mi-toast-icon-quit"></div>
            </div>
        </div>
    </div>
</template>

