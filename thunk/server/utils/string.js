module.exports = {
    trim : function(str){
        return str.replace(/(^\s*)|(\s*$)/g,'');
    },
    isBlank : function(str){
        return (str==null || this.trim(str)=='');
    },
    isNotBlank : function(str){
        return !this.isBlank(str);
    }
};