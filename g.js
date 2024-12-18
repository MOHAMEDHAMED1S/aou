function doGet(e) {
    return handleRequest(e);
  }
  
  function doPost(e) {
    return handleRequest(e);
  }
  var folderr = "1bybfRm1gGpgSopScFTlxe9H6KF8L9Vi5"
  function handleRequest(e) {
    if (e.method === "OPTIONS") {
      return HtmlService.createHtmlOutput("")
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .getResponse()
        .setHeader("Access-Control-Allow-Origin", "*")
        .setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
        .setHeader("Access-Control-Allow-Headers", "Content-Type");
    }
  
    var action = e.parameter.action;
    if (action === "getSubjects") {
      return getSubjects();
    } else if (action === "getFiles") {
      return getFiles(e.parameter.subject);
    } else if (action === "uploadFile") {
      return uploadFile(e);
    } else {
      return createCorsResponse({
        status: "error",
        message: "Unknown action",
      });
    }
  }
  
  function uploadFile(request) {
    try {
      var data = JSON.parse(request.postData.contents);
      var subject = data.subject;  
      var fileContent = data.fileContent;
      var fileName = data.fileName;
      var mimeType = data.mimeType;
  
      var rootFolder = DriveApp.getFolderById(folderr); 
      var subjectFolder = getOrCreateFolder(rootFolder, subject);
  
      var blob = Utilities.newBlob(Utilities.base64Decode(fileContent), mimeType, fileName);
      var file = subjectFolder.createFile(blob);
  
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  
      var response = {
        status: "success",
        message: "تم رفع الملف بنجاح!",
        link: file.getUrl(),
        name: file.getName(),
      };
  
      return createCorsResponse(response);
    } catch (e) {
      var errorResponse = {
        status: "error",
        message: "حدث خطأ: " + e.toString(),
      };
  
      return createCorsResponse(errorResponse);
    }
  }
  
  function getOrCreateFolder(rootFolder, subject) {
    var folders = rootFolder.getFoldersByName(subject);
    if (folders.hasNext()) {
      return folders.next();  
    } else {
      return rootFolder.createFolder(subject);  
    }
  }
  
  function getSubjects() {
    try {
      var rootFolder = DriveApp.getFolderById(folderr); 
      var folders = rootFolder.getFolders();
      var subjectList = [];
  
      while (folders.hasNext()) {
        var folder = folders.next();
        subjectList.push(folder.getName());
      }
  
      return createCorsResponse(subjectList);
    } catch (e) {
      return createCorsResponse({
        status: "error",
        message: "حدث خطأ: " + e.toString(),
      });
    }
  }
  
  function getFiles(subject) {
    try {
      var rootFolder = DriveApp.getFolderById(folderr); 
      var subjectFolder = rootFolder.getFoldersByName(subject).next();
      var files = subjectFolder.getFiles();
      var fileList = [];
  
      while (files.hasNext()) {
        var file = files.next();
        fileList.push({
          name: file.getName(),
          link: file.getUrl(),
        });
      }
  
      return createCorsResponse(fileList);
    } catch (e) {
      return createCorsResponse({
        status: "error",
        message: "حدث خطأ: " + e.toString(),
      });
    }
  }
  
  function createCorsResponse(content) {
    var output = HtmlService.createHtmlOutput(JSON.stringify(content))
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .getContent();
  
    return ContentService.createTextOutput(output)
      .setMimeType(ContentService.MimeType.JSON);
  }