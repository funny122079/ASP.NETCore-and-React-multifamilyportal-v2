namespace MultiFamilyPortal
{
    public static class FileTypeLookup
    {
        public static FileTypeInfo? GetFileTypeInfo(string fileName)
        {
            var extension = Path.GetExtension(fileName).ToLower();
            if(extension is null)
                return null;

            return _fileTypes.FirstOrDefault(x => x.Extension == extension);
        }

        public static string GetColorFromIcon(string icon) =>
            _fileTypes.FirstOrDefault(x => x.Icon == icon)?.Color ?? "#000000";

        private static readonly FileTypeInfo[] _fileTypes = new[]
        {
            new FileTypeInfo
            {
                Extension = ".rar",
                Name = "Rar",
                Icon = "fa-regular fa-file-zipper",
                MimeType = "application/x-rar-compressed",
                Color = "#00559F",
            },
            new FileTypeInfo
            {
                Extension = ".zip",
                Name = "Zip",
                Icon = "fa-regular fa-file-zipper",
                MimeType = "application/zip",
                Color = "#F34F1C",
            },
            new FileTypeInfo
            {
                Extension = ".pdf",
                Name = "PDF",
                Icon = "fa-regular fa-file-pdf",
                MimeType = "application/pdf",
                Color = "#F40F02",
            },
            new FileTypeInfo
            {
                Extension = ".xlsx",
                Name = "Excel",
                Icon = "fa-regular fa-file-excel",
                MimeType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                Color = "#1D6F42",
            },
            new FileTypeInfo
            {
                Extension = ".xltx",
                Name = "Excel",
                Icon = "fa-regular fa-file-excel",
                MimeType = "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
                Color = "#1D6F42",
            },
            new FileTypeInfo
            {
                Extension = ".xlsm",
                Name = "Excel",
                Icon = "fa-regular fa-file-excel",
                MimeType = "application/vnd.ms-excel.sheet.macroEnabled.12",
                Color = "#1D6F42",
            },
            new FileTypeInfo
            {
                Extension = ".xltm",
                Name = "Excel",
                Icon = "fa-regular fa-file-excel",
                MimeType = "application/vnd.ms-excel.template.macroEnabled.12",
                Color = "#1D6F42",
            },
            new FileTypeInfo
            {
                Extension = ".xlam",
                Name = "Excel",
                Icon = "fa-regular fa-file-excel",
                MimeType = "application/vnd.ms-excel.addin.macroEnabled.12",
                Color = "#1D6F42",
            },
            new FileTypeInfo
            {
                Extension = ".xlsb",
                Name = "Excel",
                Icon = "fa-regular fa-file-excel",
                MimeType = "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
                Color = "#1D6F42",
            },
            new FileTypeInfo
            {
                Extension = ".xls",
                Name = "Excel",
                Icon = "fa-regular fa-file-excel",
                MimeType = "application/vnd.ms-excel",
                Color = "#1D6F42",
            },
            new FileTypeInfo
            {
                Extension = ".xlt",
                Name = "Excel",
                Icon = "fa-regular fa-file-excel",
                MimeType = "application/vnd.ms-excel",
                Color = "#1D6F42",
            },
            new FileTypeInfo
            {
                Extension = ".xla",
                Name = "Excel",
                Icon = "fa-regular fa-file-excel",
                MimeType = "application/vnd.ms-excel",
                Color = "#1D6F42",
            },


            new FileTypeInfo
            {
                Extension = ".doc",
                Name = "Word",
                Icon = "fa-regular fa-file-word",
                MimeType = "application/msword",
                Color = "#01A6F0",
            },
            new FileTypeInfo
            {
                Extension = ".dot",
                Name = "Word",
                Icon = "fa-regular fa-file-word",
                MimeType = "application/msword",
                Color = "#01A6F0",
            },
            new FileTypeInfo
            {
                Extension = ".docx",
                Name = "Word",
                Icon = "fa-regular fa-file-word",
                MimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                Color = "#01A6F0",
            },
            new FileTypeInfo
            {
                Extension = ".dotx",
                Name = "Word",
                Icon = "fa-regular fa-file-word",
                MimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
                Color = "#01A6F0",
            },
            new FileTypeInfo
            {
                Extension = ".docm",
                Name = "Word",
                Icon = "fa-regular fa-file-word",
                MimeType = "application/vnd.ms-word.document.macroEnabled.12",
                Color = "#01A6F0",
            },
            new FileTypeInfo
            {
                Extension = ".dotm",
                Name = "Word",
                Icon = "fa-regular fa-file-word",
                MimeType = "application/vnd.ms-word.template.macroEnabled.12",
                Color = "#01A6F0",
            },

            new FileTypeInfo
            {
                Extension = ".ico",
                Name = "Icon",
                Icon = "fa-regular fa-file-image",
                MimeType = "image/x-icon",
                Color = "#000000",
            },
            new FileTypeInfo
            {
                Extension = ".jpeg",
                Name = "JPEG",
                Icon = "fa-regular fa-file-image",
                MimeType = "image/jpeg",
                Color = "#000000",
            },
            new FileTypeInfo
            {
                Extension = ".jpg",
                Name = "JPEG",
                Icon = "fa-regular fa-file-image",
                MimeType = "image/jpeg",
                Color = "#000000",
            },
            new FileTypeInfo
            {
                Extension = ".png",
                Name = "PNG",
                Icon = "fa-regular fa-file-image",
                MimeType = "image/png",
                Color = "#000000",
            },
            new FileTypeInfo
            {
                Extension = ".svg",
                Name = "SVG",
                Icon = "fa-regular fa-file-image",
                MimeType = "image/svg+xml",
                Color = "#000000",
            }
        };
    }
}
