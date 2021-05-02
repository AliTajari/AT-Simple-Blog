
<p align="center">
  <img width="150" height="150" src="./assets/images/logo.svg">
</p>

<h3 align="center">AT Simple Blog</h3>

<p align="center">
    <br>
    This is a simple, RTL and responsive HTML blog template. it's built with Bootstrap v4.5.2 framework and jQuery.
    <br>
    <a href="https://github.com/AliTajari/AT-Simple-Blog/issues/new">Report bug</a>
    ·
    <a href="https://github.com/AliTajari/AT-Simple-Blog/issues/new">Request feature</a>
    .
    <a href="https://alitajari.github.io/AT-Simple-Blog/index.html">Demo</a>
</p>
<p align="center" dir="rtl">
    <br>
    قالب html ساده، راستچین و واکنشگرا. ساخته شده با فریم ورک Bootstrap v4.5.2 و جی کوئری.
    <br>
    <a href="https://github.com/AliTajari/AT-Simple-Blog/issues/new">گزارش ایراد</a>
    ·
    <a href="https://github.com/AliTajari/AT-Simple-Blog/issues/new">درخواست امکانات</a>
    .
    <a href="https://alitajari.github.io/AT-Simple-Blog/index.html">پیش نمایش</a>
</p>
<br><br><br>

<div align="right" dir="rtl">

# صفحات آماده شده
*   صفحه نخست
*   جزئیات مطلب
*   تماس با ما

<br><br>

# توضیحات بیشتر
فرم های قالب پیش روی شما به صورت پیشفرض در سمت کاربر، اعتبارسنجی می شوند.
<br>
همچنین در بخش نظرات در صفحه جزئیات مطلب، امکان پاسخ به یک نظر دیگر کدنویسی شده.
<br>

استایل این قالب با استفاده Sass و در فرمت SCSS سبکدهی شده است.

این قالب از فونت فارسی بهینه شده برای وب <a href="https://rastikerdar.github.io/vazir-font/" target="_blank"><strong>وزیر</strong></a> و <a href="https://rastikerdar.github.io/sahel-font/" target="_blank"><strong>ساحل</strong></a> استفاده می کند. فونت پیشفرض قالب <strong>فونت ساحل</strong> است.

<br><br>

# راهنمای استفاده
## اعتبارسنجی فرم ها
اگر علاقه ای به اعتبار سنجی هر کدام از فیلدهای فرم ندارید. می توانید مقادیر صفت `data-validate` رو حذف کنید.

<div dir="ltr" align="left">

```html
// مقادیر قابل قبول required, email هستند.
// در صورتی که برای اعتبار سنجی نیاز به بیشتر از یک فیلتر دارید باید با علامت ویرگول (,) از هم جدا شوند.
// فیلتر required جهت بررسی خالی نبودن ورودی مورد استفاده قرار می گیرد
// فیلتر email برای بررسی درستی ساختار ایمیل وارد شده مورد استفاده قرار می گیرد.

// اعمال فیلتر اجباری
<input type="text" data-validate="required">
// اعمال فیلتر اجباری و بررسی درستی ایمیل
<input type="email" data-validate="required, email">
// بدون فیلتر اعتبار سنجی
<input type="text">
```
</div>

<br>

## ارسال پاسخ به دیدگاه
برای ثبت پاسخ به یک دیدگاه، یک دکمه در کنار هر دیدگاه در صفحه جزئیات مطلب قرار داده شده. این دکمه یک صفت به عنوان `data-commentserial` دارد که شما می توانید کد اختصاصی مربوط به اون دیدگاه رو ثبت کنید.
پس از آنکه کاربر بر روی دکمه پاسخ کلیک کند، کد مربوط به دیدگاه کاربر در یک ورودی با نام `replyTo` ریخته خواهد شد و پس از ثبت دیدگاه توسط کاربر مقدار این ورودی نیز به همراه دیگر مقادیر فرم به سمت سرور ارسال خواهد شد.

<br>

## تغییر فونت پیشفرض
اگر قصد تغییر فونت قالب را دارید میتوانید به مسیر `assets / styles / scss / style.scss`
رفته و فایل را باز کنید و در خط `12` کد کامنت شده رو از حالت کامنت خارج کنید و در خط `13` کد مربوط به فونت ساحل را کامنت نمایید. سپس اقدام به کامپایل کردن مجدد فایل SCSS نمایید.
در صورتی که قصد ندارید از فایل Sass استفاده نمایید می توانید در مسیر `assets / styles / style.scss` فایل را باز نمایید و در خط `9` کد مربوط به فونت قالب را حذف کنید و قطعه کد زیر را جایگزین کد فعلی نمایید.

<div dir="ltr" align="left">

```CSS
@import 'font_vazir.css';
```
</div>

<br><br>

# مجوز استفاده از محصول
علی تجری - دی ماه 1399

کد منتشر شده تحت مجوز <a href="https://mit-license.org/" target="_blank">MIT</a> قابل استفاده است.

</div>

<br><br>

# Copyright & License
Ali Tajari - December 2020

Code released under the <a href="https://mit-license.org/" target="_blank">MIT</a> License.