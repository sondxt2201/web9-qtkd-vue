<template>
    <div class="dialog-wrapper" id="dialog-wrapper">

        <div class="dialog-warning" id="dialog-warning-employeeCode">
            <div class="dialog-body flex">
                <div class="mi-icon mi-icon-large dialog-icon mi-dialog-icon-warning"></div>
                <div class="dialog-content">
                    Mã nhân viên không được để trống
                </div>
            </div>
            <div class="dialog-footer flex">
                <button class="close-button button dlg-btnEsc">Đóng</button>
            </div>
        </div>

        <div class="dialog-warning" id="dialog-warning-fullName">
            <div class="dialog-body flex">
                <div class="mi-icon mi-icon-large dialog-icon mi-dialog-icon-warning"></div>
                <div class="dialog-content">
                    Tên không được để trống
                </div>
            </div>
            <div class="dialog-footer flex">
                <button class="close-button button dlg-btnEsc">Đóng</button>
            </div>
        </div>

        <div class="dialog-warning" id="dialog-warning-required">
            <div class="dialog-body flex">
                <div class="mi-icon mi-icon-large dialog-icon mi-dialog-icon-warning"></div>
                <div class="dialog-content">
                    Tên và mã nhân viên không được để trống
                </div>
            </div>
            <div class="dialog-footer flex">
                <button class="close-button button dlg-btnEsc">Đóng</button>
            </div>
        </div>

        <div class="dialog-warning" id="dialog-warning-dob">
            <div class="dialog-body flex">
                <div class="mi-icon mi-icon-large dialog-icon mi-dialog-icon-warning"></div>
                <div class="dialog-content">
                    Ngày sinh không được lớn hơn ngày hiện tại
                </div>
            </div>
            <div class="dialog-footer flex">
                <button class="close-button button dlg-btnEsc">Đóng</button>
            </div>
        </div>

        <div class="dialog-warning" id="dialog-warning-idNumber">
            <div class="dialog-body flex">
                <div class="mi-icon mi-icon-large dialog-icon mi-dialog-icon-warning"></div>
                <div class="dialog-content">
                    Số CMND không được để trống
                </div>
            </div>
            <div class="dialog-footer flex">
                <button class="close-button button dlg-btnEsc">Đóng</button>
            </div>
        </div>

        <div class="dialog-warning" id="dialog-warning-department">
            <div class="dialog-body flex">
                <div class="mi-icon mi-icon-large dialog-icon mi-dialog-icon-warning"></div>
                <div class="dialog-content">
                    Đơn vị không được để trống
                </div>
            </div>
            <div class="dialog-footer flex">
                <button class="close-button button dlg-btnEsc">Đóng</button>
            </div>
        </div>

        <div class="dialog-warning" id="dialog-warning-required">
            <div class="dialog-body flex">
                <div class="mi-icon mi-icon-large dialog-icon mi-dialog-icon-warning"></div>
                <div class="dialog-content">
                    Tên và mã nhân viên không được để trống
                </div>
            </div>
            <div class="dialog-footer flex">
                <button class="close-button button dlg-btnEsc">Đóng</button>
            </div>
        </div>

        <div class="dialog-warning" id="dialog-warning-phone">
            <div class="dialog-body flex">
                <div class="mi-icon mi-icon-large dialog-icon mi-dialog-icon-warning"></div>
                <div class="dialog-content">
                    Số điện thoại vừa nhập sai định dạng, vui lòng nhập lại
                </div>
            </div>
            <div class="dialog-footer flex">
                <button class="close-button button dlg-btnEsc">Đóng</button>
            </div>
        </div>

        <div class="dialog-warning" id="dialog-warning-email">
            <div class="dialog-body flex">
                <div class="mi-icon mi-icon-large dialog-icon mi-dialog-icon-warning"></div>
                <div class="dialog-content">
                    Email vừa nhập sai định dạng, vui lòng nhập lại
                </div>
            </div>
            <div class="dialog-footer flex">
                <button class="close-button button dlg-btnEsc">Đóng</button>
            </div>
        </div>




        <div class="dialog-error">
            <div class="dialog-body flex">
                <div class="mi-icon mi-icon-large dialog-icon mi-dialog-icon-error"></div>
                <div class="dialog-content">
                    Mã nhân viên NV-00001 đã tồn tại trong hệ thống, vui lòng kiểm tra lại
                </div>
            </div>
            <div class="dialog-footer flex">
                <button class="close-button button dlg-btnEsc">Đóng</button>
            </div>
        </div>

        <div class="dialog-deleterequest">
            <div class="dialog-body flex">
                <div class="mi-icon mi-icon-large dialog-icon mi-dialog-icon-deleterequest"></div>
                <div class="dialog-content">
                    Bạn có thực sự muốn xoá Nhân viên NV-00001 không?
                </div>
            </div>
            <div class="dialog-footer flex">
                <button class="decline-button button white-background">Không</button>
                <button class="accept-button button">Có</button>

            </div>
        </div>

        <div class="dialog-saverequest">
            <div class="dialog-body flex">
                <div class="mi-icon mi-icon-large dialog-icon mi-dialog-icon-saverequest"></div>
                <div class="dialog-content">
                    Dữ liệu đã bị thay đổi. Bạn có muốn cất không?
                </div>
            </div>
            <div class="dialog-footer flex">
                <button class="cancel button dlg-btnEsc">Huỷ</button>
                <div class="dialog-footer-right flex">
                    <button class="decline button">Không</button>
                    <button class="accept-button button">Có</button>
                </div>
            </div>
        </div>


    </div>
</template>
