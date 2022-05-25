/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2022 Aspose Pty Ltd
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

import { expect } from "chai";
import "mocha";

import { LoadRequest, SaveRequest } from "../../src/model";
import * as Model from "../../src/model";

import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("editor_api", () => {
    
    before(async () => {
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("TestOpenSaveDocx", () => {

        it("TestOpenSaveDocx", async () => {  
            // Load
            const file = TestFile.FourPagesDocx;
            let loadOptions = new Model.LoadOptions();
            loadOptions.fileInfo = file.ToFileInfo();
            loadOptions.outputPath = TestContext.getOutputPath();

            let loadResult = await TestContext.getEditorApi().load(new LoadRequest(loadOptions));

            expect(loadResult.htmlPath).to.not.equal("");
            expect(loadResult.resourcesPath).to.not.equal("");

            // Save
            let saveOptions = new Model.SaveOptions();
            saveOptions.fileInfo = file.ToFileInfo();            
            saveOptions.resourcesPath = loadResult.resourcesPath;
            saveOptions.htmlPath = loadResult.htmlPath;
            saveOptions.outputPath = TestContext.getOutputPath() + "/" + file.fileName;

            let saveResult = await TestContext.getEditorApi().save(new SaveRequest(saveOptions));
            expect(saveResult.path).equal(saveOptions.outputPath);
        });

        it("TestOpenSaveDocxProtected", async () => {  
            // Load
            const file = TestFile.PasswordProtectedDocx;
            let loadOptions = new Model.LoadOptions();
            loadOptions.fileInfo = file.ToFileInfo();
            loadOptions.outputPath = TestContext.getOutputPath();

            let loadResult = await TestContext.getEditorApi().load(new LoadRequest(loadOptions));

            expect(loadResult.htmlPath).to.not.equal("");
            expect(loadResult.resourcesPath).to.not.equal("");

            // Save
            let saveOptions = new Model.SaveOptions();
            saveOptions.fileInfo = file.ToFileInfo();            
            saveOptions.resourcesPath = loadResult.resourcesPath;
            saveOptions.htmlPath = loadResult.htmlPath;
            saveOptions.outputPath = TestContext.getOutputPath() + "/" + file.fileName;

            let saveResult = await TestContext.getEditorApi().save(new SaveRequest(saveOptions));
            expect(saveResult.path).equal(saveOptions.outputPath);
        });

        it("TestOpenSaveDocxWithOptions", async () => {  
            // Load
            const file = TestFile.PasswordProtectedDocx;
            let loadOptions = new Model.WordProcessingLoadOptions();
            loadOptions.fileInfo = file.ToFileInfo();
            loadOptions.outputPath = TestContext.getOutputPath();
            loadOptions.enablePagination = true;
            loadOptions.fontExtraction = Model.WordProcessingLoadOptions.FontExtractionEnum.ExtractAll;

            let loadResult = await TestContext.getEditorApi().load(new LoadRequest(loadOptions));

            expect(loadResult.htmlPath).to.not.equal("");
            expect(loadResult.resourcesPath).to.not.equal("");

            // Save
            let saveOptions = new Model.WordProcessingSaveOptions();
            saveOptions.fileInfo = file.ToFileInfo();            
            saveOptions.resourcesPath = loadResult.resourcesPath;
            saveOptions.htmlPath = loadResult.htmlPath;
            saveOptions.outputPath = TestContext.getOutputPath() + "/" + file.fileName;
            saveOptions.enablePagination = true;
            saveOptions.format = "Docx";
            saveOptions.password = file.password;
            saveOptions.protectionPassword = file.password;
            saveOptions.protectionType = Model.WordProcessingSaveOptions.ProtectionTypeEnum.AllowOnlyComments;

            let saveResult = await TestContext.getEditorApi().save(new SaveRequest(saveOptions));
            expect(saveResult.path).equal(saveOptions.outputPath);
        });

        it("TestOpenSaveXlsx", async () => {  
            // Load
            const file = TestFile.FourSheetsXlsx;
            let loadOptions = new Model.LoadOptions();
            loadOptions.fileInfo = file.ToFileInfo();
            loadOptions.outputPath = TestContext.getOutputPath();

            let loadResult = await TestContext.getEditorApi().load(new LoadRequest(loadOptions));

            expect(loadResult.htmlPath).to.not.equal("");
            expect(loadResult.resourcesPath).to.not.equal("");

            // Save
            let saveOptions = new Model.SaveOptions();
            saveOptions.fileInfo = file.ToFileInfo();            
            saveOptions.resourcesPath = loadResult.resourcesPath;
            saveOptions.htmlPath = loadResult.htmlPath;
            saveOptions.outputPath = TestContext.getOutputPath() + "/" + file.fileName;

            let saveResult = await TestContext.getEditorApi().save(new SaveRequest(saveOptions));
            expect(saveResult.path).equal(saveOptions.outputPath);
        });
        
        it("TestOpenSaveXlsxProtected", async () => {  
            // Load
            const file = TestFile.PasswordProtectedXlsx;
            let loadOptions = new Model.LoadOptions();
            loadOptions.fileInfo = file.ToFileInfo();
            loadOptions.outputPath = TestContext.getOutputPath();

            let loadResult = await TestContext.getEditorApi().load(new LoadRequest(loadOptions));

            expect(loadResult.htmlPath).to.not.equal("");
            expect(loadResult.resourcesPath).to.not.equal("");

            // Save
            let saveOptions = new Model.SaveOptions();
            saveOptions.fileInfo = file.ToFileInfo();            
            saveOptions.resourcesPath = loadResult.resourcesPath;
            saveOptions.htmlPath = loadResult.htmlPath;
            saveOptions.outputPath = TestContext.getOutputPath() + "/" + file.fileName;

            let saveResult = await TestContext.getEditorApi().save(new SaveRequest(saveOptions));
            expect(saveResult.path).equal(saveOptions.outputPath);
        });
        
        it("TestOpenSaveXlsxWithOptions", async () => {  
            // Load
            const file = TestFile.PasswordProtectedXlsx;
            let loadOptions = new Model.SpreadsheetLoadOptions();
            loadOptions.fileInfo = file.ToFileInfo();
            loadOptions.outputPath = TestContext.getOutputPath();
            loadOptions.excludeHiddenWorksheets = true;

            let loadResult = await TestContext.getEditorApi().load(new LoadRequest(loadOptions));

            expect(loadResult.htmlPath).to.not.equal("");
            expect(loadResult.resourcesPath).to.not.equal("");

            // Save
            let saveOptions = new Model.SpreadsheetSaveOptions();
            saveOptions.fileInfo = file.ToFileInfo();            
            saveOptions.resourcesPath = loadResult.resourcesPath;
            saveOptions.htmlPath = loadResult.htmlPath;
            saveOptions.outputPath = TestContext.getOutputPath() + "/" + file.fileName;
            saveOptions.format = "xlsx";
            saveOptions.password = file.password;
            saveOptions.protectionPassword = file.password;
            saveOptions.protectionType = Model.SpreadsheetSaveOptions.ProtectionTypeEnum.All;

            let saveResult = await TestContext.getEditorApi().save(new SaveRequest(saveOptions));
            expect(saveResult.path).equal(saveOptions.outputPath);
        }); 
        
        it("TestOpenSaveTsv", async () => {  
            // Load
            const file = TestFile.Tsv;
            let loadOptions = new Model.LoadOptions();
            loadOptions.fileInfo = file.ToFileInfo();
            loadOptions.outputPath = TestContext.getOutputPath();

            let loadResult = await TestContext.getEditorApi().load(new LoadRequest(loadOptions));

            expect(loadResult.htmlPath).to.not.equal("");
            expect(loadResult.resourcesPath).to.not.equal("");

            // Save
            let saveOptions = new Model.SaveOptions();
            saveOptions.fileInfo = file.ToFileInfo();            
            saveOptions.resourcesPath = loadResult.resourcesPath;
            saveOptions.htmlPath = loadResult.htmlPath;
            saveOptions.outputPath = TestContext.getOutputPath() + "/" + file.fileName;

            let saveResult = await TestContext.getEditorApi().save(new SaveRequest(saveOptions));
            expect(saveResult.path).equal(saveOptions.outputPath);
        }); 
        
        it("TestOpenSaveTsvWithOptions", async () => {  
            // Load
            const file = TestFile.Tsv;
            let loadOptions = new Model.DelimitedTextLoadOptions();
            loadOptions.fileInfo = file.ToFileInfo();
            loadOptions.outputPath = TestContext.getOutputPath();
            loadOptions.separator = "\t";
            loadOptions.convertNumericData = true;
            loadOptions.treatConsecutiveDelimitersAsOne = true;

            let loadResult = await TestContext.getEditorApi().load(new LoadRequest(loadOptions));

            expect(loadResult.htmlPath).to.not.equal("");
            expect(loadResult.resourcesPath).to.not.equal("");

            // Save
            let saveOptions = new Model.DelimitedTextSaveOptions();
            saveOptions.fileInfo = file.ToFileInfo();            
            saveOptions.resourcesPath = loadResult.resourcesPath;
            saveOptions.htmlPath = loadResult.htmlPath;
            saveOptions.outputPath = TestContext.getOutputPath() + "/" + file.fileName;
            saveOptions.encoding = "UTF-8";
            saveOptions.format = "tsv";
            saveOptions.keepSeparatorsForBlankRow = true;

            let saveResult = await TestContext.getEditorApi().save(new SaveRequest(saveOptions));
            expect(saveResult.path).equal(saveOptions.outputPath);
        }); 
        
        it("TestOpenSaveText", async () => {  
            // Load
            const file = TestFile.Txt;
            let loadOptions = new Model.LoadOptions();
            loadOptions.fileInfo = file.ToFileInfo();
            loadOptions.outputPath = TestContext.getOutputPath();

            let loadResult = await TestContext.getEditorApi().load(new LoadRequest(loadOptions));

            expect(loadResult.htmlPath).to.not.equal("");
            expect(loadResult.resourcesPath).to.not.equal("");

            // Save
            let saveOptions = new Model.SaveOptions();
            saveOptions.fileInfo = file.ToFileInfo();            
            saveOptions.resourcesPath = loadResult.resourcesPath;
            saveOptions.htmlPath = loadResult.htmlPath;
            saveOptions.outputPath = TestContext.getOutputPath() + "/" + file.fileName;

            let saveResult = await TestContext.getEditorApi().save(new SaveRequest(saveOptions));
            expect(saveResult.path).equal(saveOptions.outputPath);
        }); 

        it("TestOpenSaveTextWithOptions", async () => {  
            // Load
            const file = TestFile.Txt;
            let loadOptions = new Model.TextLoadOptions();
            loadOptions.fileInfo = file.ToFileInfo();
            loadOptions.outputPath = TestContext.getOutputPath();
            loadOptions.enablePagination = true;
            loadOptions.leadingSpaces = Model.TextLoadOptions.LeadingSpacesEnum.Trim;
            loadOptions.recognizeLists = true;

            let loadResult = await TestContext.getEditorApi().load(new LoadRequest(loadOptions));

            expect(loadResult.htmlPath).to.not.equal("");
            expect(loadResult.resourcesPath).to.not.equal("");

            // Save
            let saveOptions = new Model.TextSaveOptions();
            saveOptions.fileInfo = file.ToFileInfo();            
            saveOptions.resourcesPath = loadResult.resourcesPath;
            saveOptions.htmlPath = loadResult.htmlPath;
            saveOptions.outputPath = TestContext.getOutputPath() + "/" + file.fileName;
            saveOptions.addBidiMarks = true;
            saveOptions.encoding = "UTF-8";
            saveOptions.format = "txt";
            saveOptions.preserveTableLayout = true;

            let saveResult = await TestContext.getEditorApi().save(new SaveRequest(saveOptions));
            expect(saveResult.path).equal(saveOptions.outputPath);
        });
        
        it("TestOpenSavePresentation", async () => {  
            // Load
            const file = TestFile.Presentation;
            let loadOptions = new Model.LoadOptions();
            loadOptions.fileInfo = file.ToFileInfo();
            loadOptions.outputPath = TestContext.getOutputPath();

            let loadResult = await TestContext.getEditorApi().load(new LoadRequest(loadOptions));

            expect(loadResult.htmlPath).to.not.equal("");
            expect(loadResult.resourcesPath).to.not.equal("");

            // Save
            let saveOptions = new Model.SaveOptions();
            saveOptions.fileInfo = file.ToFileInfo();            
            saveOptions.resourcesPath = loadResult.resourcesPath;
            saveOptions.htmlPath = loadResult.htmlPath;
            saveOptions.outputPath = TestContext.getOutputPath() + "/" + file.fileName;

            let saveResult = await TestContext.getEditorApi().save(new SaveRequest(saveOptions));
            expect(saveResult.path).equal(saveOptions.outputPath);
        });   
        
        it("TestOpenSavePresentationWithOptions", async () => {  
            // Load
            const file = TestFile.Presentation;
            let loadOptions = new Model.PresentationLoadOptions();
            loadOptions.fileInfo = file.ToFileInfo();
            loadOptions.outputPath = TestContext.getOutputPath();
            loadOptions.showHiddenSlides = true;
            loadOptions.slideNumber = 0;

            let loadResult = await TestContext.getEditorApi().load(new LoadRequest(loadOptions));

            expect(loadResult.htmlPath).to.not.equal("");
            expect(loadResult.resourcesPath).to.not.equal("");

            // Save
            let saveOptions = new Model.PresentationSaveOptions();
            saveOptions.fileInfo = file.ToFileInfo();            
            saveOptions.resourcesPath = loadResult.resourcesPath;
            saveOptions.htmlPath = loadResult.htmlPath;
            saveOptions.outputPath = TestContext.getOutputPath() + "/" + file.fileName;
            saveOptions.password = "password";

            let saveResult = await TestContext.getEditorApi().save(new SaveRequest(saveOptions));
            expect(saveResult.path).equal(saveOptions.outputPath);
        });         
    });    
});
