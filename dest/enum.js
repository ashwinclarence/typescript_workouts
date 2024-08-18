"use strict";
// default the number starts from 0 so pending is zero
var statusTypes;
(function (statusTypes) {
    statusTypes[statusTypes["PENDING"] = 0] = "PENDING";
    statusTypes[statusTypes["COMPLETED"] = 1] = "COMPLETED";
    statusTypes[statusTypes["FAILED"] = 2] = "FAILED";
})(statusTypes || (statusTypes = {}));
// here the number starts with 1
var orderStatus;
(function (orderStatus) {
    orderStatus[orderStatus["PENDING"] = 1] = "PENDING";
    orderStatus[orderStatus["COMPLETED"] = 2] = "COMPLETED";
    orderStatus[orderStatus["FAILED"] = 3] = "FAILED";
})(orderStatus || (orderStatus = {}));
// here the value will be string
var deliveryStatus;
(function (deliveryStatus) {
    deliveryStatus["PENDING"] = "pending";
    deliveryStatus["COMPLETED"] = "completed";
    deliveryStatus["FAILED"] = "failed";
})(deliveryStatus || (deliveryStatus = {}));
