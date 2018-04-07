app.addMenuItem({cName:"DumpBookmarks", cParent:"Help", cExec:
"var pgNO = this.pageNum;\
var myzoomType = this.zoomType;\
var myzoom = this.zoom;\
function DumpBookmark(bkm, nLevel) {"    
    +"var s = '';"
    +"if (nLevel != 0) {"
    +"for (var i = 0; i < nLevel; i++) s += '\\t';"
    +"bkm.execute();"
    //+"console.println(s + '+-' + bkm.name + ' \\u9875\\u7801 ' + (bkm.doc.pageNum +1));}"
    //+"console.println(s.replace(/\\t/,'') + bkm.name.replace(/\\r/g,'') + ' ' + (bkm.doc.pageNum +1));}"
    +"console.println(s.replace(/\\t/,'') + bkm.name.replace(/\\r/g,'') + ' ' + (this.getPageLabel(bkm.doc.pageNum)));}"
    +"if (bkm.children != null)"
        +"for (var i = 0; i < bkm.children.length; i++)\
            DumpBookmark(bkm.children[i], nLevel + 1);}"
+"console.clear();\
console.show();\
console.println('============\\u63d0\\u53d6\\u4e66\\u7b7e\\x20\\x4d\\x4f\\x44\\x20\\x42\\x79\\x20\\u5e7f\\u4e4b\\u6e90\\x53\\x6b\\x69\\x6e============\\n\\n' + this.documentFileName + ' \\u4e66\\u7b7e\\u5217\\u8868\\x2e\\x74\\x78\\x74\\n');\
/*console.println('\\n');*/\
DumpBookmark(this.bookmarkRoot, 0);\
this.pageNum = pgNO;\
this.zoomType = myzoomType;\
this.zoom = myzoom;\
app.alert('\\u4e66\\u7b7e\\u5217\\u8868\\u5b8c\\u6210\\uff01');"});