'use strict';

module.exports = {
    inArray:function (array ,value) {
        let i;
        for (i=0; i < array.length; i++)
        {
            if (array[i] == value)
            {
                return true;
            }
        }
        return false;
    },
    objectInArray: function (array ,value) {
        let i;
        for (i=0; i < array.length; i++)
        {
            if (array[i].name == value)
            {
                return true;
            }
        }
        return false;
    }
}


