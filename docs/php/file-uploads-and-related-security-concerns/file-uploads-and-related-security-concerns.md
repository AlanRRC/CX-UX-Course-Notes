---
title: File Uploads
nav_order: 7
---

<!-- prettier-ignore-start -->
# File Uploads 
{: .no_toc }

PHP makes it easy to upload files to our web server by way of an HTML form.

The upload files are stored in temporary directory with file details stored in a `$_FILES` super-global.

## Table of Contents
{: .no_toc }

1. TOC
{:toc}

<!-- prettier-ignore-end -->

## Introduction

![Introduction](Upload.png){:class="small inline"}

PHP makes it easy to upload files to our web server by way of an HTML form.

The upload files are stored in temporary directory with file details stored in a `$_FILES` super-global.

## Objectives

Upon completion of this module, you should be able to:

- Create HTML forms configured to allow for file uploads.
- Retrieve upload details from the `$_FILES` super-global.
- Move uploaded file from temporary storage to a known file-system location.
- Perform security related tests on uploaded files.

## File Upload Forms

<!DOCTYPE html>
<html>
    <head><title>File Upload Form</title></head>
<body>
    <form method="post" enctype="multipart/form-data">
        <label for="image">Image Filename:</label>
        <input type="file" name="image" id="image">
        <input type="submit" name="submit" value="Upload Image">
    </form>
</body>
</html>
{: lang=html }

This form will allow users to browse for a single local file and upload it when the form is submitted.

Note that the form element has an extra attribute named `enctype` that has been set to `multipart/form-data`. This attribute is required in order for the upload dialog to function properly. Also required is a `method` attribute with a value of `post`.

#### Resources

- [PHP File Uploads @ W3Schools](http://www.w3schools.com/php/php_file_upload.asp)

## File Upload Meta-Data

Details about each file input in our HTML form will be accessibly by name in the `$_FILES` super-global.

The name attribute of our file input in the previously shown form was `image`, so we look in `$_FILES['image']`.

```php
<?php if (isset($_FILES['image']) && $_FILES['image']['error'] > 0): ?>

    <p>Error Number: <?= $_FILES['image']['error'] ?></p>

<?php elseif (isset($_FILES['image'])): ?>

    <p>Client-Side Filename: <?= $_FILES['image']['name'] ?></p>
    <p>Apparent Mime Type:   <?= $_FILES['image']['type'] ?></p>
    <p>Size in Bytes:        <?= $_FILES['image']['size'] ?></p>
    <p>Temporary Path:       <?= $_FILES['image']['tmp_name'] ?></p>

<?php endif ?>
```

**Tips & Gotchas:**

1. The file metadata is not accessed through the `$_POST` super-global, but instead through the `$_FILES` super-global.

2. The uploaded file will be deleted from the temporary path automatically after this script finishes executing.

3. `$_FILES["image"]["error"]` is an error number:

- `0`: No error. File upload successful.
- `1`: Maximum file-size, as specified in `php.ini`, exceeded.
- `4`: No file uploaded with POST. Not actually an error for forms where file uploads are optional.

#### Resources

- [$\_FILES @ PHP.net](https://php.net/manual/en/reserved.variables.files.php)
- [All File Upload Error Codes @ PHP.net](https://php.net/manual/en/features.file-upload.errors.php)

## Saving an Uploaded File

In order to save an uploaded file your PHP script must move it to a known location on your file-system.

```php
<?php
    function file_upload_path($original_filename, $upload_subfolder_name = 'uploads') {
       $current_folder = dirname(__FILE__);
       $path_segments = [$current_folder, $upload_subfolder_name, basename($original_filename)];
       return join(DIRECTORY_SEPARATOR, $path_segments);
    }

    $image_upload_detected = isset($_FILES['image']) && ($_FILES['image']['error'] === 0);

    if ($image_upload_detected) {
        $image_filename       = $_FILES['image']['name'];
        $temporary_image_path = $_FILES['image']['tmp_name'];
        $new_image_path       = file_upload_path($image_filename);

        move_uploaded_file($temporary_image_path, $new_image_path);
    }
?>
```

#### Resources

- [dirname() @ PHP.net](https://php.net/manual/en/function.dirname.php)
- [basename() @ PHP.net](https://php.net/manual/en/function.basename.php)
- [move_uploaded_file() @ PHP.net](https://php.net/manual/en/function.move-uploaded-file.php)

## Security Implications

![Vulnerabilities Make Me Scream](NUCLEAR_DANGER.png){:class="small inline"}

By allowing file uploads we are giving our users write-access to our file-system. This can be a very dangerous move.

Imagine the following scenario:

1. Attacker creates a malicious PHP script named `p0wn.php`.
2. Attacker uploads this script using our PHP upload form, causing the file to be moved to known location.  
   For example, the file might be moved to a `/uploads/` folder.
3. Attacker accesses the uploaded script at the known location by URL:  
   `http://host.ca/uploads/p0wn.php`

An example `p0wn.php` file:

```php
<?php system($_GET['command']) ?>
```

This script would allow a hacker to execute any command on your system under the same security permissions as the Apache user. Here is our hacker deleting everything in the current directory:

`http://host.ca/uploads/p0wn.php?command=rm%20-rf%20.`

(Remember that `%20` in a URL means a space.)

## Testing For Images

File uploads can be checked for _"image-ness"_ by looking at the temporary file path, the potential new path, and the file mime-type.

```php
<?php
    function file_is_an_image($temporary_path, $new_path) {
        $allowed_mime_types      = ['image/gif', 'image/jpeg', 'image/png'];
        $allowed_file_extensions = ['gif', 'jpg', 'jpeg', 'png'];

        $actual_file_extension   = pathinfo($new_path, PATHINFO_EXTENSION);
        $actual_mime_type        = getimagesize($temporary_path)['mime'];

        $file_extension_is_valid = in_array($actual_file_extension, $allowed_file_extensions);
        $mime_type_is_valid      = in_array($actual_mime_type, $allowed_mime_types);

        return $file_extension_is_valid && $mime_type_is_valid;
    }
?>
```

#### Resources

- [pathinfo() @ PHP.net](https://php.net/manual/en/function.pathinfo.php)
- [getimagesize() @ PHP.net](https://php.net/manual/en/function.getimagesize.php)
- [in_array() @ PHP.net](https://php.net/manual/en/function.in-array.php)

## Filtering Out Non-Image Uploads

If you are only accepting image uploads, then only move the uploaded file when it's an image:

```php
<?php
    $image_upload_detected = isset($_FILES['image']) && ($_FILES['image']['error'] === 0);

    if ($image_upload_detected) {
        $image_filename       = $_FILES['image']['name'];
        $temporary_image_path = $_FILES['image']['tmp_name'];
        $new_image_path       = file_upload_path($image_filename);

        if (file_is_an_image($temporary_image_path, $new_image_path)) {
            move_uploaded_file($temporary_image_path, $new_image_path);
        }
    }
?>
```
