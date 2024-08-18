"use strict";
// this is instead of enum
const statusType = {
    PENDING: "pending",
    COMPLETED: "completed",
    FAILED: "failed"
};
function getStatus(orderID, status) {
    console.log(orderID, "==", status);
}
getStatus("1234", "COMPLETED");
