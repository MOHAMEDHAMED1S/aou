function doGet() {
    return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('رفع مستندات ومراجعات المواد ');//هنا هنغير العنوان علي حسب احنا فين عشان دا اللي بيظهر 
  }
  
  const MAIN_FOLDER_ID = "هنا id المجلد اللي هيكون فيه مجلدات المواد";
  function getMainFolder() {
    return DriveApp.getFolderById(MAIN_FOLDER_ID);
  }
  
  function getFolders() {
    const mainFolder = getMainFolder();
    const subFolders = [];
    const folders = mainFolder.getFolders();
    while (folders.hasNext()) {
      const folder = folders.next();
      subFolders.push({ id: folder.getId(), name: folder.getName() });
    }
    return subFolders;
  }
  
  function createNewFolder(folderName) {
    const mainFolder = getMainFolder();
    const newFolder = mainFolder.createFolder(folderName);
    return { id: newFolder.getId(), name: folderName };
  }
  
  function uploadFileToFolder(folderId, fileName, fileContent) {
    const folder = DriveApp.getFolderById(folderId);
    const decodedData = Utilities.base64Decode(fileContent.data);
    const blob = Utilities.newBlob(decodedData, fileContent.mimeType, fileName);
    folder.createFile(blob);
  }
  