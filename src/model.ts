/*
* The MIT License (MIT)
*
* Copyright (c) Aspose Pty Ltd
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

export class ApiError {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "code",
            baseName: "code",
            type: "string",
        },        
        {
            name: "message",
            baseName: "message",
            type: "string",
        },        
        {
            name: "description",
            baseName: "description",
            type: "string",
        },        
        {
            name: "dateTime",
            baseName: "dateTime",
            type: "Date",
        },        
        {
            name: "innerError",
            baseName: "innerError",
            type: "ApiError",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ApiError.attributeTypeMap;
    }

    public code: string;
    
    public message: string;
    
    public description: string;
    
    public dateTime: Date;
    
    public innerError: ApiError;
    
    public constructor(init?: Partial<ApiError>) {
        
        Object.assign(this, init);
    }        
}

export class ApiErrorResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "requestId",
            baseName: "requestId",
            type: "string",
        },        
        {
            name: "error",
            baseName: "error",
            type: "ApiError",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ApiErrorResponse.attributeTypeMap;
    }

    public requestId: string;
    
    public error: ApiError;
    
    public constructor(init?: Partial<ApiErrorResponse>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Metered license consumption information
 */
export class ConsumptionResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "credit",
            baseName: "credit",
            type: "number",
        },        
        {
            name: "quantity",
            baseName: "quantity",
            type: "number",
        },        
        {
            name: "billedApiCalls",
            baseName: "billedApiCalls",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ConsumptionResult.attributeTypeMap;
    }

    /**
     * Amount of used credits
     */
    public credit: number;
    
    /**
     * Amount of MBs processed
     */
    public quantity: number;
    
    /**
     * Billed API calls number
     */
    public billedApiCalls: number;
    
    public constructor(init?: Partial<ConsumptionResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Class for disc space information.
 */
export class DiscUsage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "usedSize",
            baseName: "usedSize",
            type: "number",
        },        
        {
            name: "totalSize",
            baseName: "totalSize",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DiscUsage.attributeTypeMap;
    }

    /**
     * Application used disc space.
     */
    public usedSize: number;
    
    /**
     * Total disc space.
     */
    public totalSize: number;
    
    public constructor(init?: Partial<DiscUsage>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes document result
 */
export class DocumentResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "path",
            baseName: "path",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DocumentResult.attributeTypeMap;
    }

    /**
     * Path of the output document
     */
    public path: string;
    
    public constructor(init?: Partial<DocumentResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The error details
 */
export class ErrorDetails {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "requestId",
            baseName: "requestId",
            type: "string",
        },        
        {
            name: "date",
            baseName: "date",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ErrorDetails.attributeTypeMap;
    }

    /**
     * The request id
     */
    public requestId: string;
    
    /**
     * Date
     */
    public date: Date;
    
    public constructor(init?: Partial<ErrorDetails>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes file properties
 */
export class FileInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "filePath",
            baseName: "filePath",
            type: "string",
        },        
        {
            name: "storageName",
            baseName: "storageName",
            type: "string",
        },        
        {
            name: "versionId",
            baseName: "versionId",
            type: "string",
        },        
        {
            name: "password",
            baseName: "password",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileInfo.attributeTypeMap;
    }

    /**
     * File path in storage
     */
    public filePath: string;
    
    /**
     * Storage name
     */
    public storageName: string;
    
    /**
     * Version ID
     */
    public versionId: string;
    
    /**
     * Password to open file
     */
    public password: string;
    
    public constructor(init?: Partial<FileInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File versions FileVersion.
 */
export class FileVersions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<FileVersion>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileVersions.attributeTypeMap;
    }

    /**
     * File versions FileVersion.
     */
    public value: Array<FileVersion>;
    
    public constructor(init?: Partial<FileVersions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Files list
 */
export class FilesList {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<StorageFile>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesList.attributeTypeMap;
    }

    /**
     * Files and folders contained by folder StorageFile.
     */
    public value: Array<StorageFile>;
    
    public constructor(init?: Partial<FilesList>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File upload result
 */
export class FilesUploadResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "uploaded",
            baseName: "uploaded",
            type: "Array<string>",
        },        
        {
            name: "errors",
            baseName: "errors",
            type: "Array<Error>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesUploadResult.attributeTypeMap;
    }

    /**
     * List of uploaded file names
     */
    public uploaded: Array<string>;
    
    /**
     * List of errors.
     */
    public errors: Array<Error>;
    
    public constructor(init?: Partial<FilesUploadResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes file format properties
 */
export class Format {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "extension",
            baseName: "extension",
            type: "string",
        },        
        {
            name: "fileFormat",
            baseName: "fileFormat",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Format.attributeTypeMap;
    }

    /**
     * File extension
     */
    public extension: string;
    
    /**
     * File format
     */
    public fileFormat: string;
    
    public constructor(init?: Partial<Format>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes object which contains list of supported file formats.
 */
export class FormatsResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "formats",
            baseName: "formats",
            type: "Array<Format>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FormatsResult.attributeTypeMap;
    }

    /**
     * Supported file formats.
     */
    public formats: Array<Format>;
    
    public constructor(init?: Partial<FormatsResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes document properties result
 */
export class InfoResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pageCount",
            baseName: "pageCount",
            type: "number",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "isEncrypted",
            baseName: "isEncrypted",
            type: "boolean",
        },        
        {
            name: "fileFormat",
            baseName: "fileFormat",
            type: "string",
        },        
        {
            name: "extension",
            baseName: "extension",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return InfoResult.attributeTypeMap;
    }

    /**
     * Pages count
     */
    public pageCount: number;
    
    /**
     * Document size in bytes
     */
    public size: number;
    
    /**
     * Indicates whether specific file is encrypted and requires password for opening.
     */
    public isEncrypted: boolean;
    
    /**
     * File format
     */
    public fileFormat: string;
    
    /**
     * Document extension
     */
    public extension: string;
    
    public constructor(init?: Partial<InfoResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes load result
 */
export class LoadResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "htmlPath",
            baseName: "htmlPath",
            type: "string",
        },        
        {
            name: "resourcesPath",
            baseName: "resourcesPath",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return LoadResult.attributeTypeMap;
    }

    /**
     * Path of the editable document
     */
    public htmlPath: string;
    
    /**
     * Path of the document resources
     */
    public resourcesPath: string;
    
    public constructor(init?: Partial<LoadResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Error
 */
export class ModelError {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "code",
            baseName: "code",
            type: "string",
        },        
        {
            name: "message",
            baseName: "message",
            type: "string",
        },        
        {
            name: "description",
            baseName: "description",
            type: "string",
        },        
        {
            name: "innerError",
            baseName: "innerError",
            type: "ErrorDetails",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }

    /**
     * Code             
     */
    public code: string;
    
    /**
     * Message             
     */
    public message: string;
    
    /**
     * Description             
     */
    public description: string;
    
    /**
     * Inner Error             
     */
    public innerError: ErrorDetails;
    
    public constructor(init?: Partial<ModelError>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Object exists
 */
export class ObjectExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        },        
        {
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ObjectExist.attributeTypeMap;
    }

    /**
     * Indicates that the file or folder exists.
     */
    public exists: boolean;
    
    /**
     * True if it is a folder, false if it is a file.
     */
    public isFolder: boolean;
    
    public constructor(init?: Partial<ObjectExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes basic options properties
 */
export class Options {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileInfo",
            baseName: "fileInfo",
            type: "FileInfo",
        },        
        {
            name: "outputPath",
            baseName: "outputPath",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Options.attributeTypeMap;
    }

    /**
     * File info
     */
    public fileInfo: FileInfo;
    
    /**
     * The full output path
     */
    public outputPath: string;
    
    public constructor(init?: Partial<Options>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Storage exists
 */
export class StorageExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageExist.attributeTypeMap;
    }

    /**
     * Shows that the storage exists.             
     */
    public exists: boolean;
    
    public constructor(init?: Partial<StorageExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File or folder information
 */
export class StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        },        
        {
            name: "modifiedDate",
            baseName: "modifiedDate",
            type: "Date",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "path",
            baseName: "path",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageFile.attributeTypeMap;
    }

    /**
     * File or folder name.
     */
    public name: string;
    
    /**
     * True if it is a folder.
     */
    public isFolder: boolean;
    
    /**
     * File or folder last modified DateTime.
     */
    public modifiedDate: Date;
    
    /**
     * File or folder size.
     */
    public size: number;
    
    /**
     * File or folder path.
     */
    public path: string;
    
    public constructor(init?: Partial<StorageFile>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File Version
 */
export class FileVersion extends StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "versionId",
            baseName: "versionId",
            type: "string",
        },        
        {
            name: "isLatest",
            baseName: "isLatest",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FileVersion.attributeTypeMap);
    }

    /**
     * File Version ID.
     */
    public versionId: string;
    
    /**
     * Specifies whether the file is (true) or is not (false) the latest version of an file.
     */
    public isLatest: boolean;
    
    public constructor(init?: Partial<FileVersion>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Options for loading documents
 */
export class LoadOptions extends Options {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(LoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<LoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Save options
 */
export class SaveOptions extends Options {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "htmlPath",
            baseName: "htmlPath",
            type: "string",
        },        
        {
            name: "resourcesPath",
            baseName: "resourcesPath",
            type: "string",
        },        
        {
            name: "format",
            baseName: "format",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SaveOptions.attributeTypeMap);
    }

    /**
     * The Html document path
     */
    public htmlPath: string;
    
    /**
     * Resources path
     */
    public resourcesPath: string;
    
    /**
     * Document format
     */
    public format: string;
    
    public constructor(init?: Partial<SaveOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Options for loading text-based Spreadsheet documents (CSV, Tab-based etc.), that use a separator (delimiter)
 */
export class DelimitedTextLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "separator",
            baseName: "separator",
            type: "string",
        },        
        {
            name: "convertDateTimeData",
            baseName: "convertDateTimeData",
            type: "boolean",
        },        
        {
            name: "convertNumericData",
            baseName: "convertNumericData",
            type: "boolean",
        },        
        {
            name: "treatConsecutiveDelimitersAsOne",
            baseName: "treatConsecutiveDelimitersAsOne",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DelimitedTextLoadOptions.attributeTypeMap);
    }

    /**
     * Allows to specify a string separator (delimiter) for text-based Spreadsheet documents             
     */
    public separator: string;
    
    /**
     * Gets or sets a value that indicates whether the string in text-based document is converted to the date data. Default is false.
     */
    public convertDateTimeData: boolean;
    
    /**
     * Gets or sets a value that indicates whether the string in text-based document is converted to numeric data. Default is false.
     */
    public convertNumericData: boolean;
    
    /**
     * Defines whether consecutive delimiters should be treated as one. By default is false.
     */
    public treatConsecutiveDelimitersAsOne: boolean;
    
    public constructor(init?: Partial<DelimitedTextLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Contains options for generating and saving text-based Spreadsheet documents (CSV, Tab-based etc.), that use a separator (delimiter)
 */
export class DelimitedTextSaveOptions extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "separator",
            baseName: "separator",
            type: "string",
        },        
        {
            name: "encoding",
            baseName: "encoding",
            type: "string",
        },        
        {
            name: "trimLeadingBlankRowAndColumn",
            baseName: "trimLeadingBlankRowAndColumn",
            type: "boolean",
        },        
        {
            name: "keepSeparatorsForBlankRow",
            baseName: "keepSeparatorsForBlankRow",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DelimitedTextSaveOptions.attributeTypeMap);
    }

    /**
     * Allows to specify a string separator (delimiter) for text-based Spreadsheet documents
     */
    public separator: string;
    
    /**
     * Allows to set an encoding for the text-based Spreadsheet document. By default (and if not specified) is UTF-8.
     */
    public encoding: string;
    
    /**
     * Indicates whether leading blank rows and columns should be trimmed like what MS Excel does
     */
    public trimLeadingBlankRowAndColumn: boolean;
    
    /**
     * Indicates whether separators should be output for blank row. Default value is false which means the content for blank row will be empty.
     */
    public keepSeparatorsForBlankRow: boolean;
    
    public constructor(init?: Partial<DelimitedTextSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Allows to specify custom options for generating and saving PDF (Portable Document Format) documents
 */
export class PdfSaveOptions extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "password",
            baseName: "password",
            type: "string",
        },        
        {
            name: "compliance",
            baseName: "compliance",
            type: "PdfSaveOptions.ComplianceEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PdfSaveOptions.attributeTypeMap);
    }

    /**
     * Password, which will be applied to the generated PDF document as user password, required for opening. If NULL or empty, no password will be applied to the document. Otherwise, document will be encrypted with RC4 (key length of 128 bit).             
     */
    public password: string;
    
    /**
     * Specifies the PDF standards compliance level for output documents. Default is PdfCompliance.Pdf15.             
     */
    public compliance: PdfSaveOptions.ComplianceEnum;
    
    public constructor(init?: Partial<PdfSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PdfSaveOptions {
    export enum ComplianceEnum {
        Pdf15 = 'Pdf15' as any,
        PdfA1a = 'PdfA1a' as any,
        PdfA1b = 'PdfA1b' as any,
    }
}
// tslint:enable:quotemark
/**
 * Allows to specify custom options for editing documents of all supportable Presentation (PowerPoint-compatible) formats
 */
export class PresentationLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "slideNumber",
            baseName: "slideNumber",
            type: "number",
        },        
        {
            name: "showHiddenSlides",
            baseName: "showHiddenSlides",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PresentationLoadOptions.attributeTypeMap);
    }

    /**
     * Allows to specify the slide number, which should be opened for editing
     */
    public slideNumber: number;
    
    /**
     * Specifies whether the hidden slides should be included or not. Default is false     - hidden slides are not shown and exception will be thrown while trying to edit
     */
    public showHiddenSlides: boolean;
    
    public constructor(init?: Partial<PresentationLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Allows to specify custom options for generating and saving Presentation (PowerPoint-compatible) documents
 */
export class PresentationSaveOptions extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "password",
            baseName: "password",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PresentationSaveOptions.attributeTypeMap);
    }

    /**
     * Allows to specify document password
     */
    public password: string;
    
    public constructor(init?: Partial<PresentationSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Allows to specify custom options for editing documents of all supportable Spreadsheet (Excel-compatible) formats
 */
export class SpreadsheetLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "worksheetIndex",
            baseName: "worksheetIndex",
            type: "number",
        },        
        {
            name: "excludeHiddenWorksheets",
            baseName: "excludeHiddenWorksheets",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SpreadsheetLoadOptions.attributeTypeMap);
    }

    /**
     * Allows to specify the 0-based index of the worksheet (tab) of the input Spreadsheet document, which should be converted to the HTML.
     */
    public worksheetIndex: number;
    
    /**
     * Allows to exclude hidden worksheets in the input Spreadsheet document, so they will be totally ignored. Default is false - hidden worksheets are available and processed as normal.
     */
    public excludeHiddenWorksheets: boolean;
    
    public constructor(init?: Partial<SpreadsheetLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Allows to specify custom options for generating and saving Spreadsheet (Excel-compliant) documents
 */
export class SpreadsheetSaveOptions extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "password",
            baseName: "password",
            type: "string",
        },        
        {
            name: "protectionType",
            baseName: "protectionType",
            type: "SpreadsheetSaveOptions.ProtectionTypeEnum",
        },        
        {
            name: "protectionPassword",
            baseName: "protectionPassword",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SpreadsheetSaveOptions.attributeTypeMap);
    }

    /**
     * Allows to specify document password
     */
    public password: string;
    
    /**
     * Write-protection type. Default value is None.
     */
    public protectionType: SpreadsheetSaveOptions.ProtectionTypeEnum;
    
    /**
     * Write-protection password. Used when protection type is specified.
     */
    public protectionPassword: string;
    
    public constructor(init?: Partial<SpreadsheetSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SpreadsheetSaveOptions {
    export enum ProtectionTypeEnum {
        None = 'None' as any,
        All = 'All' as any,
        Contents = 'Contents' as any,
        Objects = 'Objects' as any,
        Scenarios = 'Scenarios' as any,
        Structure = 'Structure' as any,
        Window = 'Window' as any,
    }
}
// tslint:enable:quotemark
/**
 * Allows to specify custom options for loading plain text (TXT) documents
 */
export class TextLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "encoding",
            baseName: "encoding",
            type: "string",
        },        
        {
            name: "recognizeLists",
            baseName: "recognizeLists",
            type: "boolean",
        },        
        {
            name: "leadingSpaces",
            baseName: "leadingSpaces",
            type: "TextLoadOptions.LeadingSpacesEnum",
        },        
        {
            name: "trailingSpaces",
            baseName: "trailingSpaces",
            type: "TextLoadOptions.TrailingSpacesEnum",
        },        
        {
            name: "enablePagination",
            baseName: "enablePagination",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextLoadOptions.attributeTypeMap);
    }

    /**
     * Character encoding of the text document, which will be applied for its opening
     */
    public encoding: string;
    
    /**
     * Allows to specify how numbered list items are recognized when document is imported from plain text format. The default value is true.
     */
    public recognizeLists: boolean;
    
    /**
     * Gets or sets preferred option of a leading space handling. By default converts leading spaces to the left indent.
     */
    public leadingSpaces: TextLoadOptions.LeadingSpacesEnum;
    
    /**
     * Gets or sets preferred option of a trailing space handling. By default truncates all trailing spaces.
     */
    public trailingSpaces: TextLoadOptions.TrailingSpacesEnum;
    
    /**
     * Allows to enable or disable pagination in the resultant HTML document. By default is disabled (false).
     */
    public enablePagination: boolean;
    
    public constructor(init?: Partial<TextLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TextLoadOptions {
    export enum LeadingSpacesEnum {
        ConvertToIndent = 'ConvertToIndent' as any,
        Preserve = 'Preserve' as any,
        Trim = 'Trim' as any,
    }
    export enum TrailingSpacesEnum {
        Trim = 'Trim' as any,
        Preserve = 'Preserve' as any,
    }
}
// tslint:enable:quotemark
/**
 * Allows to specify custom options for generating and saving plain text (TXT) documents
 */
export class TextSaveOptions extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "encoding",
            baseName: "encoding",
            type: "string",
        },        
        {
            name: "addBidiMarks",
            baseName: "addBidiMarks",
            type: "boolean",
        },        
        {
            name: "preserveTableLayout",
            baseName: "preserveTableLayout",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextSaveOptions.attributeTypeMap);
    }

    /**
     * Character encoding of the text document, which will be applied for its saving
     */
    public encoding: string;
    
    /**
     * Specifies whether to add bi-directional marks before each BiDi run when exporting in plain text format
     */
    public addBidiMarks: boolean;
    
    /**
     * Specifies whether the program should attempt to preserve layout of tables when saving in the plain text format. The default value is false.
     */
    public preserveTableLayout: boolean;
    
    public constructor(init?: Partial<TextSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Allows to specify custom options for loading WordProcessing-compliant documents
 */
export class WordProcessingLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "enablePagination",
            baseName: "enablePagination",
            type: "boolean",
        },        
        {
            name: "enableLanguageInformation",
            baseName: "enableLanguageInformation",
            type: "boolean",
        },        
        {
            name: "fontExtraction",
            baseName: "fontExtraction",
            type: "WordProcessingLoadOptions.FontExtractionEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WordProcessingLoadOptions.attributeTypeMap);
    }

    /**
     * Allows to enable or disable pagination in the resultant HTML document. By default is disabled (false).
     */
    public enablePagination: boolean;
    
    /**
     * Specifies whether language information is exported to the HTML markup in a form of 'lang' HTML attributes. This option may be useful for roundtrip conversion of the multi-language documents. By default it is disabled (false).
     */
    public enableLanguageInformation: boolean;
    
    /**
     * Responsible for extracting font resources, which are used in the input WordProcessing document. By default doesn't extract any fonts (NotExtract).
     */
    public fontExtraction: WordProcessingLoadOptions.FontExtractionEnum;
    
    public constructor(init?: Partial<WordProcessingLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace WordProcessingLoadOptions {
    export enum FontExtractionEnum {
        NotExtract = 'NotExtract' as any,
        ExtractAllEmbedded = 'ExtractAllEmbedded' as any,
        ExtractEmbeddedWithoutSystem = 'ExtractEmbeddedWithoutSystem' as any,
        ExtractAll = 'ExtractAll' as any,
    }
}
// tslint:enable:quotemark
/**
 * Allows to specify custom options for generating and saving WordProcessing-compliant documents
 */
export class WordProcessingSaveOptions extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "password",
            baseName: "password",
            type: "string",
        },        
        {
            name: "enablePagination",
            baseName: "enablePagination",
            type: "boolean",
        },        
        {
            name: "locale",
            baseName: "locale",
            type: "string",
        },        
        {
            name: "localeBi",
            baseName: "localeBi",
            type: "string",
        },        
        {
            name: "localeFarEast",
            baseName: "localeFarEast",
            type: "string",
        },        
        {
            name: "protectionType",
            baseName: "protectionType",
            type: "WordProcessingSaveOptions.ProtectionTypeEnum",
        },        
        {
            name: "protectionPassword",
            baseName: "protectionPassword",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WordProcessingSaveOptions.attributeTypeMap);
    }

    /**
     * Allows to specify document password
     */
    public password: string;
    
    /**
     * Allows to enable or disable pagination which will be used for saving the document. If the original document was opened and edited in pagination mode, this option also should be enabled. By default is disabled.
     */
    public enablePagination: boolean;
    
    /**
     * Allows to set override default locale (language) for the WordProcessing document, which will be applied during its creation. When is not specified (default value), MS Word (or other program) will detect (or choose) the document locale according to its own settings or other factors.
     */
    public locale: string;
    
    /**
     * Allows to set override locale (language) for the WordProcessing document for the RTL (right-to-left) text, which will be applied during its creation. When is not specified (default value), MS Word (or other program) will detect (or choose) the document RTL locale according to its own settings or other factors.
     */
    public localeBi: string;
    
    /**
     * Allows to override the locale (language) for the WordProcessing document for the East-Asian text, which will be applied during its creation. When is not specified (default value), MS Word (or other program) will detect (or choose) the document East-Asian locale according to its own settings or other factors.
     */
    public localeFarEast: string;
    
    /**
     * Write-protection type. Default value is NoProtection
     */
    public protectionType: WordProcessingSaveOptions.ProtectionTypeEnum;
    
    /**
     * Write-protection password. Used when protection type is specified.
     */
    public protectionPassword: string;
    
    public constructor(init?: Partial<WordProcessingSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace WordProcessingSaveOptions {
    export enum ProtectionTypeEnum {
        NoProtection = 'NoProtection' as any,
        AllowOnlyRevisions = 'AllowOnlyRevisions' as any,
        AllowOnlyComments = 'AllowOnlyComments' as any,
        AllowOnlyFormFields = 'AllowOnlyFormFields' as any,
        ReadOnly = 'ReadOnly' as any,
    }
}
// tslint:enable:quotemark
/**
 * Allows to specify custom options for loading XML (eXtensible Markup Language) documents
 */
export class XmlLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "encoding",
            baseName: "encoding",
            type: "string",
        },        
        {
            name: "fixIncorrectStructure",
            baseName: "fixIncorrectStructure",
            type: "boolean",
        },        
        {
            name: "recognizeUris",
            baseName: "recognizeUris",
            type: "boolean",
        },        
        {
            name: "recognizeEmails",
            baseName: "recognizeEmails",
            type: "boolean",
        },        
        {
            name: "trimTrailingWhitespaces",
            baseName: "trimTrailingWhitespaces",
            type: "boolean",
        },        
        {
            name: "attributeValuesQuoteType",
            baseName: "attributeValuesQuoteType",
            type: "XmlLoadOptions.AttributeValuesQuoteTypeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XmlLoadOptions.attributeTypeMap);
    }

    /**
     * Character encoding of the text document, which will be applied for its opening. By default is null - internal document encoding will be applied.             
     */
    public encoding: string;
    
    /**
     * Allows to enable or disable mechanism for fixing corrupted XML structure. By default is disabled (false).             
     */
    public fixIncorrectStructure: boolean;
    
    /**
     * Allows to enable URI recognition algorithm
     */
    public recognizeUris: boolean;
    
    /**
     * Allows to enable recognition algorithm for email addresses in attribute values
     */
    public recognizeEmails: boolean;
    
    /**
     * Allows to enable the truncation of trailing whitespaces in the inner-tag text. By default is disabled (false) - trailing whitespaces will be preserved.             
     */
    public trimTrailingWhitespaces: boolean;
    
    /**
     * Allows to specify quote type (single or double quotes) for attribute values. Double quotes are default.             
     */
    public attributeValuesQuoteType: XmlLoadOptions.AttributeValuesQuoteTypeEnum;
    
    public constructor(init?: Partial<XmlLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace XmlLoadOptions {
    export enum AttributeValuesQuoteTypeEnum {
        DoubleQuote = 'DoubleQuote' as any,
        SingleQuote = 'SingleQuote' as any,
    }
}
// tslint:enable:quotemark
const enumsMap = {
    "PdfSaveOptions.ComplianceEnum": PdfSaveOptions.ComplianceEnum,
    "SpreadsheetSaveOptions.ProtectionTypeEnum": SpreadsheetSaveOptions.ProtectionTypeEnum,
    "TextLoadOptions.LeadingSpacesEnum": TextLoadOptions.LeadingSpacesEnum,
    "TextLoadOptions.TrailingSpacesEnum": TextLoadOptions.TrailingSpacesEnum,
    "WordProcessingLoadOptions.FontExtractionEnum": WordProcessingLoadOptions.FontExtractionEnum,
    "WordProcessingSaveOptions.ProtectionTypeEnum": WordProcessingSaveOptions.ProtectionTypeEnum,
    "XmlLoadOptions.AttributeValuesQuoteTypeEnum": XmlLoadOptions.AttributeValuesQuoteTypeEnum,
};

const typeMap = {
            ApiError,
            ApiErrorResponse,
            ConsumptionResult,
            DiscUsage,
            DocumentResult,
            ErrorDetails,
            FileInfo,
            FileVersions,
            FilesList,
            FilesUploadResult,
            Format,
            FormatsResult,
            InfoResult,
            LoadResult,
            ModelError,
            ObjectExist,
            Options,
            StorageExist,
            StorageFile,
            FileVersion,
            LoadOptions,
            SaveOptions,
            DelimitedTextLoadOptions,
            DelimitedTextSaveOptions,
            PdfSaveOptions,
            PresentationLoadOptions,
            PresentationSaveOptions,
            SpreadsheetLoadOptions,
            SpreadsheetSaveOptions,
            TextLoadOptions,
            TextSaveOptions,
            WordProcessingLoadOptions,
            WordProcessingSaveOptions,
            XmlLoadOptions,
};

export {enumsMap, typeMap};

/**
 * Request model for Load operation.
 */
export class LoadRequest {
    /**
     * The document load options
     */
    public loadOptions: LoadOptions;
    
    public constructor(loadOptions: LoadOptions) {        
        this.loadOptions = loadOptions;
    }
}

/**
 * Request model for Save operation.
 */
export class SaveRequest {
    /**
     * Edited document save options
     */
    public saveOptions: SaveOptions;
    
    public constructor(saveOptions: SaveOptions) {        
        this.saveOptions = saveOptions;
    }
}

/**
 * Request model for CopyFile operation.
 */
export class CopyFileRequest {
    /**
     * Source file path e.g. '/folder/file.ext'
     */
    public srcPath: string;

    /**
     * Destination file path
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to copy
     */
    public versionId: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string, versionId?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for DeleteFile operation.
 */
export class DeleteFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to delete
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for DownloadFile operation.
 */
export class DownloadFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to download
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for MoveFile operation.
 */
export class MoveFileRequest {
    /**
     * Source file path e.g. '/src.ext'
     */
    public srcPath: string;

    /**
     * Destination file path e.g. '/dest.ext'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to move
     */
    public versionId: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string, versionId?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for UploadFile operation.
 */
export class UploadFileRequest {
    /**
     * Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.             
     */
    public path: string;

    /**
     * File to upload
     */
    public file: Buffer;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, file: Buffer, storageName?: string) {        
        this.path = path;
        this.file = file;
        this.storageName = storageName;
    }
}

/**
 * Request model for CopyFolder operation.
 */
export class CopyFolderRequest {
    /**
     * Source folder path e.g. '/src'
     */
    public srcPath: string;

    /**
     * Destination folder path e.g. '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}

/**
 * Request model for CreateFolder operation.
 */
export class CreateFolderRequest {
    /**
     * Folder path to create e.g. 'folder_1/folder_2/'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for DeleteFolder operation.
 */
export class DeleteFolderRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Enable to delete folders, subfolders and files
     */
    public recursive: boolean;
    
    public constructor(path: string, storageName?: string, recursive?: boolean) {        
        this.path = path;
        this.storageName = storageName;
        this.recursive = recursive;
    }
}

/**
 * Request model for GetFilesList operation.
 */
export class GetFilesListRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for MoveFolder operation.
 */
export class MoveFolderRequest {
    /**
     * Folder path to move e.g. '/folder'
     */
    public srcPath: string;

    /**
     * Destination folder path to move to e.g '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}

/**
 * Request model for GetInfo operation.
 */
export class GetInfoRequest {
    /**
     * File Info
     */
    public fileInfo: FileInfo;
    
    public constructor(fileInfo: FileInfo) {        
        this.fileInfo = fileInfo;
    }
}

/**
 * Request model for GetDiscUsage operation.
 */
export class GetDiscUsageRequest {
    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(storageName?: string) {        
        this.storageName = storageName;
    }
}

/**
 * Request model for GetFileVersions operation.
 */
export class GetFileVersionsRequest {
    /**
     * File path e.g. '/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for ObjectExists operation.
 */
export class ObjectExistsRequest {
    /**
     * File or folder path e.g. '/file.ext' or '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for StorageExists operation.
 */
export class StorageExistsRequest {
    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(storageName: string) {        
        this.storageName = storageName;
    }
}
